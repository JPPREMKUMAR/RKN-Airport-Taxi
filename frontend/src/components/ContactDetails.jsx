import ContactWithUs from "./ContactWithUs"
import WhyBookWithUs from "./WhyBookWithUs"



const ContactDetails = () => {

    return (
        <div className="grid grid-cols-1 gap-y-3 gap-x-3 sm:grid-cols-2 my-30">
            <WhyBookWithUs />
            <ContactWithUs />


        </div>
    )
}


export default ContactDetails