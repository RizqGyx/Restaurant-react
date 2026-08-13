import { useCallback, useSyncExternalStore } from "react";

const PREFIX = "favorite_";
const EVENT = "favorites:changed";

let snapshot = null;

const safeStorage = () => {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
};

const read = () => {
  const store = safeStorage();
  if (!store) return [];
  return Object.keys(store)
    .filter((key) => key.startsWith(PREFIX) && store.getItem(key) === "true")
    .map((key) => key.slice(PREFIX.length))
    .sort();
};

const getSnapshot = () => {
  if (snapshot === null) snapshot = read();
  return snapshot;
};

const getServerSnapshot = () => [];

const subscribe = (callback) => {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
};

const invalidate = () => {
  snapshot = null;
  window.dispatchEvent(new Event(EVENT));
};

export function useFavorites() {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const isFavorite = useCallback((id) => ids.includes(String(id)), [ids]);

  const toggle = useCallback((id) => {
    const store = safeStorage();
    if (!store) return false;

    const key = `${PREFIX}${id}`;
    const next = store.getItem(key) !== "true";
    if (next) store.setItem(key, "true");
    else store.removeItem(key);

    invalidate();
    return next;
  }, []);

  return { ids, count: ids.length, isFavorite, toggle };
}
