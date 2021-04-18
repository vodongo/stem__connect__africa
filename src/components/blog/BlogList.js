import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Avatar from '../../assets/images/avatar.png'
import { formatDistance, format, subDays } from 'date-fns'

function BlogList() {
    let { url } = useRouteMatch();
    const [articles, setArticles] = useState([])
    const [isFeed, setFeed] = useState(false)
    const [isloading, setisLoading] = useState(true)
    const [loader] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    useEffect(() => {
        checklocation()
        getarticles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // check location
    function checklocation(){
        if(url !== '/blog'){
            setFeed(true)
        }
    }


    // get articles
    async function getarticles() {
        const user__db = require('../../backend/articles.json')
        setArticles(user__db)
        setisLoading(false)
    }

    // format date
    function formatdate(params){
        let new__date = format(new Date(params), "MMMM, dd")
        let new_time = formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
        let formated = new__date + ' (' + new_time + ')'
        return formated
    }
    
    return (
        <div>
            <div>
                <div className="max-w-6xl mx-auto xl:px-0">
                    <div>
                        {isloading ? (
                            <div className={isFeed ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                                {
                                    loader.map((index) => (
                                        <div key={index} className="bg-white shadow-lg rounded-md hover:bg-gray-100 h-full">
                                            <div className="h-72 animate-pulse">

                                            </div>
                                            <div className="p-4">
                                                <div className="animate-pulse flex space-x-4">
                                                    <div className="rounded-full bg-gray-200 h-12 w-12"></div>
                                                    <div className="flex-1 space-y-4 py-1">
                                                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                                        <div className="space-y-2">
                                                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                                            <div className="h-8 bg-gray-200 rounded"></div>
                                                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        ) : (
                            <div className={isFeed ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                                {articles.map((item, index) => (
                                    <Link key={item.id ? item.id : index} to={`/blog/${item.title.replace(/ /g,'')}`} className="w-full cursor-pointer">
                                        <div className="bg-white shadow-lg rounded-md hover:bg-gray-100 h-full">
                                            <div>
                                                {
                                                    item.urlToImage ? (
                                                        <div className="h-72 bg-gray-700 w-full relative rounded-t-md">
                                                            <img
                                                                src={item.urlToImage}
                                                                alt=""
                                                                className="inline-block h-72 w-full rounded-t-md"
                                                            ></img>
                                                        </div>
                                                    ) : (
                                                        <div className="h-72 bg-gray-200 rounded-t-md"></div>
                                                    )
                                                }
                                            </div>
                                            <div className="grid grid-cols-12 space-x-2 px-4 py-4">
                                                <div className={isFeed ? 'col-span-2 sm:col-span-1 flex justify-center' : 'col-span-2 xl:col-span-2 flex justify-center'}>
                                                    <img
                                                        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                                                        src={Avatar}
                                                        alt=""
                                                    ></img>
                                                </div>
                                                <div className={isFeed ? 'col-span-10 sm:col-span-11' : 'col-span-10 xl:col-span-10'}>
                                                    <div className="text-gray-700 font-bold">{item.author}</div>
                                                    <div className="text-gray-500 text-xs font-medium">{formatdate(item.publishedAt)}</div>
                                                </div>
                                                <div className={isFeed ? 'col-span-2 sm:col-span-1' : 'col-span-2 xl:col-span-2'}></div>
                                                <div className={isFeed ? 'col-span-10 sm:col-span-11 space-y-2' : 'col-span-10 xl:col-span-10 space-y-2'}>
                                                    <div className="text-gray-500 text-sm font-normal">#Mathematics, #Technology</div>
                                                    <div className="font-bold text-2xl">{item.title}</div>
                                                    <div className="truncate">{item.content}</div>
                                                    <div className="flex justify-between items-center pt-4">
                                                        <div className="flex space-x-2">
                                                            <button className="flex items-center space-x-1 text-gray-500">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                                                </svg>
                                                    14 <span className="hidden md:block">likes</span></button>
                                                            <button className="flex items-center space-x-1 text-gray-500">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                                                </svg>
                                                    14 <span className="hidden md:block">comments</span>
                                                            </button>
                                                        </div>
                                                        <div className="text-xs text-gray-500">4 min read</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                                }
                            </div>
                        )

                        }
                    </div>

                    <div className="flex justify-center items-center py-16">
                        <div className="flex items-center space-x-3">
                            <button className="border-2 border-blue-600 text-blue-600 py-3 px-8 shadow-md font-bold flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                                <span className="ml-2 hidden sm:block">Previous page</span>
                            </button>
                            <button className="bg-blue-600 text-white font-bold py-3 px-8 shadow-md flex items-center justify-center">
                                <span className="mr-2 hidden sm:block">Next page</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogList
