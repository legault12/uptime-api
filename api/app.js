"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var firebase_admin_1 = require("firebase-admin");
var serviceaccountkey_json_1 = require("./serviceaccountkey.json");
var firebase_config_1 = require("./firebase_config");
console.log(firebase_config_1.firebaseConfig);
// Initialize Firebase Admin SDK
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceaccountkey_json_1.default),
    databaseURL: 'https://projectdev-269523-default-rtdb.firebaseio.com'
});
var routes_1 = require("./v1/monitors/routes");
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));
// Import routes
app.use('/', routes_1.default);
// Start the server
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
