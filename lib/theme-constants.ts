export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "tbc-theme";

export const THEME_INIT_SCRIPT = `(function(){try{var k=${JSON.stringify(
  THEME_STORAGE_KEY
)},s=localStorage.getItem(k),t=(s==="light"||s==="dark")?s:"dark";document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;
