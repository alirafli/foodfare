const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.createUser = functions.auth.user().onCreate((user) => {
  const admin = require("firebase-admin");
  const uid = user.uid;
  admin.initializeApp();
  admin.firestore().collection("user").add({
    uid: uid,
    isAdmin: false,
    points: 0,
  });
});
