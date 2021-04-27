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

function Menu() {
  return (
    <menu>
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
      <a href="#link4">Link 5</a>
    </menu>
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
        <Menu />
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
