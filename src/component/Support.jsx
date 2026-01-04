import React from "react";
import SupportCard from "./SupportCard";
import SupportForm from "./SupportForm";
import ContactInfo from "./ContactInfo";


import {
  FaBook,
  FaQuestionCircle,
  FaEnvelope,
  FaHeadset,
} from "react-icons/fa";


const SupportPage = () => {
  const supportCards = [
    {
      id: 1,
      icon: FaBook,
      title: "Order Issues",
      description: "Help with book orders, shipping, returns, or refunds.",
    },
    {
      id: 2,
      icon: FaQuestionCircle,
      title: "FAQs",
      description: "Find answers to common questions quickly.",
    },
    {
      id: 3,
      icon: FaEnvelope,
      title: "Email Support",
      description: "Reach out to us and get a reply within 24 hours.",
    },
    {
      id: 4,
      icon: FaHeadset,
      title: "Live Support",
      description: "Chat with our support team in real time.",
    },
  ];

  return (
    <section className=" py-20">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="max-w-8xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-accent text-center">
            Support Center
          </h1>
          <p className="mt-4 text-slate-600 text-center">
            We’re here to help you with orders, books, and account-related questions.
          </p>
        </div>

        {/* SUPPORT CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {supportCards.map((card) => (
            <SupportCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* CONTACT SECTION */}
        <div className="grid gap-12 md:grid-cols-2">
          <ContactInfo />
          <SupportForm />
        </div>
      </div>
    </section>
  );
}
export default SupportPage;