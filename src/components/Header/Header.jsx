import {
    useLocation
} from "react-router-dom";

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import UserInfo from "components/UserInfo/UserInfo";
import {
    HeaderStyled,
    ButtonStyled,
    ForTheGloryOfMentors,
    PageName,
    BurgerSVGStyled,
    UserMenu,
    SiteNameContainer,
    GooseContainer,
    PageContainer,
    TakeToWork,
} from './Header.styled';

const handleClick = ({currentTarget}) => {
    currentTarget.disabled = true;
    currentTarget.style.pointerEvents = "none";
    currentTarget.blur();

    document.querySelector("#sideBar").style.display = "flex";  
}

const Header = () => {
    const { pathname } = useLocation();

    return (
        <HeaderStyled>
            <ButtonStyled
                type="button"
                onClick={handleClick}
                id="burgerBtn"
            >
                <BurgerSVGStyled />
            </ButtonStyled>
            <SiteNameContainer>
                <GooseContainer>
                    <ForTheGloryOfMentors />
                </GooseContainer>
                <PageContainer>
                    <PageName>
                        { pathname === "/account" ? "User Profile" : "Calendar" }
                    </PageName>
                    <TakeToWork>
                        <span>Let go</span> of the past and focus on the present!
                    </TakeToWork>
                </PageContainer>
            </SiteNameContainer>
            <UserMenu>
                <ThemeToggle />
                <UserInfo />
            </UserMenu>           
        </HeaderStyled>
    );
};
  
export default Header;