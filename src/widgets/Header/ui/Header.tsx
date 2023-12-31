import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'feature/AuthByUsername';
import { useTheme } from 'app/providers/ThemeProvider';
import { useSelector } from 'react-redux';
import { getUserAuthDataUsername } from 'entities/User';
import { AvatarInHeader } from 'feature/AvatarInHeader';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { TextXXXL } from '../../../shared/ui/Typography';
import { Container } from '../../../shared/ui/Container';
import s from './Header.module.scss';

export const Header = memo(() => {
  const { t, i18n } = useTranslation();
  const { toggleTheme } = useTheme();
  const username = useSelector(getUserAuthDataUsername);
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const openAuthModal = () => {
    setIsOpen(true);
  };

  const LoginComponent = useMemo(() => (username ? (
    <div className={s.avatar}>
      <AvatarInHeader />
    </div>
  ) : (
    <Button
      typeButton="ButtonSquare"
      onClick={openAuthModal}
      classNameWrapper={s.btn}
    >
      {t('User')}
    </Button>
  )), [t, username]);

  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <TextXXXL bold>
          <Link
            to={RoutePath.main}
            className={s.logo}
          >
            {t('Buy here!')}
          </Link>
        </TextXXXL>
        <div className={s.buttons}>
          <Button
            typeButton="ButtonSquare"
            onClick={changeLanguage}
            classNameWrapper={s.btn}
          >
            {t('Language')}
          </Button>
          <Button
            typeButton="ButtonSquare"
            onClick={toggleTheme}
            classNameWrapper={s.btn}
          >
            {t('Theme')}
          </Button>
          {LoginComponent}
        </div>
      </Container>
      <LoginModal
        isOpen={isOpen}
        onClose={onClose}
        lazy={false}
      />
    </header>
  );
});
