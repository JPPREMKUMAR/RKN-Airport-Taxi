
import twilio from 'twilio';





const sendBookingSms = async (newBooking) => {
    // Replace these with your real Twilio credentials
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    const { name,
        mobile,
        email,
        bookingType,
        vehicle,
        pickUpPoint,
        dropPoint,
        pickUpTime,
        pickUpDate,
        bookingId } = newBooking

    const messageTemplate = `
    Booking Confirmed.
    Your Name : ${name} 
    Your Mobile : ${mobile}
    Your Email : ${email}
    Booking ID : ${bookingId} 
    PickUp Location : ${pickUpPoint}
    Drop Loaction : ${dropPoint} 
    PickUp Date : ${pickUpDate}
    PickUp Time : ${pickUpTime}
    Price: 1000
    Our Driver will reach your pickup point 15 minutes early.Please be ready on time.
    
    `


    try {
        await client.messages.create({
            body: messageTemplate,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `+91${mobile}`


        })

        console.log('sms send successfully')
    } catch (error) {
        console.log(error)
    }


}


export default sendBookingSms