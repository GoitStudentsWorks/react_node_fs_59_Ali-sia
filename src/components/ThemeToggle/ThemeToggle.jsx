import { ButtonStyled, MoonSVGStyled, SunSVGStyled } from './ThemeToggle.styled';
import { ThemeHandleContext } from 'context/ThemeContext';

const ThemeToggle = () => {
    return (
        <ThemeHandleContext.Consumer>
            {({currentTheme, setCurrentTheme}) => (
                <ButtonStyled onClick={() => {
                    currentTheme === "light"
                        ? setCurrentTheme("dark")
                        : setCurrentTheme("light");
                    localStorage.setItem("theme", currentTheme);
                }}>
                    <MoonSVGStyled style={{display: currentTheme === "light" ? "block" : "none"}}/>
                    <SunSVGStyled style={{display: currentTheme === "dark" ? "block" : "none"}} />
                </ButtonStyled>
            )}
        </ThemeHandleContext.Consumer>
    );
};
  
export default ThemeToggle;