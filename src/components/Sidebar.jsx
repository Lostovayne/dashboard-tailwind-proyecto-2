import React, { useState } from 'react';
// ICONS
import {
    RiHome5Line,
    RiFileCopyLine,
    RiWalletLine,
    RiPieChart2Line,
    RiMore2Fill,
    RiCloseFill,
} from 'react-icons/ri';

export const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div
                className={`bg-primary-900 h-full overflow-y-scroll fixed lg:static w-[80%] md:w-[40%] transition-all duration-200 lg:w-full z-50
                 ${showMenu ? 'left-0' : '-left-full'} `}>
                {/* PROFILE */}
                <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30vh]'>
                    <img
                        src='https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        alt=''
                        className='h-20 w-20 object-cover rounded-full ring-2 ring-gray-300 '
                    />
                    <h1 className=' text-xl text-blanco font-bold '>
                        Franko Barrera
                    </h1>
                    <p className='bg-primary-700 py-1 px-3 rounded-full text-blanco '>
                        Pro Level
                    </p>
                </div>

                {/* NAV */}

                <div className='bg-primary-800 p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll flex  flex-col justify-between gap-8'>
                    <nav className='flex flex-col gap-8'>
                        <a
                            href='#'
                            className='text-blanco flex items-center gap-4  py-2 px-4 rounded-lg hover:bg-primary-900/50 transition-colors'>
                            <RiHome5Line />
                            Home
                        </a>

                        <a
                            href='#'
                            className='text-blanco flex items-center gap-4  py-2 px-4 rounded-lg hover:bg-primary-900/50 transition-colors'>
                            <RiFileCopyLine />
                            Proyects
                        </a>

                        <a
                            href='#'
                            className='text-blanco flex items-center gap-4  py-2 px-4 rounded-lg hover:bg-primary-900/50 transition-colors'>
                            <RiWalletLine />
                            Invoices
                        </a>

                        <a
                            href='#'
                            className='text-blanco flex items-center gap-4  py-2 px-4 rounded-lg hover:bg-primary-900/50 transition-colors'>
                            <RiPieChart2Line />
                            Reports
                        </a>
                    </nav>

                    <div className='bg-primary-900/50 text-blanco p-4 rounded-xl  '>
                        <p className='text-gray-400'>Having Troules</p>
                        <a href='#'>Contact us</a>
                    </div>
                </div>
            </div>

            {/* Button movile */}

            <button
                onClick={() => setShowMenu(!showMenu)}
                className=' lg:hidden fixed bottom-4 right-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50'>
                {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
            </button>
        </>
    );
};
