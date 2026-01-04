import React from "react";

const TestimonialCard = ({ name, role, feedback })=> {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <p className="text-slate-600 italic mb-6">
        “{feedback}”
      </p>
      <div>
        <h4 className="font-semibold text-blue-900">{name}</h4>
        <p className="text-sm text-accent">{role}</p>
      </div>
    </div>
  );
}
export default TestimonialCard;