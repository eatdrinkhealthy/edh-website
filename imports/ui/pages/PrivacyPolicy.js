import React from "react";
import { defaultPageStyle } from "../styles";

const PrivacyPolicy = () => (
  <div className={defaultPageStyle.css}>
    <h1>Privacy Policy</h1>
    <p>
      This privacy policy discloses the privacy practices for Eat Drink Healthy.
      This privacy policy applies solely to information collected by this web application and site.
      It will notify you of the following:
    </p>

    <ol>
      <li>What personally identifiable information is collected from you through the web site or
        app, how it is used and with whom it may be shared.
      </li>
      <li>What choices are available to you regarding the use of your data.</li>
      <li>The security procedures in place to protect the misuse of your information.</li>
      <li>How you can correct any inaccuracies in the information.</li>
    </ol>

    <h2>Information Collection, Use, and Sharing </h2>
    <p>
      We are the sole owners of the information collected on this site. We only have access
      to/collect information that you voluntarily give us via registration or other direct
      contact from you. We will not sell or rent this
      information to anyone.
    </p>

    <p>
      We will use your information to personalize your experience with the website and
      application, or respond to you regarding the reason you contacted us. We will not share
      your information with any third party outside of our organization.
    </p>

    <p>
      Unless you ask us not to, we may contact you via email in the future to tell you about
      product updates, or changes to this privacy policy.
    </p>

    <h2>Your Access to and Control Over Information</h2>
    <p>
      You may opt out of any future contacts from us at any time. You can do the
      following at any time by contacting us via the contact form on our support page:
    </p>

    <ul>
      <li>See what data we have about you, if any.</li>
      <li>Change/correct any data we have about you.</li>
      <li>Have us delete any data we have about you.</li>
      <li>Express any concern you have about our use of your data.</li>
    </ul>

    <h2>Security</h2>
    <p>
      We take precautions to protect your information. When you submit sensitive information
      via the website or app, your information is protected both online and offline.
    </p>

    <p>
      Wherever we collect sensitive information (such as credit card data), that information
      is encrypted and transmitted to us in a secure way. You can verify this by looking for
      a closed lock icon at the bottom of your web browser, or looking for &quot;https&quot;
      at the beginning of the address of the web page.
    </p>

    <p>
      While we use encryption to protect sensitive information transmitted online, we also
      protect your information offline. Only employees who need the information to perform a
      specific job (for example, billing or customer service) are granted access to personally
      identifiable information. The computers/servers in which we store personally identifiable
      information are kept in a secure environment.
    </p>

    <h2>
      Links
    </h2>
    <p>
      This web site and app may contain links to other sites. Please be aware that we are not
      responsible for the content or privacy practices of such other sites. We encourage our
      users to be aware when they leave our site or app and to read the privacy statements of
      any other site that collects personally identifiable information.
    </p>

    <h2>
      Updates
    </h2>
    <p>
      Our Privacy Policy may change from time to time and all updates will be posted on this page.
    </p>

    <p>
      If you feel that we are not abiding by this privacy policy, you should contact us immediately
      via the contact form on our support page.
    </p>
  </div>
);

PrivacyPolicy.style = defaultPageStyle;

export default PrivacyPolicy;
