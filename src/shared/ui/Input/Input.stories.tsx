import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => {
  const [value, setValue] = useState('');

  const onChange = ({
    currentTarget: { value: v },
  }: React.FormEvent<HTMLInputElement>) => {
    setValue(v);
  };

  return (
    <Input
      value={value}
      onChange={onChange}
    />
  );
};

export const InputSquareLightM = Template.bind({});
InputSquareLightM.args = {
};

export const InputSquareDarkM = Template.bind({});
InputSquareDarkM.args = {
};
InputSquareDarkM.decorators = [ThemeDecorator(Theme.DARK)];
