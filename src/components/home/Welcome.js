import React, { useState, useEffect } from 'react'
import Science from "../../assets/images/chemistry.png"
import Technology from "../../assets/images/innovation.png"
import Engineering from "../../assets/images/engineer.png"
import Mathematics from "../../assets/images/maths.png"

function Welcome() {
    const [items, setItems] = useState([])
    useEffect(() => {
        const values = [
            {
                id: 110,
                title: "Science",
                text: "Sciences provide an understanding of a universal experience, Arts are a universal understanding of a personal experience... they are both a part of us and a manifestation of the same thing... the arts and sciences are avatars of human creativity.",
                src: `${Science}`
            },
            {
                id: 111,
                title: "Technology",
                text: "In the 21st century, scientific and technological innovations have become increasingly important as we face the benefits and challenges of both globalization and a knowledge-based economy. “To succeed in this new information-based and highly technological society, students need to develop their capabilities in STEM to levels much beyond what was considered acceptable in the past..",
                src: `${Technology}`
            },
            {
                id: 112,
                title: "Engineering",
                text: "Engineering or technology is all about using the power of science to make life better for people, to reduce cost, to improve comfort, to improve productivity, etc.",
                src: `${Engineering}`
            },
            {
                id: 113,
                title: "Mathematics",
                text: "Without mathematics, there's nothing you can do. Everything around you is mathematics. Everything around you is numbers.",
                src: `${Mathematics}`
            }
        ]
        setItems(values)
    }, [])


    return (
        <div className="min-h-screen bg-blue-200 ">
            <div className="max-w-6xl mx-auto py-10 lg:py-20 px-6 xl:px-0">
                <div className="max-w-xl mx-auto space-y-3">
                    <div className="text-center text-xl font-light">WELCOME</div>
                    <div className="text-center text-4xl font-bold">Join Stem <span className="text-blue-700">Connect Africa</span></div>
                    <div className="text-center mt-4 text-lg text-gray-600">From Science, Technology, Engineering and Mathematics we have the talent that will help you solve your problems</div>
                </div>
                <div className="py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {items.map((item) => (
                            <div key={item.id} className="space-y-3 bg-white  border border-gray-200 shadow-lg px-6 py-6">
                                <div className="flex items-center">
                                <img
                                    src={item.src}
                                    alt=""
                                    className="w-24 h-24"
                                ></img>
                                <div className="text-xl font-bold ml-2">{item.title}</div>
                                </div>
                                <div>{item.text}</div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
