


import express from "express"

import { adminAddItem, adminLogin, adminAllBookings } from "../controllers/adminController.js"

const adminRouter = express.Router()



adminRouter.post("/login", adminLogin)
adminRouter.post("/addItem", adminAddItem)
adminRouter.post("/bookings", adminAllBookings)

export default adminRouter