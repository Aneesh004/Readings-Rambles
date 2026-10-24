import React from 'react';
import Navbar from './Navbar';  
import Footer from './Footer';  

function PrivacyPolicy() {
  return (
    <div className="bg-blue-50 dark:bg-slate-900 text-black dark:text-white">
      <Navbar />

      <main className="max-w-screen-5xl container mx-auto md:px-20 px-4 py-12">
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            At Readings & Rambles, we are dedicated to safeguarding your privacy. If we ask for personal information that can identify you when using our website, rest assured it will be used solely in accordance with this privacy policy. This policy may be updated periodically, and we encourage you to review this page occasionally.
          </p>
        </section>

        <section className="mt-8 text-center">
          <h2 className="text-2xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
            What We Collect
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We collect the following information to enhance your experience with us:
          </p>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Name and contact information, including email address.
          </p>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Demographic information such as preferences and interests.
          </p>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Additional details relevant to surveys and offers.
          </p>
        </section>

        <section className="mt-8 text-center">
          <h2 className="text-1xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
            How We Use Your Information
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            The information we gather helps us understand your needs and provides better services, including:
          </p>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Improving our offerings and user experience.
          </p>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Sending occasional promotional emails about new features, special offers, or other information we believe may interest you, using the email address you provide.
          </p>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Contacting you for market research purposes via email, phone, or mail.
          </p>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Customizing our website based on your interests.
          </p>
        </section>

        <section className="mt-8 text-center">
          <h2 className="text-2xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Security
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            We are committed to ensuring your information is secure. To prevent unauthorized access or disclosure, we have implemented appropriate physical, electronic, and managerial procedures. We do not sell, lease, or trade your personal information to third parties without your consent. We will only disclose your information if required by law or if necessary to protect our rights or comply with legal obligations.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
