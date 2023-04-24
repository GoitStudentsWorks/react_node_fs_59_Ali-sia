import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import {
  PageContainer,
  GooseContainer,
  Goose,
  Speak,
  TextContainer,
} from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <>
      <PageContainer>
        <GooseContainer>
          <Goose />
          <Speak />
          <TextContainer>
              <span>Quickly </span>
              <a href="url">register </a>
              <span> and <br /> familiarize yourself <br /> with the application!</span>
          </TextContainer>
        </GooseContainer>
        <RegisterForm />
      </PageContainer>
    </>
  );
};

export default RegisterPage;
