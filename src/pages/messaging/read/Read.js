import React, { useEffect, useState } from 'react'
//import Avatar from '../../assets/images/avatar.png'

function Read() {
    const [message, setMessage] = useState({})
    const [menu, setMenu] = useState(false)
    useEffect(() => {
        const value = {
            id: 101,
            name: "Adam Harshvardhan",
            text: "Hello, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            createdAt: "10min ago",
            status: "online",
            content: [
                {
                    id: 201,
                    name: "Adam Harshvardhan",
                    text: "Good morning",
                    createdAt: "10:00am"
                },
                {
                    id: 202,
                    name: "James White",
                    text: "Okay, no problem if in future is there any certification feels free to ping me here we will definitely help you.",
                    createdAt: "10:00am"
                },
                {
                    id: 203,
                    name: "Adam Harshvardhan",
                    text: "No Thanks",
                    createdAt: "10:00am"
                },
                {
                    id: 201,
                    name: "Adam Harshvardhan",
                    text: "Good morning",
                    createdAt: "10:00am"
                },
                {
                    id: 202,
                    name: "James White",
                    text: "Okay, no problem if in future is there any certification feels free to ping me here we will definitely help you.",
                    createdAt: "10:00am"
                },
                {
                    id: 203,
                    name: "Adam Harshvardhan",
                    text: "No Thanks",
                    createdAt: "10:00am"
                },
                {
                    id: 202,
                    name: "James White",
                    text: "Okay, no problem if in future is there any certification feels free to ping me here we will definitely help you.",
                    createdAt: "10:00am"
                },
                {
                    id: 203,
                    name: "Adam Harshvardhan",
                    text: "No Thanks",
                    createdAt: "10:00am"
                },
            ]
        }
        setMessage(value)
    }, [])


    // handle menu function
    function handle__menu() {
        if (menu === false) {
            setMenu(true)
        } else if (menu === true) {
            setMenu(false)
        }
    }

    return (
        <div>
            <div className="bg-white w-full rounded-md shadow-md">
                <div className="px-4 py-2 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 relative">
                            <img className="h-10 w-10 rounded-full" src={message.src} alt="">
                            </img>
                            <div style={{ backgroundColor: message.status === 'online' ? 'green' : 'red' }} className="absolute top-0 border-2 border-white right-0 w-3 h-3 rounded-full"></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold">{message.name}</div>
                            <div className="text-sm text-gray-400">{message.status}</div>
                        </div>
                    </div>
                    <div className="relative flex items-center space-x-4">
                        <button className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </button>
                        <button className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                        <button onClick={handle__menu} className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                        <div>
                            {menu ? (
                                <div className="origin-top-right absolute right-0 mt-4 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div className="py-1" role="none">
                                        <button className="block px-4 py-2 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">View profile</button>
                                        <button className="block px-4 py-2 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Achieve</button>
                                        <button className="block px-4 py-2 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Delete</button>
                                        <button className="block px-4 py-2 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Mark as unread</button>
                                        <hr />
                                        <button className="block px-4 py-2 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Report</button>
                                    </div>
                                </div>
                            ) : (null)

                            }
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full px-4 py-4" style={{ maxHeight: '520px', overflowY: 'auto', overflowX: 'hidden' }}>
                    {
                        message.content ? (
                            <div className="space-y-6">
                                {
                                    message.content.map((item) => (
                                        <div key={item.id}>
                                            <div className="flex space-x-4">
                                                <div className="flex-shrink-0 relative">
                                                    <img className="h-10 w-10 rounded-full" src={message.src} alt="">
                                                    </img>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex items-center space-x-1">
                                                        <div className="text-gray-800 font-medium">{item.name}</div>
                                                        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                                                        <div className="text-gray-600 text-sm">{item.createdAt}</div>
                                                    </div>
                                                    <div className="font-base text-gray-500">{item.text}</div>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        ) : (null)
                    }
                </div>
            </div>
            <div className="bg-white w-full mt-1 rounded-b-md shadow-lg">
                <div>
                    <div>
                        <div>
                            <textarea id="message" name="message" rows="3" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 block w-full border-b border-gray-200" placeholder="Write a message"></textarea>
                        </div>
                    </div>
                    <div className="flex px-4 py-3 justify-between items-center border-t border-gray-200">
                        <div className="flex items-center justify-between py-3 space-x-3">
                            <button className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </button>
                            <button className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                            </button>
                            <button className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>   
                        </div>
                        <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Read
