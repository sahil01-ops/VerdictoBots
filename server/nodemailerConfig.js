import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const CLIENT_ID = '877310961270-b78jrqt8gtkten0mfav122t47nh2jhsk.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:3000/oauth2callback'; // Ensure this matches your Google API settings
const REFRESH_TOKEN = '1//04rjvhiLU6A9jCgYIARAAGAQSNwF-L9Ir2svUzbk059z07D8w8gSs7vqZHsCZZ9x1-R7aKQGd3lZ68-QQnntkYUhhirgm1k-p-AY';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendFeedbackEmail(feedback, rating, email) {
  try {
    const { token } = await oAuth2Client.getAccessToken();

    if (!token) {
      throw new Error('Failed to retrieve access token');
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        type: 'OAuth2',
        user: 'mannu17032004@gmail.com', // Sender's Gmail address
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: token,
      },
    });

    const mailOptions = {
      from: email, // User's email address
      to: 'mannu17032004@gmail.com', // Hardcoded recipient email address
      subject: 'New Feedback Received',
      text: `You have received new feedback.\n\nEmail: ${email}\nRating: ${rating}\nFeedback: ${feedback}`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error.message);
    throw error;
  }
}
export default sendFeedbackEmail;
