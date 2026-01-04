import React from "react";

const SupportForm =()=>{
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold text-blue-900 mb-6">
        Send a Message
      </h2>
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <textarea
          rows="4"
          placeholder="How can we help you?"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-accent text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
export default  SupportForm;