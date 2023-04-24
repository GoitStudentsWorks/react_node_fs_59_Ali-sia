import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import {
  PageContainer,
  PositionContainer,
  PositionImgContainer,
  GooseContainer,
  Goose,
  Speak,
  TextContainer,
  INeedMoreContainers,
} from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <>
      <PageContainer>
        <INeedMoreContainers>
          
          <PositionContainer>
            <RegisterForm />
          </PositionContainer>

          <PositionImgContainer>
            <GooseContainer>
              <Goose />
              <Speak>
                <TextContainer>
                  <span>Quickly </span>
                  <a href="url">register </a>
                  <span>
                    {' '}
                    and <br /> familiarize yourself <br /> with the application!
                  </span>
                </TextContainer>
              </Speak>
            </GooseContainer>
          </PositionImgContainer>

        </INeedMoreContainers>
      </PageContainer>
    </>
  );
};

export default RegisterPage;
