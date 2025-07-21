import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import config from './config.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Configure your transporter
console.log('Email Config:', {
  user: config.email.user,
  pass: config.email.pass ? '****' : 'missing'
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.email.user,
    pass: config.email.pass
  },
  debug: true, // Enable debug logging
  logger: true  // Log to console
});

// Helper function to send emails
async function sendEmails({ toAdmin, toUser }) {
  await transporter.sendMail(toAdmin);
  if (toUser) await transporter.sendMail(toUser);
}

// =================== Quick Quote Form ===================
app.post("/api/quick-quote", async (req, res) => {
  const {
    companyName, email, firstName, lastName, phoneNumber, streetAddress,
    serviceType, weight, freightDescription,
    length, height, width, origin, destination, pickupDate, deliveryDate
  } = req.body;

  try {
    await sendEmails({
      toAdmin: {
        from: email,
        to: config.email.user,
        subject: "New Quick Quote Request",
        text: `Contact Information:
Name: ${firstName} ${lastName}
Company: ${companyName}
Email: ${email}
Phone: ${phoneNumber}
Address: ${streetAddress}

Shipment Details:
Service Type: ${serviceType}
Weight: ${weight}
Description: ${freightDescription}

Dimensions:
Length: ${length}
Height: ${height}
Width: ${width}

Pick-up & Delivery:
Origin: ${origin}
Destination: ${destination}
Pickup Date: ${pickupDate}
Delivery Date: ${deliveryDate}`,
      },
      toUser: {
        from: config.email.user,
        to: email,
        subject: "Thanks for your quote request",
        text: `Hi ${firstName},\n\nThank you for requesting a quote from XTransport. We have received your shipment details and our team will review them promptly.\n\nWe aim to provide you with a detailed quote within 24 business hours.\n\n— XTransport Team`,
      },
    });

    res.status(200).send("Quote submitted successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending quote.");
  }
});

// =================== Driver Form ===================
app.post("/api/driver", async (req, res) => {
  const {
    firstName, lastName, postalCode, email,
    homePhone, cellPhone, validLicense,
    preventableAccidents, movingViolations,
    hasTWIC, hasFastCard, convictedDWI,
    testedPositive, canCrossBorder
  } = req.body;

  try {
    await sendEmails({
      toAdmin: {
        from: email,
        to: config.email.user,
        subject: "New Driver Application",
        text: `Personal Information:
Name: ${firstName} ${lastName}
Email: ${email}
Postal Code: ${postalCode}
Home Phone: ${homePhone || 'N/A'}
Cell Phone: ${cellPhone}

Qualifications:
Valid Class 1/AZ License: ${validLicense}
Preventable Accidents (3 years): ${preventableAccidents}
Moving Violations (3 years): ${movingViolations}

Certifications & Eligibility:
TWIC Card: ${hasTWIC}
FAST Card: ${hasFastCard}
Border Crossing Ability: ${canCrossBorder}

Background:
DWI/DUI Conviction: ${convictedDWI}
Drug/Alcohol Test Positive (5 years): ${testedPositive}`,
      },
      toUser: {
        from: config.email.user,
        to: email,
        subject: "Thanks for applying to XTransport",
        text: `Hi ${firstName},\n\nThank you for applying to join XTransport as a driver. We have received your application and our recruiting team will review it carefully.\n\nIf your qualifications match our requirements, we will contact you to discuss the next steps in the hiring process.\n\n— XTransport Recruiting Team`,
      },
    });

    res.status(200).send("Driver form submitted!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending driver form.");
  }
});

// =================== Operator Form ===================
app.post("/api/operator", async (req, res) => {
  const {
    firstName, lastName, postalCode, email,
    homePhone, cellPhone, validLicense,
    canCrossBorder, yearsInTransport, vehiclesOwned,
    governedAt105, emissionsDeleted, eLogCompatible,
    wheelbase, tareWeight, equipmentOperated
  } = req.body;

  try {
    await sendEmails({
      toAdmin: {
        from: email,
        to: config.email.user,
        subject: "New Owner Operator Application",
        text: `Personal Information:
Name: ${firstName} ${lastName}
Email: ${email}
Postal Code: ${postalCode}
Home Phone: ${homePhone || 'N/A'}
Cell Phone: ${cellPhone}

Experience & Qualifications:
Valid Class 1/AZ License: ${validLicense}
Years in Transportation: ${yearsInTransport}
Border Crossing Ability: ${canCrossBorder}

Fleet Information:
Vehicles Owned: ${vehiclesOwned}
Governed at 105: ${governedAt105}
Emissions Deleted: ${emissionsDeleted}
eLog Compatible: ${eLogCompatible}

Vehicle Specifications:
Wheelbase: ${wheelbase}
Tare Weight: ${tareWeight}
Equipment Operated: ${equipmentOperated}`,
      },
      toUser: {
        from: config.email.user,
        to: email,
        subject: "Thanks for your interest in XTransport",
        text: `Hi ${firstName},\n\nThank you for your interest in partnering with XTransport as an Owner Operator. We have received your information and our fleet management team will review your details.\n\nWe look forward to discussing potential partnership opportunities with you.\n\n— XTransport Fleet Management Team`,
      },
    });

    res.status(200).send("Operator form submitted!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending operator form.");
  }
});

// =================== Contact Us Form ===================
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    await sendEmails({
      toAdmin: {
        from: email,
        to: config.email.user,
        subject: "New Contact Inquiry",
        text: `Contact Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}`,
      },
      toUser: {
        from: config.email.user,
        to: email,
        subject: "Thanks for contacting XTransport",
        text: `Hi ${name},\n\nThank you for reaching out to XTransport. We've received your message regarding "${subject}" and our team will get back to you as soon as possible.\n\n— XTransport Team`,
      },
    });

    res.status(200).send("Contact form submitted!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending contact form.");
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));