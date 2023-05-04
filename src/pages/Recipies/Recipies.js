import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Recipe from '../Recipe/Recipe';
import Loading from '../../shared/Loading/Loading';

const Recipies = ({ id }) => {
    const { data: recipes = [], isLoading } = useQuery({
        queryKey: ['recipes'],
        queryFn: async () => {
            const res = await fetch(`https://recipe-hunter-server1-arasad1.vercel.app/recipes/${id}`)
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <div className='mt-24'>
                <div className='text-center w-2/4 mx-auto'>
                    <h4 className='font-bold text-blue-500 text-lg'>Recipes</h4>
                    <h1 className="text-5xl font-bold mb-6">My Recipes</h1>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Recipies;




































