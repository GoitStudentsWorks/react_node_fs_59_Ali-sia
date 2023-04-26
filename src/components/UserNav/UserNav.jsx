import {
    WrapperStyled,
    UlStyled,
    LiStyled,
    NavLinkStyled,
    UserSVGStyled,
    CalendarSVGStyled
} from './UserNav.styled';

const UserNav = () => {
  return (
    <WrapperStyled>
        <h2>User Panel</h2>
        <UlStyled>
            <LiStyled>
                <NavLinkStyled to="/account">
                    <UserSVGStyled />
                    My account
                </NavLinkStyled>
            </LiStyled>
            <LiStyled>
                <NavLinkStyled to="/calendar">
                    <CalendarSVGStyled />
                    Calendar
                </NavLinkStyled>
            </LiStyled>
        </UlStyled>
    </WrapperStyled>
  );
};

export default UserNav;