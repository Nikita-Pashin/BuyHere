import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserInited, userActions } from 'entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isUserInited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
    // eslint-disable-next-line
  }, []);

  return (
    // TODO: duringChangeTheme refacoring
    <div className={classNames('app', theme, 'duringChangeTheme')}>
      {isUserInited && <AppRouter />}
    </div>
  );
};
