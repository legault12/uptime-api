const admin = require('firebase-admin');

if (!admin.apps.length) {
  const serviceAccount = require('../path-to-your-firebase-adminsdk.json');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-database-url.firebaseio.com',
  });
}

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const db = admin.database();
    const ref = db.ref('/');

    ref.push(req.body, error => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(200).json({ message: 'Data added successfully!' });
      }
    });
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
