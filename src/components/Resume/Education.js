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
                        2019 - 2023
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Education Quality
                    </h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="BSc in Industrial Production Engineering. In progress"
                        subTitle="Nnamdi Azikiwe University, awka(2019 - 2023)"
                        result="4.26/5"
                        des="Faculty of engineering('Industrial Production Engineering') The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    />
                    <ResumeCard
                        title="Secondary School Education"
                        subTitle="Bethel Faith Group of School (2012 - 2018)"
                        result="5.00/5"
                        des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                    <ResumeCard
                        title="Back End Development and APIs"
                        subTitle="FreeCodeCamp.org - (2022)"
                        result="Remote"
                        des="By completing this course, learners will have the skills and knowledge to develop backend applications and APIs that can interact with various frontend frameworks and provide seamless user experiences.The curriculum covers topics such as routing, middleware, authentication, and data validation, enabling learners to create secure and user-friendly APIs."
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
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Responsive Web Development"
                        subTitle="FreeCodeCamp.org - (2021)"
                        result="Remote"
                        des="FreeCodeCamp Responsive Web Design provides learners with the skills and knowledge needed to create modern, user-friendly websites that adapt to the ever-evolving digital landscape. By mastering responsive design techniques, students become proficient in crafting engaging web experiences that can be accessed by users across a wide range of devices."
                    />
                    <ResumeCard
                        title="JavaScript Algorithms and Data Structures"
                        subTitle="FreeCodeCamp.org - (2021)"
                        result="Remote"
                        des="By completing the JavaScript Algorithms and Data Structures curriculum on FreeCodeCamp, I gained a solid foundation in JavaScript programming and enhance my problem-solving capabilities. This knowledge equips them with essential skills for developing efficient and optimized algorithms and utilizing appropriate data structures to solve complex problems."
                    />
                    <ResumeCard
                        title="Front-end Development Libaries"
                        subTitle="FreeCodeCamp.org - (2021-2022)"
                        result="Remote"
                        des="By completing the FreeCodeCamp Front End Development Libraries curriculum, I gained practical experience in using these popular tools like React, Redux, Sass, and Bootstrap and libraries, equipping Me with the skills needed to create professional and engaging web applications."
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Education;
