import * as functions from "firebase-functions";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// Only users of a specific domain can sign up.

exports.beforeCreate = functions.auth.user().beforeCreate((user, context) => {
  const allowed = ["@acme.com", "@acme.org"];

  const isAllowed = (email: string) => {
    return allowed.some((domain) => email.endsWith(domain));
  };

  if (user.email && !isAllowed(user.email)) {
    throw new functions.auth.HttpsError(
        "invalid-argument",
        `Unauthorized email "${user.email}"`
    );
  }
});
