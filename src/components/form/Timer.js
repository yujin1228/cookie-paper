import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Timer(props) {
    const [time, setTime] = useState(600);


    const timeFormat = (time) => {
        const m = Math.floor(time / 60).toString();
        let s = (time % 60).toString();
        if (s.length === 1) s = `0${s}`
        return `${m}:${s}`
    }

    useEffect(()=>{
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        },1000);

        if (time <= 0) {
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.');
        }

        return () => {
            clearInterval(timer);
        };
    });

    return(
        <CodeTimer>
            {timeFormat(time)}
        </CodeTimer>
    );
}

const CodeTimer = styled.span`
    font-family: var(--basic-font);
    font-size: 12px;
    color: var(--black);

    display: inline-block;
    margin-left: 8px;
    transform: translateY(-1px);
`;