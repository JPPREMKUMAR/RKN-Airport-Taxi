

import mongoose from "mongoose"



const categoriesSchema = new mongoose.Schema({
    category: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    vehicleNames: []
})





const Categories = mongoose.model("Categories", categoriesSchema)


export default Categories