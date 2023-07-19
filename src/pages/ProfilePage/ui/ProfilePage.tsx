import { RoutePath } from '../../../shared/config/routeConfig/routeConfig';
import { AppLink } from '../../../shared/ui';

const ProfilePage = () => (
  <div>
    <AppLink to={RoutePath.main}>Главная</AppLink>
  </div>
);

export default ProfilePage;
