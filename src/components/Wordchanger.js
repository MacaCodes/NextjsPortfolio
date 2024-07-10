"use client";

import React, { useState, useEffect, useRef } from 'react';

const wordArray = ['Full-Stack Developer', 'ex-Recruiter', 'Designer', 'Data Lover.'];

const WordChanger = () => {
    const [currWord, setCurrWord] = useState(wordArray[0]);
    const index = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            index.current = (index.current + 1) % wordArray.length;
            setCurrWord(wordArray[index.current]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className="text-4xl font-bold">
            {currWord}
        </span>
    );
};

export default WordChanger;
