const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res){
  res.setHeader('Access-Control-Allow-Origin', 'https://foto-studio-git-dev-adamchrapek.vercel.app');
  if(req.method === `POST`){
    const data = {
      name: req.body.name || '',
      type: req.body.type || '',
      email: req.body.email || '',
      tel: req.body.tel || '-',
      message: req.body.message || '',
      legal: req.body.legal || '',
      address: req.body.address || '',
    }
    let isError = false;

    if(data.address) isError = true;
    data.name.trim().length === 0 && (isError = 1);
    !(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(data.email.toLowerCase()) && (isError = true);
    !(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/im).test(data.tel.replaceAll(' ', '')) && (isError = true);
    data.type.length === 0 && (isError = true);
    data.message.trim().length === 0 && (isError = true);
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
  
    !isError
    ?
      sgMail
      .send(message)
      .then(() => {
        res.status(200).json({ success: true })
      })
      .catch(() => {
        res.status(422).json({ success: false })
      })
    :
      res.status(422).json({ success: false })
  } else {
    res.status(404).send('');
  }
}