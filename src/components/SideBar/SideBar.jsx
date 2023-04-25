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
        </SideBarStyled>
    );
};

export default Sidebar;