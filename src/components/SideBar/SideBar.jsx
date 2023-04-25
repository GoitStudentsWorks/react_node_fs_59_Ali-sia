import { LogoutBtn } from "components/LogoutBtn/LogoutBtn";

import {
    SideBarStyled,
    LogoBarStyled,
    LogoStyled,
    GooseLogoStyled,
    AppNameStyled,
    ButtonStyled,
    CloseSVGStyled,
} from "./SideBar.styled";

const handleClick = ({currentTarget}) => {
    document.querySelector("#burgerBtn").disabled = false;
    document.querySelector("#sideBar").style.display = "none";
    currentTarget.blur();
}

const Sidebar = () => {
    return (
        <SideBarStyled id="sideBar">
            <LogoBarStyled>
                <LogoStyled>
                    <GooseLogoStyled />
                    <AppNameStyled>GooseTrack</AppNameStyled>
                </LogoStyled>
                <ButtonStyled onClick={handleClick}>
                    <CloseSVGStyled />
                </ButtonStyled>
            </LogoBarStyled>
            <LogoutBtn />         
        </SideBarStyled>
    );
};

export default Sidebar;