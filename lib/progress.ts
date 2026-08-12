export const MODULE_ONE_PROGRESS_KEY = "empire-wheel:mesopotamia:module-01-complete";

export function readModuleOneComplete() {
  return typeof window !== "undefined" && window.localStorage.getItem(MODULE_ONE_PROGRESS_KEY) === "true";
}

export function markModuleOneComplete() {
  window.localStorage.setItem(MODULE_ONE_PROGRESS_KEY, "true");
  window.dispatchEvent(new Event("empire-wheel-progress"));
}
