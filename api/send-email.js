const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/api/send-email", function (req, res) {
  const data = {
    name: req.body.name || '',
    type: req.body.type || '',
    email: req.body.email || '',
    tel: req.body.tel || '-',
    message: req.body.message || '',
    legal: req.body.legal || ''
  }
  let isError = false;

  data.name.trim().length === 0 && (isError = 1);
  !(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(data.email.toLowerCase()) && (isError = true);
  !(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/im).test(data.tel.replaceAll(' ', '')) && (isError = true);
  data.type.length === 0 && (isError = true);
  data.message.length === 0 && (isError = true);
  data.legal === false && (isError = true);

  const message = {
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
Rodzaj sesji: ${data.type}
Adres e-mail: ${data.email}
Numer telefonu: ${data.tel}

${data.message}


${data.legal && 'Zaakceptowano politykę prywatności'}`,
}

  !isError ?
  sgMail
  .send(message)
  .then(() => {
    res.status(200).json({ success: true })
  })
  .catch(() => {
    res.status(500).json({ success: false })
  })
  :
  res.status(500).json({ success: false })
})

app.get("/api/send-email", function (req, res) {
  res.send('');
})

app.listen(443);