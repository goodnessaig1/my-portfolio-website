import React from 'react';
import { FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const Media = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <FaReact />
                    </span>
                    <span className="bannerIcon">
                        <SiTypescript />
                    </span>
                    <span className="bannerIcon">
                        <SiTailwindcss />
                    </span>
                    <span className="bannerIcon">
                        <IoLogoNodejs />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Media;
