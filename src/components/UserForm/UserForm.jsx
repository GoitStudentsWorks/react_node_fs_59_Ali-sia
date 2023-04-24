import { useFormik } from 'formik';

import { StyledForm, Photo, Plug, PhotoSelection, LabelPhotoSelection, SelectionIcon, Wrapper, Label, LabelName, Input, StyledDatePicker, Button } from "./UserForm.styled";
import "react-datepicker/dist/react-datepicker.css";

export const UserForm = () => {  
  const formik = useFormik({
      initialValues: {
      name: '',
      birthday: null,
      email: '',
      phone: '',
      telegram: '',
      photo: '',
      },
      onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      },
  });

  const userPhoto = formik.values.photo ? <Photo src={formik.values.photo} alt="User's photo" /> : <Plug />;

  const handleImageUpload = e => { 
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
          formik.setFieldValue("photo", reader.result);
      };

      reader.readAsDataURL(file);
  }
    
  return (
    <StyledForm autocomplete="off" enctype="multipart/form-data" onSubmit={formik.handleSubmit}>
      {userPhoto}
      <LabelPhotoSelection>
          <SelectionIcon/>
          <PhotoSelection
              type="file"
              name="photo"
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
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
    </StyledForm>
  );
};