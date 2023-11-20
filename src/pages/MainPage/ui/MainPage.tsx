import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper';
import { RoutePath } from '../../../shared/config/routeConfig/routeConfig';
import { AppLink } from '../../../shared/ui/AppLink';

const MainPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div>
        <AppLink to={RoutePath.profile_account_details}>{t('Profile')}</AppLink>
      </div>
    </PageWrapper>
  );
};

export default MainPage;
