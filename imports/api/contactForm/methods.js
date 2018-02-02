import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

Meteor.methods({
  sendMail(name, email, message) {
    check(name, String);
    check(email, String);
    check(message, String);

    if (Meteor.isServer) {
      this.unblock();
    }

    console.log("name:", name);
    console.log("email:", email);
    console.log("message:", message);
  },
});
