import classNames from "classnames";
import './styles/index.scss';

export const App = () => {
  return (
    <div className={classNames('app', 'light')}>
      <div>App</div>
      <h1>App</h1>
    </div>
  );
};
