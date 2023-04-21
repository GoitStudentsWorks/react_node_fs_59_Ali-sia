import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter basename="goose-track-team-4">
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            {/* <Route path="/" element={<HomePage/>} /> */}
            {/* <Route path="/exercises">
              <Route index element={<ExercisesPage />} />
              <Route path="vanilajs">
                <Route index element={<JavaScriptPage />} />
                <Route path="colorFlipper" element={<ColorFlipper />} />
                <Route path="counter" element={<Counter />} />
              </Route>
              <Route path="react">
                <Route index element={<ReactPage />} />
                <Route path="task1_react" element={<Task1React />} />
              </Route>
            </Route> */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
