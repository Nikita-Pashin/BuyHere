import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Menu } from 'shared/ui/Menu/Menu';
import { Button } from 'shared/ui/Button';
import { ProfileMenu } from './ProfileMenu/ProfileMenu';

export const AvatarInHeader = () => (
  <Menu
    menuChildren={<ProfileMenu />}
  >
    <Button
      typeButton="ButtonIcon"
    >
      <Avatar />
    </Button>
  </Menu>
);
