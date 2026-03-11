import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import connectDB from "./config/db.js"
import userRouter from "./routes/userRoutes.js"
import bookingsRouter from "./routes/bookingsRoutes.js"
import adminRouter from "./routes/adminRoutes.js"
import vehicleRouter from "./routes/vehicleRoutes.js"
import categoriesRouter from "./routes/categoriesRoutes.js"
import connectCloudinary from "./config/connectCloudinary.js"



dotenv.config()

const app = express()
// Middleware 
app.use(express.json())



app.use(cors({
    origin: "*", // allow all browsers
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));



// Connect To Db 
connectDB()







// Routes 
app.get("/", (req, res) => {
    res.json({ success: true, message: "Api Working Code Is Updated" }).status(200)
})

app.use("/api/user", userRouter)

app.use("/api/book", bookingsRouter)

//Admin User 

app.use("/api/admin", adminRouter)

//Vehicle
app.use("/api/vehicle", vehicleRouter)

//Categories 
app.use("/api/categories", categoriesRouter)



// PORT Number

const PORT = process.env.PORT || 8000


// Start Server 

const startServer = async () => {
    try {

        await connectCloudinary()
        app.listen((PORT), () => {
            console.log(`Server Working on PORT ${PORT}`)

        })


    } catch (error) {
        console.log(error)
    }

}

startServer()

