import React from 'react';
import KeyboardKey from './KeyboardKey/KeyboardKey';
import { KeyboardProps } from '../../store/types/types';
import classes from './Keyboard.module.css';

const Keyboard: React.FC<KeyboardProps> = (props) => {

    const {
        textInput,
        keysRu,
        keysEng,
        ruKeyboard,
        changeLanguage,
        enterKey,
        spaceClick,
        backSpaceClick,
        clearTextInput
    } = props;

    const ruKeysItems = keysRu.map((k: string) => <KeyboardKey key={k} nameK={k} enterKey={enterKey} />);
    const engKeysItems = keysEng.map((k: string) => <KeyboardKey key={k} nameK={k} enterKey={enterKey} />);

    return <div className={classes.keyboardContainer}>
        <div className={classes.textInputContainer}>
            {textInput}
        </div>
        <div className={classes.keyboard}>
            {ruKeyboard ?
                ruKeysItems :
                engKeysItems}
            <button className={classes.changeLangBtn} onClick={() => backSpaceClick()}>Backspace</button>
        </div>
        <div>
            <div onClick={() => spaceClick()} className={classes.spaceBtn}></div>
            <button className={classes.changeLangBtn} onClick={() => changeLanguage()}>Сменить язык</button>
            <button className={classes.changeLangBtn} onClick={() => clearTextInput()}>Очистить</button>
        </div>
    </div>
}

export default Keyboard;