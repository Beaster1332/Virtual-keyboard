export type Action = {
    type: string,
    [key: string]: any,
};

export interface InitialState {
    keysRu: string[],
    keysEng: string[],
    ruKeyboard: boolean
};

export enum KeyboardTypeActions {
    CHANGE_KEYBOARD = 'keyboard/CHANGE_KEYBOARD',
};

export type KeyboardProps = {
    keysRu: string[],
    keysEng: string[],
    ruKeyboard: boolean,
    changeLanguage: () => void
};

export type KeyProps = {
    nameK: string
};