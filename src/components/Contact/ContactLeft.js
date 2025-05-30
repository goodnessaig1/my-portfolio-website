import React from 'react';
import { contactImg } from '../../assets/index';

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">
                    Goodness Aigbokhan
                </h3>
                <p className="text-lg font-normal text-gray-400">
                    Full Stack Developer
                </p>
                <p className="text-base text-gray-400 tracking-wide">
                    Thank you for your interest in my full stack software
                    development services. We are excited to connect with you and
                    discuss how we can work together to bring your ideas to
                    life.
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Phone:{' '}
                    <span className="text-xs text-lightText">
                        +234 9113649045 | +234 8171446659
                    </span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email:{' '}
                    <span className="text-lightText">
                        <a href="mailto:goodness6337@gmail.com">
                            goodness6337@gmail.com
                        </a>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ContactLeft;
