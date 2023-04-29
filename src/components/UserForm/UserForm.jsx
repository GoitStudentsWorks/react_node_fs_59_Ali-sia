import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from 'redux/auth/auth.operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/auth.selectors';
import { parseISO } from 'date-fns';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import {
  StyledForm,
  Photo,
  Plug,
  PhotoSelection,
  LabelPhotoSelection,
  SelectionIcon,
  UserName,
  UserRole,
  Wrapper,
  Label,
  LabelName,
  Input,
  StyledDatePicker,
  StyledCalendar,
  Button,
} from './UserForm.styled';
import 'react-datepicker/dist/react-datepicker.css';

export const UserForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const [values, setValues] = useState({
    name: '',
    birthday: '',
    email: '',
    phone: '',
    telegram: '',
    avatarFile: null,
    avatarURL: '',
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const schema = Yup.object().shape({
    avatarFile: Yup.mixed().test(
      'fileType',
      'Invalid file type. Allowed .jpeg or .png',
      value => {
        if (!value) return true;
        return ['image/jpeg', 'image/png'].includes(value.type);
      }
    ),
    name: Yup.string()
      .max(16, 'The name must be 16 characters or less.')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    birthday: Yup.string()
      .nullable()
      .transform(v => (v === '' ? null : v)),
    phone: Yup.string()
      .matches(
        /^\+380\d{9}$/,
        'The phone number must contain "+380" and 9 digits.'
      )
      .nullable()
      .transform(v => (v === '' ? null : v)),
    telegram: Yup.string()
      .max(16, 'The telegram must be 16 characters or less')
      .nullable()
      .transform(v => (v === '' ? null : v)),
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
    setIsSubmitDisabled(false);
  };

  const handleDateChange = date => {
    setValues(prevValues => ({
      ...prevValues,
      birthday: date,
    }));
    setIsSubmitDisabled(false);
  };

  const handleImageUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setValues(prevValues => ({
        ...prevValues,
        avatarFile: file,
        avatarURL: reader.result,
      }));
    };

    reader.readAsDataURL(file);
    setIsSubmitDisabled(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await schema.validate(values);
    } catch (error) {
      toast.error(error.message);
      return;
    }

    const { name, birthday, email, phone, telegram, avatarFile } = values;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('birthday', birthday ? birthday : '');
    formData.append('email', email);
    formData.append('phone', phone ? phone : '');
    formData.append('telegram', telegram ? telegram : '');
    if (avatarFile) {
      formData.append('avatarFile', avatarFile);
    }

    dispatch(updateUser(formData))
      .unwrap()
      .then(res => {
        toast.success('Your profile has been changed successfully.');
        setIsSubmitDisabled(true);
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      const modifiedUser = {
        ...user,
        birthday: user.birthday ? parseISO(user.birthday) : '',
      };
      setValues(modifiedUser);
    }
  }, [dispatch, isLoggedIn, user]);

  return (
    user.email && (
      <StyledForm
        autoComplete="off"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        {values.avatarURL ? (
          <Photo src={values.avatarURL} alt="User's photo" />
        ) : (
          <Plug />
        )}
        <LabelPhotoSelection>
          <SelectionIcon />
          <PhotoSelection
            type="file"
            name="avatarFile"
            onChange={handleImageUpload}
          />
        </LabelPhotoSelection>
        <UserName>{values.name}</UserName>
        <UserRole>user</UserRole>
        <Wrapper>
          <Label>
            <LabelName>User Name</LabelName>
            <Input
              type="text"
              name="name"
              placeholder="Edit your name"
              value={values.name}
              onChange={handleInputChange}
              required
            />
          </Label>
          <Label>
            <LabelName>Birthday</LabelName>
            <StyledCalendar>
              <StyledDatePicker
                name="birthday"
                placeholderText={new Date().toLocaleDateString()}
                selected={values.birthday}
                value={values.birthday}
                onChange={handleDateChange}
              />
            </StyledCalendar>
          </Label>
          <Label>
            <LabelName>Email</LabelName>
            <Input
              type="email"
              name="email"
              placeholder="Edit your email"
              value={values.email}
              onChange={handleInputChange}
              required
            />
          </Label>
          <Label>
            <LabelName>Phone</LabelName>
            <Input
              type="text"
              name="phone"
              placeholder="Add a phone number"
              value={values.phone}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            <LabelName>Telegram</LabelName>
            <Input
              type="text"
              name="telegram"
              placeholder="Add a link to Telegram"
              value={values.telegram}
              onChange={handleInputChange}
            />
          </Label>
        </Wrapper>
        <Button type="submit" disabled={isSubmitDisabled}>
          Save changes
        </Button>
      </StyledForm>
    )
  );
};
