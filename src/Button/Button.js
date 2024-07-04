import React from 'react';
import style from './Button.module.scss';

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={style.button}>
            {props.text}
        </button>
    )
};

export default Button;