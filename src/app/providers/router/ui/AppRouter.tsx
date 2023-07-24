import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
  <Suspense
    fallback={
      // eslint-disable-next-line
      <div>Loading...</div>
    }
  >
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense
              fallback={
                // eslint-disable-next-line
                <div>Loading...</div>
              }
            >
              {element}
            </Suspense>
          )}
        />
      ))}
    </Routes>
  </Suspense>
);
