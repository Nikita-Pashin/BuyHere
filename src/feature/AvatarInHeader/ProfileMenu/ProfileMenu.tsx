import { useTranslation } from 'react-i18next';
import { Line } from 'shared/ui/Line';
import { MenuItem } from 'shared/ui/MenuItem/MenuItem';
import { IconProfile } from 'shared/ui/icons/IconProfile';
import { IconLogOut } from 'shared/ui/icons/IconLogOut';
import { IconSettings } from 'shared/ui/icons/IconSettings';

export const ProfileMenu = () => {
  const { t } = useTranslation();

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
        leftNode={<IconProfile />}
      />
      <MenuItem
        onClick={() => {}}
        label={t('Settings')}
        leftNode={<IconSettings />}
      />
      <Line />
      <MenuItem
        onClick={() => {}}
        label={t('LogOut')}
        leftNode={<IconLogOut />}
      />
    </>
  );
};
