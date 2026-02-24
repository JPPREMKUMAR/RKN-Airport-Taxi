import { useContext } from "react"
import { MainContext } from "../context/MainContext"

const toursList = ["https://res.cloudinary.com/dchkwygu9/image/upload/v1767881448/WhatsApp_Image_2026-01-08_at_4.03.43_AM_hq5xcb.jpg",

    , "https://res.cloudinary.com/dchkwygu9/image/upload/v1767881449/WhatsApp_Image_2026-01-08_at_4.03.46_AM_jqu9mu.jpg",
    "https://res.cloudinary.com/dchkwygu9/image/upload/v1767959889/WhatsApp_Image_2026-01-09_at_3.56.36_AM_cbvpgl.jpg",
    "https://res.cloudinary.com/dchkwygu9/image/upload/v1767959889/WhatsApp_Image_2026-01-09_at_3.56.36_AM_2_ursp75.jpg",
    "https://res.cloudinary.com/dchkwygu9/image/upload/v1767959889/WhatsApp_Image_2026-01-09_at_3.56.36_AM_1_g0hsbx.jpg"
]


const OneTours = () => {

    const { adminPhoneNumber1 } = useContext(MainContext)
    return (

        <div>
            <h2 className="my-10 font-bold text-3xl text-center mb-4 mt-4 sm:text-4xl text-black  italic ">Most Popular Round Trip Routes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">

                {

                    toursList.map((image, index) => (
                        <a href={`https://wa.me/91${adminPhoneNumber1}`} target="_blank" key={index}>
                            <img src={image} alt="image" />
                        </a>
                    ))
                }

            </div>

        </div>
    )
}


export default OneTours