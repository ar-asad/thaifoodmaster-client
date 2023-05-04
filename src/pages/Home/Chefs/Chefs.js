import { useQuery } from '@tanstack/react-query';
import Chef from './Chef';
import Loading from '../../../shared/Loading/Loading';

const Chefs = () => {

    const { data: chefs = [], isLoading } = useQuery({
        queryKey: ['chef'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/chef')
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div className='mt-24'>
            <div className='text-center w-2/4 mx-auto'>
                <h4 className='font-bold text-blue-500 text-lg'>Chefs</h4>
                <h1 className="text-5xl font-bold">Our Experts chef</h1>
                <p className="py-6">An executive chef is the highest-ranking chef in a restaurant or hotel. They are responsible for creating menus, managing the kitchen staff, and ensuring the quality and consistency of the food.  </p>

            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>

        </div>
    );

};

export default Chefs;