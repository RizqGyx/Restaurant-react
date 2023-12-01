import React from 'react';

function About() {
    return (
        <div className='w-11/12 pt-5 mx-auto' id='about'>
            <div className="container mx-auto p-8 flex items-center">
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="w-full md:w-1/3">
                        <img
                            src="https://via.placeholder.com/300"
                            alt="About Us"
                            className="rounded-lg shadow-md mx-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <h2 className="text-4xl text-orange-600 font-bold mb-4">About Us</h2>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
                            vestibulum dolor. Praesent congue odio at tristique viverra. Ut
                            rhoncus ligula in sapien consequat, at volutpat libero molestie.
                            Vestibulum convallis, nulla nec dignissim tincidunt, ipsum elit
                            vestibulum elit, nec tempus orci lectus nec ligula. Sed cursus
                            malesuada facilisis. Fusce rhoncus faucibus fringilla.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;