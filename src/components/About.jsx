import React from 'react';
import ServiceCard from './ServiceCard';
import { MdOutlineRoomService } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";

function About() {

    return (
        <div className='w-11/12 pt-5 mx-auto' id='about'>
            <div className="container mx-auto flex items-center">
                <div className="flex flex-col items-center md:justify-evenly md:flex-row md:space-x-8 w-full">
                    <div className="w-full lg:w-1/3">
                        <img
                            src="/about.png"
                            alt="About Us"
                            className="rounded-lg shadow-md mx-auto w-full object-contain md:w-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <h2 className="text-4xl text-orange-600 font-bold mb-4">About Us</h2>
                        <p className="text-lg text-black/50 font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
                            vestibulum dolor. Praesent congue odio at tristique viverra. Ut
                            rhoncus ligula in sapien consequat, at volutpat libero molestie.
                            Vestibulum convallis, nulla nec dignissim tincidunt, ipsum elit
                            vestibulum elit, nec tempus orci lectus nec ligula. Sed cursus
                            malesuada facilisis. Fusce rhoncus faucibus fringilla.
                        </p>
                        
                        <div className="flex justify-evenly gap-5 mt-8 overflow-x-auto">
                            <ServiceCard icon={<IoFastFoodOutline />} service={'Quality Food'} />
                            <ServiceCard icon={<LuChefHat />} service={'Profesional Chef'} />
                            <ServiceCard icon={<MdOutlineRoomService />} service={'Good Service'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;