import React from 'react'
import Logo from '../../assets/images/logo.png'
import Loading from '../../assets/images/loading.svg'

function Loader() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center flex-col justify-center py-16 space-x-4">
            <div className="flex space-x-4">
                <div>
                    <img src={Logo} alt="company logo" className="w-10 h-10"></img>
                </div>
                <div className="font-extrabold text-md xl:text-2xl" style={{ color: "white", textShadow: "2px 2px 8px black" }}>STEM CONNECT AFRICA</div>
            </div>
            <img src={Loading} alt="company logo" className="w-24 h-24"></img>
        </div>
    )
}

export default Loader
