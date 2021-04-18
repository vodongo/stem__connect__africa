import React from 'react'
import step01 from "../../assets/images/step-1.png"
import step02 from "../../assets/images/step-2.png"
import step03 from "../../assets/images/step-3.png"

function Howitworks() {
    return (
        <div className="max-w-6xl mx-auto" style={{ minHeight: '500px'}}>
            <div className="py-20 px-6 xl:px-0">
                <div className="text-center max-w-lg space-y-3 mx-auto">
                    <div className="text-4xl font-bold">How It <span className="text-blue-700">works?</span></div>
                    <p>Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 pt-7 gap-6">
                    <div className="w-full py-8 px-4 space-y-3 text-center">
                        <div className="flex justify-center">
                            <div className="w-32 h-32 flex">
                                <div className="text-6xl text-blue-100 font-semibold">01</div>
                                <img
                                    className="inline-block -ml-6 z-10 h-28 w-28 ring-2 ring-white"
                                    src={step01}
                                    alt=""
                                ></img>
                            </div>
                        </div>
                        <div className="font-bold text-xl">Create An Account</div>
                        <div>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</div>
                    </div>
                    <div className="w-full py-8 px-4 space-y-3 text-center">
                        <div className="flex justify-center">
                            <div className="w-32 h-32 flex">
                                <div className="text-6xl text-blue-100 font-semibold">02</div>
                                <img
                                    className="inline-block -ml-6 z-10 h-28 w-28 ring-2 ring-white"
                                    src={step02}
                                    alt=""
                                ></img>
                            </div>
                        </div>
                        <div className="font-bold text-xl">Search projects</div>
                        <div>Don’t get distracted search for projects. Never tell yourself that you need to be the biggest brand in the whole world.</div>
                    </div>
                    <div className="w-full py-8 px-4 space-y-3 text-center">
                        <div className="flex justify-center">
                            <div className="w-32 h-32 flex">
                                <div className="text-6xl text-blue-100 font-semibold">03</div>
                                <img
                                    className="inline-block -ml-6 z-10 h-28 w-28 ring-2 ring-white"
                                    src={step03}
                                    alt=""
                                ></img>
                            </div>
                        </div>
                        <div className="font-bold text-xl">Save & Apply</div>
                        <div>Start by working on what you need at the present moment and then what you need to do tomorrow. So, set yourself manageable targets.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Howitworks
