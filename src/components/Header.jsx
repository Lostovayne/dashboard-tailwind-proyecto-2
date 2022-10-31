import React from 'react';

// ICONS
import { RiSearch2Line } from 'react-icons/ri';

const Header = () => {
    return (
        <header className='flex flex-col md:flex-row items-center justify-between gap-4'>
            
            <h1 className=' text-2xl  md:text-3xl font-bold text-primary-700' >Good morning,<span className='text-primary-800'> Franko</span></h1>
            
            <form className='w-full md:w-auto' >
                <div className='relative' >
                    <RiSearch2Line className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 ' />
                    <input type='text' className='bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-xl w-full  md:w-auto ' placeholder='Search for projects' />
                </div>
            </form>
            
        </header>
    );
};

export default Header;
