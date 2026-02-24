
import VehicleList from "../components/VehicleList"
import WhyBookWithUs from "../components/WhyBookWithUs"
import ContactWithUs from "../components/ContactWithUs"
import BookingCard from "../components/BookingCard"
import ContactDetails from "../components/ContactDetails"
import Carousel from "../components/Carousel"
import { MainContext } from "../context/MainContext"
import { useContext, useState, useEffect } from "react"
import axios from "axios"
import { TailSpin } from "react-loader-spinner"
import AirportTaxi from "../pages/AirportTaxi"
import Innova from "../pages/Innova"
import Outstation from "../pages/Outstation"
import LocalStation from "../pages/LocalStation"
import OneTours from "../components/OneTours"


import MainTitle from "../components/MainTitle"

const Home = ({ title }) => {

    const { backendUrl, token } = useContext(MainContext)

    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const getCategories = async () => {

        //console.log("Hello")
        const response = await axios.post(backendUrl + "/api/user/getCategories", {})

        // console.log(response.data.categories)

        setCategories(response.data.categories)

        setIsLoading(false)


    }


    useEffect(() => {
        getCategories()
    }, [])




    // console.log(categories)




    return (
        <div className="px-2 my-5">




            <Carousel />
            <MainTitle title={title} />


            {
                /*/
            <BookingCard />
            /*/
            }

            {isLoading ? <div className="flex justify-center my-5 min-h-screen">
                <TailSpin width={50} height={50} color="blue" />
            </div> :
                <div>
                    <AirportTaxi />

                    <LocalStation />
                    <Outstation />
                    <OneTours />
                </div>

            }










        </div>
    )
}


export default Home