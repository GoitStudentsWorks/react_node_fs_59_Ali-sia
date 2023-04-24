import { useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/auth.selectors'; 

import { UserName, UserMenuButton, UserMenuButtonChar } from './UserInfo.styled';

const UserInfo = () => {
    const { name } = useSelector(selectUser);
    
    const userName = name?.trim().split(' ')[0];

    return (
        <>
            <UserName>
                {userName}
            </UserName>
            <UserMenuButton>
                {
                    !true
                        ? "+"
                        : <UserMenuButtonChar >{userName?.charAt(0).toUpperCase()}</UserMenuButtonChar>
                }
            </UserMenuButton>
        </>
    );
};
  
export default UserInfo;