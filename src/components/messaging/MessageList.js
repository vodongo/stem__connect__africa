import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../assets/images/avatar.png'

function MessageList() {
    const [menu, setMenu] = useState(false)
    const [loader] = useState([1, 2, 3, 4, 5, 6])
    const [isloading, setisLoading] = useState(true)
    const [messages, setMessages] = useState([])
    const [open, setOpen] = useState(true)

    useEffect(() => {
        const values = require("../../backend/messaging.json")
        setMessages(values)
        setisLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // handle menu
    function handle__menu() {
        if (menu === false) {
            setMenu(true)
        } else if (menu === true) {
            setMenu(false)
        }
    }

    // handle fixed menu
    function handle__fixed__menu() {
        if (open === true) {
            setOpen(false)
        } else if (open === false) {
            setOpen(true)
        }
    }

    return (
        <div>
            <div className="px-4 py-3 border-b border-gray-200 rounded-t-md flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src={Avatar}
                        alt=""
                    ></img>
                    <div className="text-lg ml-2 font-medium text-gray-800">Messaging</div>
                </div>
                <div className="flex items-center space-x-2">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>
                    <div className="relative mt-1">
                        <button onClick={handle__menu} className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                        <div>
                            {menu ? (
                                <div className="origin-top-right absolute -right-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div className="py-1" role="none">
                                        <button className="block px-4 py-2 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">All chats</button>
                                        <button className="block px-4 py-2 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Groups</button>
                                        <button className="block px-4 py-2 font-medium text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Achieved</button>
                                    </div>
                                </div>
                            ) : (null)

                            }
                        </div>
                    </div>
                    <button onClick={handle__fixed__menu} className="focus:outline-none">
                        {
                            open ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            )
                        }
                    </button>
                </div>
            </div>
            {open &&
                <div>
                    <div className="flex py-2 px-2">
                        <input type="text" name="search__filter" id="search__filer" style={{ backgroundColor: '#F1F5F9' }} className="py-2 flex-1 block w-full rounded-l focus:ring-gray-50 sm:text-sm border-transparent" placeholder="Search messages">
                        </input>
                        <span className="inline-flex items-center px-3 bg-gray-100 text-sm rounded-r">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{ backgroundColor: '#F1F5F9' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                    </div>
                    <div className="py-4" style={{ minHeight: '500px', maxHeight: '500px', overflowX: 'hidden', overflowY: 'auto' }}>
                        <div>
                            {
                                isloading ? (
                                    <div>
                                        {
                                            loader.map((index) => (
                                                <div key={index}>
                                                    <div className="p-4">
                                                        <div className="animate-pulse flex space-x-4">
                                                            <div className="rounded-full bg-gray-200 h-12 w-12"></div>
                                                            <div className="flex-1 space-y-4 py-1">
                                                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                                                <div className="space-y-2">
                                                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <div>
                                        {
                                            messages.length > 0 ? (
                                                <div>
                                                    {
                                                        messages.map((item) => (
                                                            <Link to={`/messaging/${item.id}`} className="px-4 border-b border-gray-300 grid cursor-pointer grid-cols-12 py-3 hover:bg-gray-50" key={item.id}>
                                                                <div className="col-span-2">
                                                                    <div>
                                                                        {
                                                                            item.src ? (
                                                                                <div className="flex-shrink-0 relative">
                                                                                    <img className="h-12 w-12 rounded-full" src={item.src} alt="">
                                                                                    </img>
                                                                                    <div style={{ backgroundColor: item.status === 'online' ? 'green' : 'red' }} className="absolute top-0 border-2 border-white right-2 w-3 h-3 rounded-full"></div>
                                                                                </div>
                                                                            ) : (null)
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className="col-span-10 px-2">
                                                                    <div className="flex items-center justify-between">
                                                                        <div className="font-bold">{item.name}</div>
                                                                        <div className="text-sm">{item.createdAt}</div>
                                                                    </div>
                                                                    <div className="text-sm flex truncate text-gray-400">{item.text}</div>
                                                                </div>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            ) : (
                                                <div className="flex justify-center px-4">
                                                    <div className="text-gray-400 font-normal">No messages available at the moment</div>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default MessageList
