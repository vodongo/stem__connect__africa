import React, { useState, useEffect } from 'react'
import {
    Switch,
    Route,
    Link,
    useHistory,
    NavLink
} from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/avatar.png'

//pages
import Feed from '../feed/Feed'
import Notifications from '../notifications/Notifications'
import Messaging from '../messaging/Messaging'
import MyWork from '../my-work/Mywork'
import Accounts from '../accounts/Accounts'
import Profile from '../profile/Profile'
import Article from '../blog/article/Article'
import Document from '../accounts/document/Document'

// no match
import NoMatch from '../404/NoMatch'

// loader
import LoaderPage from '../../components/loader/Loader'
import MessageList from '../../components/messaging/MessageList'

function Dashboard(props) {
    // router
    const router = useHistory()
    // state
    const [menu, setMenu] = useState(false)
    const [menu__sm, setMenuSM] = useState(false)
    const [user, setUser] = useState(null)
    const [isloading, setisLoading] = useState(true)

    useEffect(() => {
        const user__db = require("../../backend/users.json")
        function retriveuserdetails() {
            const data = user__db.filter(e => props.user.attributes.sub === e.user__id)
            setUser(data[0])
            setisLoading(false)
        }
        retriveuserdetails()
    })

    // handle menu function
    function handle__menu() {
        if (menu === false) {
            setMenu(true)
        } else if (menu === true) {
            setMenu(false)
        }
    }

    // handle menu function small screen
    function handle__menu__sm() {
        if (menu__sm === false) {
            setMenuSM(true)
        } else if (menu__sm === true) {
            setMenuSM(false)
        }
    }

    // logout function
    function handle__logout(e) {
        e.preventDefault()
        props.handle__logout()
    }


    if (isloading === true) return <LoaderPage />
    else
        return (
            <div className="min-h-screen bg-gray-100">
                <nav style={{ backgroundColor: '#06216b' }} className="sticky top-0 z-50">
                    <div className="max-w-6xl mx-auto py-3 flex justify-between items-center px-6 xl:px-0">
                        <div className="flex items-center space-x-4">
                            <Link to="/">
                                <img src={Logo} alt="company logo" className="w-8 h-8"></img>
                            </Link>
                            <div className="font-extrabold text-md xl:text-md" style={{ color: "white", textShadow: "2px 2px 8px black" }}>STEM CONNECT AFRICA</div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-6">
                                <NavLink to="/feed" activeStyle={{
                                    fontWeight: "bold",
                                    color: "#9CA3AF"
                                }} className="cursor-pointer flex items-center flex-col text-gray-100 hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    <span className="font-semibold text-sm">Home</span>
                                </NavLink>
                                <NavLink to="/my-work" activeStyle={{
                                    fontWeight: "bold",
                                    color: "#9CA3AF"
                                }} className="cursor-pointer flex items-center flex-col text-gray-100 hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                    <span className="font-semibold text-sm">My-work</span>
                                </NavLink>
                                <NavLink to="/messaging" activeStyle={{
                                    fontWeight: "bold",
                                    color: "#9CA3AF"
                                }} className="cursor-pointer flex items-center flex-col text-gray-100 hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-semibold text-sm">Messaging</span>
                                </NavLink>
                                <NavLink to="/notifications" activeStyle={{
                                    fontWeight: "bold",
                                    color: "#9CA3AF"
                                }} className="cursor-pointer flex items-center flex-col text-gray-100 hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                    </svg>
                                    <span className="font-semibold text-sm">Notifications</span>
                                </NavLink>
                                <div className="relative inline-block text-left">
                                    <div>
                                        <button onClick={handle__menu} className="cursor-pointer focus:outline-none flex items-center flex-col text-gray-200">
                                            <div className="flex-shrink-0">
                                                {
                                                    user ? (
                                                        <img className="h-10 w-10 rounded-full" src={user.url} alt="">
                                                        </img>
                                                    ) : (
                                                        <img className="h-10 w-10 rounded-full" src={Avatar} alt="">
                                                        </img>
                                                    )
                                                }
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        {menu ? (
                                            <div style={{ width: '21rem' }} className="origin-top-right absolute right-0 mt-4 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <div className="bg-blue-50">
                                                    <div className="flex items-center px-4 py-6 space-x-2">
                                                        <div className="flex-shrink-0">
                                                            <img className="h-10 w-10 rounded-full" src={Avatar} alt="">
                                                            </img>
                                                        </div>
                                                        <div>
                                                            <div className="text-gray-700 font-medium">{user.name}</div>
                                                            <div className="flex items-center">
                                                                <span className="text-xs font-base truncate">{props.user.attributes.email}</span>
                                                                <button onClick={() => router.push(`/profile`)} className="cursor-pointer focus:outline-none">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-3 py-3 flex items-center space-x-1 font-medium">
                                                    <div> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                                                    </svg>
                                                    </div>
                                                    <div>
                                                        <button onClick={() => router.push(`/accounts`)} className="flex flex-col items-start cursor-pointer focus:outline-none">
                                                            <div>Accounts</div>
                                                            <p className="text-xs font-medium text-gray-400">Access your unpaid, paid and outstanding invoices</p>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="px-6 py-3 border-t border-gray-200">
                                                    <button onClick={handle__logout} className="bg-red-500 hover:bg-red-600 rounded-md text-white py-2 w-full flex justify-center font-medium">
                                                        Sign out
                                            </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button onClick={handle__menu__sm} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>{menu__sm ? (
                        <div className="md:hidden pb-5" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link to="/feed" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                                <Link to="/my-work" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">My-work</Link>
                                <Link to="/messaging" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Messaging</Link>
                            </div>
                            <div className="pt-4 pb-3 border-t border-gray-700">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={Avatar} alt="">
                                        </img>
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                        <div className="text-sm font-medium leading-none text-gray-400 mt-1">{props.user.attributes.email}</div>
                                    </div>
                                    <button onClick={() => router.push(`/notifications`)} className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-3 px-2 space-y-1">
                                <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</Link>
                                <Link to="/accounts" className="block px-3 py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
                                    <div className="text-base font-medium">Accounts</div>
                                    <p className="text-xs font-medium text-gray-400">Access your unpaid, paid and outstanding invoices</p>
                                </Link>
                                <button onClick={handle__logout} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</button>
                            </div>
                        </div>
                    ) : (null)}
                    </div>
                </nav>
                <header className="bg-white shadow">
                    <div className="max-w-6xl mx-auto py-6 px-6 xl:px-0">
                        <h1 className="text-lg text-gray-900 flex items-center gap-x-2">
                            Dashboard
                    </h1>
                    </div>
                </header>
                 <div className="bottom-0 right-0 bg-white z-50 fixed shadow-2xl" style={{ width: '22rem' }}>
                    <MessageList />
                </div>

                {/*switch*/}
                <Switch>
                    <Route path="/feed" render={props => <Feed {...props} user={user} />} exact />
                    <Route path="/my-work" render={props => <MyWork {...props} user={user} />} exact />
                    <Route path="/messaging" component={Messaging} exact />
                    <Route path="/notifications" component={Notifications} exact />
                    <Route path="/profile" component={Profile} exact />
                    <Route path="/accounts/:slug" component={Document} exact />
                    <Route path="/accounts" component={Accounts} exact />
                    <Route path="/article" component={Article} exact />
                    
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        )
}

export default Dashboard
