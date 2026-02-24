import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// ===============================
// WhatsApp Sender (Chatmintra)
// ===============================
const sendWhatsAppBookingConfirmation = async (newBooking) => {
    console.log("Whatsapp Message Started")

    try {
        const {
            name,
            mobile,
            email,
            bookingType,
            vehicle,
            pickUpPoint,
            dropPoint,
            pickUpTime,
            pickUpDate,
            bookingId,
            price,
        } = newBooking


        const message = await axios.post(
            "https://backend.chatmitra.com/api/client/send_template",
            {
                templateName: "RKN_AIRPORT_TAXI_BOOKING_CONFIRMATION",
                language: "en",
                phoneNumber: `916303845985`,
                components: [
                    {
                        type: "body",
                        parameters: [
                            { type: "text", text: "Prem Kumar" },        // {{1}}
                            { type: "text", text: "Prem Kumar" },        // {{2}}
                            { type: "text", text: `${mobile}` },      // {{3}}
                            { type: "text", text: email },       // {{4}}
                            { type: "text", text: bookingId },   // {{5}}
                            { type: "text", text: bookingType }, // {{6}}
                            { type: "text", text: vehicle },     // {{7}}
                            { type: "text", text: pickUpPoint },      // {{8}}
                            { type: "text", text: dropPoint },        // {{9}}
                            { type: "text", text: pickUpDate },        // {{10}}
                            { type: "text", text: pickUpTime },        // {{11}}
                            { type: "text", text: price }         // {{12}}
                        ]
                    }
                ]
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.CHATMINTRA_TOKEN}`
                }
            }
        );
        console.log(message)

    } catch (e) {
        console.log(e)
    }



    console.log("Whatsapp Message Ended")
};




export default sendWhatsAppBookingConfirmation