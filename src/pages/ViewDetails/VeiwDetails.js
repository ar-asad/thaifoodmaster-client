import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Recipies from '../Recipies/Recipies';

const VeiwDetails = () => {
    const { id } = useParams();

    const { data: chef = {} } = useQuery({
        queryKey: ['chefDetails'],
        queryFn: async () => {
            const res = await fetch(`https://recipe-hunter-server1-arasad1.vercel.app/chefDetails/${id}`)
            const data = await res.json();
            return data;
        }
    });
    const { picture, name, experience, likes, recipes, description } = chef;

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${picture})` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-slate-50">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                        <p className='font-bold text-sltae-700 text-lg mb-3'>Experiences : {experience} Years</p>
                        <p className='font-bold text-sltae-700 text-lg mb-3'>Number of Recipes : {recipes}</p>
                        <p className='font-bold text-sltae-700 text-lg mb-3'>Likes : {likes}</p>
                        <p className='font-semibold text-sltae-700 text-lg'>About : {description}</p>
                    </div>
                </div>
            </div>

            {/* Every chefs recipe showing */}
            <Recipies id={id}></Recipies>

        </div>
    );
};

export default VeiwDetails;