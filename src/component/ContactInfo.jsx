import React from "react";

const ContactInfo = ()=>{
  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">
        Contact Information
      </h2>
      <p className="text-slate-600 mb-6">
        Prefer direct help? Reach us through the following channels.
      </p>
      <ul className="space-y-3 text-slate-700">
        <li>
          <span className="font-medium text-blue-900">Email:</span> support@bookheaven.com
        </li>
        <li>
          <span className="font-medium text-blue-900">Support Hours:</span> Mon–Fri, 9 AM – 6 PM
        </li>
        <li>
          <span className="font-medium text-blue-900">Response Time:</span> Within 24 hours
        </li>
      </ul>
    </div>
  );
}
export default ContactInfo;