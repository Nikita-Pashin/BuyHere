import { RouteProps } from 'react-router-dom';
import { MainPage } from '../../../pages/MainPage';
import { ProfilePage } from '../../../pages/ProfilePage';
import { NotFoundPage } from '../../../pages/NotFoundPage/index';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  PROFILE_ACCOUNT_DETAILS = 'profile_account_details',
  PROFILE_BALANCE = 'profile_balance',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROFILE_ACCOUNT_DETAILS]: '/profileAccountDetails',
  [AppRoutes.PROFILE_BALANCE]: '/profileBalance',
  // Последний
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.PROFILE_ACCOUNT_DETAILS]: {
    path: RoutePath.profile_account_details,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.PROFILE_BALANCE]: {
    path: RoutePath.profile_balance,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
