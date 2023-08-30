import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    // TODO: duringChangeTheme refacoring
    <div className={classNames('app', theme, 'duringChangeTheme')}>
      <AppRouter />
    </div>
  );
};
