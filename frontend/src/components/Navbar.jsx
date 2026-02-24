import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { MainContext } from '../context/MainContext'
import Cookies from "js-cookie"
import { logo, menu_icon, cross_icon } from "../assets/assets"

import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { FaTaxi } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdContacts } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { RiLoginCircleFill } from "react-icons/ri";
import { RiLogoutCircleRFill } from "react-icons/ri";


/*

                    {
                        token !== '' && <Link onClick={() => setIsMenu((prev) => !prev)} to="/myProfile" className="flex items-center gap-x-3 px-4   cursor-pointer    ">
                            <FaCircleUser className="self-center  text-black" aria-level={`Profile`} />
                            <p className="self-center text-lg ">My Profile</p>
                        </Link>
                    }
                    <div>
                        {
                            token === '' ? <Link onClick={() => setIsMenu((prev) => !prev)} to="/login" className="flex items-center gap-x-3 px-4   cursor-pointer ">
                                <RiLoginCircleFill className="self-center text-blue-600" aria-level={`Login`} />
                                <p className="self-center text-lg text-blue-600 ">Login In </p>                            </Link>
                                : <Link onClick={onClickLogout} className="flex items-center gap-x-3 px-4 cursor-pointer">
                                    <RiLogoutCircleRFill className="self-center text-red-500" aria-level={`Logout`} />
                                    <p className="self-center text-lg text-red-500 ">Logout</p>
                                </Link>
                        }
                    </div>




*/


/*
 {
                        token !== '' && <Link to="/myProfile" className="sm:hidden md:block  px-2 text-sm  text-black    cursor-pointer ">
                            My Profile
                        </Link>
                    }
                    <div className='w-30 '>
                        {
                            token === '' ? <Link to="/login" className="px-4 text-md  hover:text-lg    hover:text-gray-900 cursor-pointer ">
                                <button className='bg-blue-500 outline-none px-7 py-2 rounded-md  text-black hover:bg-blue-600 w-[100%] cursor-pointer '>Login</button>
                            </Link> : <button onClick={onClickLogout} className='bg-red-500 outline-none text-md cursor-pointer px-7  w-[100%] py-2 rounded-md  text-black hover:bg-red-600 cursor-pointer'>Logout</button>
                        }
                    </div>

*/



const Navbar = () => {


    const [isMenu, setIsMenu] = useState(false)

    const { token, setToken, adminPhoneNumber1 } = useContext(MainContext)


    const navigate = useNavigate()

    const onClickLogout = () => {
        Cookies.remove("token")
        setToken('')
        navigate('/')
    }




    return (
        <div className='bg-white '>


            <div className="py-3 px-3 flex items-center justify-between border-b border-slate-300 sm:hidden  ">
                <div className=' px-2'>
                    <Link to="/">
                        <img src={`https://res.cloudinary.com/dchkwygu9/image/upload/v1766978905/web_logobg_tdvtwl.png`} alt="logo" loading="lazy" className="w-[150px] h-[50px]  " />
                    </Link>
                </div>
                <button className=""><a href={`tel:+91${adminPhoneNumber1}`} className="bg-blue-500 px-2 py-2 outline-none cursor-pointer rounded-md   text-white font-bold text-xs self-center" >+91 {adminPhoneNumber1}</a>
                </button>
                <div className='text-center flex items-center w-[30px] h-[30px] mx-3 '>
                    <button type="button" onClick={() => setIsMenu((prev) => !prev)}>
                        {
                            isMenu ? <RxCross1 className="w-[30px] h-[30px]  text-black " aria-label='Close Menu' />
                                : <IoMenu className="w-[30px] h-[30px]  text-black " aria-label='Open menu' />
                        }

                    </button>
                </div>

            </div>

            {/* Small Device Menu Navbar */}

            {

                isMenu && <div className='px-3 py-5 flex flex-col gap-3 md:hidden font-bold  text-black transition-colors duration-300 text-lg '>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/" className="flex items-center gap-x-3 px-4  cursor-pointer     ">
                        <IoHome className="self-center  text-black" aria-level={`Home`} />
                        <p className="self-center text-lg">Home</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/booking/1" className="flex items-center gap-x-3 px-4 cursor-pointer    ">
                        <FaTaxi className="self-center  text-black" aria-level={`Booking`} />
                        <p className="self-center text-lg">Booking</p>
                    </Link>

                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/airportTaxi" className="flex items-center gap-x-3 px-4  cursor-pointer    ">
                        <FaCar className="self-center  text-black" aria-level={`Taxi`} />
                        <p className="self-center text-lg ">Airport Taxi</p>
                    </Link>

                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/localTaxi" className="flex items-center gap-x-3 px-4  cursor-pointer    ">
                        <FaCar className="self-center  text-black" aria-level={`Taxi`} />
                        <p className="self-center text-lg ">Local Taxi</p>
                    </Link>


                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/outStation" className="flex items-center gap-x-3 px-4   cursor-pointer    ">
                        <FaCar className="self-center  text-black" aria-level={`Taxi`} />
                        <p className="self-center text-lg ">Outstation</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/luxuryCars" className="flex items-center gap-x-3 px-4   cursor-pointer    ">
                        <FaCar className="self-center  text-black" aria-level={`Taxi`} />
                        <p className="self-center text-lg ">Luxury Cars</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/termsOfServices" className="flex items-center gap-x-3 px-4   cursor-pointer    ">
                        <MdMiscellaneousServices className="self-center  text-black" aria-level={`Services`} />
                        <p className="self-center text-lg ">Services</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/aboutUs" className="flex items-center gap-x-3 px-4   cursor-pointer    ">
                        <BsInfoCircleFill className="self-center  text-black" aria-level={`About`} />
                        <p className="self-center text-lg ">About Us</p>
                    </Link>
                    <Link onClick={() => setIsMenu((prev) => !prev)} to="/contactUs" className="flex items-center gap-x-3 px-4   cursor-pointer    ">
                        <MdContacts className="self-center  text-black" aria-level={`Contact`} />
                        <p className="self-center text-lg ">Contact Us</p>
                    </Link>

                </div>
            }

            {/* Medium Screen  */}

            <div className=" hidden sm:block sm:flex flex-row items-center justify-around px-6 py-4 border-b border-slate-300 font-bold">
                <Link to="/" className=' flex items-center'>
                    <img src={logo} alt="logo" className="w-[200px] h-[70px] " />
                </Link>

                <div className='flex gap-x-4 items-center'>

                    <Link to="/" className="px-2 text-sm  text-black   cursor-pointer ">
                        Home
                    </Link>
                    <Link to="/booking/1" className=" px-2 text-sm  text-black    cursor-pointer ">
                        Booking
                    </Link>
                    <Link to="/airportTaxi" className="sm:hidden md:block  px-2 text-sm  text-black   cursor-pointer ">
                        Airport Taxi
                    </Link>
                    <Link to="/localTaxi" className="sm:hidden md:block  px-2 text-sm  text-black   cursor-pointer ">
                        Local Taxi
                    </Link>

                    <Link to="/outStation" className="sm:hidden md:block  px-2 text-sm  text-black    cursor-pointer ">
                        Outstation
                    </Link>

                    <Link to="/luxuryCars" className="sm:hidden md:block  px-2 text-sm  text-black    cursor-pointer ">
                        Luxury Cars
                    </Link>
                    <Link to="/termsOfServices" className="hidden   px-2 text-sm  text-black    cursor-pointer ">
                        Services
                    </Link>
                    <Link to="/aboutUs" className="sm:hidden  px-2 text-sm  text-black    cursor-pointer ">
                        About Us
                    </Link>
                    <Link to="/contactUs" className="sm:hidden   px-2 text-sm  text-black    cursor-pointer ">
                        Contact Us
                    </Link>

                </div>
            </div>

        </div >
    )
}


export default Navbar