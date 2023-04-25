import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { InitialElement } from './InitialElement';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/auth.selectors';
import { ThemeProvider } from 'styled-components';
import { theme, light, dark } from 'theme';

import MainLayout from './MainLayout/MainLayout';
import AccountPage from '../pages/AccountPage/AccountPage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const currentTheme = useSelector(selectTheme);
  const themeGlobal = { ...theme, colors: { light, dark }[currentTheme] };

  return (
    <ThemeProvider theme={themeGlobal}>
      <BrowserRouter basename="goose-track-team-4">
        {/* <Suspense fallback={null}> */}
        <Routes>
          <Route path="/" element={<InitialElement />}>
            {/* routes for authorization */}
            <Route index element={<Navigate to="/login" />} />
            <Route
              path="/register"
              element={
                <RegisterPage />
                // <h2>register</h2>
                // <RestrictedRoute
                //   redirectTo="/contacts"
                //   component={<RegisterPage />}
                // />
              }
            />
            <Route
              path="/login"
              element={
                <LoginPage />
                // <h2>login</h2>
                // <RestrictedRoute
                //   redirectTo="/contacts"
                //   component={<LoginPage />}
                // />
              }
            />
          </Route>
          <Route element={<MainLayout />}>
            <Route
              path="/account"
              element={
                <AccountPage />
                // <PrivateRoute redirectTo="/login" component={<AccountPage />} />
              }
            />
            <Route
              path="/calendar"
              element={
                <Navigate to={`/calendar/month/${Date.now()}`} replace />
              }
            />
            <Route
              path="/calendar/month/:currentDay"
              element={<CalendarPage />}
            />
          </Route>
          {/* </Route> */}

          <Route path="*" element={<h1>not found page</h1>} />
        </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
    </ThemeProvider>
  );
};
