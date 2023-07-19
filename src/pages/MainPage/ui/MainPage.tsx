import { useTheme } from '../../../app/providers/ThemeProvider/index';
import { RoutePath } from '../../../shared/config/routeConfig/routeConfig';
import { AppLink } from '../../../shared/ui';

const MainPage = () => {
  const { toggleTheme } = useTheme();
  
  const onClick = () => {
    toggleTheme();
  };

  return (
    <div>
      <AppLink to={RoutePath.profile}>Профиль</AppLink>
      <button onClick={onClick} type="button">Тема</button>
      <p />
      <div>123 dawd awd awdawd aWDUIOAhfi UOawFI UHawifH awhf Lakwhf OKawh</div>
      <div>123 dawd awd awdawd aWDUIOAhfi UOawFI UHawifH awhf Lakwhf OKawh</div>
      <div>123 dawd awd awdawd aWDUIOAhfi UOawFI UHawifH awhf Lakwhf OKawh</div>
    </div>
  );
};

export default MainPage;
