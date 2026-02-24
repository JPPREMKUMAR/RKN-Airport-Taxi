import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { MainContext } from "../context/MainContext"
import { TailSpin } from "react-loader-spinner"
import LocalStationItem from "../components/LocalStationItem"

const LocalStation = () => {



    const { backendUrl } = useContext(MainContext)

    const [isLoading, setIsLoading] = useState(true)
    const [vehicles, setVehicles] = useState([])


    const getAllVehicles = async () => {


        const response = await axios.post(backendUrl + "/api/user/getAllVehicles/LOCAL_PACKAGE")
        //console.log(response.data)
        setVehicles(response.data.vehicles)




        setIsLoading(false)

    }


    useEffect(() => {
        getAllVehicles()
    }, [])





    return (
        <div className="min-h-screen">

            <h2 className="my-10 font-bold text-3xl text-center mb-4 mt-4 sm:text-4xl text-black  italic">LOCAL PACKAGE</h2>

            {
                isLoading ? <div className="flex justify-center">

                    <TailSpin width={50} height={50} color="blue" />

                </div> :

                    <div className="mx-5 my-5">
                        {
                            vehicles.length === 0 ? <div className="flex justify-center my-10">


                                <h2>No Vehicles Yet Here</h2>

                            </div> : <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-4 items-center">

                                {
                                    vehicles.map((item, index) => (
                                        <LocalStationItem key={index} item={item} />
                                    ))
                                }
                            </div>
                        }
                    </div>
            }

        </div>
    )
}




export default LocalStation