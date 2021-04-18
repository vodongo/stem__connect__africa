import React, { useEffect, useState } from 'react'
import Header from '../../../components/parts/header/Header'
import Footer from '../../../components/parts/footer/Footer'
import Avatar from '../../../assets/images/avatar.png'

function BlogRead() {
    const [Item, setItem] = useState({})
    useEffect(() => {
        const value = {
            id: 105,
            author: "John Doe",
            title: "Why You Should Pair with Non-Engineers",
            text: "There are, of course, many ways you can get to your end goal here. These are the two methods I find easiest to remember. Which method you choose will depends on the purpose of the image. If you're only after a pretty background, you can go about this any way you like. Alternatively, if your image isn't just decorative and you want people to notice it, you should use an image tag with an alt description for accessibility. There are, of course, many ways you can get to your end goal here. These are the two methods I find easiest to remember. Which method you choose will depends on the purpose of the image. If you're only after a pretty background, you can go about this any way you like. Alternatively, if your image isn't just decorative and you want people to notice it, you should use an image tag with an alt description for accessibility. There are, of course, many ways you can get to your end goal here. These are the two methods I find easiest to remember. Which method you choose will depends on the purpose of the image. If you're only after a pretty background, you can go about this any way you like. Alternatively, if your image isn't just decorative and you want people to notice it, you should use an image tag with an alt description for accessibility.",
            url: "",
            createdAt: "10th may 2020"
        }
        setItem(value)
    }, [])


    return (
        <div className="bg-gray-50">
            <Header />
            <header className="bg-white shadow">
                <div className="max-w-6xl mx-auto py-8 px-6 xl:px-0">
                    <h1 className="text-lg text-gray-900 flex items-center gap-x-2">
                        Stem Connect Africa <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg> Blog
                    </h1>
                </div>
            </header>
            <div className="max-w-6xl mx-auto py-4 px-6 xl:px-0 min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-8">
                    <div className="bg-white shadow-lg lg:col-span-8">
                        <div>
                            {
                                Item.url ? (
                                    <div className="bg-gray-700 w-full relative h-96">
                                        <img
                                            src={Item.url}
                                            alt=""
                                            className="inline-block h-72 w-full rounded-t-md"
                                        ></img>
                                    </div>
                                ) : (null)
                            }
                        </div>
                        <div className="px-10 py-8 space-y-8">
                            <h1 className="text-4xl text-center lg:text-left tracking-tight font-extrabold text-gray-900 md:text-5xl">{Item.title}</h1>
                            <div>
                                <div className="flex gap-2 flex-wrap">
                                    <div className="bg-blue-700 py-1 px-3 rounded shadow-md text-white font-medium text-sm">#Science</div>
                                    <div className="bg-yellow-500 py-1 px-3 rounded shadow-md text-white font-medium text-sm">#Technology</div>
                                    <div className="bg-green-600 py-1 px-3 rounded shadow-md text-white font-medium text-sm">#Engeneering</div>
                                    <div className="bg-red-600 py-1 px-3 rounded shadow-md text-white font-medium text-sm">#Mathematics</div>
                                </div>
                                <div className="flex space-x-2 py-4 items-center">
                                    <img
                                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    ></img>
                                    <div className="text-gray-700 font-semibold">{Item.author}</div>
                                    <div className="text-gray-500 text-sm mt-1">{Item.createdAt}</div>
                                </div>
                            </div>
                            <div className="text-xl leading-relaxed">{Item.text}</div>
                            <hr />
                            <div>
                                <div className="text-lg font-bold text-gray-700 mb-4">Discussion (0)</div>
                                <div className="space-y-1">
                                    <div className="mt-2 flex space-x-4">
                                        <img
                                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        ></img>
                                        <div className="w-full">
                                            <textarea id="blog__discussion" placeholder="Add a discussion.." name="blog__discussion" rows="3" className="shadow-sm focus:ring-blue-500 bg-gray-100 focus:border-blue-500 mt-1 block w-full border-gray-300 rounded-md"></textarea>
                                            <div className="flex items-center justify-between py-3">
                                                <div className="flex items-center space-x-4">
                                                    <button className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span className="ml-2">Photo</span>
                                                    </button>
                                                    <button className="flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                                        </svg>
                                                        <span className="ml-2">Attachment</span>
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className="bg-blue-700 py-2 px-6 text-white font-medium rounded shadow-md">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <div className="sticky top-0 space-y-3">
                            <div className="bg-white w-full rounded-md shadow-lg pb-6">
                                <div>
                                    <div className="h-36 bg-gray-800">
                                        <img
                                            className="inline-block h-36 w-full ring-2 ring-white"
                                            src="https://res.cloudinary.com/dk5ch7wqm/image/upload/v1618603609/profile__bg_dbmdcw.jpg"
                                            alt=""
                                        ></img>
                                    </div>
                                    <div className="-mt-10 z-10 text-center space-y-1">
                                        <img
                                            className="inline-block h-24 w-24 bg-white rounded-xl ring-2 ring-white"
                                            src={Avatar}
                                            alt=""
                                        ></img>
                                        <div className="font-bold">InVision App Limited</div>
                                        <div className="font-light">Canada USA</div>
                                    </div>
                                    <div className="px-6 py-3">
                                        <div>Human-focused UX/UI developer. Shouting for diversity in tech. Also an Aussie abroad, podcast enthusiast & dog person. She/her.</div>
                                        <div className="py-3">
                                            <button className="bg-blue-700 w-full flex justify-center py-2 text-white rounded-md shadow-md">
                                                Follow
                                        </button>
                                        </div>
                                    </div>
                                    <div className="space-y-3 px-6">
                                        <div>
                                            <div className="text-gray-600 flex items-center font-bold text-sm uppercase">Email <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg></div>
                                            <div>invision@info.com</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-600 flex items-center font-bold text-sm uppercase">Phone <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg></div>
                                            <div>+919-404-1234</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-600 font-bold text-sm uppercase">Location</div>
                                            <div>Nairobi</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-600 font-bold text-sm uppercase">Joined</div>
                                            <div>12th May 2020</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-white w-full rounded shadow-lg py-3 h-96">
                                <div className="font-bold text-gray-700 text-lg px-6 py-2 border-b border-gray-300">More from <span className="text-blue-700">Adam Harshvardhan</span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default BlogRead
