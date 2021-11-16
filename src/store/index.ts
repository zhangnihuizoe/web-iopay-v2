import React from 'react';
import { LangStore } from './lang';
import { BaseStore } from './base';

export const rootStore = {
  base: new BaseStore(),
  lang: new LangStore()
};

const StoresContext = React.createContext(rootStore);

export const useStore = () => React.useContext(StoresContext);


if (typeof window !== "undefined") {
  //@ts-ignore
  window._store = rootStore;
}

