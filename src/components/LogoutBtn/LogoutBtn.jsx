import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth.operations';
// import { useHistory } from 'react-router-dom'; 

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  // const history = useHistory(); 

  const handleLogOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
      console.log('Logout successful');
      // history.push('/login'); 
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <button type="submit" onClick={handleLogOut}>
      Log Out
    </button>
  );
};

// export const LogOutBtn = () => {
//   const dispatch = useDispatch();

//   const handleLogout = async () => {
//     try {
//       await dispatch(logOut());
//       // redirect to a login page here
//     } catch (error) {
//       console.error('Logout error:', error.message);
//     }
//   };

//   return (
//     <button type="button" onClick={handleLogout}>
//       Log Out
//     </button>
//   );
// };
