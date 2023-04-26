import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense, useEffect } from 'react';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import {
  StyledMain,
  WrapperMain,
  WrapperMainContent,
} from './MainLayout.styled';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth.selectors';
import { refreshUser } from 'redux/auth/auth.operations';

const isUserNull = user => {
  const { name, email } = user;
  return name === null || email === null ? true : false;
};

const MainLayout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUserNull(user)) dispatch(refreshUser());
  }, [dispatch, user]);

  return (
    <StyledMain>
      <WrapperMain>
        <SideBar />
        <WrapperMainContent>
          <Header />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </WrapperMainContent>
      </WrapperMain>
      <Toaster position="top-right" reverseOrder={false} />
    </StyledMain>
  );
};
export default MainLayout;
