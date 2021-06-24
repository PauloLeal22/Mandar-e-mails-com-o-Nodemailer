const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "paulolealdu@gmail.com",
        pass: "ph27092002"
    }
})

transporter.sendMail({
    from: "Paulo Leal <paulolealdu@gmail.com>",
    to: "devpauloleal@gmail.com",
    subject: "Hello Paulo, teste do Nodemailer",
    text: "Uhuuuul, consegui mandar um email pelo Nodemailer :)",
    html: `<h1>Olá, meu nome é Paulo Leal!</h1> <br>
            <p>Sou desenvolvedor web e estou testando uma nova lib chamada Nodemailer <span style = "color: red">(vale a pena conferir)</span>.<p>
            <p>Vou indo nessa, até a próxima!<p>`
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err)
})