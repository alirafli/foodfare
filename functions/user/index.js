const functions = require("firebase-functions");

exports.whenUserCreated = functions.auth.user().onCreate((user) => {
  const admin = require("firebase-admin");
  const uid = user.uid;
  admin.initializeApp();
  admin.firestore().collection("users").add({
    uid: uid,
    isAdmin: false,
    points: 0,
    location: null,
  });
});

