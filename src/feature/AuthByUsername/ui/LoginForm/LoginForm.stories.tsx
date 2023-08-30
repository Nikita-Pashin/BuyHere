import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'feature/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args: any) => <LoginForm {...args} />;

export const LoginFormEmptyLight = Template.bind({});
LoginFormEmptyLight.args = {};
LoginFormEmptyLight.decorators = [StoreDecorator({
  login: { username: '', password: '' },
})];

export const LoginFormEmptyDark = Template.bind({});
LoginFormEmptyDark.args = {};
LoginFormEmptyDark.decorators = [
  StoreDecorator({
    login: { username: '', password: '' },
  }),
  ThemeDecorator(Theme.DARK),
];

export const LoginFormFulfilledLight = Template.bind({});
LoginFormFulfilledLight.args = {};
LoginFormFulfilledLight.decorators = [StoreDecorator({
  login: { username: '123', password: 'asd' },
})];

export const LoginFormFulfilledDark = Template.bind({});
LoginFormFulfilledDark.args = {
};
LoginFormFulfilledDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    login: { username: '123', password: 'asd' },
  }),
];

export const LoginFormErrorLight = Template.bind({});
LoginFormErrorLight.args = {};
LoginFormErrorLight.decorators = [StoreDecorator({
  login: { username: '', password: '', error: 'Wrong login or password' },
})];

export const LoginFormErrorDark = Template.bind({});
LoginFormErrorDark.args = {
};
LoginFormErrorDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    login: { username: '', password: '', error: 'Wrong login or password' },
  }),
];
