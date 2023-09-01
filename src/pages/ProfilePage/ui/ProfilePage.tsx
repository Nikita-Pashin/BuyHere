import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper';
import { RoutePath } from '../../../shared/config/routeConfig/routeConfig';
import { AppLink } from '../../../shared/ui/AppLink';

const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <AppLink to={RoutePath.main}>{t('Profile')}</AppLink>
    </PageWrapper>
  );
};

export default ProfilePage;
