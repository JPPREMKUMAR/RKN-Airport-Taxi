import { useState, useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { TailSpin } from "react-loader-spinner"
import { MainContext } from "../context/MainContext"
import axios from "axios"
import ScrollToTop from "../components/ScrollToTop"

const Thankyou = () => {
    const { backendUrl, token, navigate, adminPhoneNumber1, adminPhoneNumber2, adminPhoneNumber3, adminEmail1, adminEmail2 } = useContext(MainContext)

    const [isLoader, setIsLoader] = useState(true)
    const [bookingDetails, setBookingDetails] = useState({})


    const params = useParams()

    const { bookingId } = params

    const getBookingDetails = async () => {
        const response = await axios.post(backendUrl + `/api/book/bookingDetails/${bookingId}`, {})
        if (response.data.bookingDetails === null) {
            return navigate("/")
        } else {
            setBookingDetails(response.data.bookingDetails)
        }

        setIsLoader(false)
    }


    useEffect(() => {

        getBookingDetails()

    }, [])

    //console.log(bookingDetails)

    return (
        <div className="px-3 ">
            <ScrollToTop />
            <div className="my-3">
                <h1 className="text-2xl font-semibold  text-center sm:text-4xl">Thank You</h1>
                <div className="flex items-center justify-center gap-x-3 text-md font-bold my-3 sm:text-3xl">
                    <Link to="/" className="cursor-pointer">Home</Link>
                    <h1>/
                        Thankyou</h1>
                </div>
            </div>
            <div>
                {
                    isLoader ? <div className="flex flex-col items-center justify-center h-40">
                        <TailSpin width={50} heigth={50} color="blue" />

                    </div> :
                        <div className=" shadow-md   bg-white rounded-xl ">
                            <div className="  p-5">

                                <div className="flex justify-center items-center mt-6">
                                    <img src="https://res.cloudinary.com/dchkwygu9/image/upload/v1766978905/web_logobg_tdvtwl.png" alt="logo" loading="lazy" className="h-15" />

                                </div>
                                <div className="my-2">
                                    <h1 className="text-black text-xl font-bold text-center my-1">RKN AIRPORT TAXI</h1>
                                    <h1 className="text-black text-center text-xl font-semibold ">Hi <span className="text-blue-600">{bookingDetails.name}</span></h1>
                                    <p className="text-black text-sm font-semibold text-center my-1">We’re excited to let you know your cab booking ID <span className="text-blue-600">RKN {bookingDetails.bookingId}</span> has been successfully confirmed.The Booking details have been sent to your Email ID and Whatsapp.</p>

                                </div>





                            </div>


                        </div>
                }
            </div>

        </div>
    )
}



export default Thankyou