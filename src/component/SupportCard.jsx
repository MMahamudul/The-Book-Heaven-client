import React from "react";

const SupportCard = ({ icon: Icon, title, description })=> {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent text-xl mb-4">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </div>
  );
}
export default SupportCard