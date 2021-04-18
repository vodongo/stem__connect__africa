import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Notifications() {
    const [notifications, setNotifications] = useState([])
    const [isloading, setisLoading] = useState(true)
    const [loader] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    useEffect(() => {
        checkusernotifications()
    }, [])

    function checkusernotifications() {
        const user__db = require("../../backend/notifications.json")
        setNotifications(user__db)
        setisLoading(false)
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-6xl mx-auto py-12">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8">
                        {
                            isloading ? (
                                <div>
                                    {loader.map((index) => (
                                        <div key={index}>
                                            <div className="p-4">
                                                <div className="animate-pulse flex space-x-4">
                                                    <div className="rounded-full bg-gray-200 h-12 w-12"></div>
                                                    <div className="flex-1 space-y-4 py-1">
                                                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                                        <div className="space-y-2">
                                                            <div className="h-6 bg-gray-200 rounded"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white rounded-md shadow-md">
                                    {notifications.map((item) => (
                                        <Link to="/" key={item.id} className="grid grid-cols-12 py-3 items-center border-b border-t border-gray-300" style={{ backgroundColor: item.status === 'read' ? '#DBEAFE' : 'white' }}>

                                            <div className="col-span-2 flex items-center justify-center">
                                                {
                                                    item.url ? (
                                                        <img alt="" src={item.url} className="inline-block h-16 w-16 rounded-md">
                                                        </img>
                                                    ) : (null)
                                                }
                                            </div>
                                            <div className="col-span-9">
                                                <span className=" text-gray-800">{item.title}</span> <span className="text-gray-500">{item.text}</span> <span className="font-medium text-gray-800">{item.content}</span>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="text-sm text-gray-400 mb-2">1hr</div>
                                                <div className="relative">
                                                    <button className="focus:outline-none text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div className="col-span-4 space-y-4">
                        <div className="col-span-3 space-y-2">
                            <div className="bg-white w-full rounded-md text-center space-y-3 shadow-md py-6">
                                <div className="text-xl font-medium text-gray-600">Notifications</div>
                                <div className="text-gray-400">You have a new notifications</div>
                            </div>
                        </div>
                        <div className="bg-white w-full relative rounded-md shadow-md h-56">
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
    )
}

export default Notifications
