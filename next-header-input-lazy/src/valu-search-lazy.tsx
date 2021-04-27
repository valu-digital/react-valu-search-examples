import { LazyReactValuSearch } from "@valu/react-valu-search/lazy/react";

const lvs = new LazyReactValuSearch({
  load: () => import(/* webpackChunkName: "valu-search" */ "./valu-search"),
});

export const ValuSearchLazyProvider = lvs.Provider;
export const useLazyValuSearch = lvs.useLazyValuSearch;
export const useLazyValuSearchInput = lvs.useInput;
