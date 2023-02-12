import React from 'react';
import { KeyProps } from '../../../store/types/types';
import classes from './KeyboardKey.module.css';

const KeyboardKey: React.FC<KeyProps> = (props) => {

    const { nameK } = props;

    return <div className={classes.key}>
        {nameK}
    </div>
}

export default KeyboardKey;