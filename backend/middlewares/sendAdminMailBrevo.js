import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_HOST,
  port: process.env.BREVO_PORT,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
  },
});

const sendAdminMailBrevo = async (newBooking) => {
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
    ac,
    driverBata
  } = newBooking;

  const adminPanelUrl = process.env.ADMIN_PERSONAL;


  const whatsappMessage =
    `Hi ${name},\n\n` +
    `Your cab booking has been successfully confirmed \n\n` +
    ` Booking Details\n` +
    `------------------------\n` +
    ` Name: ${name}\n` +
    ` Mobile: ${mobile}\n` +
    ` Booking ID: RKN ${bookingId}\n` +
    ` Vehicle: ${vehicle}\n` +
    ` Pickup: ${pickUpPoint}\n` +
    ` Drop: ${dropPoint}\n` +
    ` Date: ${pickUpDate}\n` +
    ` Time: ${pickUpTime}\n` +
    ` Price: ₹${price}\n\n` +
    ` AC: ₹${ac}\n\n` +
    ` Driver Bata: ₹${driverBata}\n\n` +
    `Thank you for choosing RKN Airport Taxi!`;


  const whatsappLink = `https://wa.me/91${mobile}?text=${encodeURIComponent(
    whatsappMessage
  )}`;












  const htmlTemplate = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>New Booking Alert</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f3f4f6;
        padding: 20px;
      }
      .box {
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }
      .header {
        background: #111827;
        color: white;
        padding: 20px;
        text-align: center;
      }
      .content {
        padding: 20px;
        font-size: 14px;
      }
      .row {
        margin-bottom: 8px;
      }
      .row strong {
        color: #2563eb;
      }
      .btn {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 18px;
        background: #2563eb;
        color: #000000;
        text-decoration: none;
        border-radius: 5px;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #6b7280;
        padding: 15px;
        background: #f9fafb;
      }
    </style>
  </head>

  <body>
    <div class="box">
      <div class="header">
        <h2>🚕 New Cab Booking</h2>
      </div>

      <div class="content">
        <div class="row"><strong>Booking ID:</strong> RKN ${bookingId}</div>
        <div class="row"><strong>Customer:</strong> ${name}</div>
        <div class="row"><strong>Mobile:</strong><a href="tel:+91${mobile}" target="_blank">  ${mobile}</a> </div>
        <div class="row"><strong>Whatsapp Number:</strong> <a href="${whatsappLink}" target="_blank" >${mobile}</a> </div>

        <div class="row"><strong>Email:</strong> ${email}</div>
        <div class="row"><strong>Booking Type:</strong> ${bookingType}</div>
        <div class="row"><strong>Vehicle:</strong> ${vehicle}</div>
        <div class="row"><strong>Pickup:</strong> ${pickUpPoint}</div>
        <div class="row"><strong>Drop:</strong> ${dropPoint}</div>
        <div class="row"><strong>Date:</strong> ${pickUpDate}</div>
        <div class="row"><strong>Time:</strong> ${pickUpTime}</div>
        <div class="row"><strong>Price:</strong> ₹${price}</div>
        <div class="detail"><strong>AC : </strong> <span class="spn">₹${ac} per KM</span></div>
      <div class="detail"><strong>Driver Bata : </strong> <span class="spn">₹${driverBata}</span></div>


      </div>

      <div class="footer">
        © 2025 RKN AIRPORT TAXI – Bengalore
      </div>
    </div>
  </body>
  </html>
  `;

  await transporter.sendMail({
    from: '"RKN AIRPORT TAXI" <rknairporttaxi@gmail.com>',
    to: process.env.ADMIN_PERSONAL,
    subject: `🚕 New Booking | ${bookingId}`,
    html: htmlTemplate,
  });
};

export default sendAdminMailBrevo;
