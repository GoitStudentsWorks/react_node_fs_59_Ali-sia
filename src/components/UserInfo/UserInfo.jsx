import { UserName, UserMenuButton } from './UserInfo.styled';

const UserInfo = () => {
    return (
        <>
            <UserName>
                UserName
            </UserName>
            <UserMenuButton>
                <p style={{fontSize: "24px", margin: "0", padding: "0"}} >U</p>
            </UserMenuButton>
        </>
    );
};
  
export default UserInfo;