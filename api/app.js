const express = require('express');
const bodyParser = require('body-parser');
const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../serviceaccountkey.json'); // Path to your service account key file

// Initialize Firebase Admin SDK
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: 'https://projectdev-269523-default-rtdb.firebaseio.com'
});
const routes = require('./v1/routes/posts-routes');

const app = express();
app.use(bodyParser.json());

// Import routes
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
