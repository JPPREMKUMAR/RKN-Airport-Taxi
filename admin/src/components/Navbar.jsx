import { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import { MainContext } from "../context/MainContext"
import { logo, menu_icon, cross_icon } from "../assets/assets"
import Cookies from "js-cookie"

import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";





const Navbar = () => {

    const { token, navigate, setToken } = useContext(MainContext)

    const [isMenu, setIsMenu] = useState(false)


    const changeManu = () => {
        setIsMenu((prev) => !prev)
    }


    const onClickLogout = () => {

        Cookies.remove("adminToken")
        setToken("")
        setIsMenu(false)
        navigate("/login")


    }

    useEffect(() => {

        if (token === '' || token === undefined) {
            return navigate("/login")
        }


    }, [])


    /*
 <Link to="/addItem" className="text-xl text-black font-semibold "><p>Add Vehicle</p></Link>
                    <Link to="/allVehicles" className="text-xl text-black font-semibold "><p>All Vehicles</p></Link>

    <Link to="/addItem" className="text-md text-black font-semibold" onClick={(prev) => setIsMenu(!prev)} ><p>Add Vehicle</p></Link>
                        <Link to="/allVehicles" className="text-md text-black font-semibold" onClick={(prev) => setIsMenu(!prev)}><p>All Vehicles</p></Link>
  
                    */



    return (


        <div className=" w-full bg-white">
            <div className="flex justify-between  items-center sm:w-full sm:justify-between px-5 py-2 ">

                <div className="sm:w-1/3" onClick={() => navigate("/")} >
                    <img src={logo} alt="logo" loading="lazy" className="w-[150px] h-[50px]  " />
                </div>

                <div className='sm:hidden text-center flex items-center w-[30px] h-[30px]  cursor-pointer'>
                    <button type="button" onClick={() => setIsMenu((prev) => !prev)}>
                        {
                            isMenu ? <RxCross1 className="w-[30px] h-[30px] text-black " />
                                : <IoMenu className="w-[30px] h-[30px] text-black " />
                        }

                    </button>
                </div>

                <div className="hidden  sm:block sm:flex justify-around gap-x-15  items-center w-2/3">

                    <Link to="/" className="text-xl text-black font-semibold " ><p>Home</p></Link>


                    {
                        /*/ 
                    
                            <Link to="/Categories" className="text-xl text-black font-semibold "><p>Categories</p></Link>
                        /*/
                    }


                    {
                        token === undefined || token === "" ? <Link to="/login" className="text-md font-semibold" onClick={(prev) => setIsMenu(!prev)}>
                            <button className="bg-blue-500 text-black rounded-md px-8 py-2 ">Login</button>

                        </Link> :
                            <button onClick={onClickLogout} className="text-white bg-red-500 rounded-md px-2 py-2 outline-none w-30 font-semibold cursor-pointer">Logout</button>
                    }


                </div>

            </div>

            <div>
                {/*/ Small Devices /*/}

                {
                    isMenu && <div className="sm:hidden flex flex-col gap-y-4  p-4 ">


                        <Link to="/" className="text-md text-black font-semibold" onClick={(prev) => setIsMenu(!prev)}><p>Home</p></Link>

                        {

                            /*/
                        
                                <Link to="/Categories" className="text-md text-black font-semibold" onClick={(prev) => setIsMenu(!prev)}><p>Categories</p></Link>
                        
                            /*/
                        }
                        {
                            token === undefined || token === "" ? <Link to="/login" className="text-md font-semibold cursor-pointer" onClick={(prev) => setIsMenu(!prev)}>

                                <button className="bg-blue-500 text-black rounded-md px-8 py-2 ">
                                    Login
                                </button>
                            </Link> :
                                <button onClick={onClickLogout} className="text-black bg-red-500 rounded-md px-2 py-2 outline-none w-30 font-semibold cursor-pointer">Logout</button>
                        }

                    </div>
                }
            </div>
        </div>
    )
}



export default Navbar