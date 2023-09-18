import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Menu } from 'shared/ui/Menu/Menu';
import { ProfileMenu } from './ProfileMenu/ProfileMenu';

export const AvatarInHeader = () => (
  <Menu
    menuChildren={<ProfileMenu />}
  >
    <Avatar />
  </Menu>
);
