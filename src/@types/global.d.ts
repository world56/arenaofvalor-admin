/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  };
};

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: obj;
  __REDUX_DEVTOOLS_EXTENSION__?: Function;
};

declare module '*.bmp' {
  const src: string;
  export default src;
};

declare module '*.gif' {
  const src: string;
  export default src;
};

declare module '*.jpg' {
  const src: string;
  export default src;
};

declare module '*.jpeg' {
  const src: string;
  export default src;
};

declare module '*.png' {
  const src: string;
  export default src;
};

declare module '*.webp' {
  const src: string;
  export default src;
};

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string; }>;
  const src: string;
  export default src;
};

declare module '*.css?' {
  const classes: { readonly [key: string]: string; };
  export default classes;
};

declare module '*.styl?' {
  const classes: { readonly [key: string]: string; };
  export default classes;
};

declare module 'tinymce' {
  const src: Editor;
  export default src;
};
