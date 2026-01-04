import React from "react";
import HighlightsData from "./HighlightsData";
import HighlightCard from "./HighlightsCard";


const Highlights = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Readers Love Us
          </h2>
          <p className="mt-4 text-slate-600">
            Everything you need for a great reading experience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HighlightsData.map((item) => (
            <HighlightCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
export default Highlights;