const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/", function (req, res) {
  const data = {
    name: req.body.name,
    typeOfSession: req.body.type,
    email: req.body.email,
    tel: req.body.tel || '-',
    message: req.body.message,
  }
  const msg = {
    to: {
      email: 'kontakt@adamchrapek.pl',
    },
    from: {
      email: 'kontakt@adamchrapek.pl',
      name: 'Adam Chrapek',
    },
    replyTo: `${data.email}`,
    subject: `[FotoStudio] ${data.name} przesyła wiadomość`,
    text:`Imię i nazwisko: ${data.name}
Rodzaj sesji: ${data.typeOfSession}
Adres e-mail: ${data.email}
Numer telefonu: ${data.tel}

${data.message}`,
  }

  sgMail
  .send(msg)
  .then(() => {
    res.status(200).json({ success: true })
  })
  .catch(() => {
    res.status(500).json({ success: false })
  });
})

app.listen(443);