import { FC } from 'react';
import { Header } from 'widgets/Header';
import s from './PageWrapper.module.scss';

export const PageWrapper: FC = ({ children }) => (
  <>
    <Header />
    <div className={s.pageWrapper}>
      {children}
    </div>
  </>
);
