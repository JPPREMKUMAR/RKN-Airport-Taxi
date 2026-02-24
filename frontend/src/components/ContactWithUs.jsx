
import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import {
    instagram, facebook, twitter, linkedIn,
    gmail
} from "../assets/assets"
import { Link } from "react-router-dom"

const ContactWithUs = () => {

    const { adminPhoneNumber1, adminPhoneNumber2, adminPhoneNumber3, adminEmail1, adminEmail2 } = useContext(MainContext)

    return (
        <section className=" px-5 py-5 w-full text-gray-50 mx-2 shadow-xl rounded-md">

            <div className="my-3 sm:w-[50%]">
                <h1 className="text-xl font-bold my-1 text-[#007BFF]">📞 Contact With Us</h1>
                <p className="text-md font-semibold text-gray-700 my-1">Looking for a reliable cab booking service in Bengaluru?
                    We’re here 24/7 to assist you with airport transfers, city rides, and outstation trips.</p>



                <div className="my-2">
                    <h1 className="text-xl font-bold  my-1 text-[#007BFF]">📍 Visit Us:</h1>
                    <p className="text-md font-semibold text-gray-700 my-1">RKN AIRPORT TAXI  </p>
                    <p className="text-md font-semibold text-gray-700 my-1">#02 63/1 , 9th Cross ,<br />
                        Teachers Colony ,<br /> HSR 5th Sector, <br /> Bengalore – 560034.</p>
                </div>



                <div className="my-2">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">📱 24/7 Call Us</h1>
                    <p className="text-md font-semibold text-gray-700 my-1 flex gap-x-3">
                        <a href={`tel:+91${adminPhoneNumber1}`} className=" hover:text-[#007BFF]" >{adminPhoneNumber1}</a>
                        <a href={`tel:+91${adminPhoneNumber2}`} className=" hover:text-[#007BFF]" >{adminPhoneNumber2}</a>
                        <a href={`tel:+91${adminPhoneNumber3}`} className=" hover:text-[#007BFF]" >{adminPhoneNumber3}</a>
                    </p>
                    <p className="text-md font-semibold text-gray-700 my-1">(Our support team is available round the clock for all your cab booking needs in Bengaluru.)</p>
                </div>

                <div className="my-2 ">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">✉️ Email Us:</h1>
                    <div className="flex flex-col">
                        <a href={`https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSRLWmpSQnWFhtzSWVxBBfxNfNjxkHBQXPjrHvxNnbMmtGmjLMtNgGrMBrbGtngcXwZDz`} target="_blank" className="text-md font-semibold text-gray-700 my-1 hover:text-blue-500" >{adminEmail1}</a>
                        <a href={`https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSRLWmpSQnWFhtzSWVxBBfxNfNjxkHBQXPjrHvxNnbMmtGmjLMtNgGrMBrbGtngcXwZDz`} target="_blank" className="text-md font-semibold text-gray-700 my-1 hover:text-blue-500" >{adminEmail2}</a>


                    </div>
                    {
                        // <p className="text-md font-semibold text-gray-700 my-1">(Write to us for bookings, feedback, or partnership inquiries.)</p>

                    }

                </div>


                <div className="my-2">
                    <h1 className="text-xl font-bold my-1 text-[#007BFF]">🌐 Follow Us:</h1>
                    <div className="flex items-center gap-x-3 px-3">


                        <div className="my-3 flex items-center gap-x-3">
                            <a className="text-md font-semibold text-gray-700 my-1 flex gap-1 items-center" href="https://www.facebook.com/profile.php?id=61585245333469" target="_blank">
                                <img src={facebook} alt="Facebook" className="w-5 h-5" />
                                {/*/ 
                            <p>Facebook</p>
                            /*/
                                }


                            </a>

                        </div>
                        <div className="my-3 flex items-center gap-x-3">
                            <a className="text-md font-semibold text-gray-700 my-1 flex gap-1 items-center" href="http://linkedin.com/" target="_blank">
                                <img src={linkedIn} alt="linkedIn" className="w-5 h-5" />
                                {/*/ 
                            <p>Facebook</p>
                            /*/
                                }


                            </a>

                        </div>
                        <div className="my-3 flex items-center gap-x-3">
                            <a className="text-md font-semibold text-gray-700 my-1 flex gap-1 items-center" href="https://www.instagram.com/" target="_blank">
                                <img src={instagram} alt="Instagram" className="w-5 h-5" />
                                {/*/ 
                            <p>Facebook</p>
                            /*/
                                }


                            </a>

                        </div>
                        <div className="my-3 flex items-center gap-x-3">
                            <a className="text-md font-semibold text-gray-700 my-1 flex gap-1 items-center" href="https://x.com/" target="_blank">
                                <img src={twitter} alt="Twitter" className="w-5 h-5" />
                                {/*/ 
                            <p>Facebook</p>
                            /*/
                                }

                            </a>

                        </div>


                        <div className="my-3 flex items-center gap-x-3">
                            <a className="text-md font-semibold text-gray-700 my-1 flex gap-1 items-center" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSRLWmpSQnWFhtzSWVxBBfxNfNjxkHBQXPjrHvxNnbMmtGmjLMtNgGrMBrbGtngcXwZDz" target="_blank">
                                <img src={gmail} alt="Gmail" className="w-5 h-5" />
                                {/*/ 
                            <p>Facebook</p>
                            /*/
                                }

                            </a>

                        </div>


                    </div>

                </div>




            </div>



        </section>
    )
}



export default ContactWithUs