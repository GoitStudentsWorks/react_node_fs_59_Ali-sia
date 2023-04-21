import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from './MainLayout';

export const App = () => {
  return (
    <BrowserRouter basename="goose-track-team-4">
      {/* <Suspense fallback={null}> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* routes for authorization */}
          <Route
            path="/register"
            element={
              <h2>register</h2>
              // <RestrictedRoute
              //   redirectTo="/contacts"
              //   component={<RegisterPage />}
              // />
            }
          />
          <Route
            path="/login"
            element={
              <h2>login</h2>
              // <RestrictedRoute
              //   redirectTo="/contacts"
              //   component={<LoginPage />}
              // />
            }
          />
        </Route>
        <Route>
          {/* path="/" element={<h2>main layout</h2>} */}
          <Route index element={<h2>main layout</h2>} />
          <Route
            path="/account"
            element={
              <h2>account</h2>
              // <PrivateRoute redirectTo="/login" component={<AccountPage />} />
            }
          />
          <Route
            path="/calendar"
            element={
              <h2>calendar</h2>
              // <PrivateRoute redirectTo="/login" component={<AccountPage />} />
            }
          >
            {/* <Route
              index
              path="/month/:currentDate"
              element={
                <h2>calendar month</h2>
                // <PrivateRoute redirectTo="/login" component={<AccountPage />} />
              }
            />
            <Route
              index
              path="/day/:currentDate"
              element={
                <h2>calendar day</h2>
                // <PrivateRoute redirectTo="/login" component={<AccountPage />} />
              }
            />*/}
          </Route>
        </Route>

        <Route path="*" element={<h1>not found page</h1>} />
      </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  );
};
