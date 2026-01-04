import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialsData from "./TestimonialsData";

const Testimonial=() =>{
  return (
    <section className="bg-accent/5 py-20">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            What Our Readers Say
          </h2>
          <p className="mt-4 text-slate-600">
            Real feedback from real book lovers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TestimonialsData.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              role={item.role}
              feedback={item.feedback}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
export default Testimonial;