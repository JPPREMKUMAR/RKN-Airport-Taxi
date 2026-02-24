
import express from "express"


import authAdmin from "../middlewares/authAdmin.js"

import { addCategory, addVehicleName, getCategories, getVehicleNames, getAllCategoriesVehiclesNames, deleteVehicleName } from "../controllers/categoriesController.js"


const categoriesRouter = express.Router()





categoriesRouter.post("/addCategory", authAdmin, addCategory)
categoriesRouter.post("/getCategories", authAdmin, getCategories)
categoriesRouter.post("/addName", authAdmin, addVehicleName)
categoriesRouter.post("/getVNames/:categoryId", authAdmin, getVehicleNames)
categoriesRouter.post("/getAllVNames", authAdmin, getAllCategoriesVehiclesNames)
categoriesRouter.post("/deleteVehicleName/:id", authAdmin, deleteVehicleName)




export default categoriesRouter