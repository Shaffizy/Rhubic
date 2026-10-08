/*
  policies.js — the three /legal/:slug detail documents, verbatim from the
  reference (including its "fictional" banner paragraph and the
  [Your Company Name] placeholder — swap both once the real company copy
  exists). Each entry: slug, sidebar title, page title, last-update date,
  then ordered sections of { heading, body } pairs.
*/

export const lastUpdate = 'April 1, 2025';

export const policies = [
  {
    slug: 'terms-of-service',
    title: 'Terms of Service',
    sections: [
      {
        heading: 'This is a fictional Term of Service page',
        body: "These Terms of Service (\"Terms\") govern your use of [Your Company Name]'s website and services. By accessing or using our website, you agree to comply with these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.",
      },
      {
        heading: 'Acceptance of Terms',
        body: 'By accessing or using our website or services, you agree to be bound by these Terms. If you are using our services on behalf of a company or other organization, you represent that you have the authority to bind that organization to these Terms.',
      },
      {
        heading: 'Service Description',
        body: '[Your Company Name] provides web design services through a subscription model. The details of these services, including pricing and scope, are outlined on our website and may be updated periodically.',
      },
      {
        heading: 'Account Registration',
        body: 'To use certain features of our services, you may be required to create an account. You agree to provide accurate, complete, and up-to-date information during the registration process. You are responsible for maintaining the confidentiality of your account and password.',
      },
      {
        heading: 'User Obligations',
        body: 'You agree to use our services in a lawful manner and not to engage in any conduct that may harm the functionality, security, or reputation of our website or services. You may not attempt to gain unauthorized access to any part of our website or services.',
      },
      {
        heading: 'Subscription and Payments',
        body: 'Our subscription plans are billed on a monthly or annual basis. You agree to pay the applicable fees as described in the pricing section of our website. Payments are non-refundable except as required by law.',
      },
      {
        heading: 'Termination',
        body: 'You may cancel your subscription at any time by following the cancellation process outlined on our website. We reserve the right to suspend or terminate your access to the website and services if we determine you have violated these Terms.',
      },
    ],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'This is a fictional Privacy Policy page',
        body: 'At [Your Company Name], we are committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information when you use our website and services.',
      },
      {
        heading: 'Information We Collect',
        body: 'We collect personal information such as your name, email address, and payment details when you use our services. We also collect information about your usage of our website through cookies.',
      },
      {
        heading: 'How We Use Your Information',
        body: 'We use your information to provide and improve our services, communicate with you, and process payments. We may also use it to send you marketing materials if you opt-in.',
      },
      {
        heading: 'Sharing Your Information',
        body: 'We do not sell your personal information. We may share your information with trusted third-party providers who assist us in delivering our services or when required by law.',
      },
      {
        heading: 'Data Security',
        body: 'We take reasonable measures to protect your personal information, but no method of transmission over the internet is completely secure. We recommend that you take appropriate steps to safeguard your data.',
      },
      {
        heading: 'Your Rights',
        body: 'You have the right to access, correct, or delete your personal information. You can also opt out of receiving marketing communications at any time.',
      },
      {
        heading: 'Cookies',
        body: 'We use cookies to enhance your experience on our website. You can manage cookie preferences through your browser settings.',
      },
      {
        heading: 'Updates to This Policy',
        body: 'We may update this policy from time to time. Any changes will be posted on this page with an updated "Effective Date."',
      },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    sections: [
      {
        heading: 'This is a fictional Cookie Policy page',
        body: 'This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website. It describes the types of cookies we use and why we use them.',
      },
      {
        heading: 'What Are Cookies?',
        body: 'Cookies are small text files stored on your device when you visit a website. They allow the website to remember your actions and preferences over time.',
      },
      {
        heading: 'How We Use Cookies',
        body: 'We use cookies to improve the performance of our website, personalize content and ads, provide social media features, and analyze our traffic. By continuing to use our site, you consent to our use of cookies.',
      },
      {
        heading: 'How to Manage Cookies',
        body: 'You can control the use of cookies through your browser settings. You can block or delete cookies, but please note that some website features may not function properly without them.',
      },
      {
        heading: 'Changes to This Cookie Policy',
        body: 'We may update our Cookie Policy from time to time. Any changes will be posted on this page, with an updated "Last update".',
      },
    ],
  },
];

export const policyIndex = Object.fromEntries(policies.map((p) => [p.slug, p]));

/* Sidebar order — static on every reference policy page, and the same
   order the /legal index grid uses: Cookie, Terms, Privacy. */
export const sidebarOrder = ['cookie-policy', 'terms-of-service', 'privacy-policy'];
