import validator from "validator"
import Bookings from "../models/Bookings.js"
import mailToUser from "../middlewares/mailToUser.js"
import mailToAdmin from "../middlewares/mailToAdmin.js"
import sendMailBrevo from "../middlewares/sendMailBrevo.js"
import sendWhatsAppBookingConfirmation from "../middlewares/sendWhatsAppBookingConfirmation.js"
import sendAdminMailBrevo from "../middlewares/sendAdminMailBrevo.js"
const generateBookingId = async () => {
    const allBooking = await Bookings.find({})
    //console.log(allBooking.length)
    const bookingId = allBooking.length + 1
    return bookingId
}


export const bookingUser = async (req, res) => {

    try {

        const { name, mobile, email, bookingType, vehicle, pickUpPoint, dropPoint, pickUpTime, pickUpDate, price, ac, driverBata } = req.body

        const trimEmail = email.trim().toLowerCase()
        //console.log(trimEmail, "chiecking email address")

        const trimMobile = mobile.trim()

        if (!validator.isEmail(trimEmail)) {
            return res.json({ error: "Please enter valid email address", success: false })
        }

        if (!validator.isMobilePhone(trimMobile, "en-IN")) {
            console.log("Please enter Valid mobile number without +91")
            return res.json({ error: "Please enter Valid mobile number without +91 ", success: false })
        }




        let bookingId = await generateBookingId()
        bookingId = parseInt(bookingId)

        let newBookingId = 10000 + bookingId
        let newAc;
        let newDriverBata;

        const newBooking = new Bookings({
            name,
            mobile,
            email,
            bookingType,
            vehicle,
            pickUpPoint,
            dropPoint,
            pickUpTime,
            pickUpDate,
            bookingId: newBookingId,
            price,
            ac,
            driverBata
        })
        await newBooking.save()

        const details = {
            name,
            mobile,
            email,
            bookingType,
            vehicle,
            pickUpPoint,
            dropPoint,
            pickUpTime,
            pickUpDate,
            bookingId: newBookingId,
            frontendUrl: process.env.FRONT_END_URL,
            price,
            ac,
            driverBata
        }

        //console.log(details)
        mailToAdmin(details)
        mailToUser(details)


        //await sendMailBrevo(details)
        //await sendAdminMailBrevo(details)

        return res.json({ success: true, message: "Booking Successful.", bookingDetails: details })


    } catch (e) {

        console.log(e)
        return res.json({ error: e.message, success: false })
    }
}

export const bookingDetails = async (req, res) => {
    try {
        const { bookingId } = req.params
        //console.log(bookingId)


        const bookingDetails = await Bookings.findOne({ bookingId: bookingId })
        return res.json({
            success: true,
            bookingDetails
        })



    } catch (e) {
        return res.json({ success: false, e })
    }
}







export const bookingsDetailsToMail = async (req, res) => {

    try {
        const { bookingDetails } = req.body
        //console.log(bookingDetails)
        const presentDetails = bookingDetails.bookingDetails
        await sendMailBrevo(presentDetails)
        await sendAdminMailBrevo(presentDetails)
        //console.log("mail sending ended")

        return res.json({
            message: "Mail sended Successfully."
        })
    } catch (e) {
        console.log(e)
        return res.json({ success: false, error: e.error, message: "Mail Not sended." })
    }
}












/*/
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Booking Confirmation</title>
    <style>
        body {
            font-family: 'Poppins', Arial, sans-serif;
            background-color: #f4f6f8;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .header {
            background-color: #2563eb;
            color: white;
            text-align: center;
            padding: 25px;
        }

        .header img {
            width: 60px;
            margin-bottom: 10px;
        }

        .content {
            padding: 25px;
        }

        .content h2 {
            color: #111827;
            text-align: center;
        }

        .booking-details {
            background-color: #f9fafb;
            border-radius: 10px;
            padding: 20px;
            margin-top: 15px;
        }

        .detail {
            display: flex;

            margin-bottom: 8px;
            font-size: 15px;
        }

        .spn {
            padding-left: 20px;
        }

        @media screen and (min-width:576px) {
            .detail {
                display: flex;
                justify-content: space-between;
                margin-bottom: 8px;
                font-size: 15px;
            }

            .spn {
                padding-left: 0px;
            }

        }

        .detail strong {
            color: #2563eb;
        }

        .btn-container {
            text-align: center;
            margin-top: 25px;
        }

        .btn {
            background-color: #2563eb;
            color: white;
            padding: 12px 25px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
        }

        .btn:hover {
            background-color: #1e40af;
        }

        .footer {
            background-color: #f3f4f6;
            text-align: center;
            font-size: 12px;
            color: #6b7280;
            padding: 15px;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="header">
            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-taxi-car-service-flatart-icons-outline-flatarticons.png"
                alt="Cab Logo" />
            <h1>Booking</h1>
            <p>Your ride is confirmed 🚖</p>
        </div>

        <div class="content">
            <h2>Hi <span style="color:#2563eb;">Prem Kumar</span>,</h2>
            <p>We’re excited to let you know your cab booking has been successfully confirmed. Here are your trip
                details:</p>

            <div class="booking-details">
                <div class="detail"><strong>Your Name:</strong> <span class="spn">${name}</span></div>
                <div class="detail"><strong>Your Mobile:</strong> <span class="spn">${mobile}</span></div>
                  <div class="detail"><strong>Your Email:</strong> <span class="spn">${email}</span></div>
                <div class="detail"><strong>Booking ID:</strong> <span class="spn">${bookingId}</span></div>
                <div class="detail"><strong>Pickup Location:</strong> <span class="spn">${pickUpPoint}</span></div>
                <div class="detail"><strong>Drop Location:</strong> <span class="spn">${dropPoint}</span></div>
                <div class="detail"><strong>PickUp Date:</strong> <span class="spn">${pickUpDate}</span></div>
                <div class="detail"><strong>PickUp Time:</strong> <span class="spn">${pickUpTime}</span></div>
                <div class="detail"><strong>Price:</strong> <span class="spn">₹1000</span></div>
            </div>

            <p style="margin-top: 20px;">Our driver will reach your pickup point 15 minutes early. Please be ready on
                time.</p>

            <div class="btn-container">
                <a href=${`${frontUrl}/thankyou/${bookingId}`} class="btn">View My Booking</a>
            </div>
        </div>

        <div class="footer">
            <p>Thank you for choosing <strong>BookingOne</strong>.<br />We look forward to serving you again!</p>
            <p>© 2025 BookingOne. All rights reserved.</p>
        </div>
    </div>
</body>

</html>
    
    `

/*/