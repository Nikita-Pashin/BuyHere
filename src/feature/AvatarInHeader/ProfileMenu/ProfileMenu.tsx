import { useTranslation } from 'react-i18next';
import { Line } from 'shared/ui/Line';
import { MenuItem } from 'shared/ui/MenuItem/MenuItem';
import { IconProfile } from 'shared/ui/icons/IconProfile';
import { IconLogOut } from 'shared/ui/icons/IconLogOut';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { userActions } from 'entities/User';
import { useDispatch } from 'react-redux';

export const ProfileMenu = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onClickLogOut = () => {
    dispatch(userActions.setLogOut());
  };

  return (
    <>
      <MenuItem
        onClick={() => {}}
        label={t('About account')}
        nonInteractive
      />
      <Line />
      <MenuItem
        onClick={() => {}}
        label={t('My profile')}
        href={RoutePath.profile}
        leftNode={<IconProfile />}
      />
      <Line />
      <MenuItem
        onClick={onClickLogOut}
        label={t('LogOut')}
        leftNode={<IconLogOut />}
      />
    </>
  );
};
