


import mongoose from "mongoose"



const vehicleNamesSchema = new mongoose.Schema({
    vehicleName: { type: String, required: true },
    categoryId: { type: String, required: true }
})



const vehicleNames = mongoose.model("VehicleNames", vehicleNamesSchema)


export default vehicleNames