import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const VeiwDetails = () => {
    const { id } = useParams();

    const { data: chef = {} } = useQuery({
        queryKey: ['chefDetails'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/chefDetails/${id}`)
            const data = await res.json();
            return data;
        }
    });
    const { picture, name, experience, likes, recipes, description } = chef;
    console.log(picture, name)
    console.log(chef)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="chef" /></figure>
                <div className="card-body text-center">
                    <h2 className=" font-bold text-2xl text-center">{name}</h2>
                    <p className='font-bold text-sltae-700 text-lg'>Experiences : {experience} Years</p>
                    <p className='font-bold text-sltae-700 text-lg'>Number of Recipes : {recipes}</p>
                    <p className='font-bold text-sltae-700 text-lg'>Likes : {likes}</p>
                    <p className='font-bold text-sltae-700 text-lg'>About : {description}</p>
                </div>
            </div>

        </div>
    );
};

export default VeiwDetails;