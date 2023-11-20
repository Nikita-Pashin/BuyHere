import { FC } from 'react';
import classNames from 'classnames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import s from './ProfilePageNavigation.module.scss';

export interface ProfilePageNavigationProps {
  className?: string;
}

export const ProfilePageNavigation: FC<ProfilePageNavigationProps> = (props) => {
  const {
    className,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(s.profilePageNavigation, className)}>
      <Button
        typeButton="LinkSquare"
        to={RoutePath.profile_account_details}
        classNameWrapper={s.profilePageNavigationBtn}
      >
        {t('Account details')}
      </Button>
      <Button
        typeButton="LinkSquare"
        to={RoutePath.profile_balance}
        classNameWrapper={s.profilePageNavigationBtn}
      >
        {t('Balance')}
      </Button>
      <Button
        typeButton="ButtonSquare"
        onClick={() => {}}
        classNameWrapper={s.profilePageNavigationBtn}
      >
        {t('LogOut')}
      </Button>
    </div>
  );
};
