import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'feature/AuthByUsername';
import { useTheme } from 'app/providers/ThemeProvider';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { AvatarInHeader } from 'feature/AvatarInHeader';
import { TextXXXL } from '../../../shared/ui/Typography';
import { Container } from '../../../shared/ui/Container';
import s from './Header.module.scss';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { toggleTheme } = useTheme();
  const userAuthData = useSelector(getUserAuthData);

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

  const LoginComponent = userAuthData ? (
    <div className={s.avatar}>
      <AvatarInHeader />
    </div>
  ) : (
    <Button
      typeButton="ButtonSquare"
      onClick={openAuthModal}
      className={s.btn}
    >
      {t('User')}
    </Button>
  );

  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <TextXXXL bold>
          {t('Buy here!')}
        </TextXXXL>
        <div className={s.buttons}>
          <Button
            typeButton="ButtonSquare"
            onClick={changeLanguage}
            className={s.btn}
          >
            {t('Language')}
          </Button>
          <Button
            typeButton="ButtonSquare"
            onClick={toggleTheme}
            className={s.btn}
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
};
