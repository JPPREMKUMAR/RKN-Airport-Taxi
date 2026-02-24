
import Vehicles from "../models/Vehicles.js"
import upload, { uploadToCloudinary } from "../middlewares/uploadImage.js";

export const addVehicle = async (req, res) => {


    try {
        let { vehicle, bookingType, price, capacity, bookingTypeId, ac, driverBata } = req.body

        if (ac === '') {
            ac = 0
        }
        if (driverBata === '') {
            driverBata = 0
        }
        // Upload to Cloudinary
        const result = await uploadToCloudinary(req.file.buffer);
        //console.log(req.file.path)
        const imageUrl = result.secure_url
        //console.log(imageUrl)
        if (!req.path) {
            return res.json({ success: false, message: "Please Upload a Image." })
        }

        const newVehicle = new Vehicles({
            vehicle,
            bookingType,
            price,
            capacity,
            imageUrl,
            bookingTypeId,
            ac,
            driverBata

        })
        await newVehicle.save()


        //console.log(newVehicle)

        return res.json({ success: true, message: "Vehicle Added.", newVehicle: newVehicle })


    } catch (e) {

        //console.log(e)
        return res.json({ success: false, e })
    }
}



export const allVehicles = async (req, res) => {

    try {


        const getAllVehicles = await Vehicles.find({}).sort({ createdAt: -1 })


        return res.json({
            success: true,
            vehicles: getAllVehicles
        })


    } catch (e) {

        //console.log(e)
        return res.json({ success: false, e })

    }
}

export const getVehicle = async (req, res) => {

    try {

        const { id } = req.params
        //console.log(id)

        const getVehicle = await Vehicles.findOne({ _id: id })
        //console.log(getVehicle)

        if (getVehicle !== undefined || getVehicle !== null) {
            return res.json({
                success: true,
                vehicleDetails: getVehicle
            })

        } else {
            return res.json({
                success: false,
                message: "Invalid Vehicle Id "
            })
        }





    } catch (e) {

        //console.log(e)
        return res.json({ success: false, message: "Invalid Vehicle Id" })

    }
}




export const updateVehicle = async (req, res) => {

    try {

        const { vehicle, bookingType, price, capacity, ac, driverBata } = req.body
        console.log(req.body)
        const { id } = req.params
        // console.log(id)
        const isVehicle = await Vehicles.findOne({ _id: id })
        //console.log(isVehicle)
        if (isVehicle === null) {
            return res.json({
                success: false,
                message: "Invalid Vehicle Id "
            })
        }






        const getVehicle = await Vehicles.updateOne({ _id: id }, { vehicle, bookingType, price, capacity, ac, driverBata })



        if (getVehicle !== undefined || getVehicle !== null) {
            console.log("Vehicle Details Updated.")
            return res.json({
                success: true,

                message: "Vehicle Details Updated."
            })

        } else {
            //console.log("Invalid Vehicle Id ")
            return res.json({
                success: false,
                message: "Invalid Vehicle Id "
            })
        }





    } catch (e) {

        //console.log(e)
        return res.json({ success: false, message: "Invalid Vehicle Id" })

    }
}






export const deleteVehicle = async (req, res) => {

    try {


        const { id } = req.body
        // console.log(id)
        const isVehicle = await Vehicles.deleteOne({ _id: id })
        //console.log(isVehicle)
        if (isVehicle === null) {
            return res.json({
                success: false,
                message: "Invalid Vehicle Id "
            })
        }




        return res.json({
            success: true,

            message: "Vehicle Deleted."
        })








    } catch (e) {

        console.log(e)
        return res.json({ success: false, message: "Invalid Vehicle Id" })

    }
}



export const getAllVehiclesBookingType = async (req, res) => {


    try {

        const { bookingTypeId } = req.params;
        console.log(bookingTypeId)

        const getAllVehicle = await Vehicles.find({ categoryId: bookingTypeId }).sort({ createdAt: -1 });


        return res.json({ success: true, allVehicles: getAllVehicle });

    } catch (e) {
        return res.json({ success: false, e });
    }


}