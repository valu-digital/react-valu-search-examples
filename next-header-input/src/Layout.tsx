import React from "react";
import { ValuSearch } from "@valu/react-valu-search";

export const vs = new ValuSearch({
  customer: "yle",
  apiKey: "efca53a6bbda038df8a293fd889d15d1dbf8a78c",
});

export function Layout(props: { children: React.ReactNode }) {
  return (
    <vs.Provider>
      <LayoutInner {...props} />
    </vs.Provider>
  );
}

export function LayoutInner(props: { children: React.ReactNode }) {
  const { isActive, deactivate } = vs.useStatus();
  const ref = vs.useInput();

  return (
    <>
      <header>
        <div className="wrap">
          <div className="title">Header Text</div>
          <div>
            <input
              ref={ref}
              className="search-input"
              type="text"
              placeholder="Search..."
            />
            <button
              style={{
                visibility: isActive ? "visible" : "hidden",
              }}
              type="button"
              onClick={() => {
                deactivate();
              }}
            >
              x
            </button>
          </div>
        </div>
      </header>
      <main>{isActive ? <vs.Results /> : props.children}</main>
    </>
  );
}
