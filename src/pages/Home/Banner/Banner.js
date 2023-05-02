import React from 'react';
import hero from '../../../assets/images/hero/hero.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-orange-100">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img src={hero} alt='' className="lg:w-1/2 rounded-lg shadow-" />
                <div>
                    <h1 className="text-6xl font-bold">The healthiest way to start your day</h1>
                    <p className="py-6 text-xl font-semibold mb-5">The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
                    <button className="btn bg-blue-500 border-0">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;