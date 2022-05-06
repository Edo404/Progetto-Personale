const express = require("express")
const bodyParser = require("body-parser")

const nodemailer = require("nodemailer");

const app = express()
const port = 3000

//parse appl
app.use(bodyParser.urlencoded({ extended: false }))

//parse app/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('/', async (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    res.send('Email sent')
})

app.listen(port, () => console.log('Example app listening at local host'))