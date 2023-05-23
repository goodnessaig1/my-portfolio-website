/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Slider from 'react-slick';
import { RiStarFill } from 'react-icons/ri';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Title from '../Layouts/Title';
import { quote } from '../../assets';
import mentor from '../../assets/images/testmonial/mentor.png';
import esosa from '../../assets/images/testmonial/esosa.png';
import gideon from '../../assets/images/gideon.png';
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        >
            <HiArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        >
            <HiArrowLeft />
        </div>
    );
}

const Testimonial = () => {
    const [dotActive, setDocActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (prev, next) => {
            setDocActive(next);
        },
        appendDots: (dots) => (
            <div
                style={{
                    borderRadius: '10px',
                    padding: '10px',
                }}
            >
                <ul
                    style={{
                        display: 'flex',
                        gap: '15px',
                        justifyContent: 'center',
                        marginTop: '20px',
                    }}
                >
                    {' '}
                    {dots}{' '}
                </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={
                    i === dotActive
                        ? {
                              width: '12px',
                              height: '12px',
                              color: 'blue',
                              background: 'rgb(37, 243, 236)',
                              borderRadius: '50%',
                              cursor: 'pointer',
                          }
                        : {
                              width: '12px',
                              height: '12px',
                              color: 'blue',
                              background: 'gray',
                              borderRadius: '50%',
                              cursor: 'pointer',
                          }
                }
            ></div>
        ),
    };
    return (
        <section
            id="testimonial"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title title="WHAT CLIENTS SAY" des="Testimonial" />
            </div>
            <div className="max-w-6xl mx-auto">
                {/* ================ Slider One ================== */}
                <Slider {...settings}>
                    <div className="w-full">
                        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                            <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                                <img
                                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                                    src={mentor}
                                    alt="testimonialOne"
                                />
                                <div className="w-full flex flex-col justify-end">
                                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                                        Clerax Tech
                                    </p>
                                    <h3 className="text-2xl font-bold">
                                        Courage Osemwengie
                                    </h3>
                                    <p className="text-base tracking-wide text-gray-500">
                                        Chief Technology Officer
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                                <img
                                    className="w-20 lgl:w-32"
                                    src={quote}
                                    alt="quote"
                                />
                                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                                        <div>
                                            <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                                                Staffconn Web & Mobile.
                                            </h3>
                                            <p className="text-base text-gray-400 mt-3">
                                                2022 - March
                                            </p>
                                        </div>
                                        <div className="text-yellow-500 flex gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                        Goodness Aigbokhan is one of my most
                                        hard working students i have mentored.
                                        He alsway wants to solve problems and
                                        with the best code practices. He dosen't
                                        believe in impossibilities with code. I
                                        love the energy he puts into Coding
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ================ Slider Two ================== */}

                    <div className="w-full">
                        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                            <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                                <img
                                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                                    src={esosa}
                                    alt="testimonialTwo"
                                />
                                <div className="w-full flex flex-col justify-end">
                                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                                        UI/UX Designer
                                    </p>
                                    <h3 className="text-2xl font-bold">
                                        Esosa Odia
                                    </h3>
                                    <p className="text-base tracking-wide text-gray-500">
                                        Design Officer
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                                <img
                                    className="w-20 lgl:w-32"
                                    src={quote}
                                    alt="quote"
                                />
                                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                                        <div>
                                            <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                                                Staffconn Web & Mobile.
                                            </h3>
                                            <p className="text-base text-gray-400 mt-3">
                                                via Upwork - Mar 4, 2022 - april
                                                30, 2023 test
                                            </p>
                                        </div>
                                        <div className="text-yellow-500 flex gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                        Goodness Aigbokhan is a very briliant
                                        young man who always seeks the best
                                        means to improve in all he does. From
                                        this project @staffconn we worked
                                        together, i can say that his Front -end
                                        skill is super Great
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ================ Slider Three ================== */}

                    <div className="w-full">
                        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                            <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                                <img
                                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                                    src={gideon}
                                    alt="testimonialOne"
                                />
                                <div className="w-full flex flex-col justify-end">
                                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                                        Bound - Trolola
                                    </p>
                                    <h3 className="text-2xl font-bold">
                                        Gideon Aigbokhan
                                    </h3>
                                    <p className="text-base tracking-wide text-gray-500">
                                        UI/UX Designer
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                                <img
                                    className="w-20 lgl:w-32"
                                    src={quote}
                                    alt="quote"
                                />
                                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                                        <div>
                                            <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                                                Travel Mobile App Design.
                                            </h3>
                                            <p className="text-base text-gray-400 mt-3">
                                                via Upwork - Mar 4, 2021 - Aug
                                                30, 2023 test
                                            </p>
                                        </div>
                                        <div className="text-yellow-500 flex gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                        Goodness Aigbokhan is my brother. If
                                        there's one thing i love about him is
                                        his zeal and passion to solve problems.
                                        Goodness believe that "Theres no problem
                                        that's unsolvable, as far as you can
                                        determine the problem, you will
                                        definatly get a solution".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;
