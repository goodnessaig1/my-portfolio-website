/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['Professional Developer.', 'Full Stack Developer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20 sm:h-screen">
            <div className="flex flex-col gap-5">
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm{' '}
                    <span className="text-cMain capitalize">
                        Goodness Aigbokhan
                    </span>
                </h1>
                <h2 className="sm:h-24 sml:h-24 lg:h-6 text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="rgb(37, 243, 236)"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    With 4+ years of experience building and designing software.
                    Currently, I love to work on web applications using
                    technologies like React, React Native, TypeScript, Next JS,
                    CSS, Tailwind, Node JS, MongoDB, PostgreSQL.
                </p>
            </div>
            <Media />
        </div>
    );
};

export default LeftBanner;
