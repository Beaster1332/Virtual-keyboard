import React from 'react';
import { KeyProps } from '../../../store/types/types';
import classes from './KeyboardKey.module.css';

const KeyboardKey: React.FC<KeyProps> = (props) => {

    const { nameK, enterKey } = props;

    return <div onClick={() => enterKey(nameK)} className={classes.key}>
        {nameK}
    </div>
}

export default KeyboardKey;