import { useContext } from "react"
import { image1, image2, image3, image4, image5, image6 } from "../assets/assets"

import { IoPeopleSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom"
import { MainContext } from "../context/MainContext";

import { FaUsers } from "react-icons/fa";



const OutstationItem = ({ item }) => {

    //console.log(item)

    const { adminPhoneNumber2 } = useContext(MainContext)

    const { _id, vehicle, capacity, imageUrl, price, ac, driverBata } = item



    const onClickCard = () => {

        //console.log(item)

    }



    // Optimize Cloudinary URL
    const optimizedImage = imageUrl.replace(
        "/upload/",
        "/upload/w_600,q_auto,f_webp/"
    );


    return (

        <div className="text-[#111827]  sm:m-2 m-2 my-4 shadow-md  bg-white " onClick={onClickCard}>
            <div className="flex justify-center my-2 px-10 py-4">
                <img src={optimizedImage} alt={`${vehicle}`} loading="lazy" width={900} height={550} />
            </div>

            <div className="px-5 flex  flex-col items-center gap-2 ">

                <h3 className="text-xl text-[#111827] font-bold text-medium sm:text-2xl">{vehicle}</h3>
                <div className="flex items-center gap-x-2 text-sm sm:text-2xl">
                    <FaUsers className="text-[#111827] " />
                    <p className="text-xl sm:text-xl text-[#111827] font-semibold">Capacity : {capacity}+1</p>
                </div>
                <div className="flex items-center gap-x-2">
                    <p className="text-[#111827]   text-sm  sm:text-xl font-semibold">A/C </p>
                    <p className="text-[#111827]  text-sm  sm:text-xl font-semibold">₹</p>
                    <p className="text-[#111827]  text-sm  sm:text-xl font-semibold">{ac}</p>
                </div>
                <div className="flex items-center gap-x-2">
                    <p className="text-[#111827]   text-sm  sm:text-xl font-semibold">Driver Bata :</p>
                    <p className="text-[#111827]  text-sm  sm:text-xl font-semibold">₹</p>
                    <p className="text-[#111827]  text-sm  sm:text-xl font-semibold">{driverBata}</p>
                </div>
                <div>
                    <p className="text-[#111827]   text-sm  sm:text-xl font-semibold">(Toll & Parking Charges Extra)</p>
                </div>
                <div className=" flex items-center justify-center gap-2">


                    <div className="text-center flex items-center gap-x-3 my-2">
                        <Link to={`/booking/${_id}`} aria-label="Book Airport Taxi" className="bg-yellow-400 text-sm  text-black px-5 py-1 rounded-md text-md  font-semibold  mb-5 mt-2 cursor-pointer text-center ">
                            Book Now
                        </Link>
                    </div>
                    <div className="text-center flex items-center gap-x-3 my-2">
                        <button className="bg-black text-sm  text-white px-5 py-1 rounded-md text-md  font-semibold  mb-5 mt-2 cursor-pointer text-center">
                            <a href={`https://wa.me/91${adminPhoneNumber2}`} target="_blank"
                                className="" aria-label="Chat on Whatsapp"
                            >
                                Whatsapp
                            </a>
                        </button>


                    </div>






                </div>


            </div>


        </div>
    )
}

export default OutstationItem