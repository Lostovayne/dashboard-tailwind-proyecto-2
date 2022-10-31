// import { IconName } from 'react-icons/ri';
import Header from './components/Header';
import { Sidebar } from './components/Sidebar';

import { RiLineChartLine, RiHashtag } from 'react-icons/ri';

function App() {
    return (
        <div className='grid lg:grid-cols-4   xl:grid-cols-6 min-h-screen'>
            <Sidebar />
            <main className='lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll  '>
                <Header />

                {/* SECTION ONE */}
                <section className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 mt-10 '>
                    {/* CARD 1 */}

                    <div className='bg-primary-800 p-8 rounded-xl text-gray-200 flex flex-col gap-5'>
                        <RiLineChartLine className='text-7xl' />
                        <h4 className='text-2xl'>Earnings</h4>

                        <span className='text-5xl text-blanco'>
                            &euro; 8,350
                        </span>

                        <span className='py-1 px-3 bg-primary-900/40 rounded-full '>
                            + 10% since last month
                        </span>
                    </div>

                    {/* CARD 2 */}
                    <div className='p-4 bg-blanco rounded-xl flex flex-col justify-between gap-4 shadow-lg '>
                        <div className='flex gap-4 items-center bg-primary-700/10 p-4 rounded-xl'>
                            <span className=' bg-primary-800 text-2xl text-blanco font-bold p-4 rounded-xl  '>
                                98
                            </span>
                            <div>
                                <h3 className='font-bold'>Rank</h3>
                                <p className='text-gray-500'>In top 30%</p>
                            </div>
                        </div>

                        <div className=' bg-primary-700/10 p-4 rounded-xl'>
                            <div className='flex gap-4 items-center mb-4'>
                                <span className=' bg-primary-800 text-2xl text-blanco font-bold p-4 rounded-xl  '>
                                    32
                                </span>
                                <div>
                                    <h3 className='font-bold'>Projects</h3>
                                    <p className='text-gray-500'>
                                        8 this month
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2 text-gray-500 '>
                                <span className='bg-primary-700/20 px-4 py-2 text-sm rounded-full '>
                                    Mobile App
                                </span>
                                <span className='bg-primary-700/20 px-4 py-2 text-sm rounded-full '>
                                    Branding
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3 */}

                    <div className='col-span-1 md:col-span-2 flex flex-col justify-between'>
                        <h1 className='text-2xl font-bold mb-8'>
                            Your Projects
                        </h1>

                        <div className='bg-white p-8 rounded-xl shadow-lg  '>
                            <div className='flex items-center gap-4 mb-8'>
                                <img
                                    src='https://cdn.pixabay.com/photo/2016/12/28/08/15/hummingbird-1935665_960_720.png'
                                    className='w-14 h-14 object-cover rounded-full'
                                />

                                <div>
                                    <h3 className='font-bold'>
                                        Logo Design for Bakery
                                    </h3>
                                    <p className='text-gray-500'>
                                        1 day remaining
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-center gap-4 mb-4 '>
                                <img
                                    src='https://cdn.pixabay.com/photo/2016/10/23/06/04/google-1762248_960_720.png'
                                    className='w-14 h-14 object-cover rounded-full'
                                />

                                <div>
                                    <h3 className='font-bold'>
                                        Logo Design for Bakery
                                    </h3>
                                    <p className='text-gray-500'>
                                        1 day remaining
                                    </p>
                                </div>
                            </div>

                            <div className='flex justify-end'>
                                <a
                                    href='#'
                                    className='text-gray-500 hover:text-primary-600 transition-colors  '>
                                    See all projects{' '}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION TWO  */}

                <section className='grid grid-cols-1 gap-8 md:grid-cols-2 mt-10'>
                    {/* PARTE 1*/}

                    <div>
                        <h1 className='text-2xl font-bold mb-8'>
                            {' '}
                            Recent invoices
                        </h1>
                        <div className='bg-white p-8 rounded-xl shadow-lg mb-8 flex flex-col gap-8 '>
                           
                           {/* CARD 1 */}
                            <div className='flex flex-col lg:flex-row  lg:items-center lg:justify-between gap-4 mb-4'>
                                <div className='flex items-center gap-4 '>
                                    <img
                                        src='https://cdn.pixabay.com/photo/2016/11/29/06/46/adult-1867889_960_720.jpg'
                                        alt=''
                                        className='w-14 h-14 object-cover rounded-xl '
                                    />
                                    <div>
                                        <h3 className='font-bold'>
                                            Alexander Williams
                                        </h3>
                                        <p className='text-gray-500'>
                                            JQ Holdings
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between gap-4 '>
                                    <span className='bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium '>
                                        Paid
                                    </span>
                                    <span className='font-bold'>
                                        &euro; 1,200.87
                                    </span>
                                </div>
                            </div>

                            {/* CARD 2 */}

                            <div className='flex flex-col lg:flex-row  lg:items-center lg:justify-between gap-4 mb-4'>
                                <div className='flex items-center gap-4 '>
                                    <img
                                        src='https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg'
                                        alt=''
                                        className='w-14 h-14 object-cover rounded-xl '
                                    />
                                    <div>
                                        <h3 className='font-bold'>
                                            Jhon Philips
                                        </h3>
                                        <p className='text-gray-500'>
                                            Inchor Techs
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between gap-4'>
                                    <span className='bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium '>
                                        Late
                                    </span>
                                    <span className='font-bold'>
                                        &euro; 12,998.88
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ULTIMO COMPONENTE */}

                        <div className='bg-primary-900 text-gray-300 p-8 rounded-xl shadow-lg flex items-center justify-between flex-wrap gap-8 xl:flex-nowrap '>
                            <div>
                                <RiHashtag className='text-4xl -rotate-45' />
                            </div>

                            <div>
                                <h5 className='font-bold text-white'>
                                    Engage with Clients
                                </h5>
                                <h5> Join slack channel </h5>
                            </div>

                            <div className='w-full xl:w-auto ' >
                                <button className='bg-primary-700 py-2 px-6 rounded-xl text-white w-full '>
                                    Join Now
                                </button>
                                
                            </div>
                        </div>
                    </div>

                    {/* PARTE 2*/}

                    <div>
                        <h1 className='text-2xl font-bold mb-8'>
                            {' '}
                            Recommended project
                        </h1>

                        <div className='bg-white p-8 rounded-xl shadow-lg mb-8 flex flex-col gap-4'>
                            {/* div1 */}
                            <div className='flex items-center justify-between gap-4'>
                                <div className='flex items-center gap-4'>
                                    <img
                                        src='https://cdn.pixabay.com/photo/2016/12/28/08/15/hummingbird-1935665_960_720.png'
                                        className='w-14 h-14 object-cover rounded-full'
                                    />
                                    <div>
                                        <h3 className='font-bold'>
                                            Thomas Martin
                                        </h3>
                                        <p className='text-gray-500'>
                                            Updated 10m ago
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <span className='bg-primary-700 py-2 px-4 rounded-full text-blanco'>
                                        Design
                                    </span>
                                </div>
                            </div>
                            {/* div2                           */}
                            <div>
                                <h5 className='text-lg font-bold'>
                                    Need a design to form branding essencials
                                    for my business
                                </h5>
                                <p className='text-gray-500'>
                                    Looking for a talent brand designer to
                                    create all the branding materials m new
                                    startup
                                </p>
                            </div>

                            <div className='bg-primary-600/10 flex items-center justify-between gap-4 py-8 px-4 rounded-lg'>
                                <div>
                                    <sup className='text-sm text-gray-500'>
                                        {' '}
                                        &euro;
                                    </sup>{' '}
                                    {''}
                                    <span className='text-2xl font-bold mr-2'>
                                        8,700
                                    </span>
                                    <span className='text-sm text-gray-500'>
                                        /month
                                    </span>
                                </div>

                                <div>
                                    <span className='border border-primary-600 text-primary-600 py-2 px-4 rounded-full'>
                                        Full time
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
