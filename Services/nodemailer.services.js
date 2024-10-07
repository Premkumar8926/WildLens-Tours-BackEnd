import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config(); // Configure dotenv to load environment variables from a .env file

// Function to send a password reset email
export const mail = (senderEmail, verificationString) => {
    // Create a transporter object
    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.User,
            pass: process.env.Pass
        }
    })

    // Generate the password reset link
    const resetLink = `https://wildlentoursfe.netlify.app/resetpage/${verificationString}`;

    // Email details
    const details = {
        from: process.env.User,
        to: senderEmail,
        subject: "Reset Your Password",
        html: `
        <h3>Dear user,</h3>
        
        <p>Sorry to hear you're having trouble logging into your account. We got a message that you forgot your password. If this was you, you can get right back into your account or reset your password now.</p>

        <p>This reset link will be active only for 10 min so change your password now!</p>

        <p>Click the following Link to reset your password: <a href="${resetLink}">${resetLink}</a></p>

        <p>If you didn't request a login link or a password reset, you can ignore this message.</p>

        <p>Thank You</p>`
    }

    // Send the email using the transporter
    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log("Check credentials")
        }
        else {
            console.log("mail send successfully")
        }
    })
}

export const verifyMail = (senderEmail, verificationString) => {
    // Create a transporter object
    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.User,
            pass: process.env.Pass
        }
    })

    // Generate the verification link
    const verificationLink = `https://wildlentoursfe.netlify.app/activation/${verificationString}`;

    // Email details
    const details = {
        from: process.env.User,
        to: senderEmail,
        subject: "Account activation",
        html: `
        <h3>Dear user,</h3>
        
        <p>Welcome to WildLens Tours</p>

        <p>We are happy to be a part of your journey</p>

        <p>Click the following link to activate your account:</p>

        <p><a href="${verificationLink}">Activate Your Account</a></p>

        <p>If the above link doesn't work, copy and paste this URL into your browser:</p>

        <p>${verificationLink}</p>

        <p>Thank You</p>`
    }

    // Send the email using the transporter
    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log("Check credentials")
        }
        else {
            console.log("mail send successfully")
        }
    })
}

export const sendMail = (senderEmail, subject, content) => {
    // Create a transporter object
    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.User,
            pass: process.env.Pass
        }
    })

    // Email details
    const details = {
        from: process.env.User,
        to: senderEmail,
        subject: subject,
        html: `
        <h3>Dear user,</h3>
        
        <p>${content}</p>
         
        <p>Thank You</p>`
    }

    // Send the email using the transporter
    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log("Check credentials")
        }
        else {
            console.log("mail send successfully")
        }
    })
}
