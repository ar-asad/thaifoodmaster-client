import React from 'react';
import { Link } from 'react-router-dom';
import { TbArrowRight } from "react-icons/tb";


const Chef = ({ chef }) => {
    const { picture, name, experience, likes, recipes, id } = chef;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title font-bold text-2xl ">{name}</h2>
                <p className='font-bold text-sltae-700 text-lg'>Experiences : {experience} Years</p>
                <p className='font-bold text-sltae-700 text-lg'>Number of Recipes : {recipes}</p>
                <p className='font-bold text-sltae-700 text-lg'>Likes : {likes}</p>
                <div className="card-actions justify-end">
                    <Link to={`/chefDetails/${id}`}>
                        <button className="btn btn-outline btn-primary">veiw recipe<TbArrowRight></TbArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;