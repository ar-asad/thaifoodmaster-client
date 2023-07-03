import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';
import LazyLoad from 'react-lazy-load';

const style = {
    fontFamily: 'Kalam, cursive'
};

const Navbar = () => {
    const { user, logOut } = useContext(AuthContex);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItem = <>

        <li><Link to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}>Home</Link></li>
        <li><Link to='/blog' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}>Blog</Link></li>
        {
            user?.uid ?
                <div className='flex items-center'>

                    <button className="btn btn-ghost lg:text-lg" onClick={handleLogOut}>Log out</button>
                </div>
                :
                <li><Link to='/login' className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>Login</Link></li>
        }
    </>
    return (
        // <div className="navbar fixed z-10 top-0 bg-transparent" >
        //     <div className="navbar-center" >
        //         <div className="dropdown" >
        //             <label tabIndex="0" className="btn btn-ghost lg:hidden" >
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg >
        //             </label >
        //             <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3  shadow bg-orange-200 rounded-box w-52 font-semibold " >
        //                 {menuItem}
        //             </ul >
        //         </div >
        //         {/* <Link className="btn btn-ghost normal-case text-3xl text-blue-500 "><span className='text-orange-500'>Thai </span>Foodmaster</Link > */}
        //         <div className=" hidden lg:flex" >
        //             <ul className="menu menu-horizontal p-0 font-semibold text-xl mr-8 flex items-center" >
        //                 {menuItem}
        //             </ul >
        //         </div >
        //     </div >

        // </div >
        <div className="navbar bg-black text-white opacity-90 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link style={style} className="btn btn-ghost normal-case text-xl text-blue-500 "><span className='text-orange-500'>Thai </span>Foodmaster</Link >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid && <li className='font-semibold list-none mr-4'>
                        <div title={user?.displayName} className="avatar">
                            <div className="w-12 h-12 rounded-full">
                                <LazyLoad>
                                    <img src={user?.photoURL} alt='' />
                                </LazyLoad>
                            </div>
                        </div>
                    </li>
                }
            </div>
        </div>
    );
};

export default Navbar;