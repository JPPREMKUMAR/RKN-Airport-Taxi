import axios from "axios"
import { createContext, useEffect, useState } from "react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"


export const MainContext = createContext({})




const MainContextProvider = (props) => {



    const backendUrl = import.meta.env.VITE_BACKEND_URL
    // console.log(backendUrl)
    const [token, setToken] = useState(Cookies.get("adminToken") === undefined ? '' : Cookies.get("adminToken"))




    useEffect(() => {

        const newToken = Cookies.get("adminToken")
        setToken(newToken)
    }, [token])


    const navigate = useNavigate()


    useEffect(() => {
        if (token === "" || token === undefined) {
            navigate("/login")
        }
    }, [])







    const categoriesList = [
        { id: "AIRPORT_TAXI", name: "AIRPORT TAXI" },
        { id: "OUTSTATION_TAXI", name: "OUTSTATION TAXI" },
        { id: "LOCAL_PACKAGE", name: "LOCAL PACKAGE" },
        { id: "LUXURY_CARS", name: "LUXURY CARS" }

    ]








    const vehiclesNames = [


        { vehicleName: "Tata Indica", id: uuid() },
        { vehicleName: "Maruti Swift", id: uuid() },
        { vehicleName: "Hyundai i10", id: uuid() },
        { vehicleName: "Maruti WagonR", id: uuid() },
        { vehicleName: "Hyundai Santro", id: uuid() },

        { vehicleName: "Swift Dzire", id: uuid() },
        { vehicleName: "Toyota Etios", id: uuid() },
        { vehicleName: "Honda Amaze", id: uuid() },
        { vehicleName: "Hyundai Xcent", id: uuid() },
        { vehicleName: "Tata Tigor", id: uuid() },

        { vehicleName: "Toyota Innova", id: uuid() },
        { vehicleName: "Innova Crysta", id: uuid() },
        { vehicleName: "Maruti Ertiga", id: uuid() },
        { vehicleName: "Mahindra Xylo", id: uuid() },
        { vehicleName: "Mahindra Scorpio", id: uuid() },

        { vehicleName: "Toyota Camry", id: uuid() },
        { vehicleName: "Skoda Superb", id: uuid() },
        { vehicleName: "Honda City", id: uuid() },
        { vehicleName: "BMW 3 Series", id: uuid() },
        { vehicleName: "Mercedes-Benz E-Class", id: uuid() }

    ]






    const value = {
        backendUrl, token, setToken, navigate, vehiclesNames, categoriesList
    }



    return (
        <MainContext.Provider value={value}  >

            {props.children}
        </MainContext.Provider>
    )
}




export default MainContextProvider