import React from 'react';
import KeyboardKey from './KeyboardKey/KeyboardKey';
import { KeyboardProps } from '../../store/types/types';
import classes from './Keyboard.module.css';

const Keyboard: React.FC<KeyboardProps> = (props) => {

    const { keysRu, keysEng, ruKeyboard, changeLanguage } = props;

    const ruKeysItems = keysRu.map((k: string) => <KeyboardKey key={k} nameK={k} />);
    const engKeysItems = keysEng.map((k: string) => <KeyboardKey key={k} nameK={k} />);

    return <div className={classes.keyboardContainer}>
        {ruKeyboard ?
            ruKeysItems :
            engKeysItems}
        <button className={classes.changeLangBtn} onClick={() => changeLanguage()}>Сменить язык</button>
    </div>
}

export default Keyboard;