import { useDispatch, useSelector } from 'react-redux';

import { ButtonStyled, MoonSVGStyled, SunSVGStyled } from './ThemeToggle.styled';
import THEME_CONTEXT from 'context/ThemeContext';
import { toggleTheme } from 'redux/auth/auth.slice';
import { selectTheme } from 'redux/auth/auth.selectors';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector(selectTheme);

    return (
        <ButtonStyled onClick={() => {
            dispatch(toggleTheme());
        }}>
            <MoonSVGStyled style={{display: currentTheme === THEME_CONTEXT.LIGHT ? "block" : "none"}}/>
            <SunSVGStyled style={{display: currentTheme === THEME_CONTEXT.DARK ? "block" : "none"}} />
        </ButtonStyled>
    );
};
  
export default ThemeToggle;