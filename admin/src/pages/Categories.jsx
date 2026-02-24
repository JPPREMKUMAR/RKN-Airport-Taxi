import { TailSpin } from "react-loader-spinner"
import { useState, useContext, useEffect } from "react"
import { MainContext } from "../context/MainContext"
import axios from "axios"
import VehicleNameItem from "../components/VehicleNameItem"



const Categories = () => {

    const { backendUrl, token, navigate } = useContext(MainContext)

    const [isLoading, setIsLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const [categoryId, setCategoryId] = useState('AIRPORT_TAXI')
    const [vehicleName, setVehicleName] = useState('')
    const [vehicleNames, setVehicleNames] = useState([])


    const getCategories = async () => {

        const response = await axios.post(backendUrl + "/api/categories/getCategories", {}, { headers: { Authorization: `Bearer ${token}` } })

        if (response.data.success === true) {

            //console.log(response)
            const { categories } = response.data
            setCategories(categories)
            setCategory(categories[0].category)
            setCategoryId(categories[0].id)
            console.log(categories);


        } else {
            navigate("/login")
        }
    }


    const getVehicleNames = async () => {
        //console.log(categoryId, 'is Category')


        const response = await axios.post(backendUrl + `/api/categories/getVNames/${categoryId}`, {}, { headers: { Authorization: `Bearer ${token}` } })


        //console.log(response.data.vehicleNames)
        setVehicleNames(response.data.vehicleNames)


        setIsLoading(false);
    }

    useEffect(() => {

        getCategories()


    }, [])
    useEffect(() => {
        // getVehicleNames()
    })

    useEffect(() => {
        getVehicleNames()
    }, [categoryId])



    const onChangeCategory = (e) => {
        setCategory(e.target.value)
        const item = categories.find((item) => item.category === e.target.value)
        //console.log(item)
        setCategoryId(item.id)
    }


    const submitHandler = async (event) => {

        event.preventDefault()
        // console.log(category, categoryId, vehicleName)


        const response = await axios.post(backendUrl + "/api/categories/addName", { categoryId, vehicleName }, { headers: { Authorization: `Bearer ${token}` } })
        if (response.data.success === true) {
            setCategory(categories[0].category)
            setCategoryId(categories[0].id)
            setVehicleName('')
            getVehicleNames()
        }

        //console.log(response.data)
    }





    return (


        <div className="px-5 py-5 bg-gray-50 min-h-screen sm:flex justify-center w-full">
            {
                isLoading ? <div className="flex justify-center">
                    <TailSpin width={50} height={50} color="blue" />
                </div> : <div >

                    <form onSubmit={submitHandler} className=" sm:w-[600px] flex flex-col gap-y-3 px-5 py-5 bg-white rounded-md shadow-md">



                        <div>
                            <label htmlFor="category" className="text-md text-gray-700 font-bold">Category</label>
                            <div className='border rounded-sm my-1'>
                                <select id="category" className='w-full px-3 py-2 outline-none  font-semibold' value={category} onChange={onChangeCategory}  >
                                    {
                                        categories.map((item, index) => (
                                            <option key={item.id} >{item.category}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>


                        <div>
                            <label htmlFor="vehicleName" className="text-md text-gray-700 font-bold">Vehicle Name</label>
                            <div className='border rounded-sm my-1'>
                                <input id="vehicleName" placeholder='Enter Vehicle Name' className='px-3 py-2 outline-none font-semibold' value={vehicleName} onChange={(e) => setVehicleName(e.target.value)} required />
                            </div>
                        </div>

                        <button type="submit" className="text-white bg-blue-600 rounded-md px-5 py-2 font-semibold ">
                            Add Vehicle Name
                        </button>


                    </form>

                    <div className="my-10 px-5 py-5 bg-white rounded-md shadow-md">

                        <h1 className="text-xl font-bold  my-5">{category}</h1>
                        {
                            vehicleNames.map((item, index) => (
                                <VehicleNameItem key={index} item={item} getVehicleNames={getVehicleNames} />
                            ))
                        }


                    </div>


                </div>
            }


        </div>
    )
}


export default Categories