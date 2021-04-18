import React, { useEffect, useState } from 'react'
import Avatar from '../../assets/images/avatar.png'


function Mywork(props) {
    const [isloading, setisLoading] = useState(true)

    useEffect(() => {
        function checkuserprops() {
            if (props.user) {
                setisLoading(false)
            }
        }
        checkuserprops()
    })

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto py-12 px-6 xl:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-3 space-y-4">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="w-full bg-white rounded-md shadow-md col-span-12 md:col-span-6 lg:col-span-12">
                                <div className="h-44 lg:h-32 bg-gray-800 rounded-t-md">
                                    <img
                                        className="inline-block rounded-t-md h-44 lg:h-32 w-full ring-2 ring-white"
                                        src="https://res.cloudinary.com/dk5ch7wqm/image/upload/v1618603609/Mywork__bg_dbmdcw.jpg"
                                        alt="background"
                                    ></img>
                                </div>
                                {/*document*/}
                                <div>
                                    {
                                        isloading ? (
                                            <div className="p-6 space-y-4">
                                                <div className="animate-pulse flex justify-center">
                                                    <div className="rounded-full bg-gray-200 h-12 w-12"></div>
                                                </div>
                                                <div className="animate-pulse flex justify-center">
                                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                                </div>
                                                <div className="animate-pulse flex justify-center">
                                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                                </div>
                                                <hr />
                                                <div className="animate-pulse flex justify-center">
                                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div className="text-center z-10 -mt-10">
                                                    <div>
                                                        {
                                                            props.user ? (
                                                                <img className="inline-block bg-white h-24 w-24 rounded-xl ring-2 ring-white" src={props.user.url} alt="">
                                                                </img>
                                                            ) : (
                                                                <img className="inline-block bg-white h-24 w-24 rounded-xl ring-2 ring-white" src={Avatar} alt="">
                                                                </img>
                                                            )
                                                        }
                                                        {props.user && <div className="font-bold">{props.user.name}</div>}
                                                        {props.user && <div className="mb-4 font-normal text-gray-500">{props.user.city}, {props.user.country}</div>}
                                                    </div>
                                                    <div>
                                                        {props.user.user__plan === 'basic' && <div>
                                                            <hr />
                                                            <div className="py-2 flex items-center px-4 space-x-1">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                </svg>
                                                                <span className="text-sm font-medium">Try premium for free for 1month</span>
                                                            </div>
                                                        </div>}
                                                    </div>
                                                    <hr />
                                                    <div className="flex items-center py-2 px-4 space-x-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                                        </svg>
                                                        <span className="text-sm font-medium text-gray-700">Bookmarks</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="lg:col-span-6 order-last lg:order-2">
                        <div>
                            <div className="px-4 py-3 shadow-md bg-white rounded-md mb-3">
                                <div className="justify-between items-center flex">
                                    <div className="font-bold text-xl">My Feed</div>
                                    <div>
                                        <select id="mywork__filter" name="mywork__filter" autoComplete="mywork__filter" className="block w-full rounded bg-gray-50 border border-gray-300 font-medium shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                            <option>Feed</option>
                                            <option>Proposals</option>
                                            <option>Current work</option>
                                            <option>Past work</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="text-sm mt-2 font-medium text-gray-400 italic">“When your team is winning, be ready to be tough, because winning can make you soft. On the other hand, when you team is losing, stick by them. Keep believing.” – Bo Schembechler</div>
                            </div>
                            <div className="text-center text-gray-400">No work or projects available!</div>
                        </div>
                    </div>
                    <div className="lg:col-span-3 space-y-4 order-2 lg:order-last">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="w-full bg-white  hidden lg:block col-span-12 lg:col-span-12 relative rounded-md shadow-md h-56">
                                <img
                                    src="https://res.cloudinary.com/dk5ch7wqm/image/upload/v1618603687/stemedu_dd0d1i.jpg"
                                    alt="Logo"
                                    className="h-56 w-full inline-block rounded-md"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mywork
