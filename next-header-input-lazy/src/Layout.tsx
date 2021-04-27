import React from "react";
import {
  useLazyValuSearch,
  useLazyValuSearchInput,
  ValuSearchLazyProvider,
} from "./valu-search-lazy";

export function Layout(props: { children: React.ReactNode }) {
  return (
    <ValuSearchLazyProvider>
      <Header />
      <Content {...props} />
    </ValuSearchLazyProvider>
  );
}

function Header() {
  const { isActive, deactivate } = useLazyValuSearch();
  const ref = useLazyValuSearchInput();

  return (
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
  );
}

function Content(props: { children: React.ReactNode }) {
  const { isActive, module } = useLazyValuSearch();

  return (
    <main>
      {isActive && module ? (
        <module.ExampleValuSearchResults />
      ) : (
        props.children
      )}
    </main>
  );
}
