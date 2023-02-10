import { keyboardKeysEng, keyboardKeysRu } from "./helpers/infoObjects";
import { Action, InitialState } from "./types/types";



let initialState: InitialState = {
    keysRu: [...keyboardKeysRu],
    keysEng: [...keyboardKeysEng]
};

const keyboardReducer = (state: InitialState = initialState, action: Action): InitialState => {
    switch (action.type) {
        default:
            return state
    }
};

export default keyboardReducer;