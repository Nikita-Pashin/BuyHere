import classNames from 'classnames';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', theme, 'duringChangeTheme')}>
      <AppRouter />
    </div>
  );
};
