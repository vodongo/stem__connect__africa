import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Avatar from '../../assets/images/avatar.png'
import Follower from '../../assets/images/follower.png'

function Recommendations(props) {
    const history = useHistory()
    const [data, setData] = useState([])
    const [isloading, setisLoading] = useState(true)
    const [loader] = useState([1, 2, 3])

    useEffect(() => {
        function checkuserprops() {
            if (props.user) {
                checkandgetrandomusers()
                setisLoading(false)
            }
        }
        if (isloading === true) checkuserprops()
    })

    // check and get random users
    function checkandgetrandomusers() {
        const user__db = require('../../backend/users.json')
        const new__array = user__db.filter(e => e.user__id !== props.user.user__id)
        const results = getRandom(new__array, 3)
        setData(results)
    }

    // get random 5 users
    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="px-4 py-2 text-gray-700 text-base font-medium">Recommendations</div>
                <img src={Follower} className="w-10 h-10" alt=""></img>
            </div>
            <hr />
            <div className="px-4 py-3">
                {isloading ? (
                    <div>
                        {
                            loader.map((index) => (
                                <div key={index}>
                                    <div className="grid grid-cols-12 items-center space-y-6">
                                        <div className="col-span-2 flex-shrink-0 mt-1">
                                            <div className="animate-pulse flex justify-center">
                                                <div className="rounded-full bg-gray-200 h-10 w-10"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-2 col-span-10">
                                            <div className="animate-pulse flex justify-center">
                                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                            </div>
                                            <div className="animate-pulse flex justify-center">
                                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
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
                            data.map((item, index) => (
                                <div key={item.id ? item.id : index}>
                                    <div className="flex space-x-2">
                                        <div className="flex-shrink-0 mt-1">
                                            <img className="h-10 w-10 rounded-full" src={Avatar} alt="">
                                            </img>
                                        </div>
                                        <div className="space-y-1">
                                            <div>
                                                <div className="text-md font-medium text-gray-600">{item.name}</div>
                                                <p className="overflow-ellipsis overflow-hidden h-6 text-sm text-gray-500">{item.about}</p>
                                                <div className="flex items-center space-x-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-xs text-gray-700 font-medium">{item.country}</span>
                                                </div>
                                            </div>
                                            <div className="py-2">
                                                <button onClick={() => history.push('/my-work')} className="flex items-center border border-gray-500 font-medium rounded-full px-3 py-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                                    </svg> <span>Follow</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div>
                            <button className="font-medium mt-3 flex focus:outline-none items-center flex-wrap space-x-1 text-gray-500">
                                <span>View all recommendations</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Recommendations
