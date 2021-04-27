import { LazyValuSearch, select } from "@valu/react-valu-search/lazy";

const loader = new LazyValuSearch({
  load: () => import("./valu-search"),
  groups: [
    {
      title: "Kotimaa",
      filters: {
        createdDecay: 0.5,
        tagQuery: [["css-selector/kotimaa"]],
      },
    },
    {
      title: "Ulkomaat",
      filters: {
        createdDecay: 0.5,
        tagQuery: [["css-selector/ulkomaat"]],
      },
    },
    {
      title: "Muut",
      filters: {
        createdDecay: 0.5,
        tagQuery: [
          [
            "css-selector/talout",
            "css-selector/politiikka",
            "css-selector/kulttuuri",
            "css-selector/viihde",
            "css-selector/tiede",
            "css-selector/luonto",
            "css-selector/terveys",
            "css-selector/liikenne",
            "css-selector/media",
            "re/urheilu",
          ],
        ],
      },
    },
  ],
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
