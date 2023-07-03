import React from 'react';
import hero from '../../../assets/images/hero/hero.jpg'

const Banner = () => {
    return (
        // <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero})` }}>
        //     <div className="hero-overlay bg-opacity-30"></div>
        //     <div className=" flex text-neutral-content">
        //         <div className="max-w-full px-3">
        //             <div className='w-1/2'>
        //                 <p className='uppercase text-green-500 font-bold tracking-widest text-xl mb-5 '>Welcome to AutoMotive !</p>
        //                 <h1 className="mb-5 lg:text-6xl text-4xl font-bold">Incridible and delicious healthy thai food</h1>
        //                 <p className="mb-8 text-lg">Cartime is a prestige used car supermarket specialising in quality toy cars. We offer a friendly and efficient service in buying and selling.</p>
        //                 <button className="btn border-0 btn-success mr-6 mb-2 text-gray-100 bg-green-500 rounded">Get Started &rarr;</button>
        //                 <button className="btn border-0 bg-gray-100 text-green-500 rounded">About More &rarr;</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="hero min-h-screen" style={{ backgroundImage: `url(${hero})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Incridible and delicious healthy thai food</h1>
                    <p className="mb-5">Thai cuisine is known for its vibrant flavors, aromatic herbs, and balanced combination of sweet, sour, salty, and spicy elements</p>
                    <button className="btn bg-blue-500 border-0">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;