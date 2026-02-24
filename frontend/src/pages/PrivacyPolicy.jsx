
import TermsOfServices from "../pages/TermsOfServices"


import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const PrivacyPolicy = () => {


    const { adminPhoneNumber1, adminPhoneNumber2, adminPhoneNumber3, adminEmail1, adminEmail2 } = useContext(MainContext)

    return (

        <div>


            <div className="px-5 py-5 w-full text-gray-50 mx-2 shadow-xl rounded-md">
                <h1 className="text-3xl text-center font-bold text-[#FFD700]">🛡️ Privacy Policy – RKN Airport Taxi</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 my-3">

                    <div className="p-5">


                        <h1 className="text-xl font-bold  my-1 text-[#007BFF]">🛡️ Privacy Policy</h1>

                        <p className="text-md font-semibold text-gray-700 my-1">
                            At RKN Airport Taxi, we value your trust and respect your privacy.
                            This Privacy Policy explains how we collect, use, and protect your personal information when you use our website, booking form, or related services.
                        </p>

                    </div>


                    <div className="p-5">
                        <h1 className="text-xl font-bold  my-1 text-[#007BFF]">📋 Information We Collect</h1>
                        <p className="text-md font-semibold text-gray-700 my-1">
                            We collect only the information necessary to provide our cab services effectively: <br />

                            Name <br />

                            Contact Number<br />

                            Email Address<br />

                            Pickup and Drop Locations<br />
                            Date and Time of Booking<br />

                            This data helps us confirm bookings, send notifications, and ensure smooth communication between you and our team.<br />

                        </p>
                    </div>


                    <div className="p-5">
                        <h1 className="text-xl font-bold  my-1 text-[#007BFF]">💬 Communication</h1>
                        <p className="text-md font-semibold text-gray-700 my-1">
                            By booking with us, you agree to receive booking confirmations, updates, and important notifications via SMS, Email, or WhatsApp.<br />
                            You can opt out anytime by contacting us directly.
                        </p>
                    </div>

                    <div className="p-5">
                        <h1 className="text-xl font-bold  my-1 text-[#007BFF]">🔒 How We Use Your Information</h1>
                        <p className="text-md font-semibold text-gray-700 my-1">

                            We use your information strictly for service-related purposes: <br />

                            To confirm and manage cab bookings <br />

                            To send booking confirmations via SMS and Email <br />

                            To share ride details with drivers securely <br />

                            To provide customer support and updates <br />

                            To improve our website and service quality <br />

                            We do not sell, rent, or share your personal information with any third parties for marketing purposes.


                        </p>
                    </div>


                    <div className="p-5">
                        <h1 className="text-xl font-bold  my-1 text-[#007BFF]">🗑️ Data Retention</h1>
                        <p className="text-md font-semibold text-gray-700 my-1">
                            Your booking and contact details are securely stored only as long as needed to complete your ride and for record purposes as per applicable law.

                        </p>
                    </div>




                    <div className="my-2 flex gap-x-3 ">
                        <div>
                            <h1 className="text-xl font-bold my-1 text-[#007BFF]">📱 Call Us</h1>
                            <p className="text-md font-semibold text-gray-700 my-1 flex gap-x-3">
                                <a href={`tel:+91${adminPhoneNumber1}`} className=" hover:text-[#007BFF]" >{adminPhoneNumber1}</a>
                                <a href={`tel:+91${adminPhoneNumber2}`} className=" hover:text-[#007BFF]" >{adminPhoneNumber2}</a>
                                <a href={`tel:+91${adminPhoneNumber3}`} className=" hover:text-[#007BFF]" >{adminPhoneNumber3}</a>
                            </p>
                        </div>
                        <div className="my-2 ">
                            <h1 className="text-xl font-bold my-1 text-[#007BFF]">✉️ Email Us:</h1>
                            <div className="flex flex-col">
                                <a href={`https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSRLWmpSQnWFhtzSWVxBBfxNfNjxkHBQXPjrHvxNnbMmtGmjLMtNgGrMBrbGtngcXwZDz`} target="_blank" className="text-md font-semibold text-gray-700 my-1 hover:text-blue-500" >{adminEmail1}</a>
                                <a href={`https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSRLWmpSQnWFhtzSWVxBBfxNfNjxkHBQXPjrHvxNnbMmtGmjLMtNgGrMBrbGtngcXwZDz`} target="_blank" className="text-md font-semibold text-gray-700 my-1 hover:text-blue-500" >{adminEmail2}</a>


                            </div>
                        </div>


                    </div>

                </div>




            </div >

            <TermsOfServices />

        </div>
    )
}


export default PrivacyPolicy