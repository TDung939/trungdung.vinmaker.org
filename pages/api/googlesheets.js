import { google } from 'googleapis';

export default async function handler(req, res) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets'
    ]
  });

  const sheets = google.sheets({
    auth,
    version: 'v4'
  });

  // const response = await sheets.spreadsheets.values.append({
  //   spreadsheetId: '1MlBmsfVdjsePC3gPxO_Y048wLNU7FYW5jUxMqNdHDZU',
  //   range: 'A1:C1',
  //   valueInputOption: 'USER_ENTERED',
  //   requestBody: {
  //     values: [
  //       ['01/01/2020', 'Bob Smith', '$100'],
  //       ['02/02/2020', 'Jane Doe', '$200']
  //     ]
  //   }
  // });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: '1MlBmsfVdjsePC3gPxO_Y048wLNU7FYW5jUxMqNdHDZU',
    range: 'Sheet1',
  })
  return res.status(201).json({
    data: response.data
  });
};