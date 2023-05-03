import React from 'react';
import deliveryImg from '../../assets/images/hero/delivery2.jpg';
const FoodDelivery = () => {
    return (
        <div className="hero lg:my-36 bg-base-100">
            <div className="hero-content lg:gap-28 flex-col lg:flex-row ">
                <img src={deliveryImg} alt='deliver img' className="max-w-sm w-full rounded-lg shadow-sm" />
                <div>
                    <h4 className='font-bold text-blue-500 text-lg mb-4'>Food Delivery</h4>
                    <h1 className="text-5xl font-bold">Best Service to fulfill <br /> your expectations</h1>
                    <p className="py-6">It's not just about bringing you good food from your favourite . Its about making a good connection</p>
                    <button className="btn bg-blue-500 border-0">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default FoodDelivery;