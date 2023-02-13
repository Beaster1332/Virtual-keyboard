import { KeyboardTypeActions } from "../types/types";

export const changeLangAC = () => ({ type: KeyboardTypeActions.CHANGE_KEYBOARD });
export const enterKey = (key: string) => ({ type: KeyboardTypeActions.ONCLICK_KEY, key });
export const spaceClick = () => ({ type: KeyboardTypeActions.SPACE_CLICK });
export const backSpaceClick = () => ({ type: KeyboardTypeActions.BACKSPACE_CLICK });
export const clearTextInput = () => ({ type: KeyboardTypeActions.CLEAR_TEXT_INPUT });