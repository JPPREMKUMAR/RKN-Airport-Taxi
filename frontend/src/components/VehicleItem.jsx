import { useContext } from "react"
import { image1, image2, image3, image4, image5, image6 } from "../assets/assets"

import { IoPeopleSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom"

import { MainContext } from "../context/MainContext";

import { FaUsers } from "react-icons/fa";



const VehicleItem = ({ item }) => {

    //console.log(item)

    const { adminPhoneNumber2 } = useContext(MainContext)

    const { _id, vehicle, capacity, imageUrl, price } = item



    const onClickCard = () => {

        //console.log(item)

    }

    // Optimize Cloudinary URL
    const optimizedImage = imageUrl.replace(
        "/upload/",
        "/upload/w_600,q_auto,f_webp/"
    );


    return (

        <div className="text-[#111827]  sm:m-2 m-2 my-4 shadow-md  bg-white rounded-xl " onClick={onClickCard}>
            <div className="flex justify-center my-2 px-10 py-4">
                <img src={optimizedImage}
                    alt={`${vehicle}`} loading="lazy" width={900} height={550} />
            </div>
            <div className="px-5">
                <h3 className="text-xl text-[#111827] font-bold text-medium sm:text-2xl">{vehicle}</h3>
                <div className="my-2 flex items-center gap-x-2">
                    <img src="https://res.cloudinary.com/dchkwygu9/image/upload/v1767706408/9212170_wpn61g.png" alt="car-seats" loading="lazy" className="w-5 h-5" />
                    <p className="text-md font-semibold">{capacity}+1</p>

                </div>
            </div>
            <hr className="text-gray-100 mx-2 my-3" />


            <div className="px-5 grid grid-cols-2 my-3">
                <div className="flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-2">
                        <img src="https://res.cloudinary.com/dchkwygu9/image/upload/v1767706408/2178616_r15rwx.png" alt="fare" className="w-4 h-4" loading="lazy" />
                        <p className="text-sm text-gray-500">Fare ₹{price}.00</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <img src="https://res.cloudinary.com/dchkwygu9/image/upload/v1767706408/3005430_u2mtap.png" alt="toll" className="w-4 h-4" loading="lazy" />
                        <p className="text-sm text-gray-500">Toll Optional</p>
                    </div>
                    {
                        /*/ 
                        
                        <div className="flex items-center gap-x-2">
                        <img src="https://res.cloudinary.com/dchkwygu9/image/upload/v1767706408/2776067_orxko9.png" alt="location" className="w-4 h-4" loading="lazy" />
                        <p className="text-sm text-gray-500">Upto 30 km</p>
                    </div>
                        /*/
                    }

                </div>

                <div>
                    <h1 className="text-xl font-bold text-blue-600">₹{price}</h1>
                </div>

            </div>

            <div className=" flex items-center justify-center gap-2 px-5 ">


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


        </div >
    )
}

export default VehicleItem