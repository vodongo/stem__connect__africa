import React, { useEffect, useState } from 'react'

function Recentactivities(props) {
    const [data, setData] = useState([])
    const [isloading, setisLoading] = useState(true)
    const [loader] = useState([1, 2, 3, 4, 5, 6, 7, 8])

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
        const user__db = require('../../backend/notifications.json')
        const new__array = user__db.filter(e => e.user__id !== props.user.user__id)
        const results = getRandom(new__array, 4)
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
            <div className="flex items-center justify-between px-4 py-2">
                <div className="text-gray-700 text-base font-medium">Recent activities</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            </div>
            <hr />
            <div className="py-3">
                {isloading ? (
                    <div>
                        {
                            loader.map((index) => (
                                <div key={index}>
                                    <div className="space-y-3">
                                        <div className="space-y-2">
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
                    <div className="px-4">
                        {
                            data.map((item, index) => (
                                <div key={item.id ? item.id : index}>
                                    <div className="py-1">
                                        <div className="text-xs font-medium text-gray-500">{item.name}</div>
                                        <div className="text-sm font-medium text-gray-600 truncate">{item.content}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default Recentactivities
