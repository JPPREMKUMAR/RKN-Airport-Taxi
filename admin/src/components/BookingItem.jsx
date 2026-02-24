
const BookingItem = ({ item }) => {

    const { name, mobile, email, bookingType, vehicle, pickUpPoint, dropPoint, pickUpTime, pickUpDate, bookingId, price, ac, driverBata } = item
    // console.log(item)
    //const status = true  <p className="text-md font-semibold text-gray-600">Status : <span className={status ? "text-red-600 font-semibold" : "font-semibold text-yellow-600"}>{status ? "Completed" : "Pending"}</span> </p>


    const whatsappMessage =
        `Hi ${name},\n\n` +
        `Your cab booking has been successfully confirmed \n\n` +
        ` Booking Details\n` +
        `------------------------\n` +
        ` Name: ${name}\n` +
        ` Mobile: ${mobile}\n` +
        ` Booking ID: RKN ${bookingId}\n` +
        ` Vehicle: ${vehicle}\n` +
        ` Pickup: ${pickUpPoint}\n` +
        ` Drop: ${dropPoint}\n` +
        ` Date: ${pickUpDate}\n` +
        ` Time: ${pickUpTime}\n` +
        ` Price: ₹${price}\n\n` +
        ` AC: ₹${ac}\n\n` +
        ` Driver Bata: ₹${driverBata}\n\n` +
        `Thank you for choosing RKN Airport Taxi!`;


    const whatsappLink = `https://wa.me/91${mobile}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (

        <div className="bg-white shadow-md rounded-md px-4 py-5 flex flex-col gap-y-3 ">
            <p className="text-md font-semibold text-gray-600">Name : <span className="text-gray-900">{name}</span> </p>
            <a href={`tel:+91${mobile}`} target="_blank" className="text-md font-semibold text-gray-600">Mobile : <span className="text-blue-600" > {mobile}</span> </a>
            <a href={whatsappLink} target="_blank" className="text-md font-semibold text-gray-600">Whatsapp Number : <span className="text-green-600" > {mobile}</span> </a>
            <p className="text-md font-semibold text-gray-600">Email : <span className="text-gray-900">{email}</span> </p>
            <p className="text-md font-semibold text-gray-600">Booking ID : <span className="text-gray-900">RKN {bookingId}</span> </p>
            <p className="text-md font-semibold text-gray-600">Booking Type : <span className="text-gray-900">{bookingType}</span> </p>
            <p className="text-md font-semibold text-gray-600">Vehicle : <span className="text-gray-900">{vehicle}</span> </p>
            <p className="text-md font-semibold text-gray-600">PickUp Point : <span className="text-gray-900">{pickUpPoint}</span> </p>
            <p className="text-md font-semibold text-gray-600">Drop Point : <span className="text-gray-900">{dropPoint}</span> </p>
            <p className="text-md font-semibold text-gray-600">PickUp Time : <span className="text-gray-900">{pickUpTime}</span> </p>
            <p className="text-md font-semibold text-gray-600">PickUp Date : <span className="text-gray-900">{pickUpDate}</span> </p>
            <p className="text-md font-semibold text-gray-600">Price : <span className="text-gray-900">{price}</span> </p>

            <p className="text-md font-semibold text-gray-600">AC : <span className="text-gray-900">{ac}</span> </p>

            <p className="text-md font-semibold text-gray-600">Driver Bata : <span className="text-gray-900">{driverBata}</span> </p>



        </div>
    )
}


export default BookingItem