import React from 'react'
import Avatar from '../../assets/images/avatar.png'

function Profile() {
    return (
        <div>
            <div className="relative">
                <div className="h-80 bg-gray-800 rounded-t-md">
                    <img
                        className="inline-block rounded-t-md h-96 w-full ring-2 ring-white"
                        src="https://res.cloudinary.com/dk5ch7wqm/image/upload/v1618603609/profile__bg_dbmdcw.jpg"
                        alt=""
                    ></img>
                    <div className="absolute right-10 top-10">
                        <button className="bg-white rounded-full px-2 py-2 shadow-lg focus:outline-none">
                            <svg class="mx-auto h-8 w-8 text-blue-700" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto -mt-20 z-10 relative px-6 xl:px-0 min-h-screen pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-12">
                        <div className="bg-white shadow-lg rounded-md">
                            <div className=" flex justify-between items-center px-6 py-3 border-b border-gray-300">
                                <div>
                                    <div className="text-gray-800 font-bold text-lg">Personal Details</div>
                                    <div className="text-xs font-medium text-gray-500">johndoe@example.com</div>
                                </div>
                                <div className="text-gray-800 text-xs"><span className="font-bold">TALENT ID:</span> #123456</div>
                            </div>
                            <div className="grid grid-cols-12 py-6 px-6 space-y-2">
                                <div className="col-span-12">
                                    <label for="profile__title" className="block text-gray-700 font-bold text-base">Your Title</label>
                                    <p className="text-xs font-medium text-gray-500">Enter a single sentence description of your professional skills/experience (e.g. Software Developer)</p>
                                    <input type="text" name="profile__title" id="profile__title" autoComplete="profile__title" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </input>
                                </div>
                                <div className="col-span-12">
                                    <div className="grid grid-cols-12 gap-3">
                                        <div className="col-span-6">
                                            <label for="first_name" className="block text-base font-medium text-gray-700">First name</label>
                                            <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                            </input>
                                        </div>
                                        <div className="col-span-6">
                                            <label for="last_name" className="block text-base font-medium text-gray-700">Last name</label>
                                            <input type="text" name="last_name" id="last_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                            </input>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <div className="grid grid-cols-12 space-x-3">
                                        <div className="col-span-6">
                                            <label for="profile__city" className="block text-base font-medium text-gray-700">City</label>
                                            <input type="text" name="profile__city" id="profile__city" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                            </input>
                                        </div>
                                        <div className="col-span-6">
                                            <label for="profile__country" className="block text-base font-medium text-gray-700">Country</label>
                                            <input type="text" name="profile__country" id="profile__country" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                            </input>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <div className="flex flex-col">
                                        <label for="talent__rate" className="block text-sm font-medium text-gray-700">Rate</label>
                                        <p className="text-xs font-medium text-gray-500">Please note that your new hourly rate will only apply to new contracts. The Upwork Service Fee is 20% when you begin a contract with a new client. Once you bill over $500 with your client, the fee will be 10%.</p>
                                        <div className="mt-1 relative rounded-md shadow-sm">

                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">
                                                    $
                                                </span>
                                            </div>
                                            <input type="text" name="price" id="price" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00">
                                            </input>
                                            <div class="absolute inset-y-0 right-0 flex items-center">
                                                <label for="currency" className="sr-only">Currency</label>
                                                <select id="currency" name="currency" className="focus:ring-blue-500 focus:border-blue-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                                                    <option>USD</option>
                                                    <option>CAD</option>
                                                    <option>EUR</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 flex-wrap mt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg> <span className="font-base text-gray-500">Joined March 29th 2020</span>

                                        </div>
                                        <button type="button" className="flex justify-cente py-2 px-4 border border-transparent font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            Save
                                     </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" lg:col-span-8 space-y-2">
                        <div className="bg-white shadow-lg rounded-md">
                            <div className=" flex justify-between items-center px-6 py-3 border-b border-gray-300">
                                <div className="text-gray-800 font-bold text-lg">About</div>
                                <div className="text-gray-800 text-xs"><span className="font-bold">TALENT ID:</span> #123456</div>
                            </div>
                            <div className="px-6 py-4 space-y-4">
                                <div className="space-y-1">
                                    <div className="mt-2">
                                        <p className="text-xs font-medium text-gray-500">Tell us more about yourself. This will be the first impression that employers will be able to see you.</p>
                                        <textarea id="profile__about" placeholder="Write about yourself.." rows="4" name="project__proposal" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full border-gray-300 rounded-md"></textarea>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button type="button" className="flex justify-cente py-2 px-4 border border-transparent font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-md shadow-lg">
                            <div className=" flex justify-between items-center px-6 py-3 border-b border-gray-300">
                                <div className="text-gray-800 font-bold text-lg">Category</div>
                                <div className="text-gray-800 text-xs"><span className="font-bold">TALENT ID:</span> #123456</div>
                            </div>
                            <div className="py-4 px-6 space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ">
                                    <div className="flex items-center bg-gray-50 shadow-md border border-gray-200 px-6 py-6">
                                        <input id="science" name="science" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"></input>
                                        <label htmlFor="science" className="ml-3 block text-sm font-medium text-gray-700">
                                            Science
                                        </label>
                                    </div>
                                    <div className="flex items-center bg-blue-50 shadow-md border border-gray-200 px-6 py-6">
                                        <input id="technology" name="technology" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"></input>
                                        <label htmlFor="technology" className="ml-3 block text-sm font-medium text-gray-700">
                                            Technology
                                        </label>
                                    </div>
                                    <div className="flex items-center bg-red-50 shadow-md border border-gray-200 px-6 py-6">
                                        <input id="engineering" name="engineering" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"></input>
                                        <label htmlFor="engineering" className="ml-3 block text-sm font-medium text-gray-700">
                                            Engineering
                                        </label>
                                    </div>
                                    <div className="flex items-center bg-yellow-50 shadow-md border border-gray-200 px-6 py-6">
                                        <input id="mathematics" name="mathematics" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"></input>
                                        <label htmlFor="mathematics" className="ml-3 block text-sm font-medium text-gray-700">
                                            Mathematics
                                        </label>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <label htmlFor="file-upload" className="relative cursor-pointer border-2 border-gray-300 border-dashed flex px-4 py-6 rounded-md font-medium text-gray-600 hover:text-gray-500">
                                        <div className="grid grid-cols-12 space-x-6">
                                            <div className="col-span-3 py-2 rounded-md flex items-center w-full text-gray-900 font-medium border text-sm border-gray-800 px-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                                <span className="font-bold text-sm">Upload files</span>
                                            </div>
                                            <div className="col-span-9 font-normal">Drag & drop your resume (Max 25 MB)</div>
                                        </div>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only"></input>
                                    </label>
                                    <p className="text-sm text-gray-400">Do not worry if you dont have a resume. You can create one manually later if you dont have one.</p>
                                </div>
                                <div className="flex justify-end">
                                    <button type="button" className="flex justify-cente py-2 px-4 border border-transparent font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Save
                                    </button>
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
                                            className="inline-block h-24 w-24 rounded-xl ring-2 bg-white ring-white"
                                            src={Avatar}
                                            alt=""
                                        ></img>

                                    </div>
                                    <div className="px-6">
                                        <div className="py-3 space-y-2">
                                            <div className="flex justify-center mt-3">
                                                <div className="font-medium bg-blue-100 rounded-md px-2 py-1">#Basic</div>
                                            </div>
                                            <div>
                                                <div className="py-2 flex items-center px-4 space-x-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="text-sm font-medium">Try premium for free for 1month</span>
                                                </div>
                                            </div>
                                            <button className="bg-blue-700 w-full flex justify-center py-2 text-white rounded-md shadow-md">
                                                Upgrade
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
                            <div className="bg-white w-full rounded-md shadow-lg py-3 h-96">
                                <div className="font-bold text-gray-700 text-lg px-6 py-2 border-b border-gray-300">Certifications</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
