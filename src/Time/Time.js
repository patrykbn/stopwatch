import React from 'react';
import style from './Time.module.scss';

const Time = (props) => {
    const formatTime = (time) => {
        const milliseconds = time % 1000;
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000*60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds
            .toString()
            .padStart(3, '0')}`;
    };

    return (
    <div className={style.time}>
        {formatTime(props.time)}
    </div>
    )
};

export default Time;