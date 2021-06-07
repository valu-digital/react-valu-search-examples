// import { subscribe } from "valtio";

// interface Listener {
//     (...args: any[]): any;
// }

// interface Emitter {
//     addEventListener(event: string, cb: Listener): any;
//     removeEventListener(event: string, cb: Listener): any;
// }

// function multiListener() {
//     let unbinds = [] as Function[];

//     return {
//         onEventTarget(emitter: Emitter, event: string, cb: Listener) {
//             emitter.addEventListener(event, cb);

//             unbinds.push(() => {
//                 emitter.removeEventListener(event, cb);
//             });
//         },
//         removeAll: () => {
//             unbinds.forEach((unbind) => unbind());
//             unbinds = [];
//         },
//         custom: (unbind: Function) => {
//             unbinds.push(unbind);
//         },
//     };
// }

// export interface ValtioLocationSyncOptions<State> {
//     key?: string;
//     debounceTime?: number;
//     readURL?: (url: URL) => State | undefined;
//     writeURL?: (state: State, url: URL) => URL | undefined | void;
// }

// export class ValtioLocationSync<State> {
//     private timer?: ReturnType<typeof setTimeout>;
//     private options: Required<ValtioLocationSyncOptions<State>>;
//     private state: State;

//     private listeners = multiListener();

//     constructor(state: State, options?: ValtioLocationSyncOptions<State>) {
//         this.state = state;
//         this.options = {
//             key: "data",
//             debounceTime: 1000,
//             readURL: (url) => {
//                 const value = url.searchParams.get(this.options.key);
//                 if (!value) {
//                     return;
//                 }

//                 return JSON.parse(value);
//             },
//             writeURL: (state, url) => {
//                 url.searchParams.set(this.options.key, JSON.stringify(state));
//             },
//             ...options,
//         };
//     }

//     readURL = () => {
//         const url = new URL(location.toString());

//         const value = this.options.readURL(url);
//         if (!value) {
//             return;
//         }

//         Object.assign(this.state, value);
//     };

//     writeURL = () => {
//         this.clear();
//         const currentURL = new URL(location.toString());
//         const newURL =
//             this.options.writeURL(this.state, currentURL) || currentURL;

//         history.replaceState(undefined, "", newURL.toString());
//     };

//     clear = () => {
//         if (this.timer) {
//             clearTimeout(this.timer);
//         }
//     };

//     debouncedWriteURL = () => {
//         this.clear();
//         this.timer = setTimeout(this.writeURL, this.options.debounceTime);
//     };

//     start() {
//         this.readURL();

//         this.listeners.onEventTarget(window, "popstate", this.readURL);

//         // Immediately save when the window is unfocused
//         this.listeners.onEventTarget(window, "focusout", this.writeURL);

//         // Immediately save when user navigates to another page
//         this.listeners.onEventTarget(window, "beforeunload", this.writeURL);

//         this.listeners.custom(subscribe(this.state, this.debouncedWriteURL));

//         return this.stop;
//     }

//     stop = () => {
//         this.listeners.removeAll();
//         this.clear();
//     };
// }

// export function syncToLocation<State>(
//     state: State,
//     options?: ValtioLocationSyncOptions<State>,
// ) {
//     return new ValtioLocationSync(state, options);
// }
