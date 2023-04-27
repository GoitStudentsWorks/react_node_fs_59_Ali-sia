import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { theme, light, dark } from 'theme';

import { selectTheme } from 'redux/auth/auth.selectors';
import { refreshUser } from 'redux/auth/auth.operations';

import MainLayout from './MainLayout/MainLayout';
import AccountPage from '../pages/AccountPage/AccountPage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { CalendarRoute, DayRoute } from './CalendarRoute';
import ChoosedMonth from './ChoosedMonth/ChoosedMonth';
import ChoosedDay from './ChooseDay/ChooseDay';

export const App = () => {
  const currentTheme = useSelector(selectTheme);
  const themeGlobal = { ...theme, colors: {...theme.colors, ...{ light, dark }[currentTheme]} };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeGlobal}>
      <BrowserRouter basename="goose-track-team-4">
        <Suspense fallback={null}>
          <Toaster />
          <Routes>
            {/* Приватні маршрути */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<CalendarPage />}>
                  {/* Переадресація на календар місяц/день*/}
                  <Route path="/" element={<CalendarRoute />} />
                  <Route path="/calendar" element={<CalendarRoute />} />
                  <Route path="/calendar/month" element={<CalendarRoute />} />
                  <Route path="/calendar/day" element={<DayRoute />} />

                  {/* Переадресація на відповідний компонент календаря */}
                  <Route
                    path="calendar/month/:currentDate"
                    element={<ChoosedMonth />}
                  />
                  <Route
                    path="calendar/day/:currentDate"
                    element={<ChoosedDay />}
                  />
                </Route>
                {/* Аккаунт */}
                <Route path="account" element={<AccountPage />} />
              </Route>
            </Route>

            {/* Публічні маршрути */}
            <Route path="/" element={<PublicRoute />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>

            <Route path="*" element={<h1>not found page</h1>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};
