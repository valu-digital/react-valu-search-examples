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
});

export default vs;
