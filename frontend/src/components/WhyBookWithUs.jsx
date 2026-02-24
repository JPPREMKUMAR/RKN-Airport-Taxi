
import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const WhyBookWithUs = () => {

    const { adminPhoneNumber1 } = useContext(MainContext)

    return (
        <div className="px-5 py-5 w-full text-gray-50 mx-2 shadow-xl rounded-md">

            <h1 className="text-xl font-bold text-[#FFD700]"> 🚗 WHY BOOK WITH US?</h1>
            <div className="my-3">

                <div className="my-2">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF] ">🕒 1. 24/7 Reliable Service</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">We’re available round the clock to make sure your ride is always on time — day or night.</p>
                    <p className="text-md font-semibold text-gray-700 my-1 flex gap-x-3">
                        <a href={`tel:+91${adminPhoneNumber1}`} className=" hover:text-[#007BFF]" >{adminPhoneNumber1}</a>

                    </p>
                </div>


                <div className="my-2">
                    <h1 className="text-xl font-bold  my-1 text-[#007BFF]">💰 2. Affordable Pricing</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">Transparent and budget-friendly fares with no hidden charges. Get premium rides at local prices.</p>
                </div>

                <div className="my-2">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">🚘 3. Well-Maintained Cabs</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">Our vehicles are regularly inspected for comfort and safety to ensure you travel with peace of mind.</p>
                </div>


                <div className="my-2">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">👨‍✈️ 4. Professional Drivers</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">Experienced, polite, and verified drivers who prioritize your safety and satisfaction.</p>
                </div>


                <div className="my-2">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">🌍 5. Easy Online Booking</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">Book your cab in just a few clicks using our user-friendly web app. Manage all your bookings in one place.</p>
                </div>


                <div className="my-2">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">🧾 6. Instant Confirmation</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">Get instant booking confirmation through SMS and email for every ride.
                        Book your cab anytime — day or night.
                        We’re available 24/7 with instant booking confirmation via SMS and Email.
                        Experience the easiest way to travel with RKN Airport Taxi — Bengaluru’s most trusted taxi partner.
                    </p>
                </div>


            </div>
        </div >
    )
}


export default WhyBookWithUs