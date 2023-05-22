import React from 'react';
// import { bannerImg } from '../../assets/index';
import profile from '../../assets/images/profile.jpg';
const RightBanner = () => {
    return (
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
            {/* <img
                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
                src={bannerImg}
                alt="bannerImg"
            /> */}
            <div className="relative bottom-0 w-[350px] h-[300px]  lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">
                <div className=" relative flex bg-gradient-to-r from-gray-500 to-black-500 mix-blend-overlay justify-center items-center parent w-full h-full ">
                    <img
                        src={profile}
                        className="relative inset-0 w-4/5 h-85 object-cover child w-9/10 h-9/10"
                        alt="profile"
                    />
                </div>
            </div>
        </div>
    );
};

export default RightBanner;
