import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Container } from 'shared/ui/Container';
import { PageWrapper } from 'widgets/PageWrapper';
import { ProfilePageNavigation } from 'widgets/ProfilePageNavigation';
import { Suspense, memo } from 'react';
import { ProfileAccountDetailsAsync } from 'widgets/ProfileAccountDetails';
import s from './ProfilePage.module.scss';

const ProfilePage = () => (
  <PageWrapper>
    <Container className={s.profilePageContainer}>
      <div>
        <Avatar size={256} round />
        <ProfilePageNavigation className={s.profilePageNavigationClassName} />
      </div>
      <div>
        <Suspense fallback="Loading...">
          <ProfileAccountDetailsAsync />
        </Suspense>
      </div>
    </Container>
  </PageWrapper>
);

export default memo(ProfilePage);
