import React, { useEffect, useMemo } from "react";
import { Group, ValuSearch } from "@valu/react-valu-search";
import { proxy, useSnapshot } from "valtio";
import { sync } from "@valu/valtio-location";

export const vs = new ValuSearch({
    customer: "yle",
    apiKey: "efca53a6bbda038df8a293fd889d15d1dbf8a78c",
});

interface FilterState {
    tags: string[];
}

const state = proxy<FilterState>({
    tags: [],
});

function useGroups(): Group[] {
    const snap = useSnapshot(state);

    return useMemo(() => {
        let tagQuery = [snap.tags.map((tag) => "css-selector/" + tag)];

        if (snap.tags.length === 0) {
            tagQuery = [];
        }

        return [
            {
                title: "",
                filters: {
                    tagQuery,
                },
            },
        ];
    }, [snap]);
}

function TagButton(props: { children: React.ReactNode; tag: string }) {
    const snap = useSnapshot(state);
    const checked = snap.tags.includes(props.tag);

    return (
        <button
            type="button"
            style={{
                fontWeight: checked ? "bold" : "normal",
            }}
            onClick={() => {
                if (snap.tags.includes(props.tag)) {
                    state.tags = state.tags.filter((tag) => tag !== props.tag);
                } else {
                    state.tags.push(props.tag);
                }
            }}
        >
            <span style={{ fontSize: "150%" }}>{checked ? "☑ " : "☐ "}</span>
            {props.children}
        </button>
    );
}

const { start } = sync(state, {
    readURL(url) {
        return {
            tags: (url.searchParams.get("tags") || "")
                .split(",")
                .filter(Boolean),
        };
    },
    writeURL(state, url) {
        url.searchParams.set("tags", state.tags.join(","));
    },
});

export function Page() {
    useEffect(start, []);

    const groups = useGroups();
    const ref = vs.useInput();

    return (
        <main>
            <input className="text-input" ref={ref} />
            <span style={{ fontSize: "200%", marginLeft: "1rem" }}>🔍</span>
            <div className="filters">
                <TagButton tag="talous">Talous</TagButton>

                <TagButton tag="politiikka">Politiikka</TagButton>

                <TagButton tag="viihde">Viihde</TagButton>

                <button
                    type="button"
                    onClick={() => {
                        state.tags = [];
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
