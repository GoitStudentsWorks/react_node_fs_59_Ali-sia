import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { theme, light, dark } from 'theme';

import { selectTheme } from 'redux/auth/auth.selectors';
import { refreshUser } from 'redux/auth/auth.operations';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { CalendarRoute, DayRoute } from './CalendarRoute';

import Loader from './Loader/Loader';

const MainLayout  = lazy(() => import('./MainLayout/MainLayout'));
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ChoosedMonth = lazy(() => import('./ChoosedMonth/ChoosedMonth'));
const ChoosedDay = lazy(() => import('./ChooseDay/ChooseDay'));

export const App = () => {
  const currentTheme = useSelector(selectTheme);
  const themeGlobal = { ...theme, colors: { light, dark }[currentTheme] };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeGlobal}>
      <BrowserRouter basename="goose-track-team-4">
        <Suspense fallback={<Loader />}>
          <Toaster />
          <Routes>
            {/* Приватні маршрути */}
            <Route path="/" render={ () => <PrivateRoute /> }>
              <Route path="/" render={ () => <MainLayout /> }>
                <Route path="/" render={ () => <CalendarPage  /> }>
                  {/* Переадресація на календар місяц/день*/}
                  <Route path="/" render={ () => <CalendarRoute   /> } />
                  <Route path="/calendar" render={ () => <CalendarRoute   /> } />
                  <Route path="/calendar/month" render={ () => <CalendarRoute   /> } />
                  <Route path="/calendar/day" render={ () => <DayRoute   /> } />

                  {/* Переадресація на відповідний компонент календаря */}
                  <Route
                    path="calendar/month/:currentDate"
                    render={ () => <ChoosedMonth   /> }
                  />
                  <Route
                    path="calendar/day/:currentDate"
                    render={ () => <ChoosedDay   /> }
                  />
                </Route>
                {/* Аккаунт */}
                <Route path="account" render={ () => <AccountPage   /> } />
              </Route>
            </Route>

            {/* Публічні маршрути */}
            <Route path="/" render={ () => <PublicRoute   /> }>
              <Route path="login" render={ () => <LoginPage   /> } />
              <Route path="register" render={ () => <RegisterPage   /> } />
            </Route>

            <Route path="*" render={ () => <h1>not found page</h1> } />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};
