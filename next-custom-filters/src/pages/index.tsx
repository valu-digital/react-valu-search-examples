import React, { useState } from "react";
import { ValuSearch, Group } from "@valu/react-valu-search";

export const vs = new ValuSearch({
  customer: "yle",
  apiKey: "efca53a6bbda038df8a293fd889d15d1dbf8a78c",
});

function createGroups(tag: string): Group[] {
  let tagQuery = [];

  if (tag) {
    tagQuery = [["css-selector/" + tag]];
  }

  return [
    {
      title: "",
      filters: {
        tagQuery,
      },
    },
  ];
}

function TagButton(props: {
  children: React.ReactNode;
  tag: string;
  currentTag: string;
  onClick: (tag: string) => any;
}) {
  return (
    <button
      type="button"
      disabled={props.currentTag === props.tag}
      onClick={() => {
        props.onClick(props.tag);
      }}
    >
      {props.children}
    </button>
  );
}

export function Page() {
  const [groups, setGroups] = useState<Group[]>(createGroups(""));
  const [tag, setTagState] = useState("");
  const ref = vs.useInput();

  const setTag = (tag: string) => {
    setTagState(tag);
    setGroups(createGroups(tag));
  };

  return (
    <main>
      <input className="text-input" ref={ref} />

      <div className="filters">
        <TagButton onClick={setTag} tag="talous" currentTag={tag}>
          Talous
        </TagButton>

        <TagButton onClick={setTag} tag="politiikka" currentTag={tag}>
          Politiikka
        </TagButton>

        <TagButton onClick={setTag} tag="viihde" currentTag={tag}>
          Viihde
        </TagButton>

        <button
          type="button"
          onClick={() => {
            setTag("");
          }}
        >
          ╳
        </button>
      </div>

      <vs.Provider groups={groups}>
        <vs.Results />
      </vs.Provider>
    </main>
  );
}

export default Page;
