
import mongoose from "mongoose"

const vehicleSchema = new mongoose.Schema({

    vehicle: { type: String, required: true },
    bookingType: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    imageUrl: { type: String, required: true },
    status: { type: Boolean, default: true },
    capacity: { type: Number, required: true },
    bookingTypeId: { type: String, required: true },
    ac: { type: String, default: '0' },
    driverBata: { type: String, default: '0' }


}, { timestamps: true })




const Vehicles = mongoose.model("vehicles", vehicleSchema)



export default Vehicles