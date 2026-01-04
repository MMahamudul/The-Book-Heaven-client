import React from "react";

const Newsletter =() => {
  return (
    <section className="bg-accent/5 py-20">
      <div className="container mx-auto px-6 text-center max-w-3xl">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Join Our Reading Community
        </h2>

        <p className="mt-4 text-slate-600">
          Get book recommendations, exclusive offers, and reading tips straight to your inbox.
        </p>

        <form className="mt-8 flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <button
            type="submit"
            className="bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
}
export default Newsletter;