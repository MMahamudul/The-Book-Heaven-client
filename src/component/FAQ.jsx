import React, { useState } from "react";

const faqData = [
  {
    question: "How long does book delivery take?",
    answer: "Delivery usually takes 3–5 business days depending on your location.",
  },
  {
    question: "Can I return or exchange a book?",
    answer: "Yes, books can be returned within 7 days if they are in original condition.",
  },
  {
    question: "Do you sell digital books?",
    answer: "Currently, we focus on physical books, but e-books are coming soon.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a tracking link via email.",
  },
];

const FAQ =() => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-5 cursor-pointer"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-blue-900">
                  {item.question}
                </h3>
                <span className="text-accent font-bold text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <p className="mt-3 text-slate-600 text-sm">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default FAQ;