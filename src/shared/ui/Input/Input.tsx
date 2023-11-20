import {
  FC, InputHTMLAttributes, MutableRefObject, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import s from './Input.module.scss';
import { Sizes } from '../types';
import { TextL } from '../Typography';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'className'> {
  value: string,
  label?: string,
  classNameInput?: string,
  classNameWrapper?: string,
  inputSize?: Sizes,
  stretch?: boolean,
  readOnly?: boolean,
  inptuRef?: MutableRefObject<HTMLInputElement>,
}

export const Input: FC<InputProps> = (props) => {
  const { t } = useTranslation();
  const inputLocalRef = useRef<HTMLInputElement>(null);

  const {
    value,
    onChange,
    classNameInput,
    classNameWrapper,
    inputSize = 'm',
    stretch,
    label,
    placeholder,
    readOnly,
    required,
    inptuRef: inptuRefProp,
    disabled: disabledProp,
    ...otherProps
  } = props;

  const inputRef = inptuRefProp?.current ? inptuRefProp : inputLocalRef;
  const disabled = disabledProp || readOnly;

  return (
    <div className={classNames(s.inputWrapper, classNameWrapper)}>
      {!!label && (
        <TextL className={s.label} bold>
          <label>{label}</label>
          {required && <sup>*</sup>}
        </TextL>
      )}
      <input
        value={value}
        ref={inputRef}
        className={classNames(
          s[inputSize],
          s.input,
          classNameInput,
          stretch && s.stretch,
          readOnly && s.readOnly,
          disabled && s.disabled,
        )}
        disabled={disabled}
        placeholder={t(placeholder || 'Enter text') + (required ? '*' : '')}
        required={required}
        {...readOnly ? {} : { onChange }}
        {...otherProps}
      />
    </div>
  );
};
