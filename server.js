import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MailerSend, Recipient, EmailParams } from 'mailersend';

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Allow CORS from your frontend
app.use(cors({
  origin: 'http://localhost:5173', // Ensure this matches your frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
}));
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self' http://localhost:3001; script-src 'self' 'unsafe-inline' http://localhost:3001; style-src 'self' 'unsafe-inline';");
  next();
});

app.post('/send-email', async (req, res) => {
  try {
    const { from, to, subject, html } = req.body;

    const mailersend = new MailerSend({
      apiKey: "mlsn.56f48a6abe1cce6387c0349b75e5a5aa07faeb23d046bcfdbb053b39979fdc66" // Replace with your MailerSend API key
    });

    const recipients = to.map((recipient) => new Recipient(recipient.email, recipient.name));

    const emailParams = new EmailParams()
      .setFrom(from.email)
      .setFromName(from.name)
      .setRecipients(recipients)
      .setSubject(subject)
      .setHtml(html)
      .setText(html.replace(/<[^>]+>/g, ''));

    await mailersend.send(emailParams);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send the message' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
