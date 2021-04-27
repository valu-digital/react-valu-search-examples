import React from "react";
import { ValuSearch } from "@valu/react-valu-search";

export const vs = new ValuSearch({
  customer: "yle",
  apiKey: "efca53a6bbda038df8a293fd889d15d1dbf8a78c",
  slots: {
    modalHeader: () => null,
    closeButton: () => {
      return (
        <button type="button" onClick={vs.deactivate}>
          ╳
        </button>
      );
    },
  },
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

export default vs;
