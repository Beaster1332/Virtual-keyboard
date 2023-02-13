export type Action = {
    type: string,
    [key: string]: any,
};

export interface InitialState {
    textInput: string,
    keysRu: string[],
    keysEng: string[],
    ruKeyboard: boolean,
};

export enum KeyboardTypeActions {
    CHANGE_KEYBOARD = 'keyboard/CHANGE_KEYBOARD',
    ONCLICK_KEY = 'keyboard/ONCLICK_KEY',
    SPACE_CLICK = 'keyboard/SPACE_CLICK',
    BACKSPACE_CLICK = 'keyboard/BACKSPACE_CLICK',
    CLEAR_TEXT_INPUT = 'keyboard/CLEAR_TEXT_INPUT',
};

export type KeyboardProps = {
    textInput: string,
    keysRu: string[],
    keysEng: string[],
    ruKeyboard: boolean,
    changeLanguage: () => void,
    enterKey: (key: string) => void,
    spaceClick: () => void,
    backSpaceClick: () => void,
    clearTextInput: () => void,
};

export type KeyProps = {
    nameK: string,
    enterKey: (key: string) => void,
};