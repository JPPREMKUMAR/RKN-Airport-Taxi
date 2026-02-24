import axios from 'axios'
import { MainContext } from "../context/MainContext";

import { useContext } from "react"


const VehicleNameItem = ({ item, getVehicleNames }) => {


    const { backendUrl, token } = useContext(MainContext)

    const { vehicleName, _id } = item


    const onDelete = async () => {
        //console.log(_id);
        const response = await axios.post(backendUrl + `/api/categories/deleteVehicleName/${_id}`, {}, { headers: { Authorization: `Bearere ${token}` } })
        //console.log(response.data)
        getVehicleNames()

    }

    return (
        <div className="flex justify-between items-center my-4 bg-gray-300 px-5 py-3 shadow-md">
            <h1 className="text-md font-bold ">{vehicleName}</h1>
            <button className="text-white rounded-md px-3 py-1 bg-red-500 outline-none" onClick={onDelete}>delete</button>
        </div>
    )
}


export default VehicleNameItem