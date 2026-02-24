
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { MainContext } from "../context/MainContext"
import { TailSpin } from "react-loader-spinner"
import BookingItem from "../components/BookingItem"



const Home = () => {


    const { backendUrl, token, navigate } = useContext(MainContext)
    //console.log(backendUrl)
    const [allBookings, setAllBookings] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const getAllBookings = async () => {

        const responseData = await axios.post(backendUrl + "/api/admin/bookings", {}, { headers: { Authorization: `Bearer ${token}` } })
        //console.log(responseData.data.Bookings)
        if (responseData.data.success === true) {
            setAllBookings(responseData.data.Bookings)
        }

        setIsLoading(false)
    }

    useEffect(() => {
        getAllBookings()
    }, [])

    //console.log(allBookings)



    return (

        <div className="min-h-screen m-0 bg-gray-200">
            <h1 className="text-center text-2xl font-semibold sm:text-4xl ">Latest Bookings</h1>

            <div className="my-5 p-5 sm:my-8">

                {
                    isLoading ?
                        <div className="flex justify-center">

                            <TailSpin width={50} height={50} color="blue" />
                        </div>
                        :
                        <div className="grid grid-cols-1 sm:grid-cols-3  gap-x-5 gap-y-5">
                            {
                                allBookings.map((item) => (


                                    <BookingItem item={item} key={item._id} />
                                ))
                            }



                        </div>

                }

            </div>




        </div>
    )
}



export default Home