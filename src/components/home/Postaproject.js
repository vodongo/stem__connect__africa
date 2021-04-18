import React from 'react'
import { Link } from 'react-router-dom';

function Postaproject() {
    const fixed_bg = {
        background: "url('https://res.cloudinary.com/dk5ch7wqm/image/upload/v1618562493/background__bg_zxep23.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "300px",
      }
    return (
        <div style={{ minHeight: '250px'}}>
            <div className="relative py-28 bg-gray-900 bg-no-repeat" style={fixed_bg}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 max-w-6xl mx-auto px-6 xl:px-0">
                    <div className="lg:col-span-8 flex justify-center lg:justify-start">
                        <div className="space-y-4">
                            <div className="text-white text-center lg:text-left text-4xl tracking-tight font-extrabold md:text-5xl">Post a job?</div>
                            <div className="text-yellow-500 text-center lg:text-left text-4xl tracking-tight font-extrabold">Find Talent At Stem Connect Africa</div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 flex justify-center lg:justify-end">
                        <div className="rounded-md">
                            <Link to="/post-project" className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-blue-100 md:py-4 md:text-lg md:px-10">
                                Post a project
                             </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Postaproject
