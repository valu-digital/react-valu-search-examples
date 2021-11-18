import { LazyValuSearch, select } from "@valu/react-valu-search/lazy";

const loader = new LazyValuSearch({
  load: () => import("./valu-search"),
});

loader.init(() => {
  const input = select(".search-input", HTMLInputElement);

   loader.loadOnFocus(input)

  return (vs) => {
    vs.bindInput(input);
    vs.initModal();
  };
});
