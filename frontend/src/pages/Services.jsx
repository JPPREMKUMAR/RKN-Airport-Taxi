
import { useContext } from "react"
import { MainContext } from "../context/MainContext"



const Services = () => {


    const { adminPhoneNumber1, adminPhoneNumber2, adminPhoneNumber3, adminEmail1, adminEmail2 } = useContext(MainContext)


    return (
        <div className="px-5 py-5 bg-gray-50 m-4 shadow-md">

            <h1 className="text-center text-[#FFD700] text-2xl sm:text-4xl my-3 sm:my-5 font-bold">Services</h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

                <div className=" p-5">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">🚘 Our Cab Services</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">
                        At<strong>  RKN Airport Taxi</strong>, we provide reliable, affordable, and safe cab services across Bengaluru.
                        Whether you’re traveling to or from the airport, planning a local city ride, or heading on an outstation trip, we’ve got the perfect cab for your needs — available 24/7 for your convenience.
                    </p>
                </div>


                <div className="p-5">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">🚖 Local City Rides</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">Need to move around Bengaluru?
                        We provide local cabs for shopping, business meetings, events, and personal trips — all at affordable prices.
                        Travel comfortably with professional drivers who know the city routes best.
                    </p>
                </div>


                <div className="p-5">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">🛣️ Outstation Trips</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">
                        Planning a weekend getaway or family trip?
                        Book an outstation cab from Bengaluru to popular destinations like Mysuru, Coorg, Ooty, Tirupati, and more.
                        Our spacious, air-conditioned cabs ensure you enjoy a safe and relaxing journey.
                    </p>

                </div>




                <div className="p-5">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">🔁 Round Trip & One-Way Cabs</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">
                        Choose between one-way or round-trip rides based on your travel needs.
                        Perfect for airport transfers, long-distance business meetings, or visiting nearby towns.
                        We offer flexible packages at transparent, fixed prices.
                    </p>

                </div>





                <div className="p-5">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">💬 Book Easily on WhatsApp</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">
                        Need quick booking support?
                        Message us directly on WhatsApp at <a className="text-blue-500" target="_blank" href={`https://api.whatsapp.com/send/?phone=91${adminPhoneNumber1}&text&type=phone_number&app_absent=0`}> +91 {adminPhoneNumber1}</a>, <a className="text-blue-500" target="_blank" href={`https://api.whatsapp.com/send/?phone=91${adminPhoneNumber2}&text&type=phone_number&app_absent=0`}> +91 {adminPhoneNumber2} </a> , <a className="text-blue-500" href={`https://api.whatsapp.com/send/?phone=91${adminPhoneNumber3}&text&type=phone_number&app_absent=0`} target="_blank"  > +91 {adminPhoneNumber3} </a>
                        Our team will confirm your ride instantly and share your trip details.
                    </p>

                </div>




                <div className="p-5">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">📍 Service Locations</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">
                        Kempegowda International Airport <br />
                        Bengaluru City (All major areas) <br />
                        Outstation Routes: Mysuru, Coorg, Ooty, Tirupati, Chikmagalur, etc. <br />
                    </p>

                </div>



            </div>
        </div>
    )
}


export default Services