import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"
import { image1, image2, image3, image4, image5, image6 } from "../assets/assets"
import Cookies from "js-cookie"
import axios from "axios"





export const MainContext = createContext();




export const MainContextProvider = (props) => {
    const rupees = 10
    const navigate = useNavigate()

    const backendUrl = import.meta.env.VITE_BACK_END_URL

    const adminPhoneNumber1 = import.meta.env.VITE_PHONE_NUMBER1
    const adminPhoneNumber2 = import.meta.env.VITE_PHONE_NUMBER2
    const adminPhoneNumber3 = import.meta.env.VITE_PHONE_NUMBER3


    const adminEmail1 = import.meta.env.VITE_EMAIL1;
    const adminEmail2 = import.meta.env.VITE_EMAIL2;





    //console.log(backendUrl)

    const [vehicleList, setVehicleList] = useState([])

    const getAllVehicles = async () => {

        const response = await axios.post(backendUrl + "/api/user/getAllVehicles", {}, {});

        console.log(response.data.vehicles);
        setVehicleList(response.data.vehicles);

    }


    useEffect(() => {
        // getAllVehicles();

    }, [])


    const categoriesList = [
        { id: "AIRPORT_TAXI", name: "AIRPORT TAXI" },
        { id: "INNOVA_TAXI", name: "INNOVA TAXI" },
        { id: "OUTSTATION_TAXI", name: "OUTSTATION TAXI" },
        { id: "LOCAL_PACKAGE", name: "LOCAL PACKAGE" },

    ]



    // PICKUP TIME LIST
    const pickupTimeList = [
        { time: "01:00 AM", id: uuid() },
        { time: "01:15 AM", id: uuid() },
        { time: "01:30 AM", id: uuid() },
        { time: "01:45 AM", id: uuid() },
        { time: "02:00 AM", id: uuid() },
        { time: "02:15 AM", id: uuid() },
        { time: "02:30 AM", id: uuid() },
        { time: "02:45 AM", id: uuid() },
        { time: "03:00 AM", id: uuid() },
        { time: "03:15 AM", id: uuid() },
        { time: "03:30 AM", id: uuid() },
        { time: "03:45 AM", id: uuid() },
        { time: "04:00 AM", id: uuid() },
        { time: "04:15 AM", id: uuid() },
        { time: "04:30 AM", id: uuid() },
        { time: "04:45 AM", id: uuid() },
        { time: "05:00 AM", id: uuid() },
        { time: "05:15 AM", id: uuid() },
        { time: "05:30 AM", id: uuid() },
        { time: "05:45 AM", id: uuid() },
        { time: "06:00 AM", id: uuid() },
        { time: "06:15 AM", id: uuid() },
        { time: "06:30 AM", id: uuid() },
        { time: "06:45 AM", id: uuid() },
        { time: "07:00 AM", id: uuid() },
        { time: "07:15 AM", id: uuid() },
        { time: "07:30 AM", id: uuid() },
        { time: "07:45 AM", id: uuid() },
        { time: "08:00 AM", id: uuid() },
        { time: "08:15 AM", id: uuid() },
        { time: "08:30 AM", id: uuid() },
        { time: "08:45 AM", id: uuid() },
        { time: "09:00 AM", id: uuid() },
        { time: "09:15 AM", id: uuid() },
        { time: "09:30 AM", id: uuid() },
        { time: "09:45 AM", id: uuid() },
        { time: "10:00 AM", id: uuid() },
        { time: "10:15 AM", id: uuid() },
        { time: "10:30 AM", id: uuid() },
        { time: "10:45 AM", id: uuid() },
        { time: "11:00 AM", id: uuid() },
        { time: "11:15 AM", id: uuid() },
        { time: "11:30 AM", id: uuid() },
        { time: "11:45 AM", id: uuid() },
        { time: "12:00 PM", id: uuid() },
        { time: "12:15 PM", id: uuid() },
        { time: "12:30 PM", id: uuid() },
        { time: "12:45 PM", id: uuid() },
        { time: "01:00 PM", id: uuid() },
        { time: "01:15 PM", id: uuid() },
        { time: "01:30 PM", id: uuid() },
        { time: "01:45 PM", id: uuid() },
        { time: "02:00 PM", id: uuid() },
        { time: "02:15 PM", id: uuid() },
        { time: "02:30 PM", id: uuid() },
        { time: "02:45 PM", id: uuid() },
        { time: "03:00 PM", id: uuid() },
        { time: "03:15 PM", id: uuid() },
        { time: "03:30 PM", id: uuid() },
        { time: "03:45 PM", id: uuid() },
        { time: "04:00 PM", id: uuid() },
        { time: "04:15 PM", id: uuid() },
        { time: "04:30 PM", id: uuid() },
        { time: "04:45 PM", id: uuid() },
        { time: "05:00 PM", id: uuid() },
        { time: "05:15 PM", id: uuid() },
        { time: "05:30 PM", id: uuid() },
        { time: "05:45 PM", id: uuid() },
        { time: "06:00 PM", id: uuid() },
        { time: "06:15 PM", id: uuid() },
        { time: "06:30 PM", id: uuid() },
        { time: "06:45 PM", id: uuid() },
        { time: "07:00 PM", id: uuid() },
        { time: "07:15 PM", id: uuid() },
        { time: "07:30 PM", id: uuid() },
        { time: "07:45 PM", id: uuid() },
        { time: "08:00 PM", id: uuid() },
        { time: "08:15 PM", id: uuid() },
        { time: "08:30 PM", id: uuid() },
        { time: "08:45 PM", id: uuid() },
        { time: "09:00 PM", id: uuid() },
        { time: "09:15 PM", id: uuid() },
        { time: "09:30 PM", id: uuid() },
        { time: "09:45 PM", id: uuid() },
        { time: "10:00 PM", id: uuid() },
        { time: "10:15 PM", id: uuid() },
        { time: "10:30 PM", id: uuid() },
        { time: "10:45 PM", id: uuid() },
        { time: "11:00 PM", id: uuid() },
        { time: "11:15 PM", id: uuid() },
        { time: "11:30 PM", id: uuid() },
        { time: "11:45 PM", id: uuid() }
    ]



    const monthsList = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]






    const getToken = Cookies.get("token")


    const [token, setToken] = useState(getToken === undefined ? '' : getToken)


    //console.log(token)

    // Get User Profile 






    const [userDetails, setUserDetails] = useState({})



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







    {
        /*/ 
        const vehicleList = [
    
            // ----------------- AIRPORT TAXI -----------------
            {
                vehicleName: "Suzuki Dzire",
                capacity: 4,
                price: 2500,
                vehicleType: "AIRPORT TAXI",
                imageUrl: image1,
                id: uuid()
    
            },
            {
                vehicleName: "Toyota Etios",
                capacity: 4,
                price: 2800,
                vehicleType: "AIRPORT TAXI",
                imageUrl: image2, id: uuid()
    
            },
            {
                vehicleName: "Hyundai Xcent",
                capacity: 4,
                price: 2600,
                vehicleType: "AIRPORT TAXI",
                imageUrl: image3, id: uuid()
    
            },
            {
                vehicleName: "Honda Amaze",
                capacity: 4,
                price: 2700,
                vehicleType: "AIRPORT TAXI",
                imageUrl: image4, id: uuid()
    
            },
            {
                vehicleName: "Tata Zest",
                capacity: 4,
                price: 2400,
                vehicleType: "AIRPORT TAXI",
    
                imageUrl: image5, id: uuid()
    
            },
            {
                vehicleName: "Tata Zest",
                capacity: 10,
                price: 4000,
                vehicleType: "AIRPORT TAXI",
                imageUrl: image6, id: uuid()
    
            },
        ]
    
        
        /*/
    }






    //console.log(vehicleList);












    const categories = [
        {
            "_id": "6915849d7e23981516549785",
            "category": "AIRPORT TAXI",
            "id": "AIRPORT_TAXI",
            "vehicleNames": [
                {
                    "_id": "694dfd45d399f68437cba3dc",
                    "vehicleName": "Hatchback",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd4dd399f68437cba3df",
                    "vehicleName": "Sedan",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd58d399f68437cba3e2",
                    "vehicleName": "Prime Sedan",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd65d399f68437cba3e7",
                    "vehicleName": "SUV ERTIGA",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd6bd399f68437cba3ea",
                    "vehicleName": "INNOVA",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd75d399f68437cba3ed",
                    "vehicleName": "INNOVA CRYSTA",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd81d399f68437cba3f0",
                    "vehicleName": "INNOVA HYCROSS",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd99d399f68437cba3f3",
                    "vehicleName": "TOYOTA FURTUNER (LUXURY VEHICLE )",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfda6d399f68437cba3f6",
                    "vehicleName": "TEMPO TRAVELLER",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "691584de7e23981516549787",
            "category": "INNOVA TAXI",
            "id": "INNOVA_TAXI",
            "vehicleNames": [
                {
                    "_id": "6915a6a1e51337b994b41a1d",
                    "vehicleName": "SUV",
                    "categoryId": "INNOVA_TAXI",
                    "__v": 0
                },
                {
                    "_id": "6915a6a7e51337b994b41a21",
                    "vehicleName": "INNOVA",
                    "categoryId": "INNOVA_TAXI",
                    "__v": 0
                },
                {
                    "_id": "6915a6bce51337b994b41a25",
                    "vehicleName": "7 Seat with Carrier Vehicle",
                    "categoryId": "INNOVA_TAXI",
                    "__v": 0
                },
                {
                    "_id": "6915a6efe51337b994b41a3a",
                    "vehicleName": "INNOVA CRYSTA",
                    "categoryId": "INNOVA_TAXI",
                    "__v": 0
                },
                {
                    "_id": "6915a882e51337b994b41a97",
                    "vehicleName": "Sudan",
                    "categoryId": "INNOVA_TAXI",
                    "__v": 0
                }
            ],
            "__v": 0
        },
        {
            "_id": "6915852b7e23981516549789",
            "category": "OUTSTATION",
            "id": "OUTSTATION_TAXI",
            "vehicleNames": [
                {
                    "_id": "694dfd45d399f68437cba3dc",
                    "vehicleName": "Hatchback",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd4dd399f68437cba3df",
                    "vehicleName": "Sedan",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd58d399f68437cba3e2",
                    "vehicleName": "Prime Sedan",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd65d399f68437cba3e7",
                    "vehicleName": "SUV ERTIGA",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd6bd399f68437cba3ea",
                    "vehicleName": "INNOVA",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd75d399f68437cba3ed",
                    "vehicleName": "INNOVA CRYSTA",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd81d399f68437cba3f0",
                    "vehicleName": "INNOVA HYCROSS",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfd99d399f68437cba3f3",
                    "vehicleName": "TOYOTA FURTUNER (LUXURY VEHICLE )",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                },
                {
                    "_id": "694dfda6d399f68437cba3f6",
                    "vehicleName": "TEMPO TRAVELLER",
                    "categoryId": "AIRPORT_TAXI",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "691585457e2398151654978b",
            "category": "LOCAL PACKAGE",
            "id": "LOCAL_PACKAGE",
            "vehicleNames": [
                {
                    "_id": "6915a72ae51337b994b41a4a",
                    "vehicleName": "Hatchback",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                },
                {
                    "_id": "6915a735e51337b994b41a4e",
                    "vehicleName": "Sedan",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                },
                {
                    "_id": "6915a73de51337b994b41a52",
                    "vehicleName": "Prime Sedan",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                },
                {
                    "_id": "6915a74ee51337b994b41a56",
                    "vehicleName": "SUV ERTIGA",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                },
                {
                    "_id": "6915a755e51337b994b41a5a",
                    "vehicleName": "INNOVA",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                },
                {
                    "_id": "6915a75ee51337b994b41a5e",
                    "vehicleName": "INNOVA CRYSTA",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                },
                {
                    "_id": "6915a76ee51337b994b41a62",
                    "vehicleName": "TEMPO TRAVELLER",
                    "categoryId": "LOCAL_PACKAGE",
                    "__v": 0
                }
            ]
        },
        {
            "_id": "6915855d7e2398151654978d",
            "category": "LUXURY CARS",
            "id": "LUXURY_CARS",
            "vehicleNames": [
                {
                    "_id": "6915a5a7e51337b994b419f0",
                    "vehicleName": "Toyota Fortuner Legender",
                    "categoryId": "LUXURY_CARS",
                    "__v": 0
                },
                {
                    "_id": "6915a5b4e51337b994b419f4",
                    "vehicleName": "BMW",
                    "categoryId": "LUXURY_CARS",
                    "__v": 0
                },
                {
                    "_id": "6915a5bee51337b994b419f8",
                    "vehicleName": "Audi",
                    "categoryId": "LUXURY_CARS",
                    "__v": 0
                },
                {
                    "_id": "6915a5fde51337b994b41a02",
                    "vehicleName": "Mercedes Benz",
                    "categoryId": "LUXURY_CARS",
                    "__v": 0
                }
            ],
            "__v": 0
        }
    ]


















    const value = {

        rupees,
        categoriesList,
        vehicleList,
        backendUrl, token, setToken,
        userDetails, navigate,
        pickupTimeList, monthsList, adminPhoneNumber1, adminPhoneNumber2, adminPhoneNumber3, getAllVehicles
        , vehiclesNames, adminEmail1, adminEmail2, categories, airportTaxiRoutes, airportLinks
    }

    return <MainContext.Provider value={value}>

        {props.children}

    </MainContext.Provider>

}

export const airportTaxiRoutes = [
    { id: 1, slug: "/whitefield-to-bangalore-airport", anchor: "Airport Cab Taxi from Whitefield to Bangalore Airport" },
    { id: 2, slug: "/electronic-city-to-bangalore-airport", anchor: "Airport Cab Taxi from Electronic City to Bangalore Airport" },
    { id: 3, slug: "/marathahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Marathahalli to Bangalore Airport" },
    { id: 4, slug: "/btm-layout-to-bangalore-airport", anchor: "Airport Cab Taxi from BTM Layout to Bangalore Airport" },
    { id: 5, slug: "/hebbal-to-bangalore-airport", anchor: "Airport Cab Taxi from Hebbal to Bangalore Airport" },
    { id: 6, slug: "/yelahanka-to-bangalore-airport", anchor: "Airport Cab Taxi from Yelahanka to Bangalore Airport" },
    { id: 7, slug: "/indiranagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Indiranagar to Bangalore Airport" },
    { id: 8, slug: "/jp-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from JP Nagar to Bangalore Airport" },
    { id: 9, slug: "/jayanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Jayanagar to Bangalore Airport" },
    { id: 10, slug: "/kr-puram-to-bangalore-airport", anchor: "Airport Cab Taxi from KR Puram to Bangalore Airport" },

    { id: 11, slug: "/mg-road-to-bangalore-airport", anchor: "Airport Cab Taxi from MG Road to Bangalore Airport" },
    { id: 12, slug: "/majestic-to-bangalore-airport", anchor: "Airport Cab Taxi from Majestic to Bangalore Airport" },
    { id: 13, slug: "/malleshwaram-to-bangalore-airport", anchor: "Airport Cab Taxi from Malleshwaram to Bangalore Airport" },
    { id: 14, slug: "/rajajinagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Rajajinagar to Bangalore Airport" },
    { id: 15, slug: "/yeshwanthpur-to-bangalore-airport", anchor: "Airport Cab Taxi from Yeshwanthpur to Bangalore Airport" },
    { id: 16, slug: "/banashankari-to-bangalore-airport", anchor: "Airport Cab Taxi from Banashankari to Bangalore Airport" },
    { id: 17, slug: "/basavanagudi-to-bangalore-airport", anchor: "Airport Cab Taxi from Basavanagudi to Bangalore Airport" },
    { id: 18, slug: "/hsr-layout-to-bangalore-airport", anchor: "Airport Cab Taxi from HSR Layout to Bangalore Airport" },
    { id: 19, slug: "/koramangala-to-bangalore-airport", anchor: "Airport Cab Taxi from Koramangala to Bangalore Airport" },
    { id: 20, slug: "/domlur-to-bangalore-airport", anchor: "Airport Cab Taxi from Domlur to Bangalore Airport" },

    { id: 21, slug: "/bellandur-to-bangalore-airport", anchor: "Airport Cab Taxi from Bellandur to Bangalore Airport" },
    { id: 22, slug: "/sarjapur-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Sarjapur Road to Bangalore Airport" },
    { id: 23, slug: "/bommanahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Bommanahalli to Bangalore Airport" },
    { id: 24, slug: "/kengeri-to-bangalore-airport", anchor: "Airport Cab Taxi from Kengeri to Bangalore Airport" },
    { id: 25, slug: "/vijayanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Vijayanagar to Bangalore Airport" },
    { id: 26, slug: "/nagarbhavi-to-bangalore-airport", anchor: "Airport Cab Taxi from Nagarbhavi to Bangalore Airport" },
    { id: 27, slug: "/attiguppe-to-bangalore-airport", anchor: "Airport Cab Taxi from Attiguppe to Bangalore Airport" },
    { id: 28, slug: "/basaveshwaranagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Basaveshwaranagar to Bangalore Airport" },
    { id: 29, slug: "/hoodi-to-bangalore-airport", anchor: "Airport Cab Taxi from Hoodi to Bangalore Airport" },
    { id: 30, slug: "/mahadevapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Mahadevapura to Bangalore Airport" },

    { id: 31, slug: "/itpl-whitefield-to-bangalore-airport", anchor: "Airport Cab Taxi from ITPL Whitefield to Bangalore Airport" },
    { id: 32, slug: "/brookefield-to-bangalore-airport", anchor: "Airport Cab Taxi from Brookefield to Bangalore Airport" },
    { id: 33, slug: "/kundalahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Kundalahalli to Bangalore Airport" },
    { id: 34, slug: "/manyata-tech-park-to-bangalore-airport", anchor: "Airport Cab Taxi from Manyata Tech Park to Bangalore Airport" },
    { id: 35, slug: "/nagawara-to-bangalore-airport", anchor: "Airport Cab Taxi from Nagawara to Bangalore Airport" },
    { id: 36, slug: "/hennur-to-bangalore-airport", anchor: "Airport Cab Taxi from Hennur to Bangalore Airport" },
    { id: 37, slug: "/kalyan-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Kalyan Nagar to Bangalore Airport" },
    { id: 38, slug: "/ramamurthy-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Ramamurthy Nagar to Bangalore Airport" },
    { id: 39, slug: "/kasturi-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Kasturi Nagar to Bangalore Airport" },
    { id: 40, slug: "/banaswadi-to-bangalore-airport", anchor: "Airport Cab Taxi from Banaswadi to Bangalore Airport" },

    { id: 41, slug: "/frazer-town-to-bangalore-airport", anchor: "Airport Cab Taxi from Frazer Town to Bangalore Airport" },
    { id: 42, slug: "/cox-town-to-bangalore-airport", anchor: "Airport Cab Taxi from Cox Town to Bangalore Airport" },
    { id: 43, slug: "/ulsoor-to-bangalore-airport", anchor: "Airport Cab Taxi from Ulsoor to Bangalore Airport" },
    { id: 44, slug: "/shivajinagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Shivajinagar to Bangalore Airport" },
    { id: 45, slug: "/rt-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from RT Nagar to Bangalore Airport" },
    { id: 46, slug: "/sanjay-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Sanjay Nagar to Bangalore Airport" },
    { id: 47, slug: "/sadashivanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Sadashivanagar to Bangalore Airport" },
    { id: 48, slug: "/peenya-to-bangalore-airport", anchor: "Airport Cab Taxi from Peenya to Bangalore Airport" },
    { id: 49, slug: "/nelamangala-to-bangalore-airport", anchor: "Airport Cab Taxi from Nelamangala to Bangalore Airport" },
    { id: 50, slug: "/jalahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Jalahalli to Bangalore Airport" },

    { id: 51, slug: "/mathikere-to-bangalore-airport", anchor: "Airport Cab Taxi from Mathikere to Bangalore Airport" },
    { id: 52, slug: "/vidyaranyapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Vidyaranyapura to Bangalore Airport" },
    { id: 53, slug: "/sahakara-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Sahakara Nagar to Bangalore Airport" },
    { id: 54, slug: "/kodigehalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Kodigehalli to Bangalore Airport" },
    { id: 55, slug: "/thanisandra-to-bangalore-airport", anchor: "Airport Cab Taxi from Thanisandra to Bangalore Airport" },
    { id: 56, slug: "/bagalur-to-bangalore-airport", anchor: "Airport Cab Taxi from Bagalur to Bangalore Airport" },
    { id: 57, slug: "/devanahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Devanahalli to Bangalore Airport" },
    { id: 58, slug: "/chikkajala-to-bangalore-airport", anchor: "Airport Cab Taxi from Chikkajala to Bangalore Airport" },
    { id: 59, slug: "/doddagubbi-to-bangalore-airport", anchor: "Airport Cab Taxi from Doddagubbi to Bangalore Airport" },
    { id: 60, slug: "/kothanur-to-bangalore-airport", anchor: "Airport Cab Taxi from Kothanur to Bangalore Airport" },

    { id: 61, slug: "/bannerghatta-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Bannerghatta Road to Bangalore Airport" },
    { id: 62, slug: "/rr-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from RR Nagar to Bangalore Airport" },
    { id: 63, slug: "/uttarahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Uttarahalli to Bangalore Airport" },
    { id: 64, slug: "/kumaraswamy-layout-to-bangalore-airport", anchor: "Airport Cab Taxi from Kumaraswamy Layout to Bangalore Airport" },
    { id: 65, slug: "/padmanabhanagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Padmanabhanagar to Bangalore Airport" },
    { id: 66, slug: "/arekere-to-bangalore-airport", anchor: "Airport Cab Taxi from Arekere to Bangalore Airport" },
    { id: 67, slug: "/gottigere-to-bangalore-airport", anchor: "Airport Cab Taxi from Gottigere to Bangalore Airport" },
    { id: 68, slug: "/hulimavu-to-bangalore-airport", anchor: "Airport Cab Taxi from Hulimavu to Bangalore Airport" },
    { id: 69, slug: "/begur-to-bangalore-airport", anchor: "Airport Cab Taxi from Begur to Bangalore Airport" },
    { id: 70, slug: "/hongasandra-to-bangalore-airport", anchor: "Airport Cab Taxi from Hongasandra to Bangalore Airport" },

    { id: 71, slug: "/mangammanapalya-to-bangalore-airport", anchor: "Airport Cab Taxi from Mangammanapalya to Bangalore Airport" },
    { id: 72, slug: "/ecity-phase-1-to-bangalore-airport", anchor: "Airport Cab Taxi from Electronic City Phase 1 to Bangalore Airport" },
    { id: 73, slug: "/ecity-phase-2-to-bangalore-airport", anchor: "Airport Cab Taxi from Electronic City Phase 2 to Bangalore Airport" },
    { id: 74, slug: "/chandapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Chandapura to Bangalore Airport" },
    { id: 75, slug: "/attibele-to-bangalore-airport", anchor: "Airport Cab Taxi from Attibele to Bangalore Airport" },
    { id: 76, slug: "/anehalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Anehalli to Bangalore Airport" },
    { id: 77, slug: "/hebbar-to-bangalore-airport", anchor: "Airport Cab Taxi from Hebbar to Bangalore Airport" },
    { id: 78, slug: "/dasarahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Dasarahalli to Bangalore Airport" },
    { id: 79, slug: "/ganganagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Ganganagar to Bangalore Airport" },
    { id: 80, slug: "/new-bel-road-to-bangalore-airport", anchor: "Airport Cab Taxi from New BEL Road to Bangalore Airport" },

    { id: 81, slug: "/iskcon-temple-to-bangalore-airport", anchor: "Airport Cab Taxi from ISKCON Temple to Bangalore Airport" },
    { id: 82, slug: "/magadi-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Magadi Road to Bangalore Airport" },
    { id: 83, slug: "/amarjyothi-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Amarjyothi Nagar to Bangalore Airport" },
    { id: 84, slug: "/rajiv-gandhi-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Rajiv Gandhi Nagar to Bangalore Airport" },
    { id: 85, slug: "/kaggadasapura-to-bangalore-airport", anchor: "Airport Cab Taxi from Kaggadasapura to Bangalore Airport" },
    { id: 86, slug: "/varthur-to-bangalore-airport", anchor: "Airport Cab Taxi from Varthur to Bangalore Airport" },
    { id: 87, slug: "/gunjur-to-bangalore-airport", anchor: "Airport Cab Taxi from Gunjur to Bangalore Airport" },
    { id: 88, slug: "/yalachenahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Yalachenahalli to Bangalore Airport" },
    { id: 89, slug: "/trinity-to-bangalore-airport", anchor: "Airport Cab Taxi from Trinity to Bangalore Airport" },
    { id: 90, slug: "/cv-raman-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from CV Raman Nagar to Bangalore Airport" },

    { id: 91, slug: "/baiyappanahalli-to-bangalore-airport", anchor: "Airport Cab Taxi from Baiyappanahalli to Bangalore Airport" },
    { id: 92, slug: "/madiwala-to-bangalore-airport", anchor: "Airport Cab Taxi from Madiwala to Bangalore Airport" },
    { id: 93, slug: "/silk-board-to-bangalore-airport", anchor: "Airport Cab Taxi from Silk Board to Bangalore Airport" },
    { id: 94, slug: "/tavarekere-to-bangalore-airport", anchor: "Airport Cab Taxi from Tavarekere to Bangalore Airport" },
    { id: 95, slug: "/murugeshpalya-to-bangalore-airport", anchor: "Airport Cab Taxi from Murugeshpalya to Bangalore Airport" },
    { id: 96, slug: "/old-airport-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Old Airport Road to Bangalore Airport" },
    { id: 97, slug: "/jeevanbheema-nagar-to-bangalore-airport", anchor: "Airport Cab Taxi from Jeevanbheema Nagar to Bangalore Airport" },
    { id: 98, slug: "/thippasandra-to-bangalore-airport", anchor: "Airport Cab Taxi from Thippasandra to Bangalore Airport" },
    { id: 99, slug: "/ulsoor-to-bangalore-airport", anchor: "Airport Cab Taxi from Ulsoor to Bangalore Airport" },
    { id: 100, slug: "/bellandur-outer-ring-road-to-bangalore-airport", anchor: "Airport Cab Taxi from Bellandur ORR to Bangalore Airport" }


];

export const airportLinks = [
    { id: 101, slug: "bangalore-airport-to-ulsoor", text: "Airport Taxi from Ulsoor to Bangalore Airport" },
    { id: 102, slug: "bangalore-airport-to-cox-town", text: "Airport Taxi from Cox Town to Bangalore Airport" },
    { id: 103, slug: "bangalore-airport-to-frazer-town", text: "Airport Taxi from Frazer Town to Bangalore Airport" },
    { id: 104, slug: "bangalore-airport-to-richmond-town", text: "Airport Taxi from Richmond Town to Bangalore Airport" },
    { id: 105, slug: "bangalore-airport-to-ashok-nagar", text: "Airport Taxi from Ashok Nagar to Bangalore Airport" },
    { id: 106, slug: "bangalore-airport-to-wilson-garden", text: "Airport Taxi from Wilson Garden to Bangalore Airport" },
    { id: 107, slug: "bangalore-airport-to-shivajinagar", text: "Airport Taxi from Shivajinagar to Bangalore Airport" },
    { id: 108, slug: "bangalore-airport-to-chickpet", text: "Airport Taxi from Chickpet to Bangalore Airport" },
    { id: 109, slug: "bangalore-airport-to-gandhi-nagar", text: "Airport Taxi from Gandhi Nagar to Bangalore Airport" },
    { id: 110, slug: "bangalore-airport-to-seshadripuram", text: "Airport Taxi from Seshadripuram to Bangalore Airport" },

    { id: 111, slug: "bangalore-airport-to-rajajinagar", text: "Airport Taxi from Rajajinagar to Bangalore Airport" },
    { id: 112, slug: "bangalore-airport-to-mahalakshmi-layout", text: "Airport Taxi from Mahalakshmi Layout to Bangalore Airport" },
    { id: 113, slug: "bangalore-airport-to-nandini-layout", text: "Airport Taxi from Nandini Layout to Bangalore Airport" },
    { id: 114, slug: "bangalore-airport-to-yeshwanthpur", text: "Airport Taxi from Yeshwanthpur to Bangalore Airport" },
    { id: 115, slug: "bangalore-airport-to-peenya", text: "Airport Taxi from Peenya to Bangalore Airport" },
    { id: 116, slug: "bangalore-airport-to-malleswaram-west", text: "Airport Taxi from Malleswaram West to Bangalore Airport" },
    { id: 117, slug: "bangalore-airport-to-mattikere", text: "Airport Taxi from Mattikere to Bangalore Airport" },
    { id: 118, slug: "bangalore-airport-to-sanjaynagar", text: "Airport Taxi from Sanjaynagar to Bangalore Airport" },
    { id: 119, slug: "bangalore-airport-to-vidyaranyapura", text: "Airport Taxi from Vidyaranyapura to Bangalore Airport" },
    { id: 120, slug: "bangalore-airport-to-jalahalli", text: "Airport Taxi from Jalahalli to Bangalore Airport" },

    { id: 121, slug: "bangalore-airport-to-nagavara", text: "Airport Taxi from Nagavara to Bangalore Airport" },
    { id: 122, slug: "bangalore-airport-to-ramamurthy-nagar", text: "Airport Taxi from Ramamurthy Nagar to Bangalore Airport" },
    { id: 123, slug: "bangalore-airport-to-hoodi-circle", text: "Airport Taxi from Hoodi Circle to Bangalore Airport" },
    { id: 124, slug: "bangalore-airport-to-kadugodi", text: "Airport Taxi from Kadugodi to Bangalore Airport" },
    { id: 125, slug: "bangalore-airport-to-whitefield-hopefarm", text: "Airport Taxi from Whitefield Hopefarm to Bangalore Airport" },
    { id: 126, slug: "bangalore-airport-to-varthur", text: "Airport Taxi from Varthur to Bangalore Airport" },
    { id: 127, slug: "bangalore-airport-to-bellandur", text: "Airport Taxi from Bellandur to Bangalore Airport" },
    { id: 128, slug: "bangalore-airport-to-hsr-sector-7", text: "Airport Taxi from HSR Sector 7 to Bangalore Airport" },
    { id: 129, slug: "bangalore-airport-to-hsr-sector-2", text: "Airport Taxi from HSR Sector 2 to Bangalore Airport" },
    { id: 130, slug: "bangalore-airport-to-kudlu-gate", text: "Airport Taxi from Kudlu Gate to Bangalore Airport" },

    { id: 131, slug: "bangalore-airport-to-hongasandra", text: "Airport Taxi from Hongasandra to Bangalore Airport" },
    { id: 132, slug: "bangalore-airport-to-bommanahalli", text: "Airport Taxi from Bommanahalli to Bangalore Airport" },
    { id: 133, slug: "bangalore-airport-to-arekere", text: "Airport Taxi from Arekere to Bangalore Airport" },
    { id: 134, slug: "bangalore-airport-to-bannerghatta-road", text: "Airport Taxi from Bannerghatta Road to Bangalore Airport" },
    { id: 135, slug: "bangalore-airport-to-hulimavu", text: "Airport Taxi from Hulimavu to Bangalore Airport" },
    { id: 136, slug: "bangalore-airport-to-uttarahalli", text: "Airport Taxi from Uttarahalli to Bangalore Airport" },
    { id: 137, slug: "bangalore-airport-to-subramanyapura", text: "Airport Taxi from Subramanyapura to Bangalore Airport" },
    { id: 138, slug: "bangalore-airport-to-kengeri-satellite-town", text: "Airport Taxi from Kengeri Satellite Town to Bangalore Airport" },
    { id: 139, slug: "bangalore-airport-to-nayandahalli", text: "Airport Taxi from Nayandahalli to Bangalore Airport" },
    { id: 140, slug: "bangalore-airport-to-rr-nagar", text: "Airport Taxi from RR Nagar to Bangalore Airport" },

    { id: 141, slug: "bangalore-airport-to-mysore-road", text: "Airport Taxi from Mysore Road to Bangalore Airport" },
    { id: 142, slug: "bangalore-airport-to-vijayanagar", text: "Airport Taxi from Vijayanagar to Bangalore Airport" },
    { id: 143, slug: "bangalore-airport-to-chandra-layout", text: "Airport Taxi from Chandra Layout to Bangalore Airport" },
    { id: 144, slug: "bangalore-airport-to-magadi-road", text: "Airport Taxi from Magadi Road to Bangalore Airport" },
    { id: 145, slug: "bangalore-airport-to-rajaji-nagar-6th-block", text: "Airport Taxi from Rajajinagar 6th Block to Bangalore Airport" },
    { id: 146, slug: "bangalore-airport-to-okkalipura", text: "Airport Taxi from Okkalipura to Bangalore Airport" },
    { id: 147, slug: "bangalore-airport-to-basaveshwara-nagar", text: "Airport Taxi from Basaveshwara Nagar to Bangalore Airport" },
    { id: 148, slug: "bangalore-airport-to-kamakshipalya", text: "Airport Taxi from Kamakshipalya to Bangalore Airport" },
    { id: 149, slug: "bangalore-airport-to-nagarbhavi-stage-2", text: "Airport Taxi from Nagarbhavi Stage 2 to Bangalore Airport" },
    { id: 150, slug: "bangalore-airport-to-katriguppe", text: "Airport Taxi from Katriguppe to Bangalore Airport" },

    { id: 151, slug: "bangalore-airport-to-banashankari-6th-stage", text: "Airport Taxi from Banashankari 6th Stage to Bangalore Airport" },
    { id: 152, slug: "bangalore-airport-to-kumaraswamy-layout", text: "Airport Taxi from Kumaraswamy Layout to Bangalore Airport" },
    { id: 153, slug: "bangalore-airport-to-girinagar", text: "Airport Taxi from Girinagar to Bangalore Airport" },
    { id: 154, slug: "bangalore-airport-to-srinagar", text: "Airport Taxi from Srinagar to Bangalore Airport" },
    { id: 155, slug: "bangalore-airport-to-chamrajpet", text: "Airport Taxi from Chamrajpet to Bangalore Airport" },
    { id: 156, slug: "bangalore-airport-to-basavanagudi", text: "Airport Taxi from Basavanagudi to Bangalore Airport" },
    { id: 157, slug: "bangalore-airport-to-gavipuram", text: "Airport Taxi from Gavipuram to Bangalore Airport" },
    { id: 158, slug: "bangalore-airport-to-lalbagh-road", text: "Airport Taxi from Lalbagh Road to Bangalore Airport" },
    { id: 159, slug: "bangalore-airport-to-shanthinagar", text: "Airport Taxi from Shanthinagar to Bangalore Airport" },
    { id: 160, slug: "bangalore-airport-to-vv-puram", text: "Airport Taxi from VV Puram to Bangalore Airport" },

    { id: 161, slug: "bangalore-airport-to-cv-raman-nagar", text: "Airport Taxi from CV Raman Nagar to Bangalore Airport" },
    { id: 162, slug: "bangalore-airport-to-drdo-township", text: "Airport Taxi from DRDO Township to Bangalore Airport" },
    { id: 163, slug: "bangalore-airport-to-byrasandra", text: "Airport Taxi from Byrasandra to Bangalore Airport" },
    { id: 164, slug: "bangalore-airport-to-jakkur", text: "Airport Taxi from Jakkur to Bangalore Airport" },
    { id: 165, slug: "bangalore-airport-to-thanisandra", text: "Airport Taxi from Thanisandra to Bangalore Airport" },
    { id: 166, slug: "bangalore-airport-to-kannuru", text: "Airport Taxi from Kannuru to Bangalore Airport" },
    { id: 167, slug: "bangalore-airport-to-chikkajala", text: "Airport Taxi from Chikkajala to Bangalore Airport" },
    { id: 168, slug: "bangalore-airport-to-bagalur", text: "Airport Taxi from Bagalur to Bangalore Airport" },
    { id: 169, slug: "bangalore-airport-to-sadenahalli", text: "Airport Taxi from Sadenahalli to Bangalore Airport" },
    { id: 170, slug: "bangalore-airport-to-ivc-road", text: "Airport Taxi from IVC Road to Bangalore Airport" },

    { id: 171, slug: "bangalore-airport-to-devanahalli-town", text: "Airport Taxi from Devanahalli Town to Bangalore Airport" },
    { id: 172, slug: "bangalore-airport-to-razakpalya", text: "Airport Taxi from Razakpalya to Bangalore Airport" },
    { id: 173, slug: "bangalore-airport-to-doddajala", text: "Airport Taxi from Doddajala to Bangalore Airport" },
    { id: 174, slug: "bangalore-airport-to-shettigere", text: "Airport Taxi from Shettigere to Bangalore Airport" },
    { id: 175, slug: "bangalore-airport-to-chikkasandra", text: "Airport Taxi from Chikkasandra to Bangalore Airport" },
    { id: 176, slug: "bangalore-airport-to-yelahanka-new-town", text: "Airport Taxi from Yelahanka New Town to Bangalore Airport" },
    { id: 177, slug: "bangalore-airport-to-yelahanka-satellite-town", text: "Airport Taxi from Yelahanka Satellite Town to Bangalore Airport" },
    { id: 178, slug: "bangalore-airport-to-singanayakanahalli", text: "Airport Taxi from Singanayakanahalli to Bangalore Airport" },
    { id: 179, slug: "bangalore-airport-to-kogilu", text: "Airport Taxi from Kogilu to Bangalore Airport" },
    { id: 180, slug: "bangalore-airport-to-agara", text: "Airport Taxi from Agara to Bangalore Airport" },

    { id: 181, slug: "bangalore-airport-to-harlur", text: "Airport Taxi from Harlur to Bangalore Airport" },
    { id: 182, slug: "bangalore-airport-to-kasavanahalli", text: "Airport Taxi from Kasavanahalli to Bangalore Airport" },
    { id: 183, slug: "bangalore-airport-to-panathur", text: "Airport Taxi from Panathur to Bangalore Airport" },
    { id: 184, slug: "bangalore-airport-to-balagere", text: "Airport Taxi from Balagere to Bangalore Airport" },
    { id: 185, slug: "bangalore-airport-to-gunjur", text: "Airport Taxi from Gunjur to Bangalore Airport" },
    { id: 186, slug: "bangalore-airport-to-sompura", text: "Airport Taxi from Sompura to Bangalore Airport" },
    { id: 187, slug: "bangalore-airport-to-kodathi", text: "Airport Taxi from Kodathi to Bangalore Airport" },
    { id: 188, slug: "bangalore-airport-to-doddanekkundi", text: "Airport Taxi from Doddanekkundi to Bangalore Airport" },
    { id: 189, slug: "bangalore-airport-to-kaggadasapura", text: "Airport Taxi from Kaggadasapura to Bangalore Airport" },
    { id: 190, slug: "bangalore-airport-to-banaswadi", text: "Airport Taxi from Banaswadi to Bangalore Airport" },

    { id: 191, slug: "bangalore-airport-to-horamavu", text: "Airport Taxi from Horamavu to Bangalore Airport" },
    { id: 192, slug: "bangalore-airport-to-hennur-cross", text: "Airport Taxi from Hennur Cross to Bangalore Airport" },
    { id: 193, slug: "bangalore-airport-to-kalyan-nagar", text: "Airport Taxi from Kalyan Nagar to Bangalore Airport" },
    { id: 194, slug: "bangalore-airport-to-lingarajapuram", text: "Airport Taxi from Lingarajapuram to Bangalore Airport" },
    { id: 195, slug: "bangalore-airport-to-bellary-road", text: "Airport Taxi from Bellary Road to Bangalore Airport" },
    { id: 196, slug: "bangalore-airport-to-sahakar-nagar", text: "Airport Taxi from Sahakar Nagar to Bangalore Airport" },
    { id: 197, slug: "bangalore-airport-to-kodigehalli", text: "Airport Taxi from Kodigehalli to Bangalore Airport" },
    { id: 198, slug: "bangalore-airport-to-amrutahalli", text: "Airport Taxi from Amrutahalli to Bangalore Airport" },
    { id: 199, slug: "bangalore-airport-to-ganganagar", text: "Airport Taxi from Ganganagar to Bangalore Airport" },
    { id: 200, slug: "bangalore-airport-to-hebbal-kempapura", text: "Airport Taxi from Hebbal Kempapura to Bangalore Airport" }
];




export const seoPages = [
    {
        id: 1,
        route: "/whitefield-to-bangalore-airport",
        h1: "Whitefield to Bangalore Airport Taxi Near Me",
        title: "Whitefield to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Whitefield to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "whitefield to bangalore airport taxi, airport taxi whitefield, cab from whitefield to airport, airport cab near me, taxi near me, whitefield airport taxi booking, kempegowda airport taxi whitefield"
    },
    {
        id: 2,
        route: "/bangalore-airport-to-whitefield",
        h1: "Bangalore Airport to Whitefield Taxi Near Me",
        title: "Bangalore Airport to Whitefield Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Whitefield taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to whitefield taxi, airport taxi to whitefield, cab from airport to whitefield, airport cab near me, taxi near me, whitefield airport taxi booking, kempegowda airport taxi whitefield"
    },
    {
        id: 3,
        route: "/indiranagar-to-bangalore-airport",
        h1: "Indiranagar to Bangalore Airport Taxi Near Me",
        title: "Indiranagar to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Indiranagar to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "indiranagar to bangalore airport taxi, airport taxi indiranagar, cab from indiranagar to airport, airport cab near me, taxi near me, indiranagar airport taxi booking, kempegowda airport taxi indiranagar"
    },
    {
        id: 4,
        route: "/bangalore-airport-to-indiranagar",
        h1: "Bangalore Airport to Indiranagar Taxi Near Me",
        title: "Bangalore Airport to Indiranagar Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Indiranagar taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to indiranagar taxi, airport taxi to indiranagar, cab from airport to indiranagar, airport cab near me, taxi near me, indiranagar airport taxi booking, kempegowda airport taxi indiranagar"
    },
    {
        id: 5,
        route: "/koramangala-to-bangalore-airport",
        h1: "Koramangala to Bangalore Airport Taxi Near Me",
        title: "Koramangala to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Koramangala to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "koramangala to bangalore airport taxi, airport taxi koramangala, cab from koramangala to airport, airport cab near me, taxi near me, koramangala airport taxi booking, kempegowda airport taxi koramangala"
    },
    {
        id: 6,
        route: "/bangalore-airport-to-koramangala",
        h1: "Bangalore Airport to Koramangala Taxi Near Me",
        title: "Bangalore Airport to Koramangala Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Koramangala taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to koramangala taxi, airport taxi to koramangala, cab from airport to koramangala, airport cab near me, taxi near me, koramangala airport taxi booking, kempegowda airport taxi koramangala"
    },
    {
        id: 7,
        route: "/jayanagar-to-bangalore-airport",
        h1: "Jayanagar to Bangalore Airport Taxi Near Me",
        title: "Jayanagar to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Jayanagar to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "jayanagar to bangalore airport taxi, airport taxi jayanagar, cab from jayanagar to airport, airport cab near me, taxi near me, jayanagar airport taxi booking, kempegowda airport taxi jayanagar"
    },
    {
        id: 8,
        route: "/bangalore-airport-to-jayanagar",
        h1: "Bangalore Airport to Jayanagar Taxi Near Me",
        title: "Bangalore Airport to Jayanagar Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Jayanagar taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to jayanagar taxi, airport taxi to jayanagar, cab from airport to jayanagar, airport cab near me, taxi near me, jayanagar airport taxi booking, kempegowda airport taxi jayanagar"
    },
    {
        id: 9,
        route: "/hsr-layout-to-bangalore-airport",
        h1: "HSR Layout to Bangalore Airport Taxi Near Me",
        title: "HSR Layout to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable HSR Layout to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "hsr layout to bangalore airport taxi, airport taxi hsr layout, cab from hsr layout to airport, airport cab near me, taxi near me, hsr layout airport taxi booking, kempegowda airport taxi hsr layout"
    },
    {
        id: 10,
        route: "/bangalore-airport-to-hsr-layout",
        h1: "Bangalore Airport to HSR Layout Taxi Near Me",
        title: "Bangalore Airport to HSR Layout Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to HSR Layout taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to hsr layout taxi, airport taxi to hsr layout, cab from airport to hsr layout, airport cab near me, taxi near me, hsr layout airport taxi booking, kempegowda airport taxi hsr layout"
    },
    {
        id: 11,
        route: "/electronic-city-to-bangalore-airport",
        h1: "Electronic City to Bangalore Airport Taxi Near Me",
        title: "Electronic City to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Electronic City to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "electronic city to bangalore airport taxi, airport taxi electronic city, cab from electronic city to airport, airport cab near me, taxi near me, electronic city airport taxi booking, kempegowda airport taxi electronic city"
    },
    {
        id: 12,
        route: "/bangalore-airport-to-electronic-city",
        h1: "Bangalore Airport to Electronic City Taxi Near Me",
        title: "Bangalore Airport to Electronic City Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Electronic City taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to electronic city taxi, airport taxi to electronic city, cab from airport to electronic city, airport cab near me, taxi near me, electronic city airport taxi booking, kempegowda airport taxi electronic city"
    },
    {
        id: 13,
        route: "/bellandur-to-bangalore-airport",
        h1: "Bellandur to Bangalore Airport Taxi Near Me",
        title: "Bellandur to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bellandur to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bellandur to bangalore airport taxi, airport taxi bellandur, cab from bellandur to airport, airport cab near me, taxi near me, bellandur airport taxi booking, kempegowda airport taxi bellandur"
    },
    {
        id: 14,
        route: "/bangalore-airport-to-bellandur",
        h1: "Bangalore Airport to Bellandur Taxi Near Me",
        title: "Bangalore Airport to Bellandur Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Bellandur taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to bellandur taxi, airport taxi to bellandur, cab from airport to bellandur, airport cab near me, taxi near me, bellandur airport taxi booking, kempegowda airport taxi bellandur"
    },
    {
        id: 15,
        route: "/marathahalli-to-bangalore-airport",
        h1: "Marathahalli to Bangalore Airport Taxi Near Me",
        title: "Marathahalli to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Marathahalli to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "marathahalli to bangalore airport taxi, airport taxi marathahalli, cab from marathahalli to airport, airport cab near me, taxi near me, marathahalli airport taxi booking, kempegowda airport taxi marathahalli"
    },
    {
        id: 16,
        route: "/bangalore-airport-to-marathahalli",
        h1: "Bangalore Airport to Marathahalli Taxi Near Me",
        title: "Bangalore Airport to Marathahalli Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Marathahalli taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to marathahalli taxi, airport taxi to marathahalli, cab from airport to marathahalli, airport cab near me, taxi near me, marathahalli airport taxi booking, kempegowda airport taxi marathahalli"
    },
    {
        id: 17,
        route: "/sarjapur-road-to-bangalore-airport",
        h1: "Sarjapur Road to Bangalore Airport Taxi Near Me",
        title: "Sarjapur Road to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Sarjapur Road to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "sarjapur road to bangalore airport taxi, airport taxi sarjapur road, cab from sarjapur road to airport, airport cab near me, taxi near me, sarjapur road airport taxi booking, kempegowda airport taxi sarjapur road"
    },
    {
        id: 18,
        route: "/bangalore-airport-to-sarjapur-road",
        h1: "Bangalore Airport to Sarjapur Road Taxi Near Me",
        title: "Bangalore Airport to Sarjapur Road Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Sarjapur Road taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to sarjapur road taxi, airport taxi to sarjapur road, cab from airport to sarjapur road, airport cab near me, taxi near me, sarjapur road airport taxi booking, kempegowda airport taxi sarjapur road"
    },
    {
        id: 19,
        route: "/hebbal-to-bangalore-airport",
        h1: "Hebbal to Bangalore Airport Taxi Near Me",
        title: "Hebbal to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Hebbal to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "hebbal to bangalore airport taxi, airport taxi hebbal, cab from hebbal to airport, airport cab near me, taxi near me, hebbal airport taxi booking, kempegowda airport taxi hebbal"
    },
    {
        id: 20,
        route: "/bangalore-airport-to-hebbal",
        h1: "Bangalore Airport to Hebbal Taxi Near Me",
        title: "Bangalore Airport to Hebbal Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Hebbal taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to hebbal taxi, airport taxi to hebbal, cab from airport to hebbal, airport cab near me, taxi near me, hebbal airport taxi booking, kempegowda airport taxi hebbal"
    },
    {
        id: 21,
        route: "/yelahanka-to-bangalore-airport",
        h1: "Yelahanka to Bangalore Airport Taxi Near Me",
        title: "Yelahanka to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Yelahanka to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "yelahanka to bangalore airport taxi, airport taxi yelahanka, cab from yelahanka to airport, airport cab near me, taxi near me, yelahanka airport taxi booking, kempegowda airport taxi yelahanka"
    },
    {
        id: 22,
        route: "/bangalore-airport-to-yelahanka",
        h1: "Bangalore Airport to Yelahanka Taxi Near Me",
        title: "Bangalore Airport to Yelahanka Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Yelahanka taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to yelahanka taxi, airport taxi to yelahanka, cab from airport to yelahanka, airport cab near me, taxi near me, yelahanka airport taxi booking, kempegowda airport taxi yelahanka"
    },
    {
        id: 23,
        route: "/malleswaram-to-bangalore-airport",
        h1: "Malleswaram to Bangalore Airport Taxi Near Me",
        title: "Malleswaram to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Malleswaram to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "malleswaram to bangalore airport taxi, airport taxi malleswaram, cab from malleswaram to airport, airport cab near me, taxi near me, malleswaram airport taxi booking, kempegowda airport taxi malleswaram"
    },
    {
        id: 24,
        route: "/bangalore-airport-to-malleswaram",
        h1: "Bangalore Airport to Malleswaram Taxi Near Me",
        title: "Bangalore Airport to Malleswaram Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Malleswaram taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to malleswaram taxi, airport taxi to malleswaram, cab from airport to malleswaram, airport cab near me, taxi near me, malleswaram airport taxi booking, kempegowda airport taxi malleswaram"
    },
    {
        id: 25,
        route: "/basavanagudi-to-bangalore-airport",
        h1: "Basavanagudi to Bangalore Airport Taxi Near Me",
        title: "Basavanagudi to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Basavanagudi to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "basavanagudi to bangalore airport taxi, airport taxi basavanagudi, cab from basavanagudi to airport, airport cab near me, taxi near me, basavanagudi airport taxi booking, kempegowda airport taxi basavanagudi"
    },
    {
        id: 26,
        route: "/bangalore-airport-to-basavanagudi",
        h1: "Bangalore Airport to Basavanagudi Taxi Near Me",
        title: "Bangalore Airport to Basavanagudi Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Basavanagudi taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to basavanagudi taxi, airport taxi to basavanagudi, cab from airport to basavanagudi, airport cab near me, taxi near me, basavanagudi airport taxi booking, kempegowda airport taxi basavanagudi"
    },
    {
        id: 27,
        route: "/jp-nagar-to-bangalore-airport",
        h1: "JP Nagar to Bangalore Airport Taxi Near Me",
        title: "JP Nagar to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable JP Nagar to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "jp nagar to bangalore airport taxi, airport taxi jp nagar, cab from jp nagar to airport, airport cab near me, taxi near me, jp nagar airport taxi booking, kempegowda airport taxi jp nagar"
    },
    {
        id: 28,
        route: "/bangalore-airport-to-jp-nagar",
        h1: "Bangalore Airport to JP Nagar Taxi Near Me",
        title: "Bangalore Airport to JP Nagar Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to JP Nagar taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to jp nagar taxi, airport taxi to jp nagar, cab from airport to jp nagar, airport cab near me, taxi near me, jp nagar airport taxi booking, kempegowda airport taxi jp nagar"
    },
    {
        id: 29,
        route: "/btm-layout-to-bangalore-airport",
        h1: "BTM Layout to Bangalore Airport Taxi Near Me",
        title: "BTM Layout to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable BTM Layout to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "btm layout to bangalore airport taxi, airport taxi btm layout, cab from btm layout to airport, airport cab near me, taxi near me, btm layout airport taxi booking, kempegowda airport taxi btm layout"
    },
    {
        id: 30,
        route: "/bangalore-airport-to-btm-layout",
        h1: "Bangalore Airport to BTM Layout Taxi Near Me",
        title: "Bangalore Airport to BTM Layout Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to BTM Layout taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to btm layout taxi, airport taxi to btm layout, cab from airport to btm layout, airport cab near me, taxi near me, btm layout airport taxi booking, kempegowda airport taxi btm layout"
    },
    {
        id: 31,
        route: "/banashankari-to-bangalore-airport",
        h1: "Banashankari to Bangalore Airport Taxi Near Me",
        title: "Banashankari to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Banashankari to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "banashankari to bangalore airport taxi, airport taxi banashankari, cab from banashankari to airport, airport cab near me, taxi near me, banashankari airport taxi booking, kempegowda airport taxi banashankari"
    },
    {
        id: 32,
        route: "/bangalore-airport-to-banashankari",
        h1: "Bangalore Airport to Banashankari Taxi Near Me",
        title: "Bangalore Airport to Banashankari Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Banashankari taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to banashankari taxi, airport taxi to banashankari, cab from airport to banashankari, airport cab near me, taxi near me, banashankari airport taxi booking, kempegowda airport taxi banashankari"
    },
    {
        id: 33,
        route: "/rajajinagar-to-bangalore-airport",
        h1: "Rajajinagar to Bangalore Airport Taxi Near Me",
        title: "Rajajinagar to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Rajajinagar to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "rajajinagar to bangalore airport taxi, airport taxi rajajinagar, cab from rajajinagar to airport, airport cab near me, taxi near me, rajajinagar airport taxi booking, kempegowda airport taxi rajajinagar"
    },
    {
        id: 34,
        route: "/bangalore-airport-to-rajajinagar",
        h1: "Bangalore Airport to Rajajinagar Taxi Near Me",
        title: "Bangalore Airport to Rajajinagar Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Rajajinagar taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to rajajinagar taxi, airport taxi to rajajinagar, cab from airport to rajajinagar, airport cab near me, taxi near me, rajajinagar airport taxi booking, kempegowda airport taxi rajajinagar"
    },
    {
        id: 35,
        route: "/sadashivanagar-to-bangalore-airport",
        h1: "Sadashivanagar to Bangalore Airport Taxi Near Me",
        title: "Sadashivanagar to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Sadashivanagar to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "sadashivanagar to bangalore airport taxi, airport taxi sadashivanagar, cab from sadashivanagar to airport, airport cab near me, taxi near me, sadashivanagar airport taxi booking, kempegowda airport taxi sadashivanagar"
    },
    {
        id: 36,
        route: "/bangalore-airport-to-sadashivanagar",
        h1: "Bangalore Airport to Sadashivanagar Taxi Near Me",
        title: "Bangalore Airport to Sadashivanagar Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Sadashivanagar taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to sadashivanagar taxi, airport taxi to sadashivanagar, cab from airport to sadashivanagar, airport cab near me, taxi near me, sadashivanagar airport taxi booking, kempegowda airport taxi sadashivanagar"
    },
    {
        id: 37,
        route: "/domlur-to-bangalore-airport",
        h1: "Domlur to Bangalore Airport Taxi Near Me",
        title: "Domlur to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Domlur to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "domlur to bangalore airport taxi, airport taxi domlur, cab from domlur to airport, airport cab near me, taxi near me, domlur airport taxi booking, kempegowda airport taxi domlur"
    },
    {
        id: 38,
        route: "/bangalore-airport-to-domlur",
        h1: "Bangalore Airport to Domlur Taxi Near Me",
        title: "Bangalore Airport to Domlur Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Domlur taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to domlur taxi, airport taxi to domlur, cab from airport to domlur, airport cab near me, taxi near me, domlur airport taxi booking, kempegowda airport taxi domlur"
    },
    {
        id: 39,
        route: "/ulsoor-to-bangalore-airport",
        h1: "Ulsoor to Bangalore Airport Taxi Near Me",
        title: "Ulsoor to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Ulsoor to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "ulsoor to bangalore airport taxi, airport taxi ulsoor, cab from ulsoor to airport, airport cab near me, taxi near me, ulsoor airport taxi booking, kempegowda airport taxi ulsoor"
    },
    {
        id: 40,
        route: "/bangalore-airport-to-ulsoor",
        h1: "Bangalore Airport to Ulsoor Taxi Near Me",
        title: "Bangalore Airport to Ulsoor Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Ulsoor taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to ulsoor taxi, airport taxi to ulsoor, cab from airport to ulsoor, airport cab near me, taxi near me, ulsoor airport taxi booking, kempegowda airport taxi ulsoor"
    },
    {
        id: 41,
        route: "/mg-road-to-bangalore-airport",
        h1: "MG Road to Bangalore Airport Taxi Near Me",
        title: "MG Road to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable MG Road to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "mg road to bangalore airport taxi, airport taxi mg road, cab from mg road to airport, airport cab near me, taxi near me, mg road airport taxi booking, kempegowda airport taxi mg road"
    },
    {
        id: 42,
        route: "/bangalore-airport-to-mg-road",
        h1: "Bangalore Airport to MG Road Taxi Near Me",
        title: "Bangalore Airport to MG Road Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to MG Road taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to mg road taxi, airport taxi to mg road, cab from airport to mg road, airport cab near me, taxi near me, mg road airport taxi booking, kempegowda airport taxi mg road"
    },
    {
        id: 43,
        route: "/brigade-road-to-bangalore-airport",
        h1: "Brigade Road to Bangalore Airport Taxi Near Me",
        title: "Brigade Road to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Brigade Road to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "brigade road to bangalore airport taxi, airport taxi brigade road, cab from brigade road to airport, airport cab near me, taxi near me, brigade road airport taxi booking, kempegowda airport taxi brigade road"
    },
    {
        id: 44,
        route: "/bangalore-airport-to-brigade-road",
        h1: "Bangalore Airport to Brigade Road Taxi Near Me",
        title: "Bangalore Airport to Brigade Road Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Brigade Road taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to brigade road taxi, airport taxi to brigade road, cab from airport to brigade road, airport cab near me, taxi near me, brigade road airport taxi booking, kempegowda airport taxi brigade road"
    },
    {
        id: 45,
        route: "/bannerghatta-road-to-bangalore-airport",
        h1: "Bannerghatta Road to Bangalore Airport Taxi Near Me",
        title: "Bannerghatta Road to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bannerghatta Road to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bannerghatta road to bangalore airport taxi, airport taxi bannerghatta road, cab from bannerghatta road to airport, airport cab near me, taxi near me, bannerghatta road airport taxi booking, kempegowda airport taxi bannerghatta road"
    },
    {
        id: 46,
        route: "/bangalore-airport-to-bannerghatta-road",
        h1: "Bangalore Airport to Bannerghatta Road Taxi Near Me",
        title: "Bangalore Airport to Bannerghatta Road Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Bannerghatta Road taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to bannerghatta road taxi, airport taxi to bannerghatta road, cab from airport to bannerghatta road, airport cab near me, taxi near me, bannerghatta road airport taxi booking, kempegowda airport taxi bannerghatta road"
    },
    {
        id: 47,
        route: "/kr-puram-to-bangalore-airport",
        h1: "KR Puram to Bangalore Airport Taxi Near Me",
        title: "KR Puram to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable KR Puram to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "kr puram to bangalore airport taxi, airport taxi kr puram, cab from kr puram to airport, airport cab near me, taxi near me, kr puram airport taxi booking, kempegowda airport taxi kr puram"
    },
    {
        id: 48,
        route: "/bangalore-airport-to-kr-puram",
        h1: "Bangalore Airport to KR Puram Taxi Near Me",
        title: "Bangalore Airport to KR Puram Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to KR Puram taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to kr puram taxi, airport taxi to kr puram, cab from airport to kr puram, airport cab near me, taxi near me, kr puram airport taxi booking, kempegowda airport taxi kr puram"
    },
    {
        id: 49,
        route: "/devanahalli-to-bangalore-airport",
        h1: "Devanahalli to Bangalore Airport Taxi Near Me",
        title: "Devanahalli to Bangalore Airport Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Devanahalli to Bangalore Airport taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "devanahalli to bangalore airport taxi, airport taxi devanahalli, cab from devanahalli to airport, airport cab near me, taxi near me, devanahalli airport taxi booking, kempegowda airport taxi devanahalli"
    },
    {
        id: 50,
        route: "/bangalore-airport-to-devanahalli",
        h1: "Bangalore Airport to Devanahalli Taxi Near Me",
        title: "Bangalore Airport to Devanahalli Taxi Near Me | RKN Airport Taxi",
        description: "Book a fast and reliable Bangalore Airport to Devanahalli taxi near you. Get fixed airport cab fares, on-time pickup, clean vehicles, and professional drivers with RKN Airport Taxi available 24/7.",
        keywords: "bangalore airport to devanahalli taxi, airport taxi to devanahalli, cab from airport to devanahalli, airport cab near me, taxi near me, devanahalli airport taxi booking, kempegowda airport taxi devanahalli"
    }
]



export const homeSeo = {
    route: "/",
    h1: "RKN Airport Taxi – 24/7 Pickup & Drop",
    title: "Bangalore Airport Taxi Near Me | RKN Airport Taxi – 24/7 Cab Service",
    description:
        "RKN Airport Taxi offers reliable Bangalore airport taxi services near you. Book 24/7 airport pickup & drop to Kempegowda Airport with fixed fares, clean cabs, and professional drivers.",
    keywords: `
bangalore airport taxi,
airport taxi near me,
kempegowda airport taxi,
bangalore airport cab,
airport cab near me,
airport pickup bangalore,
airport drop bangalore,
24/7 airport taxi bangalore,
cheap airport taxi bangalore,
best airport taxi bangalore,
bangalore airport taxi service,
cab from bangalore to airport,
taxi service near bangalore airport,
airport taxi booking bangalore,
trusted airport taxi bangalore,
safe airport cab bangalore,
luxury airport taxi bangalore,
innova airport taxi bangalore,
sedan airport taxi bangalore,
online airport taxi booking
`
};




/*
 
     {airportTaxiRoutes.map(route => (
                  <Route
                    key={route.id}
                    path={route.slug}
                    element={<Home title={route.anchor} />}
                  />
                ))}
 
 
 
 
                {airportLinks.map(route => (
                  <Route
                    key={route.id}
                    path={route.slug}
                    element={<Home title={route.text} />}
                  />
                ))}
*/
