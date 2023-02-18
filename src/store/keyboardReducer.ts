import { keyboardKeysEng, keyboardKeysRu } from "./helpers/infoObjects";
import { Action, InitialState, KeyboardTypeActions } from "./types/types";

let initialState: InitialState = {
    textInput: '',
    keysRu: [...keyboardKeysRu],
    keysEng: [...keyboardKeysEng],
    ruKeyboard: true
};

const keyboardReducer = (state: InitialState = initialState, action: Action): InitialState => {
    switch (action.type) {
        case KeyboardTypeActions.CHANGE_KEYBOARD:
            return {
                ...state,
                ruKeyboard: !state.ruKeyboard
            }
        case KeyboardTypeActions.ONCLICK_KEY:
            return {
                ...state,
                textInput: `${state.textInput}${action.key}`,
            }
        case KeyboardTypeActions.SPACE_CLICK:
            return {
                ...state,
                textInput: `${state.textInput} `,
            }
        case KeyboardTypeActions.BACKSPACE_CLICK:

            let str = state.textInput;
            return {
                ...state,
                textInput: str.slice(0, -1),
            }
        case KeyboardTypeActions.CLEAR_TEXT_INPUT:
            return {
                ...state,
                textInput: '',
            }
        default:
            return state
    }
};

export default keyboardReducer;