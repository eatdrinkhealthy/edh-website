import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Email } from "meteor/email";

Meteor.methods({
  sendMail(name, email, message) {
    check(name, String);
    check(email, String);
    check(message, String);

    if (Meteor.isServer) {
      this.unblock();
    }

    Email.send({
      to: "info@eatdrinkhealthy.co",
      from: "info@eatdrinkhealthy.co",
      subject: "EDH Website Contact Form",
      text: `name: ${name}\nemail: ${email}\nmessage: ${message}`,
    });
  },
});
