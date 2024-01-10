import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from '../../../../shared/config/routeConfig/routeConfig';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
  const renderRouteWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense
        fallback={
          // eslint-disable-next-line
          <div>Loading...</div>
        }
      >
        {route.element}
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={(
          <Suspense
            fallback={
              // eslint-disable-next-line
              <div>Loading...</div>
            }
          >
            {route.authOnly ? (<RequireAuth>{element}</RequireAuth>) : (element)}
          </Suspense>
        )}
      />
    );
  }, []);

  return (
    <Suspense
      fallback={
        // eslint-disable-next-line
        <div>Loading...</div>
      }
    >
      <Routes>
        {Object.values(routeConfig).map(renderRouteWithWrapper)}
      </Routes>
    </Suspense>
  );
};
