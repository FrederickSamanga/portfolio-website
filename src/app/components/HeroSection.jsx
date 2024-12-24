import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text center sm:test-left ">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">Hello, I am{""} </span>
                        Frederick
                    </h1>
                    <p className="text-gray-500 ttext-base sm:text-lg mb-6 lg:text-xl">
                        I am Java Developer with 5 years of experience.
                        I am also a full stack developer with experience in React, Node.js, and Express.js.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-500 via-orange-500 to-yellow-500 hover:bg-slate-200 text-white ">Hire Me</button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-500  via-orange-500 to-yellow-500 hover:bg-slate-800 text-white border border-white mt-3 ">Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src= "/images/hero-image.png"
                            alt="Hero Image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>  
        </section>
    );
};

export default HeroSection;