import { CHANGE_THEME } from "../type/index";

export const changeThemeAction = (type) => {
  return {
    type: CHANGE_THEME,
    payload: type,
  };
};
