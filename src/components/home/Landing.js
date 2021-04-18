import React from 'react'
import { Link } from 'react-router-dom'
import landingbg from "../../assets/images/home.png"

function Landing() {
    return (
        <div className="bg-white min-h-screen">
            <div className="min-h-screen max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-12 px-6 xl:px-0">
                    <div>
                        <h1 className="text-4xl text-center lg:text-left tracking-tight font-extrabold text-gray-900 md:text-5xl">Explore Ideas At <span className="text-blue-600">Stem Connect Africa</span></h1>
                        <div className="text-gray-700 lg:text-left text-center mt-4 text-lg font-medium">Combining, Science, Technology, Engineering And Mathematics</div>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <Link to="/signup" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 md:py-4 md:text-lg md:px-10">
                                    Get started
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={landingbg} alt="home page" className="z-10"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
