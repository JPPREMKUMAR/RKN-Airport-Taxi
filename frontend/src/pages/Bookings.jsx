import { useState, useContext, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { MainContext } from '../context/MainContext'

import axios from "axios"
import { TailSpin } from "react-loader-spinner"
import sendBookingMail from "../utils/sendBookingMail.js"
import ContactDetails from "../components/ContactDetails.jsx"
import ScrollToTop from "../components/ScrollToTop.jsx"

const Bookings = () => {

    const { userDetails, getUserProfile, categories, backendUrl, navigate, pickupTimeList, monthsList, token } = useContext(MainContext)


    const { id } = useParams()


    const [vehiclesNamesList, setVehiclesNamesList] = useState(categories[0].vehicleNames)


    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [bookingType, setBookingType] = useState("AIRPORT TAXI")
    const [bookingTypeId, setBookingTypeId] = useState("AIRPORT_TAXI")
    const [vehicle, setVehicle] = useState('');
    const [pickUpPoint, setPickUpPoint] = useState('')
    const [dropPoint, setDropPoint] = useState('')
    const [cityActive, setCityActive] = useState('City To Airport')
    const [pickUpTime, setpickUpTime] = useState(pickupTimeList[0])
    const [minDate, setMinDate] = useState('')
    const [pickUpDate, setPickUpDate] = useState('')
    const [price, setPrice] = useState(1000)


    const [isLoader, setIsLoader] = useState(true)



    //console.log(vehiclesNamesList, '-> Vehicle Names ')


    const getPresentVehiclesList = () => {

        const getItem = categories.find((item) => item.category === bookingType)
        // console.log(getItem)
        const { vehicleNames } = getItem;
        // console.log(vehicleNames)
        setVehiclesNamesList(vehicleNames)

    }






    useEffect(() => {

        getPresentVehiclesList()
    }, [bookingType])



    const getPresentItem = async () => {
        if (id.length === 24) {
            const response = await axios.post(backendUrl + `/api/user/getVehicle/${id}`)

            //console.log(response.data)
            if (response.data.success === true) {
                //console.log(response.data.vehicleDetails, "present Item")
                const { bookingType, vehicle, price } = response.data.vehicleDetails

                setPrice(price)
                setBookingType(bookingType)
                setVehicle(vehicle)




            } else {
                setBookingType(categories[0].category)
                setVehicle(vehiclesNamesList[0].vehicleName)
            }

        } else {
            setBookingType(categories[0].category)
            setVehicle(vehiclesNamesList[0].vehicleName)
        }
        setIsLoader(false)
    }


    useEffect(() => {
        getPresentItem()
    }, [])







    const onChangeBookingType = (e) => {
        setBookingType(e.target.value)
        const getItem = categories.find((item) => item.category === e.target.value)
        //console.log(getItem.vehicleNames[0])
        const { vehicleName } = getItem.vehicleNames[0]
        //console.log(vehicleName)
        setVehicle(vehicleName)
    }




    const onSubmitHandler = async (event) => {
        setIsLoader(true)
        event.preventDefault()
        //console.log("Book Now Button Clicked")
        //console.log(name, mobile, email, bookingType, vehicle, pickUpPoint, dropPoint, pickUpTime, pickUpDate)
        const convertPickUpdate = new Date(pickUpDate)


        const day = convertPickUpdate.getDate()
        const month = convertPickUpdate.getMonth()
        const year = convertPickUpdate.getFullYear()
        const monthName = monthsList[month]
        //console.log(monthName)
        //console.log(day, month, year)
        // console.log(day)
        const newPresentDateString = `${day}-${monthName}-${year}`
        // console.log(newPresentDateString)

        //console.log(pickUpTime)
        const pickUpTimeString = pickUpTime['time']
        //console.log(pickUpTimeString)
        //console.log(token)



        const response = await axios.post(backendUrl + "/api/book/booking", {
            name,
            mobile,
            email,
            bookingType,
            vehicle,
            pickUpPoint,
            dropPoint,
            pickUpTime: pickUpTimeString,
            pickUpDate: newPresentDateString,
            price
        })
        console.log(response.data)
        if (response.data.success === true) {
            const { bookingId } = response.data.bookingDetails
            const thankyouUrl = `/thankyou/${bookingId}`
            navigate(thankyouUrl)
            setIsLoader(false)






        }
        setIsLoader(false)


    }

    useEffect(() => {
        getUserProfile()

    }, [])
    useEffect(() => {
        //console.log(userDetails.name)
        //console.log(userDetails.mobile)
        //console.log(userDetails.email)
        // console.log(userDetails)
        if (userDetails !== undefined) {

            if (userDetails.name !== undefined && userDetails.mobile !== undefined && userDetails.email !== undefined) {

                setName(userDetails.name)
                setMobile(userDetails.mobile)
                setEmail(userDetails.email)
            }

        }


    }, [userDetails])

    useEffect(() => {

        if (cityActive === 'City To Airport') {
            setDropPoint("Bengaluru International Airport")
            setPickUpPoint("")
        } else {
            setPickUpPoint("Bengaluru International Airport")
            setDropPoint("")
        }
    }, [cityActive])

    useEffect(() => {

        const today = new Date();
        const yyyy = today.getFullYear()
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0")
        const formatedDate = `${yyyy}-${mm}-${dd}`
        // console.log(formatedDate);
        setMinDate(formatedDate);
        setPickUpDate(formatedDate);



    }, [])


    //console.log(vehicle, bookingType)

    return (
        <div className='px-5 py-2 sm:flex sm:items-center sm:justify-center w-full min-h-screen bg-[#F9FAFB]'>
            <ScrollToTop />
            <div className='w-full sm:flex sm:justify-center '>

                {
                    isLoader ? <div className='min-h-screen flex items-center justify-center'>
                        <TailSpin width={50} heigth={50} color='blue' />
                    </div> :
                        <div className="px-4 py-3 border border-gray-700 rounded-md sm:w-1/2 sm:py-5 my-5">
                            <h1 className='text-3xl text-center font-bold text-blue-600'>Contact & Pick Up Details </h1>

                            <form className="my-3 px-3  sm:w-[3/4]" onSubmit={onSubmitHandler}>
                                <div className='my-1'>
                                    <label htmlFor="name" className='text-xl font-semibold text-gray-700'>Name</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                        <input type="text" id="name" placeholder="Enter Your Full Name" className='w-full outline-none font-bold text-gray-800 placeholder-gray-400' value={name} onChange={(event) => setName(event.target.value)} required />
                                    </div>
                                </div>
                                <div className='my-1'>
                                    <label htmlFor="mobile" className='text-xl font-semibold text-gray-700'>Mobile</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                        <input type="number" id="mobile" placeholder="Enter 10 Digit Number" className='w-full outline-none font-bold  text-gray-800 placeholder-gray-400' value={mobile} onChange={(event) => setMobile(event.target.value)} required />
                                    </div>
                                </div>
                                <div className='my-1'>
                                    <label htmlFor="email" className='text-xl font-semibold text-gray-700 '>Email</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                        <input type="email" id="email" placeholder="Enter Your Email Address" className='w-full outline-none font-bold  text-gray-800 placeholder-gray-400' value={email} onChange={(event) => setEmail(event.target.value)} required />
                                    </div>
                                </div>
                                <div className='my-1'>
                                    <label htmlFor="vehicleType" className='text-xl font-semibold text-gray-700 '>Booking Type</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                        <select className='w-full outline-none  text-gray-800 placeholder-gray-400 font-bold' id="vehicleType" value={bookingType} onChange={onChangeBookingType}>
                                            {
                                                categories.map((item, index) => (

                                                    <option key={index} className=' text-gray-800 placeholder-gray-400 font-bold' >{item.category}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='my-1'>
                                    <label htmlFor="vehicle" className='text-xl font-semibold'>Vehicle</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2 text-gray-700 '>
                                        <select className='w-full outline-none  text-gray-800 placeholder-gray-400 font-bold' id="vehicle" value={vehicle} onChange={(e) => setVehicle(e.target.value)}  >
                                            {
                                                vehiclesNamesList.map((item, index) => (
                                                    <option key={index} className=' text-gray-800 placeholder-gray-400 font-bold'  >{item.vehicleName}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='my-4 flex flex-col gap-y-2'>

                                    <div className='flex gap-x-2 items-center text-md font-bold'>
                                        <input type="radio" id="cityToAirdport" name="city" value={`City To Airport`} onChange={(event) => setCityActive(event.target.value)} checked={cityActive === 'City To Airport' ? true : false} className=' text-gray-800 placeholder-gray-400' />
                                        <label htmlFor="cityToAirdport" className=' text-gray-700 ' >City To Airport</label>
                                    </div>
                                    <div className='flex gap-x-2 items-center text-md font-bold'>
                                        <input type="radio" id="AirdportToCity" name="city" value={`Airport To City`} onChange={(event) => setCityActive(event.target.value)} checked={cityActive === 'Airport To City' ? true : false} className=' text-gray-800 placeholder-gray-400' />
                                        <label htmlFor="AirdportToCity" className=' text-gray-700 ' >Airport To City</label>
                                    </div>
                                </div>
                                <div className='my-1'>
                                    <label htmlFor="pickupPoint" className='text-xl font-semibold text-gray-700 '>Pick Up Point</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                        {
                                            cityActive === 'Airport To City' ? <p className='w-full outline-none font-bold  text-gray-800 placeholder-gray-400'>Bengaluru International Airport</p> : <input type="text" id="pickupPoint" placeholder="Enter Your Pick Up Location" className='w-full outline-none font-bold' value={pickUpPoint} onChange={(event) => setPickUpPoint(event.target.value)} required />
                                        }

                                    </div>
                                </div>
                                <div className='my-1'>
                                    <label htmlFor="dropPoint" className='text-xl font-semibold text-gray-700 '>Drop Point</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>
                                        {
                                            cityActive === 'City To Airport' ? <p className='w-full outline-none font-bold  text-gray-800 placeholder-gray-400'>Bengaluru International Airport</p> : <input type="text" id="dropPoint" placeholder="Enter Your Drop Location" className='w-full outline-none font-bold' value={dropPoint} onChange={(event) => setDropPoint(event.target.value)} required />
                                        }
                                    </div>
                                </div>


                                <div className='my-1'>
                                    <label htmlFor="date" className='text-xl font-semibold text-gray-700 '>Pickup Date</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2'>

                                        <input type="date" id="date" className='w-full  outline-none font-bold  text-gray-800 placeholder-gray-400' min={minDate} value={pickUpDate} onChange={(event) => setPickUpDate(event.target.value)} required />
                                    </div>
                                </div>



                                <div className='my-1'>
                                    <label htmlFor="vehicleType" className='text-xl font-semibold text-gray-700 '>Pickup Time</label>
                                    <div className='border px-3 py-2 bg-white rounded-sm my-2 overflow-y-scrool'>
                                        <select className='w-full outline-none overflow-auto  text-gray-800 placeholder-gray-400' id="vehicleType" defaultValue={pickUpTime} onChange={(event) => setpickUpTime(event.target.value)}>
                                            {
                                                pickupTimeList.map((item) => (

                                                    <option key={item.id} className=' text-gray-800 placeholder-gray-400' >{item.time}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className='flex justify-center my-5'>

                                    <button type="submit" className='bg-blue-600 px-7 py-2 outline-none rounded-md text-white font-semibold hover:bg-[#005FCC] cursor-pointer '>Book Now</button>
                                </div>

                            </form>
                        </div>
                }

            </div>


        </div>
    )
}


export default Bookings