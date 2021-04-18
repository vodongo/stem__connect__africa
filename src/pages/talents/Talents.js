import React, { useState } from 'react'
import Header from '../../components/parts/header/Header'
import Footer from '../../components/parts/footer/Footer'
import TalentList from '../../components/talents/TalentList'

function Talents() {
    // eslint-disable-next-line no-unused-vars
    const [rating, setRating] = useState([1, 2, 3, 4, 5])
    const [show__filter, setFilter] = useState(false)
    

    // handle menu function
    function handle__show__filter() {
        if (show__filter === true) {
            setFilter(false)
        } else if (show__filter === false) {
            setFilter(true)
        }
    }
    return (
        <div className="bg-gray-100">
            <Header />
            <header className="bg-white shadow">
                <div className="max-w-6xl mx-auto py-8 px-6 xl:px-0">
                    <h1 className="text-lg text-gray-900 flex items-center gap-x-2">
                        Stem Connect Africa <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg> Talents
                    </h1>
                </div>
            </header>
            <div className="min-h-screen max-w-6xl mx-auto py-16 px-6 xl:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                    <div className="lg:col-span-4 bg-white pt-3 w-full shadow space-y-4 lg:hidden ">
                        <div className="flex items-center justify-between px-6">
                            <div className="text-lg font-medium">Search filter</div>
                            <div className="flex items-center gap-2">
                                <button className="text-blue-600 text-sm font-medium">Clear all</button>
                                <button className="focus:outline-none" onClick={handle__show__filter}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            {show__filter ? (
                                <div className="px-6 py-4 space-y-4 border-gray-300 border-t">
                                    <div className="col-span-3 sm:col-span-2">
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input type="text" name="search__filter" id="search__filer" className="py-3 focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-l sm:text-sm border-gray-300" placeholder="Search Talent">
                                            </input>
                                            <span className="inline-flex items-center px-3 bg-blue-700 text-white text-sm rounded-r">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="talent__category" className="block font-medium text-gray-700">
                                            Category
                                </label>
                                        <select id="talent__category" name="talent__category" autoComplete="talent__category" className="mt-1 block w-full py-3 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                            <option>Science</option>
                                            <option>Technology</option>
                                            <option>Engineering</option>
                                            <option>Mathematics</option>
                                        </select>
                                    </div>
                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="talent__country" className="block font-medium text-gray-700">
                                            Countries
                                </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input type="text" name="talent__country" id="talent__country" className="py-3 focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded sm:text-sm border-gray-300">
                                            </input>
                                        </div>
                                    </div>
                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="talent__country" className="block font-medium text-gray-700">
                                            Rate (USD)
                                </label>
                                        <select id="talent__rate" name="talent__rate" autoComplete="talent__rate" className="mt-1 block w-full py-3 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                            <option>0 - 10 USD</option>
                                            <option>10 - 30 USD</option>
                                            <option>20 - 50 USD</option>
                                            <option>50 and above</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="talent__country" className="block mb-2 font-medium text-gray-700">
                                            Ratings
                            </label>
                                        <div className="flex">
                                            {
                                                rating.map((n) => (
                                                    <div key={n}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                        </svg>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center h-5">
                                            <label htmlFor="email-preference" className="text-black font-medium">Online</label>
                                        </div>
                                        <div className="text-sm flex items-center">
                                            <input id="candidates" name="candidates" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                                            </input>
                                            <p className="text-gray-500 ml-2">Online talents only</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (null)}
                        </div>
                    </div>
                    <div className="lg:col-span-4 bg-white pt-3 w-full rounded-md shadow space-y-4 hidden lg:block" style={{ height: '600px' }}>
                        <div className="flex items-center justify-between px-6">
                            <div className="text-lg font-medium">Search filter</div>
                            <div className="flex items-center gap-2">
                                <button className="text-blue-600 text-sm font-medium">Clear all</button>
                            </div>
                        </div>
                        <div>
                            <div className="px-6 py-4 space-y-4 border-gray-300 border-t">
                                <div className="col-span-3 sm:col-span-2">
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" name="search__filter" id="search__filer" className="py-3 focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-l sm:text-sm border-gray-300" placeholder="Search Talent">
                                        </input>
                                        <span className="inline-flex items-center px-3 bg-blue-700 text-white text-sm rounded-r">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="talent__category" className="block font-medium text-gray-700">
                                        Category
                                        </label>
                                    <select id="talent__category" name="talent__category" autoComplete="talent__category" className="mt-1 block w-full py-3 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                        <option>Science</option>
                                        <option>Technology</option>
                                        <option>Engineering</option>
                                        <option>Mathematics</option>
                                    </select>
                                </div>
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="talent__country" className="block font-medium text-gray-700">
                                        Countries
                                        </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" name="talent__country" id="talent__country" className="py-3 focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded sm:text-sm border-gray-300">
                                        </input>
                                    </div>
                                </div>
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="talent__country" className="block font-medium text-gray-700">
                                        Rate (USD)
                                        </label>
                                    <select id="talent__rate" name="talent__rate" autoComplete="talent__rate" className="mt-1 block w-full py-3 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                        <option>0 - 10 USD</option>
                                        <option>10 - 30 USD</option>
                                        <option>20 - 50 USD</option>
                                        <option>50 and above</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="talent__country" className="block mb-2 font-medium text-gray-700">
                                        Ratings
                                    </label>
                                    <div className="flex">
                                        {
                                            rating.map((n) => (
                                                <div key={n}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center h-5">
                                        <label htmlFor="email-preference" className="text-black font-medium">Online</label>
                                    </div>
                                    <div className="text-sm flex items-center">
                                        <input id="candidates" name="candidates" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                                        </input>
                                        <p className="text-gray-500 ml-2">Online talents only</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-8 w-full space-y-3">
                        <TalentList />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Talents
