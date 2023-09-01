declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  // eslint-disable-next-line import/newline-after-import
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

// eslint-disable-next-line
declare const __IS_DEV__: boolean;
// eslint-disable-next-line
declare const __API__: string;
