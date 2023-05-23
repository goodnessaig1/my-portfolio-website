import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            {/* part one */}
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">
                        2019 - Present
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Education
                    </h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="BSc in Industrial Production Engineering. In progress"
                        subTitle="Nnamdi Azikiwe University, awka(2019 - Present)"
                    />

                    <ResumeCard
                        title="Back End Development and APIs"
                        subTitle="FreeCodeCamp.org - (2022)"
                    />
                </div>
            </div>
            {/* part Two */}

            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">
                        2021 - 2022
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Certifications
                    </h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Responsive Web Development"
                        subTitle="FreeCodeCamp.org - (2021)"
                    />
                    <ResumeCard
                        title="JavaScript Algorithms and Data Structures"
                        subTitle="FreeCodeCamp.org - (2021)"
                    />
                    <ResumeCard
                        title="Front-end Development Libaries"
                        subTitle="FreeCodeCamp.org - (2021-2022)"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
