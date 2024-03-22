const admin = require('firebase-admin');

if (!admin.apps.length) {
  const serviceAccount = require('../path-to-your-firebase-adminsdk.json');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-database-url.firebaseio.com',
  });
}

module.exports = async (req, res) => {
  const db = admin.database();
  const ref = db.ref('/');

  ref.once('value', snapshot => {
    res.status(200).json(snapshot.val());
  }, error => {
    res.status(500).json({ error: error.message });
  });
};
