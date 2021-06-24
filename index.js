const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    // SMTP padrão dos email do tipo gmail
    host: "smtp.gmail.com", 

    // Porta padrão do gmail
    port: 465, 

    // gmail utiliza true, mas verifique se o seu tipo de email utiliza também
    secure: true, 

    auth: {
        // Coloque o seu email aqui
        user: "email@gmail.com", 

        // Coloque a senha do seu email aqui
        pass: "senha" 
    }
})

transporter.sendMail({
    // Coloque aqui o seu nome e email
    from: "Seu Nome <email@gmail.com>", 

    // Email do destinatário
    to: "email@gmail.com", 

    // Assunto
    subject: "Hello Paulo, teste do Nodemailer", 

    // Texto do email
    text: "Uhuuuul, consegui mandar um email pelo Nodemailer :)", 

    // Texto html (não obrigatório)
    html: `<h1>Olá, meu nome é ...!</h1> <br>
            <p>Sou desenvolvedor web e estou testando uma nova lib chamada Nodemailer <span style = "color: red">(vale a pena conferir)</span>.<p>
            <p>Vou indo nessa, até a próxima!<p>`
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err)
})