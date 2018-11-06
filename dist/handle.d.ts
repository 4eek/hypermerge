import { Doc, ChangeFn } from "automerge/frontend";
export default class Handle<T> {
    value: Doc<T> | null;
    subscription?: (item: Doc<T>) => void;
    constructor();
    push: (item: Doc<T>) => void;
    once: (subscriber: (doc: Doc<T>) => void) => void;
    subscribe: (subscriber: (doc: Doc<T>) => void) => void;
    close: () => void;
    cleanup: () => void;
    change: (fn: ChangeFn<T>) => void;
}