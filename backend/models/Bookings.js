

import mongoose from "mongoose"


const BookingsSchema = mongoose.Schema({


    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    bookingType: { type: String, required: true },
    vehicle: { type: String, required: true },
    pickUpPoint: { type: String, required: true },
    dropPoint: { type: String, required: true },
    pickUpTime: { type: String, required: true },
    pickUpDate: { type: String, required: true },
    bookingId: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: true })



const Bookings = mongoose.model("Bookings", BookingsSchema)


export default Bookings