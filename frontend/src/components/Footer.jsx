import { useContext } from "react"
import { whatsapp, telephone } from "../assets/assets"
import { MainContext } from "../context/MainContext"




const Footer = () => {

    const { adminPhoneNumber1, adminPhoneNumber2 } = useContext(MainContext)
    // console.log(adminPhoneNumber1)


    const whatsappImage = "https://res.cloudinary.com/dchkwygu9/image/upload/v1766981758/whatsapp_fghhli.png".replace(
        "/upload/",
        "/upload/w_600,q_auto,f_webp/"
    );


    const phoneImage = `https://res.cloudinary.com/dchkwygu9/image/upload/v1766981758/telephone_hpmc4u.png`.replace(
        "/upload/",
        "/upload/w_600,q_auto,f_webp/"
    );


    return (

        <div className="w-full mb-10">
            <div className=" w-full mx-2 fixed bottom-10  flex items-center  ">


                <div className="w-[15%] sm:flex justify-center items-center ">
                    <a href={`https://wa.me/91${adminPhoneNumber1}`} target="_blank"
                        className="mx-5" aria-label="Chat on Whatsapp"
                    >
                        <img src={whatsappImage}
                            alt="whatsapp"
                            lazy="loading"
                            className="w-10 h-10 sm:hover:w-20 sm:hover:h-20" />
                    </a>
                </div>
                <div className="sm:h-25 w-[70%]"></div>
                <div className=" w-[15%] sm:flex justify-center items-center animate-bounce">

                    <a href={`tel:+91${adminPhoneNumber1}`} className="mx-5" aria-label="Call Us">
                        <img src={phoneImage} alt="telephone" lazy="loading" className="w-10 h-10  sm:hover:w-20 sm:hover:h-20" />
                    </a>
                </div>
            </div>

        </div>
    )
}


export default Footer