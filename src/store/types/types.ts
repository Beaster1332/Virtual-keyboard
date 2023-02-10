export type Action = {
    type: string,
    [key: string]: any,
};

export interface InitialState {
    keysRu: string[],
    keysEng: string[]
};