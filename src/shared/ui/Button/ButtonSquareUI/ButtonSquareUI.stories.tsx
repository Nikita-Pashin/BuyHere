import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ButtonGeneral } from '../ButtonGeneral/ButtonGeneral';

export default {
  title: 'shared/ButtonSquare',
  component: ButtonGeneral,
} as ComponentMeta<typeof ButtonGeneral>;

const Template: ComponentStory<typeof ButtonGeneral> = (args) => <ButtonGeneral {...args} />;

export const ButtonSquareLightM = Template.bind({});
ButtonSquareLightM.args = {
  children: 'Купить',
  typeButton: 'ButtonSquare',
};

export const ButtonSquareDarkM = Template.bind({});
ButtonSquareDarkM.args = {
  children: 'Купить',
  typeButton: 'ButtonSquare',
};
ButtonSquareDarkM.decorators = [ThemeDecorator(Theme.DARK)];
