import { atom } from "jotai";

export const appState = atom({
  showSideBarMenu: false,
  loggedIn: false,
});
export const urlState = atom("http://172.18.35.10:3000/user/login");
