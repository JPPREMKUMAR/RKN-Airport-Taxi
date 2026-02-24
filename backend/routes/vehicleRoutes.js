

import express from "express"
import { addVehicle, allVehicles, getVehicle, updateVehicle, deleteVehicle, getAllVehiclesBookingType } from "../controllers/vehicleController.js"
import upload from "../middlewares/uploadImage.js";
import authAdmin from "../middlewares/authAdmin.js"
import updateImage from "../middlewares/updateImage.js"


const vehicleRouter = express.Router()
//, uploadImage.single("image")

vehicleRouter.post("/addItem", authAdmin, upload.single("image"), addVehicle)

vehicleRouter.post("/allVehicles", authAdmin, allVehicles)

vehicleRouter.post("/getVehicle/:id", authAdmin, getVehicle)
vehicleRouter.post("/update/:id", authAdmin, updateVehicle)
vehicleRouter.post('/delete/:id', authAdmin, deleteVehicle)
vehicleRouter.post("/getAllVehicles/:bookingTypeId", authAdmin, getAllVehiclesBookingType)

export default vehicleRouter