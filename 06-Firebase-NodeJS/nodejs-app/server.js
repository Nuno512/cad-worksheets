var admin = require("firebase-admin");
var faker = require("faker");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cad2122-nunosilva-default-rtdb.europe-west1.firebasedatabase.app"
});