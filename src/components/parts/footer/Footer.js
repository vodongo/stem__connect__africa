import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Terms from "../../../assets/images/Terms and Privacy.pdf"

function Footer() {
    let history = useHistory()
    return (
        <div>
            <div className="bg-gray-900">
                <div className="max-w-6xl mx-auto py-10 lg:py-16 px-6 lg:px-6 xl:px-0">
                    <div className="grid grid-cols-1 space-y-5 lg:space-y-0 lg:grid-cols-11 gap-x-10">
                        <div className="text-white lg:col-span-4">
                            <div className="font-extrabold">STEM CONNECT AFRICA</div>
                            <p style={{ color: '#94A3B8', fontSize: '15px', fontWeight: '500' }} className="mt-4 antialiased">The major objectives to achieve in STEM education include developing a solid knowledge base among students and enhancing their interest in Science, Technology and Mathematics; strengthening their ability to integrate and apply knowledge and skills; nurturing their creativity, collaboration and problem solving skills.</p>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="font-bold text-white">USEFUL LINKS</div>
                            <Link style={{ color: '#94A3B8', fontSize: '15px', fontWeight: '500' }} to="/talents"><div className="antialiased cursor-pointer mt-4">Talents</div></Link>
                            <Link style={{ color: '#94A3B8', fontSize: '15px', fontWeight: '500' }} to="/faqs"><div className="antialiased cursor-pointer mt-1">FAQs Page</div></Link>
                            <Link style={{ color: '#94A3B8', fontSize: '15px', fontWeight: '500' }} to="/login"><div className="antialiased cursor-pointer mt-1">Login</div></Link>
                            <Link style={{ color: '#94A3B8', fontSize: '15px', fontWeight: '500' }} to="/blog"><div className="antialiased cursor-pointer mt-1">Blog</div></Link>
                            <Link style={{ color: '#94A3B8', fontSize: '15px', fontWeight: '500' }} to="/api/developers"><div className="antialiased cursor-pointer mt-1">API for Developers</div></Link>
                        </div>
                        <div className="text-white lg:col-span-2">
                            <div className="font-bold">TERMS</div>
                            <a href={Terms} target="_blank" rel="noreferrer"><div style={{ color: '#94A3B8', fontSize: '15px', fontWeight: '500' }} className=" cursor-pointer antialiased mt-4">Terms of Services</div></a>
                            <a href={Terms} target="_blank" rel="noreferrer"><div style={{ color: '#94A3B8', fontSize: '15px', fontWeight: '500' }} className="cursor-pointer antialiased mt-1">Privacy</div></a>
                            <a href={Terms} target="_blank" rel="noreferrer"><div style={{ color: '#94A3B8', fontSize: '15px', fontWeight: '500' }} className="cursor-pointer antialiased mt-1">Code of conduct</div></a>
                        </div>
                        <div className="text-white lg:col-span-3">
                            <div className="font-bold">SOCIAL MEDIA</div>
                            <div className="flex items-center space-x-2 mt-4">
                                <a href="https://www.facebook.com/stemconnectafricatalent/" rel="noreferrer" target="_blank" className="py-2 px-2 shadow rounded-md" style={{ backgroundColor: '#3B5998' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: 'white', transform: '-ms-filter' }}><path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127 C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"></path></svg>
                                </a>
                                <a href="https://twitter.com/connect_stem" target="_blank" rel="noreferrer" className="py-2 px-2 shadow rounded-md" style={{ backgroundColor: '#55ACEE' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: 'white', transform: '-ms-filter' }}><path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path></svg>
                                </a>
                                <a href="mailto:info@jogevk.com" className="py-2 px-2 shadow rounded-md" style={{ backgroundColor: '#dd4b39' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: 'white', transform: '-ms-filter' }}><path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28 c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233 c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934 C20.485,11.453,20.404,10.884,20.283,10.356z"></path></svg>
                                </a>
                            </div>
                            <div className="py-4 space-y-3">
                                <p className="antialiased" style={{ color: '#94A3B8', fontSize: '15px', fontWeight: '500' }}>Join our growing commuinty</p>
                                <button onClick={() => history.push('/signup')} className="bg-white focus:outline-none hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 shadow rounded">Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center border-t border-gray-700 py-6 flex-wrap px-4 lg:px-0">
                    <div className="text-gray-400 text-xs">© 2021 Stem Connect Africa. Designd By Kevin Odongo All Rights Reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
