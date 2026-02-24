
import { useState, useContext, useEffect } from "react"
import axios from "axios"
import { MainContext } from "../context/MainContext"
import Cookies from "js-cookie"
import { TailSpin } from "react-loader-spinner"
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { toast } from "react-toastify"




const Login = () => {

    const { backendUrl, token, setToken, navigate } = useContext(MainContext)
    const [adminEmail, setAdminEmail] = useState('')
    const [adminPassword, setAdminPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const [isShow, setIsShow] = useState(false)


    const onSubmitHandler = async (event) => {
        setIsLoading(true)
        event.preventDefault()

        // console.log(adminEmail, adminPassword)
        try {


            const response = await axios.post(backendUrl + "/api/admin/login", { adminEmail, adminPassword })
            //console.log(response.data, "ERROR")

            let checking;

            if (response.data.success === true) {
                //console.log(response.data)
                const getToken = response.data.token
                navigate("/")
                //console.log(getToken)
                setToken(getToken)
                Cookies.set("adminToken", getToken, { expires: 1 })
                setError('')
                checking = "Success"
                toast.success("Login Succcessful")


            }
            setIsLoading(false)


        } catch (e) {
            //console.log(e)
            //console.log(e.response.data.message)
            // setError(e.response.data.message)
            toast.error(e.response.data.message)
            setIsLoading(false)
        }





    }



    useEffect(() => {
        //console.log(token)
        if (token !== '' && token !== undefined) {
            navigate("/")
        }
    }, [token])


    const onChangeShow = () => {
        setIsShow((prev) => (!prev))

    }


    return (

        <div className="min-h-screen flex  justify-center bg-gray-300 px-2  sm:flex-col sm:items-center">


            <div className="my-10 bg-white shadow-md rounded-sm px-2 w-full h-[50%] sm:w-1/2 sm:px-10 ">
                <form className="px-5 py-5 my-5" onSubmit={onSubmitHandler}>

                    <h1 className="text-gray-600 font-bold text-xl sm:text-2xl text-center">Admin Login</h1>

                    <div className="flex  flex-col gap-y-2 my-5">

                        <label htmlFor="email" className="text-gray-700 text-xl font-semibold">Admin Email Address</label>
                        <div className="border px-2 py-2 rounded-md">
                            <input id="email" type="email" placeholder="Enter Your Admin Email" className="outline-none w-full px-2" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} required />
                        </div>
                    </div>

                    <div className="flex  flex-col gap-y-2 my-5">

                        <label htmlFor="password" className="text-gray-700 text-xl font-semibold">Admin Password </label>
                        <div className="border px-2 py-2 rounded-md flex justify-between">
                            <input id="password" type={`${isShow ? "text" : "password"}`} placeholder="Enter Your Admin Password" className="outline-none w-full px-2" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} required />

                            {
                                isShow ? <BiSolidHide aria-label="Hide" className="w-7 h-7 mr-3" onClick={onChangeShow} /> : <BiSolidShow aria-label="show" onClick={onChangeShow} className="w-7 h-7 mr-3" />
                            }



                        </div>
                    </div>
                    <div className="flex justify-center my-10">
                        {
                            isLoading ? <div>
                                <TailSpin width={50} height={50} color="blue" />

                            </div> : <button type="submit" className="bg-blue-500 text-white outline-none rounded-md px-10 py-2 text-md font-semibold">Login</button>
                        }


                    </div>
                    <div>
                        {
                            error !== '' && <p className="text-md font-semibold text-red-500 ">{error}</p>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login