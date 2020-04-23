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
  __REDUX_DEVTOOLS_EXTENSION__?: any;
};

declare module 'react-router-dom' {
  const src: string;
  export const Outlet: any;
  export const useNavigate: any;
  export const useLocation: any;
  export const createBrowserHistory: any;
  export default src;
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
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default src;
};

declare module '*.css?' {
  const classes: { readonly [key: string]: string };
  export default classes;
};

declare module '*.styl?' {
  const classes: { readonly [key: string]: string };
  export default classes;
};