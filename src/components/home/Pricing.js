import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Pricing() {
    const [items, setItems] = useState([])
    useEffect(() => {
        const values = [
            {
                id: 121,
                title: "Basic",
                price: "0",
                text: "Start for free and upgrade when you are satisfied with the services provided!",
                content: ["Custom Cover Photo.", "Unlock rewards", "Unlimited project bookmarks", "30 Bids per month", "Unlimited blogging", "Limited bidding", "Limited invoicing"]
            },
            {
                id: 122,
                title: "Premium",
                price: "11",
                text: "In you are not satisfied, contact us within 14 days and we will send you full refund.",
                content: ["Everything basic +", "Unlimited rewards.", "Unlimited bidding", "Unlimited invoicing", "Reporting and insights"]
            },
        ]
        setItems(values)
    }, [])


    return (
        <div className="min-h-screen bg-green-100 ">
            <div className="max-w-6xl mx-auto py-10 lg:py-20 px-6 xl:px-0">
                <div className="max-w-xl mx-auto space-y-3">
                    <div className="text-center text-4xl font-bold">Pricing</div>
                    <div className="text-center mt-4 text-lg text-gray-600">Designed to maximise your success, earnings and future!. Change plans anytime, conditions apply see FAQ</div>
                </div>
                <div className="py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {items.map((item) => (
                            <div key={item.id} className="space-y-3 bg-white rounded-md border border-gray-200 shadow-md py-8">
                                <div className="px-8 space-y-3">
                                <div className="text-3xl font-bold">{item.title}</div>
                                <div className="font-extrabold text-6xl">
                                  ${item.price}
                                  <span className="text-xl font-normal text-gray-400 ml-3">USD / month</span>
                                </div>
                                <div>{item.text}</div>
                                <div className="rounded-md shadow">
                                    <Link to={`/billing/${item.price}`} className="w-full flex cursor-pointer items-center justify-center px-6 py-3 border border-transparent text-base md:text-lg font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700">
                                        Get access
                                    </Link>
                                </div>
                                </div>
                                
                                <div className="py-3">
                                    <hr />
                                </div>
                                <div className="px-8">
                                <div className="flex items-center mb-3">
                                    <span className="font-bold text-black">WHAT'S INCLUDED</span>
                                </div>
                                <div>
                                    {item.content.map((c, index) => (
                                        <div key={index} className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <div className="ml-2 text-lg text-gray-700">{c}</div>
                                        </div>
                                    ))
                                    }
                                </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
