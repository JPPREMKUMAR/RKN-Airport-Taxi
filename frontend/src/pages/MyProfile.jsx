import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { TailSpin } from "react-loader-spinner"
import { MainContext } from "../context/MainContext"
import axios from "axios"

const MyProfile = () => {
    const { backendUrl, token } = useContext(MainContext)
    const [userDetails, setUserDetails] = useState({})
    const [isLoader, setIsLoader] = useState(true)
    console.log(userDetails)
    const { name, mobile, email } = userDetails
    const getUserProfile = async () => {

        const response = await axios.post(backendUrl + "/api/user/userProfile", {}, { headers: { token: token } })
        // console.log(response.data)
        const responseData = response.data.userDetails
        console.log(responseData)
        setUserDetails(responseData)
        setIsLoader(false)

    }

    useEffect(() => {

        getUserProfile()
    }, [])


    return (
        <div className="px-3 ">
            <div className="my-3">
                <h1 className="text-2xl font-semibold  text-center sm:text-4xl text-[#FFD700]">MyProfile</h1>
                <div className="flex items-center justify-center gap-x-3 text-md font-bold my-3 sm:text-3xl">
                    <Link to="/" className="cursor-pointer">Home</Link>
                    <h1>/
                        My Profile</h1>
                </div>
            </div>
            <div>
                {
                    isLoader ? <div className="flex flex-col items-center justify-center h-70">
                        <TailSpin width={50} heigth={50} color="blue" />

                    </div> : <div className="bg-white shadow-md px-5 py-5 mx-4 sm:mx-10 sm:my-10 sm:px-10 py-10 ">
                        <div className="flex flex-col gap-y-2 my-2">
                            <h1 className="text-xl sm:text-2xl font-semibold">Name</h1>
                            <p className="text-sm sm:text-xl text-gray-600 font-bold">{name}</p>
                        </div>
                        <div className="flex flex-col gap-y-2 my-2">
                            <h1 className="text-xl sm:text-2xl font-semibold">Mobile</h1>
                            <p className="text-sm sm:text-xl text-gray-600 font-bold">{mobile}</p>
                        </div>
                        <div className="flex flex-col gap-y-2 my-2">
                            <h1 className="text-xl sm:text-2xl font-semibold">Email</h1>
                            <p className="text-sm sm:text-xl text-gray-600 font-bold">{email}</p>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}


export default MyProfile