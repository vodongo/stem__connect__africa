import React from 'react'
import Errorbg from "../../assets/images/404.jpg"
import { Link } from 'react-router-dom'

function NoMatch() {
    return (
        <div className="min-h-screen px-6 max-w-xl mx-auto flex justify-center items-center flex-col">
            <img src={Errorbg} alt="404" style={{ height: 'auto'}}></img>
            <div className="font-bold text-2xl lg:text-3xl pb-1">Um, yeah. This is awarkward.</div>
            <div className="text-base mt-2"><span className="text-gray-500">We tried really hard, but couldnt find the page or content you were looking for. You msy find what you are looking for on our </span><Link to="/" className="text-blue-500 font-bold">homepage</Link></div>
        </div>
    )
}

export default NoMatch
