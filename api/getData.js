const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
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
