import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'feature/AuthByUsername';
import { useTheme } from 'app/providers/ThemeProvider';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { TextXXXL } from '../../../shared/ui/Typography';
import { Container } from '../../../shared/ui/Container';
import s from './Header.module.scss';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { toggleTheme } = useTheme();
  const userAuthData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

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

  const LogOut = () => {
    dispatch(userActions.setLogOut());
  };

  const LoginComponent = userAuthData ? (
    <Button
      typeButton="ButtonSquare"
      onClick={LogOut}
      className={s.btn}
    >
      {t('Leave')}
    </Button>
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
        <div>
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
