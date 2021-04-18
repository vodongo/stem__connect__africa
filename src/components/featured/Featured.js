import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

function Featured() {
    const history = useHistory()
    const [data, setData] = useState([])
    const [isloading, setisLoading] = useState(true)
    const [loader] = useState([1, 2, 3])

    useEffect(() => {
        function checkuserprops() {
            checkandgetrandomusers()
            setisLoading(false)
        }
        if (isloading === true) checkuserprops()
    })

    // check and get random users
    function checkandgetrandomusers() {
        const user__db = require('../../backend/articles.json')
        const new__array = user__db.filter(e => e.featured === true)
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
            <div className="flex items-center justify-start">
                <div className="px-4 py-2 text-gray-700 text-base font-medium">Featured articles</div>
            </div>
            <hr />
            <div className="px-4 py-3">
                {isloading ? (
                    <div>
                        {
                            loader.map((index) => (
                                <div key={index}>
                                    <div className="space-y-6">
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
                    <div className="space-y-3">
                        {
                            data.map((item, index) => (
                                <div key={item.id ? item.id : index}>
                                    <Link to="/" className="py-2">
                                        <div className="text-xs font-medium text-gray-500">{index + 1}. By {item.author}</div>
                                        <div className="text-lg font-bold text-gray-600 truncate">{item.title}</div>
                                        <div className="text-sm truncate text-gray-400">{item.content}</div>
                                    </Link>
                                </div>
                            ))
                        }
                        <div>
                            <button onClick={() => history.push("/featured")} className="font-medium mt-3 flex focus:outline-none items-center flex-wrap space-x-1 text-gray-500">
                                <span>View all featured</span>
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

export default Featured
