import { LazyValuSearch, select } from "@valu/react-valu-search/lazy";

const loader = new LazyValuSearch({
  load: () => import("./valu-search"),
});

loader.init(() => {
  const button = select("button.search", HTMLButtonElement);
  const input = select("#outside-input", HTMLInputElement);

  button.addEventListener("click", () => {
    if (!loader.isLoaded()) {
      button.classList.add("loading");
    }

    loader.activate();
  });

  return (vs) => {
    button.classList.remove("loading");
    vs.bindInputAsOpener(input);
    vs.initModal();
  };
});
