import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper';
import { useTheme } from '../../../app/providers/ThemeProvider/index';
import { RoutePath } from '../../../shared/config/routeConfig/routeConfig';
import { AppLink } from '../../../shared/ui/AppLink';

const MainPage: FC = () => {
  const { t, i18n } = useTranslation();
  const { toggleTheme } = useTheme();

  const onClick = () => {
    toggleTheme();
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <PageWrapper>
      <div>
        <AppLink to={RoutePath.profile}>{t('Profile')}</AppLink>
        <button onClick={onClick} type="button">{t('Theme')}</button>
        <p />
      </div>
    </PageWrapper>
  );
};

export default MainPage;
