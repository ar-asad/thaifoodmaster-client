import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { TbArrowRight } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false);

    const { image, ingredients, method, name, rating, } = recipe;

    const handleChoiceFavorites = () => {
        toast.success('The recipe is my favorite');
        setFavorite(true);
    }
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title font-bold text-2xl ">{name}</h2>
                <p className='font-bold text-sltae-600 '>Cooking Method : {method} Years</p>
                <p className='font-bold text-sltae-600 text-lg'>Ingredients : {ingredients.map((ing, i) => <li className=' font-normal' key={i} > {ing}</li>)}</p>
                <p className='font-bold text-sltae-600 text-lg'>Rating : {rating}</p>
                <div className="card-actions justify-end">
                    <Link>
                        <button onClick={handleChoiceFavorites} disabled={favorite} className="btn btn-outline btn-primary">Favorite<TbArrowRight></TbArrowRight></button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Recipe;