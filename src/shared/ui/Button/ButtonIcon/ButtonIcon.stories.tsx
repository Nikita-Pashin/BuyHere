import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { IconSearch } from 'shared/ui/icons/IconSearch';
import { ButtonGeneral } from '../ButtonGeneral/ButtonGeneral';

export default {
  title: 'shared/ButtonIcon',
  component: ButtonGeneral,
} as ComponentMeta<typeof ButtonGeneral>;

const Template: ComponentStory<typeof ButtonGeneral> = (args) => <ButtonGeneral {...args} />;

export const ButtonIconLightM = Template.bind({});
ButtonIconLightM.args = {
  typeButton: 'ButtonIcon',
  children: <IconSearch />,
  tag: 'button',
};

export const ButtonIconDarkM = Template.bind({});
ButtonIconDarkM.args = {
  typeButton: 'ButtonIcon',
  children: <IconSearch />,
  tag: 'button',
};
ButtonIconDarkM.decorators = [ThemeDecorator(Theme.DARK)];
