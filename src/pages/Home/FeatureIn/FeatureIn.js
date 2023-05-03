import React from 'react';
import feature1 from '../../../assets/images/logos/business-insider.png'
import feature2 from '../../../assets/images/logos/forbes.png'
import feature3 from '../../../assets/images/logos/techcrunch.png'
import feature4 from '../../../assets/images/logos/the-new-york-times.png'
import feature5 from '../../../assets/images/logos/usa-today.png'

const logos = [
    feature1, feature2, feature3, feature4, feature5
]

const FeatureIn = () => {
    return (
        <div className='mb-32'>
            <h4 className='font-bold text-blue-500 text-lg text-center m-16'>As Feature In</h4>
            <div className='grid lg:grid-cols-5 grid-cols-3 gap-10 px-5'>
                {
                    logos.map((logo, i) => <div key={i}><img src={logo} alt=''></img></div>)
                }
            </div>
        </div>
    );
};

export default FeatureIn;