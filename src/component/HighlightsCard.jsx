import React from "react";

const HighlightCard =({ icon: Icon, title, description })=> {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-md transition">
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/10 text-accent text-2xl">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-blue-900 mb-2">
        {title}
      </h3>
      <p className="text-slate-600 text-sm">
        {description}
      </p>
    </div>
  );
}

export default HighlightCard;