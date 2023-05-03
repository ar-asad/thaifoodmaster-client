import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import FoodDelivery from '../../FoodDelivery/FoodDelivery';
import FeatureIn from '../FeatureIn/FeatureIn';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <FoodDelivery></FoodDelivery>
            <FeatureIn></FeatureIn>
        </div>
    );
};

export default Home;