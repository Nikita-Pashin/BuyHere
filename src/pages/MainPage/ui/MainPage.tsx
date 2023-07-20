import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../app/providers/ThemeProvider/index';
import { RoutePath } from '../../../shared/config/routeConfig/routeConfig';
import { AppLink } from '../../../shared/ui';

const MainPage: FC = () => {
  const { t, i18n } = useTranslation();
  const { toggleTheme } = useTheme();

  const onClick = () => {
    toggleTheme();
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <AppLink to={RoutePath.profile}>{t('profile')}</AppLink>
      <button onClick={onClick} type="button">{t('theme')}</button>
      <p />
    </div>
  );
};

export default MainPage;
