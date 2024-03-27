import express from 'express';
import bodyParser from 'body-parser';
import firebaseAdmin from 'firebase-admin';
import serviceAccount from '../serviceaccountkey.json';

// Initialize Firebase Admin SDK
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount as firebaseAdmin.ServiceAccount),
    databaseURL: 'https://projectdev-269523-default-rtdb.firebaseio.com'
});

import routes from './v1/routes/posts-routes';

const app = express();
app.use(bodyParser.json());

// Import routes
app.use('/', routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
