import React, { useState } from 'react'
import Avatar from '../../../assets/images/avatar.png'
import Logo from '../../../assets/images/logo.png'

function Postproject() {
    const [alert, setAlert] = useState(false)
    const [isReady, setisReady] = useState(false)
    // title style
    const header__title = {
        color: "white",
        textShadow: "2px 2px 8px black"
    }
    const container = {
        minHeight: "400px"
    }

    const handle__isready = () => {
        setisReady(true)
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="bg-gray-800 h-96"></div>
            <div className="max-w-4xl px-4 mx-auto -mt-80">
                <div className="flex items-center mb-4">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-10 h-10"
                    ></img>
                    <div className="font-extrabold text-xl ml-4" style={header__title}>STEM CONNECT AFRICA</div>
                </div>
                <div className="text-gray-300 text italic">"The best executive is the one who has sense enough to pick good men to do what he wants done, and self-restraint enough to keep from meddling with them while they do it."</div>
                <div className="italic text-gray-300">~ Theodore Roosevelt</div>
                <div className="text-white py-6 text-xl font-light uppercase">Post a project</div>
                <div className="bg-white py-6 px-6 space-y-6" style={container}>
                    <div>
                        {alert ? (
                            <div className="bg-blue-100 rounded-lg">
                                <div className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-6">
                                    <div className="flex items-center justify-between flex-wrap">
                                        <div className="w-0 flex-1 flex items-center py-2">
                                            <span className="flex p-2 rounded-lg ">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-blue-700 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span>
                                            <p className="ml-3 text-sm font-medium text-gray-700">
                                                <span>
                                                    We've automatically loaded a project you were working on minutes ago. You can continue working on it below. Pressing 'Discard' will clear the form and remove the draft forever.
                                                </span>
                                                <div>
                                                    <button className="bg-blue-500 font-medium mt-4 text-white py-2 px-4 shadow-md rounded">Discard</button>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (null)}
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="project__title" className="font-bold text-gray-700 text-lg">Project Title</label>
                        <input id="project__title" onFocus={handle__isready} name="project__title" type="text" autoComplete="project__title" required className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="eg Physics Project"></input>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="project__description" className="font-bold text-gray-700 text-lg">Project description</label>
                        <div className="mt-2">
                            <textarea id="project__description" placeholder="Describe your project.." name="project__description" rows="3" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                        </div>
                    </div>
                    <div className="py-3">
                        <label htmlFor="file-upload" className="relative cursor-pointer border-2 border-gray-300 border-dashed flex px-4 py-6 rounded-md font-medium text-gray-600 hover:text-gray-500">
                            <div className="grid grid-cols-12 space-x-6">
                                <div className="col-span-2 flex items-center w-full text-gray-900 font-medium border text-sm border-gray-800 px-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    <span className="font-bold text-sm">Upload files</span>
                                </div>
                                <div className="col-span-10 font-normal">Drag & drop any images or documents that might be helpful in explaning your brief here (Max 25 MB)</div>
                            </div>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only"></input>
                        </label>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="project__category" className="font-bold text-gray-700 text-lg">Project Category</label>
                        <select id="project__category" name="project__category" autoComplete="project__category" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Science</option>
                            <option>Technology</option>
                            <option>Engineering</option>
                            <option>Mathematics</option>
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="project__budget" className="font-bold text-gray-700 text-lg">What is your estimated budget?</label>
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-6 sm:col-span-2">
                                <label htmlFor="project__currency" className="block text-sm font-medium text-gray-700">Currency</label>
                                <select id="project__currency" name="project__currency" autoComplete="project__currency" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                    <option>US (USD)</option>
                                    <option>Canada (CAD)</option>
                                    <option>Australia (AUD)</option>
                                    <option>Kenya (Kshs)</option>
                                </select>
                            </div>

                            <div className="col-span-6 sm:col-span-10">
                                <label htmlFor="project__budget" className="block text-sm font-medium text-gray-700">Budget</label>
                                <input id="project__budget" name="project__budget" type="text" autoComplete="project__budget" required className="appearance-none mt-1 rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="eg 1000"></input>
                            </div>
                        </div>
                    </div>
                    <div>
                        {isReady ? (
                            <div>
                                <div className="space-y-1">
                                    <div className="font-bold text-gray-700 text-lg">Are these details correct?</div>
                                    <div className="w-full shadow-lg border border-gray-200 py-8">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-3 space-y-1">
                                                <div className="flex justify-center">
                                                    <img
                                                        src={Avatar}
                                                        alt=""
                                                        className="w-24 h-24"
                                                    ></img>
                                                </div>
                                                <div className="text-center uppercase">project</div>
                                                <div className="text-center font-bold text-gray-700">$ 250 - 750 USD</div>
                                            </div>
                                            <div className="col-span-9 border-l border-gray-300 px-4 py-2 space-y-3">
                                                <div className="font-semibold text-lg">Build website</div>
                                                <div>Start with a bit about yourself or your business, and include an overview of what you need done.</div>
                                                <div className="flex space-x-3">
                                                    <div className="border border-gray-400 px-4 py-1 text-gray-500 text-sm font-medium rounded-md">Mathematics</div>
                                                    <div className="border border-gray-400 px-4 py-1 text-gray-500 text-sm font-medium rounded-md">Science</div>
                                                    <div className="border border-gray-400 px-4 py-1 text-gray-500 text-sm font-medium rounded-md">Engineering</div>
                                                    <div className="border border-gray-400 px-4 py-1 text-gray-500 text-sm font-medium rounded-md">Technology</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center py-8">
                                    <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm font-semibold rounded text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Post a project
                                    </button>
                                </div>
                                <hr />
                                <div className="text-sm py-3">By clicking 'Post a project', you agree to the Terms & Conditions and Privacy Policy Copyright © 2021 Stem Connect Africa Limited</div>
                            </div>
                        ) : (
                            <div></div>
                        )

                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Postproject
