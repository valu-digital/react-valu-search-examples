import { ValuSearch } from "@valu/react-valu-search";

export const vs = new ValuSearch({
  customer: "yle",
  apiKey: "efca53a6bbda038df8a293fd889d15d1dbf8a78c",
});

export function ExampleValuSearchResults() {
  return (
    <vs.Provider>
      <div>
        <vs.Results />
      </div>
    </vs.Provider>
  );
}

export default vs;
