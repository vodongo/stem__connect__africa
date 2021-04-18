import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../../assets/images/logo.png'

function Header() {
    const [menu, setMenu] = useState(false)
    // router
    const history = useHistory()
    // handle menu function
    const handle__menu = () => {
        if (menu === false) {
            setMenu(true)
        } else if (menu === true) {
            setMenu(false)
        }
    }
    return (
        <div style={{ backgroundColor: '#06216b' }} className="sticky top-0 z-50">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between py-4 px-6 xl:px-0">
                    <div>
                        <div className="flex items-center space-x-4">
                            <Link to="/">
                                <img src={Logo} alt="company logo" className="w-8 h-8"></img>
                            </Link>
                            <div className="font-extrabold text-md xl:text-md" style={{ color: "white", textShadow: "2px 2px 8px black" }}>STEM CONNECT AFRICA</div>
                            <Link to="/projects" className="text-gray-100 hidden lg:block cursor-pointer hover:text-gray-200 px-3 py-2 rounded-md text-base font-normal">Browse projects</Link>
                            <Link to="/talents" className="text-gray-100 hidden lg:block cursor-pointer hover:text-gray-200 px-3 py-2 rounded-md text-base font-normal">Browse talents</Link>
                            <Link to="/blog" className="text-gray-100 hidden lg:block cursor-pointer hover:text-gray-200 px-3 py-2 rounded-md text-base font-normal">Blog</Link>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex items-center">
                            <Link to="/login" className="text-gray-100 cursor-pointer hover:text-gray-200 px-3 py-2 rounded-md mr-2 font-medium">Login</Link>
                            <button type="button" onClick={() => history.push('/signup')} className="flex justify-center py-2 px-4 border border-transparent font-medium rounded text-white focus:outline-none" style={{ backgroundColor: '#F97316'}}>
                                Sign up
                        </button>
                        </div>
                    </div>
                    <div className="lg:hidden relative">
                        <button onClick={handle__menu} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div>
                            {menu ? (
                                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div className="py-1" role="none">
                                        <Link to="/projects" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Browse projects</Link>
                                        <Link to="/talents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Browse talents</Link>
                                        <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Blog</Link>
                                        <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Login</Link>
                                        <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Sign up</Link>
                                    </div>
                                </div>
                            ) : (<div></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
