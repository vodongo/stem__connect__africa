import React, { useState, useEffect } from 'react'
import Avatar from '../../assets/images/avatar.png'
import { useHistory } from 'react-router-dom'

function TalentList() {
    const router = useHistory()
    const [rating] = useState([1, 2, 3, 4, 5])
    const [isloading, setisLoading] = useState(true)
    const [loader] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [Items, setItems] = useState([])

    // talents
    useEffect(() => {
        fetch__users()
    }, [])

    // retive all talents
    function fetch__users() {
        const values = require('../../backend/users.json')
        setItems(values)
        setisLoading(false)
    }

    return (
        <div>
            <div>
                <div className="bg-white shadow border-b border-gray-200 rounded-t-md">
                    <div className="flex justify-between items-center py-3 px-4">
                        <div className="text-2xl">Find Talent</div>
                        <div className="relative">
                            <select id="talent__section" name="talent__section" autoComplete="talent__section" className="mt-1 block w-44 py-2 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                <option>Best Match</option>
                                <option>Best Rated</option>
                                <option>High Rates</option>
                                <option>Least Rates</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        isloading ? (
                            <div>
                                {
                                    loader.map((index) => (
                                        <div key={index} className="bg-white w-full border border-gray-200 ">
                                            <div class="p-6 animate-pulse">
                                                <div class="flex space-x-4">
                                                    <div class="rounded-full bg-gray-200 h-12 w-12"></div>
                                                    <div class="flex-1 space-y-4 py-1">
                                                        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                                                        <div class="space-y-2">
                                                            <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-2 space-y-2">
                                                    <div class="h-6 bg-gray-200 rounded"></div>
                                                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div>
                                {
                                    Items.map((item) => (
                                        <div key={item.id} className="grid grid-cols-12 bg-white  shadow border-b border-gray-200 items-start py-6 px-6">
                                            <div className="hidden sm:block sm:col-span-2 lg:col-span-1">
                                                <div className=" flex justify-center items-center">
                                                </div>
                                                <img
                                                    className="inline-block rounded-full h-14 w-14 ring-2 ring-white"
                                                    src={Avatar}
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="col-span-12 sm:col-span-10 lg:col-span-11 space-y-1">
                                                <div className="grid grid-cols-12 space-y-2 justify-between items-center">
                                                    <div className="col-span-12 lg:col-span-8">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                            <div className="text-lg font-normal">{item.name}</div>
                                                        </div>
                                                        <div className="text-md font-bold">{item.title}</div>
                                                        <div className="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                            </svg> <span className="ml-2">{item.country}</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-12 lg:col-span-4 flex justify-end items-center space-x-3">
                                                        <button className="border border-gray-300 py-2 px-2 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                            </svg>
                                                        </button>
                                                        <button onClick={() => router.push(`/talents/${item.id}`)} className="bg-green-500 text-white px-4 py-2 rounded text-sm shadow font-medium">View profile</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-12 pt-2">
                                                <div className="grid grid-cols-1 md:grid-cols-5 items-center space-y-2 md:space-x-3 pt-2">
                                                    <div className="flex">
                                                    <div className="bg-gray-200 rounded-lg py-1 px-2 text-sm text-gray-700 font-medium">{item.rate} USD hourly</div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        {
                                                            rating.map((n) => (
                                                                <div key={n}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                    </svg>
                                                                </div>
                                                            ))
                                                        }
                                                        <div className="text-yellow-500 font-bold">{item.rating}</div>
                                                    </div>
                                                    <div className="text-blue-700 px-2">2 reviews</div>
                                                </div>
                                            </div>
                                            <div className="col-span-12 h-20 overflow-ellipsis overflow-hidden">
                                                <div className="py-2 font-normal leading-normal">{item.about}</div>
                                            </div>
                                            <div className="pt-2">
                                                <div className="font-bold">#{item.category}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="py-6 px-2 flex items-center justify-between">
                <div className="flex-1 flex justify-between sm:hidden">
                    <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                        Previous
                                </button>
                    <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                        Next
                                </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing
                                    <span className="font-medium ml-1 mr-1">1</span>
                                        to
                                    <span className="font-medium ml-1 mr-1">10</span>
                                        of
                                    <span className="font-medium ml-1 mr-1">97</span>
                                       results
                                    </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <button className="relative inline-flex items-center px-2 py-3 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span className="sr-only">Previous</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button className="relative inline-flex items-center px-5 py-3 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                1
                                        </button>
                            <button className="relative inline-flex items-center px-5 py-3 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                2
                                        </button>
                            <button className="relative inline-flex items-center px-2 py-3 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span className="sr-only">Next</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TalentList
