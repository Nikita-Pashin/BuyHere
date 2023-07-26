import { useTranslation } from 'react-i18next';
import { RoutePath } from '../../../shared/config/routeConfig/routeConfig';
import { AppLink } from '../../../shared/ui/AppLink';

const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <AppLink to={RoutePath.main}>{t('Profile')}</AppLink>
    </div>
  );
};

export default ProfilePage;
