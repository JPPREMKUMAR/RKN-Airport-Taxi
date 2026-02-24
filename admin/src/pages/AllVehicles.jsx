import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { TailSpin } from "react-loader-spinner"
import VehicleItem from "../components/VehicleItem"
import { MainContext } from "../context/MainContext"
import { Navigate } from "react-router-dom"



const AllVehicles = () => {


    const { backendUrl, token, navigate, categoriesList } = useContext(MainContext)

    const [isLoading, setIsLoading] = useState(true)
    const [vehicles, setVehicles] = useState([])
    const [airportTaxiVehicles, setAirportTaxiVehicles] = useState([])
    const [outstationVehicles, setOutstationVehicles] = useState([])
    const [localTaxiVahicles, setLocalTaxiVehicles] = useState([])
    const [luxuryVehicles, setLuxuryVehicles] = useState([])


    const getAllVehicles = async () => {
        setIsLoading(true)

        const response = await axios.post(backendUrl + "/api/vehicle/allVehicles", {}, { headers: { Authorization: `Bearere ${token}` } })
        //console.log(response)
        if (response.data.success === true) {
            const getData = response.data.vehicles
            //console.log(getData)


            const airportVehicles = getData.filter((item) => item.bookingTypeId === "AIRPORT_TAXI")
            const outstationVehicles = getData.filter((item) => item.bookingTypeId === "OUTSTATION_TAXI")
            const localVehicles = getData.filter((item) => item.bookingTypeId === "LOCAL_PACKAGE")
            const luxuryVehicles = getData.filter((item) => item.bookingTypeId === "LUXURY_CARS")





            setAirportTaxiVehicles(airportVehicles)
            setOutstationVehicles(outstationVehicles)
            setLocalTaxiVehicles(localVehicles)
            setLuxuryVehicles(luxuryVehicles)

            setVehicles(getData)
        }
        setIsLoading(false)
    }



    useEffect(() => {
        if (token === undefined || token === '') {
            navigate("/login")
        }
        getAllVehicles()
        //console.log(vehicles)


    }, [])



    return (
        <div>

            <div className="bg-gray-200 min-h-screen px-5 py-5">
                <h1 className="text-center text-4xl text-[#d4af37] font-bold">AIRPORT TAXI</h1>

                <div className="my-10">
                    {
                        isLoading ? <div className="flex justify-center">
                            <TailSpin width={50} height={50} color="blue" />


                        </div> : <div>
                            {
                                airportTaxiVehicles.length !== 0 ? <div className="grid grid-cols-1 sm:grid-cols-4   gap-4 sm:gap-7">
                                    {

                                        airportTaxiVehicles.map((item, index) => (
                                            <VehicleItem item={item} key={index} getAllVehicles={getAllVehicles} />
                                        ))
                                    }

                                </div> : <div className="flex flex-col justify-center items-center min-h-screen">
                                    <h1 className="text-xl text-center sm:4xl font-bold">NO Vehicles Yet</h1>
                                </div>
                            }


                        </div>
                    }

                </div>
            </div>
            <div className="bg-gray-200 min-h-screen px-5 py-5">
                <h1 className="text-center text-4xl text-[#d4af37] font-bold">OUTSTATION</h1>

                <div className="my-10">
                    {
                        isLoading ? <div className="flex justify-center">
                            <TailSpin width={50} height={50} color="blue" />


                        </div> : <div>
                            {
                                outstationVehicles.length !== 0 ? <div className="grid grid-cols-1 sm:grid-cols-4   gap-4 sm:gap-7">
                                    {

                                        outstationVehicles.map((item, index) => (
                                            <VehicleItem item={item} key={index} getAllVehicles={getAllVehicles} />
                                        ))
                                    }

                                </div> : <div className="flex flex-col justify-center items-center min-h-screen">
                                    <h1 className="text-xl text-center sm:4xl font-bold">NO Vehicles Yet</h1>
                                </div>
                            }


                        </div>
                    }

                </div>
            </div>

            <div className="bg-gray-200 min-h-screen px-5 py-5">
                <h1 className="text-center text-4xl text-[#d4af37] font-bold">LOCAL PACKAGE</h1>

                <div className="my-10">
                    {
                        isLoading ? <div className="flex justify-center">
                            <TailSpin width={50} height={50} color="blue" />


                        </div> : <div>
                            {
                                localTaxiVahicles.length !== 0 ? <div className="grid grid-cols-1 sm:grid-cols-4   gap-4 sm:gap-7">
                                    {

                                        localTaxiVahicles.map((item, index) => (
                                            <VehicleItem item={item} key={index} getAllVehicles={getAllVehicles} />
                                        ))
                                    }

                                </div> : <div className="flex flex-col justify-center items-center min-h-screen">
                                    <h1 className="text-xl text-center sm:4xl font-bold">NO Vehicles Yet</h1>
                                </div>
                            }


                        </div>
                    }

                </div>
            </div>

            <div className="bg-gray-200 min-h-screen px-5 py-5">
                <h1 className="text-center text-4xl text-[#d4af37] font-bold">LUXURY CARS</h1>

                <div className="my-10">
                    {
                        isLoading ? <div className="flex justify-center">
                            <TailSpin width={50} height={50} color="blue" />


                        </div> : <div>
                            {
                                luxuryVehicles.length !== 0 ? <div className="grid grid-cols-1 sm:grid-cols-4   gap-4 sm:gap-7">
                                    {

                                        luxuryVehicles.map((item, index) => (
                                            <VehicleItem item={item} key={index} getAllVehicles={getAllVehicles} />
                                        ))
                                    }

                                </div> : <div className="flex flex-col justify-center items-center min-h-screen">
                                    <h1 className="text-xl text-center sm:4xl font-bold">NO Vehicles Yet</h1>
                                </div>
                            }


                        </div>
                    }

                </div>
            </div>

        </div>
    )
}



export default AllVehicles