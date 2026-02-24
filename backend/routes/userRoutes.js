import express from "express"
import { loginUser, registerUser, userProfile, getAllVehiclesUser, getAllVehiclesCategory } from "../controllers/userController.js"
import { getVehicle } from "../controllers/vehicleController.js"
import { getCategories, getVehicleNames, getAllCategoriesVehiclesNames } from "../controllers/categoriesController.js"


import authUser from "../middlewares/authUser.js"

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post('/userProfile', authUser, userProfile)
userRouter.post("/getAllVehicles", getAllVehiclesUser)
userRouter.post("/getAllVehicles/:categoryId", getAllVehiclesCategory)
userRouter.post("/getVehicle/:id", getVehicle);
userRouter.post("/getCategories", getCategories)
userRouter.post("/categoryVehicles/:categoryId", getVehicleNames)
userRouter.post("/allCategoriesVehicles/:categoryId", getAllCategoriesVehiclesNames)




export default userRouter