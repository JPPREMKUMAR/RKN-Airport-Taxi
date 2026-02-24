

import { Link } from "react-router-dom"


const AllRights = () => {

    return (
        <div className="my-10 mb-20">

            <div className="my-10 flex items-center flex-col text-center py-4  text-md font-semibold text-gray-700">
                <p className="">

                    <Link to="/aboutUs" className="cursor-pointer text-gray-700 hover:text-blue-500  mx-3 my-1">About</Link>
                    <Link to="/contactUs" className="cursor-pointer text-gray-700 hover:text-blue-500  mx-3 my-1">Contact</Link>
                    <Link to="/privacy-policy" className="cursor-pointer text-gray-700 hover:text-blue-500  mx-3 my-1">Privacy Policy</Link>
                    <Link to="/termsOfServices" className="cursor-pointer text-gray-700 hover:text-blue-500  mx-3 my-1">Services</Link>


                </p>
                <p className="my-3 self-center ">
                    © {new Date().getFullYear()} RKN AIRPORT TAXI. All Rights Reserved.
                </p>

            </div>

        </div>
    )



}



export default AllRights