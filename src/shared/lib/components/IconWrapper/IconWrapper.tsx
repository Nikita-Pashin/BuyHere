import React, { FC, ReactElement } from 'react';

const currentRem = 24;

interface IconWrapperProps {
  color?: string,
  size?: number | string,
  children: ReactElement,
  [key: string]: any,
}

const IconWrapper: FC<IconWrapperProps> = ({
  color = 'currentColor',
  size = currentRem,
  children,
  ...rest
}) => {
  if (process.env.NODE_ENV !== 'production') {
    // Подходящие единицы измерения взял из — https://svgwg.org/svg2-draft/types.html#InterfaceSVGLength
    const validMeasureUnitsArray = ['%', 'em', 'ex', 'px', 'cm', 'mm', 'in', 'pt', 'pc'];
    const validMeasureUnits = validMeasureUnitsArray.join('|');
    const regExp = /([0-9]*[.]?[0-9]+)(.*)/g;
    const match = regExp.exec(size as string);
    const sizeValue = parseFloat(match[1]);
    const sizeFormat = match[2];
    const isValidSizeFormat = validMeasureUnits.includes(sizeFormat);

    if (!isValidSizeFormat) {
      const advice = sizeFormat === 'rem'
        ? `Замените size="${size}" на size={${Math.round((sizeValue * currentRem) / 2) * 2}}`
        : `Замените на одну из приемлемых — "${validMeasureUnitsArray.join(', ')}"`;

      console.warn(`
        Некорректная единица измерения в пропсе size у используемой иконки — "${sizeFormat}".
        ${advice}
      `);
    }
  }

  return React.cloneElement(children, {
    width: size,
    height: size,
    fill: color,
    ...rest,
  });
};

export default IconWrapper;
