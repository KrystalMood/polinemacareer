"use client";
import React from "react";

export default function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Privacy Policy Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            We are committed to protecting your privacy and safeguarding the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your data.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Welcome to our Privacy Policy. We value your privacy and are committed to protecting the personal information you share with us. By accessing or using our website and services, you agree to the terms of this Privacy Policy. If you do not agree with any of the terms outlined in this policy, please refrain from using our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-6">
            We collect various types of information to provide and improve our services to you. This includes both personal and non-personal information. The types of information we collect include:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Personal details such as your name, email address, and phone number.</li>
            <li>Account information when you create an account, such as your username and password.</li>
            <li>Technical information including your IP address, browser type, and device information.</li>
            <li>Payment information when you make purchases through our platform.</li>
            <li>Usage data, such as how you interact with our website and services.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-6">
            We use the information we collect for a variety of purposes, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>To provide, operate, and improve our services.</li>
            <li>To personalize your experience and show content relevant to you.</li>
            <li>To communicate with you, including sending updates, promotions, or other information you have consented to receive.</li>
            <li>To process transactions, including payment and fulfillment of products or services.</li>
            <li>To detect and prevent fraud or security breaches.</li>
            <li>To comply with legal obligations and enforce our Terms of Service.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-6">
            We use cookies and similar tracking technologies to track activity on our website. Cookies help us analyze how our users interact with the site, allowing us to improve the functionality and user experience. Cookies may collect information such as browsing behavior, preferences, and IP addresses.
          </p>
          <p className="text-gray-700 mb-6">
            You can control the use of cookies at the browser level, but if you choose to disable cookies, some features of the site may not work properly.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
          <p className="text-gray-700 mb-6">
            We do not sell, rent, or trade your personal information to third parties. However, we may share your data with third-party service providers who assist us in operating our business, such as payment processors, hosting services, and marketing platforms. These third parties are bound by confidentiality agreements and are only permitted to use your data for the purpose of providing services to us.
          </p>
          <p className="text-gray-700 mb-6">
            We may also disclose your personal information if required by law, such as in response to a court order or government investigation, or to protect the rights, property, or safety of our company, our users, or others.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-700 mb-6">
            We implement industry-standard security measures to protect your personal data from unauthorized access, use, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
          <p className="text-gray-700 mb-6">
            As a user, you have several rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>You have the right to access the personal information we hold about you.</li>
            <li>You can request corrections to any inaccuracies in your personal data.</li>
            <li>You can request the deletion of your personal data, subject to certain legal obligations.</li>
            <li>You can opt-out of receiving marketing communications at any time by following the unsubscribe instructions in our emails.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
          <p className="text-gray-700 mb-6">
            If you are located outside of the United States, please note that your personal data may be transferred to, stored, and processed in countries outside your home country. By using our services, you consent to the transfer of your data to other countries.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Retention of Data</h2>
          <p className="text-gray-700 mb-6">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, to comply with legal obligations, and to enforce our agreements.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we are protecting your personal data.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions or concerns about this Privacy Policy or the way we handle your personal information, please contact us at:
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> support@example.com
          </p>
        </div>
      </div>
    </div>
  );
}
