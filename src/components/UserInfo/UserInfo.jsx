import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/auth.selectors'; 

import Modal from './UserInfoModal';

import {
    UserName,
    UserMenuButton,
    UserMenuButtonAvatar,
    UserMenuButtonChar,
} from './UserInfo.styled';

const ModalOpen = (event, setModalOpen) => {
    setModalOpen(true);

    event.currentTarget.blur();
};

const ModalClose = setModalOpen => {
    setModalOpen(false);
};

const UserInfo = () => {
    const [ isModalOpen, setModalOpen ] = useState(false);
    const { name, avatar } = useSelector(selectUser);
    
    const userName = name?.trim().split(' ')[0];

    return (
        <>
            <UserName>
                {userName}
            </UserName>
            <UserMenuButton type="button" onClick={event => ModalOpen(event, setModalOpen)}>
                {
                    avatar
                        ? <UserMenuButtonAvatar src={avatar} alt={userName + "'s avatar"}></UserMenuButtonAvatar>
                        : <UserMenuButtonChar >{userName?.charAt(0).toUpperCase()}</UserMenuButtonChar>
                }
            </UserMenuButton>
            { isModalOpen && <Modal onClose={() => ModalClose(setModalOpen)} />}
        </>
    );
};
  
export default UserInfo;