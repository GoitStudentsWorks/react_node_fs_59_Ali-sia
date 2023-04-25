import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from 'formik';
import { selectUser } from "redux/auth/auth.selectors";
import { parseISO } from 'date-fns';

import { StyledForm, Photo, Plug, PhotoSelection, LabelPhotoSelection, SelectionIcon, Wrapper, Label, LabelName, Input, StyledDatePicker, Button } from "./UserForm.styled";
import "react-datepicker/dist/react-datepicker.css";

export const UserForm = () => {  
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

  const formik = useFormik({
      initialValues: {
          name: "",
          birthday: null,
          email: "",
          phone: "",
          telegram: "",
          avatarURL: "",
      },
    onSubmit: values => {
        dispatch(values);
    },
  });

  const handleImageUpload = e => { 
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
          formik.setFieldValue("photo", reader.result);
      };

      reader.readAsDataURL(file);
    }
    
  useEffect(() => {
  if (user.email) {
    const modifiedUser = {
      ...user,
      birthday: parseISO(user.birthday),
    };
      formik.setValues(modifiedUser);
      
  }
}, [formik, user]);

    return (
    user.name && (
    <StyledForm autocomplete="off" enctype="multipart/form-data" onSubmit={formik.handleSubmit}>
      {(formik.values.avatarURL !== "public\\avatars\\6447ffc16d4d3d7eadd00104_Фото профиля.jpg") ? <Photo src={formik.values.avatarURL} alt="User's photo" /> : <Plug />}
      <LabelPhotoSelection>
          <SelectionIcon/>
          <PhotoSelection
              type="file"
              name="avatarURL"
              onChange={handleImageUpload}
          />
      </LabelPhotoSelection>
      <Wrapper>
          <Label>
              <LabelName>
                  User Name
              </LabelName>
              <Input
                type="text"
                name="name"
                placeholder="Edit your name"
                selected={formik.values.name}
                value={formik.values.name}
                required
              />
          </Label>
          <Label>
              <LabelName>
                  Birthday
              </LabelName>
              <StyledDatePicker
                name="birthday"
                placeholderText={new Date().toLocaleDateString()}
                selected={formik.values.birthday}
                value={formik.values.birthday}
                onChange={(date) => formik.setFieldValue('birthday', date)}
                calendarClassName="goose"
              />
          </Label>
          <Label>
              <LabelName>
                  Email
              </LabelName>
              <Input
                  type="email"
                  name="email"
                  placeholder="Edit your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  required
              />
          </Label>
          <Label>
              <LabelName>
                  Phone
              </LabelName>
              <Input
                  type="text"
                  name="phone"
                  placeholder="Add a phone number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
              />
          </Label>
          <Label>
            <LabelName>
              Telegram
            </LabelName>
            <Input
              type="text"
              name="telegram"
              placeholder="Add a link to Telegram"
              value={formik.values.telegram}
              onChange={formik.handleChange}
            />
          </Label>
      </Wrapper>
      <Button
        type="submit">
        Save changes
      </Button>
    </StyledForm>)
  );
};