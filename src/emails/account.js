const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mohdraqif1234@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app. ${name}. Let me know how you get along with the app.`

    })
}

const sendGoodByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mohdraqif1234@gmail.com',
        subject: 'We feel sorry to see you go!',
        text: `GoodBye!. ${name}. We welcome you always! .`

    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}