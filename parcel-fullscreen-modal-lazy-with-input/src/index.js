import { LazyValuSearch, select } from "@valu/react-valu-search/lazy";

const loader = new LazyValuSearch({
  load: () => import("./valu-search"),
});

loader.init(() => {
  const input = select(".outside-input", HTMLInputElement);

  input.addEventListener("focus", () => {
    loader.load();
  });

  return (vs) => {
    vs.bindInputAsOpener(input);
    vs.initModal();
  };
});
