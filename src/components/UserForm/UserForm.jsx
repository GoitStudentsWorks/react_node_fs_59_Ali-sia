import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from 'redux/auth/auth.operations';
import { selectUser } from 'redux/auth/auth.selectors';
import { parseISO } from 'date-fns';

import {
  StyledForm,
  Photo,
  Plug,
  PhotoSelection,
  LabelPhotoSelection,
  SelectionIcon,
  Wrapper,
  Label,
  LabelName,
  Input,
  StyledDatePicker,
  Button,
} from './UserForm.styled';
import 'react-datepicker/dist/react-datepicker.css';

export const UserForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [values, setValues] = useState({
    name: '',
    birthday: null,
    email: '',
    phone: '',
    telegram: '',
    avatarURL: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleDateChange = date => {
    setValues(prevValues => ({
      ...prevValues,
      birthday: date,
    }));
  };

  const handleImageUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setValues(prevValues => ({
        ...prevValues,
        avatarURL: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const credentials = {
      name: form.name.value,
      birthday: form.birthday.value,
      email: form.email.value,
      phone: form.phone.value,
      telegram: form.telegram.value,
      avatarURL: form.avatarURL.value,
    };

    dispatch(updateUser(credentials));
  };

  useEffect(() => {
    if (user.email) {
      const modifiedUser = {
        ...user,
        birthday: parseISO(user.birthday),
      };
      setValues(modifiedUser);
    }
  }, [user]);

  return (
    user.email && (
      <StyledForm
        autoComplete="off"
        // encType="multipart/form-data"
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
            name="avatarURL"
            onChange={handleImageUpload}
          />
        </LabelPhotoSelection>
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
            <StyledDatePicker
              name="birthday"
              placeholderText={new Date().toLocaleDateString()}
              selected={values.birthday}
              value={values.birthday}
              onChange={handleDateChange}
              calendarClassName="goose"
            />
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
        <Button type="submit">Save changes</Button>
      </StyledForm>
    )
  );
};
