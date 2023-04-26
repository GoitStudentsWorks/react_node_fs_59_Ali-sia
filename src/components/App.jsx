import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/auth.selectors';
import { ThemeProvider } from 'styled-components';
import { theme, light, dark } from 'theme';

import { useDispatch } from 'react-redux';
import { useEffect, Suspense } from 'react';
import { refreshUser } from 'redux/auth/auth.operations';

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeGlobal}>
      <BrowserRouter basename="goose-track-team-4">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Navigate to={'/login'} />} />
            {/* routes for authorization */}
            <Route
              index
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/calendar"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/calendar"
                  component={<RegisterPage />}
                />
              }
            />
            {/* </Route> */}
            <Route element={<MainLayout />}>
              <Route
                path="/account"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<AccountPage />}
                  />
                }
              />
              <Route
                path="/calendar"
                element={
                  // <Navigate to={`/calendar/month/${Date.now()}`} replace />
                  <PrivateRoute
                    redirectTo="/login"
                    component={
                      <Navigate to={`/calendar/month/${Date.now()}`} replace />
                    }
                  />
                }
              />
              <Route
                path="/calendar/month/:currentDay"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<CalendarPage />}
                  />
                }
              />
            </Route>
            {/* </Route> */}
            <Route path="*" element={<h1>not found page</h1>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};
