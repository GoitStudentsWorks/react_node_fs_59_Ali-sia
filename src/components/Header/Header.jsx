import {
    useLocation
} from "react-router-dom";

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import UserInfo from "components/UserInfo/UserInfo";
import { HeaderStyled, ButtonStyled, PageName, BurgerSVGStyled, UserMenu, UserName, UserMenuButton } from './Header.styled';

const Header = () => {
    const { pathname } = useLocation();

    return (
        <HeaderStyled>
            <ButtonStyled>
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