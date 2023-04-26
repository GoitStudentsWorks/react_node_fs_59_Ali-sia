import { LogoutBtn } from "components/Buttons/LogoutBtn/LogoutBtn";
import UserNav from "components/UserNav/UserNav";

import {
    SideBarStyled,
    WrapperStyled,
    LogoBarStyled,
    LogoStyled,
    GooseLogoStyled,
    AppNameStyled,
    ButtonStyled,
    CloseSVGStyled,
} from "./SideBar.styled";

const handleClick = ({currentTarget}) => {
    document.querySelector("#burgerBtn").disabled = false;
    document.querySelector("#burgerBtn").style.pointerEvents = "auto";

    document.querySelector("#sideBar").style.display = "none";
    
    currentTarget.blur();
}

const Sidebar = () => {
    return (
        <SideBarStyled id="sideBar">
            <WrapperStyled>
                <LogoBarStyled>
                    <LogoStyled>
                        <GooseLogoStyled />
                        <AppNameStyled>GooseTrack</AppNameStyled>
                    </LogoStyled>
                    <ButtonStyled onClick={handleClick}>
                        <CloseSVGStyled />
                    </ButtonStyled>
                </LogoBarStyled>
                <UserNav />
            </WrapperStyled>
            <LogoutBtn />         
        </SideBarStyled>
    );
};

export default Sidebar;