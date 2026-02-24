
import { useContext } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { MainContext } from "../context/MainContext"



const DeleteItem = () => {

    const { id } = useParams()

    const { backendUrl, token, navigate, setToken } = useContext(MainContext)

    const deleteVehicle = async () => {
        const url = `${backendUrl}/api/vehicle/delete/${id}`
        const response = await axios.post(url, { id: id }, { headers: { Authorization: `Bearere ${token}` } })
        //console.log(response.data)
        navigate("/allVehicles")
        //console.log('delete vehicle')
        getAllVehicles()

    }


    return (
        <div className="flex justify-center px-10 py-10">

            <button onClick={deleteVehicle} className="bg-red-500 px-7 py-5 text-white font-semibold rounded-md ">

                Delete
            </button>
        </div>
    )
}


export default DeleteItem