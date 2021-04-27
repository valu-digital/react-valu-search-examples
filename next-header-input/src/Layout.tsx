import React from "react";
import { ValuSearch } from "@valu/react-valu-search";

export const vs = new ValuSearch({
  customer: "yle",
  apiKey: "efca53a6bbda038df8a293fd889d15d1dbf8a78c",
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

export function Layout(props: { children: React.ReactNode }) {
  return (
    <vs.Provider>
      <Header />
      <Content {...props} />
    </vs.Provider>
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
  const { isActive, deactivate } = vs.useStatus();
  const ref = vs.useInput();

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
  const { isActive } = vs.useStatus();
  return <main>{isActive ? <vs.Results /> : props.children}</main>;
}
