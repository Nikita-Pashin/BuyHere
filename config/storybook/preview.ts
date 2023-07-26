import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// eslint-disable-next-line
// @ts-ignore
addDecorator(StyleDecorator);

// eslint-disable-next-line
// @ts-ignore
addDecorator(RouterDecorator);

// eslint-disable-next-line
// @ts-ignore
addDecorator(TranslationDecorator);
