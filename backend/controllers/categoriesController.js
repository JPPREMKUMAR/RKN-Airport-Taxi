
import Categories from "../models/Categories.js"

import VehicleNames from "../models/VehicleNames.js"

export const addCategory = async (req, res) => {

    try {

        const { category, id } = req.body
        //console.log(category, id)


        await Categories.insertOne({ category, id });



        return res.json({ success: true, message: "Category added." })
    } catch (e) {
        return res.json({
            success: false,
            e
        })
    }
}





export const getCategories = async (req, res) => {

    try {

        const allCategories = await Categories.find({})




        return res.json({ success: true, message: "Category added.", categories: allCategories })
    } catch (e) {
        return res.json({
            success: false,
            e
        })
    }
}



export const addVehicleName = async (req, res) => {

    try {

        const { categoryId, vehicleName } = req.body
        // console.log(categoryId, vehicleName)

        const newVehicleName = new VehicleNames({
            categoryId,
            vehicleName

        })

        await newVehicleName.save();


        return res.json({ success: true, message: "Category added.", newVehicleName: newVehicleName })
    } catch (e) {
        //console.log(e)
        return res.json({
            success: false,
            message: "Please Try Again"
        })
    }
}




export const getVehicleNames = async (req, res) => {
    try {

        const { categoryId } = req.params;
        //console.log(categoryId);


        const vehicles = await VehicleNames.find({ categoryId: categoryId })


        return res.json({ success: true, vehicleNames: vehicles })


    } catch (e) {
        //console.log(e)
        return res.json({
            success: false,
            message: "Please Try Again"
        })
    }

}




export const getAllCategoriesVehiclesNames = async (req, res) => {
    try {

        const vehicles = await VehicleNames.find({})

        return res.json({ success: true, vehicleNames: vehicles })

    } catch (e) {
        return res.json({ success: false, e })
    }
}


export const deleteVehicleName = async (req, res) => {
    try {


        const { id } = req.params;

        await VehicleNames.deleteOne({ _id: id })


        return res.json({ success: true, message: "Vehicle Name deleted." })

    } catch (e) {
        return res.json({ success: false, e })
    }

}