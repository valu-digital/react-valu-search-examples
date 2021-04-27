import { LazyValuSearch, select } from "@valu/react-valu-search/lazy";

const loader = new LazyValuSearch({
  load: () => import("./valu-search"),
});

loader.init(() => {
  const button = select("button.search", HTMLButtonElement);

  button.addEventListener("click", () => {
    if (!loader.isLoaded()) {
      button.classList.add("loading");
    }

    loader.activate();
  });

  return (vs) => {
    button.classList.remove("loading");
    vs.initModal();
  };
});
