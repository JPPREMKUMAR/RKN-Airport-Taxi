import { useContext } from "react"

import { Link } from "react-router-dom"
import axios from 'axios'
import { MainContext } from "../context/MainContext"


const VehicleItem = ({ item, getAllVehicles }) => {

    const { backendUrl, token, navigate, setToken } = useContext(MainContext)

    const { vehicle, imageUrl, price, capacity, bookingType, _id } = item
    //console.log(_id)
    return (

        <div className="bg-white rounded-lg ">
            <div className="px-2 py-2 flex justify-center my-1 w-full h-50">
                <img src={imageUrl} alt={vehicle} loading="lazy" width={900} height={550} />
            </div>

            <div className=" px-5 py-3">



                <div className="my-2">
                    <p className="text-md font-semibold text-gray-600">Vehicle : <span className="text-gray-900">{vehicle}</span> </p>

                    <p className="text-md font-semibold text-gray-600">Booking Type : <span className="text-gray-900">{bookingType}</span> </p>
                    <p className="text-md font-semibold text-gray-600">Price : <span className="text-gray-900">{price}</span> </p>
                    <p className="text-md font-semibold text-gray-600">Capacity : <span className="text-gray-900">{capacity}</span> </p>
                </div>

                <div className="flex justify-between items-center my-3">
                    <button className="text-white rounded-md outline-none px-7 py-2 bg-blue-600 font-semibold cursor-pointer">
                        <Link to={`/vehicles/${_id}`} >
                            Update
                        </Link>
                    </button>


                    {
                        /* 
 <button className="text-white rounded-md outline-none px-7 py-2 bg-red-600 font-semibold cursor-pointer" onClick={() => navigate(`/deleteItem/${_id}`)} >
                        Delete
                    </button>
                        
                        */
                    }


                </div>
            </div>

        </div>
    )
}



export default VehicleItem