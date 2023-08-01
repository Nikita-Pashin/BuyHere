import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Provider } from 'react-redux';

export const StoreDecorator = (
  initialState?: DeepPartial<StateSchema>,
) => (StoryComponent: Story) => (
  // eslint-disable-next-line
  // @ts-ignore
  <Provider store={initialState}>
    <StoryComponent />
  </Provider>
);
