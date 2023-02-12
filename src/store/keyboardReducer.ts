import { keyboardKeysEng, keyboardKeysRu } from "./helpers/infoObjects";
import { Action, InitialState, KeyboardTypeActions } from "./types/types";

let initialState: InitialState = {
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
        default:
            return state
    }
};

export default keyboardReducer;