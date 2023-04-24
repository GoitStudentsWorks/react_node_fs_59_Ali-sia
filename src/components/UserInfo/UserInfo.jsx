import { useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/auth.selectors'; 

import { UserName, UserMenuButton, UserMenuButtonAvatar, UserMenuButtonChar } from './UserInfo.styled';

const UserInfo = () => {
    const { name, avatar } = useSelector(selectUser);
    
    const userName = name?.trim().split(' ')[0];

    return (
        <>
            <UserName>
                {userName}
            </UserName>
            <UserMenuButton>
                {
                    avatar
                        ? <UserMenuButtonAvatar src={avatar} alt={userName + "'s avatar"}></UserMenuButtonAvatar>
                        : <UserMenuButtonChar >{userName?.charAt(0).toUpperCase()}</UserMenuButtonChar>
                }
            </UserMenuButton>
        </>
    );
};
  
export default UserInfo;