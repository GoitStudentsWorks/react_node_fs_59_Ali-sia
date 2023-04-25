import {
    useLocation
} from "react-router-dom";

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import UserInfo from "components/UserInfo/UserInfo";
import { HeaderStyled, ButtonStyled, PageName, BurgerSVGStyled, UserMenu } from './Header.styled';

const handleClick = ({currentTarget}) => {
    document.querySelector("#sideBar").style.display = "block";
    currentTarget.blur();
}

const Header = () => {
    const { pathname } = useLocation();

    return (
        <HeaderStyled>
            <ButtonStyled onClick={handleClick}>
                <BurgerSVGStyled />
            </ButtonStyled>
            <PageName>
                { pathname === "/account" ? "User Profile" : "Calendar" }
            </PageName>
            <UserMenu>
                <ThemeToggle />
                <UserInfo />
            </UserMenu>           
        </HeaderStyled>
    );
};
  
export default Header;