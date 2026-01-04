import React from "react";

const CTA = ()=> {
  return (
    <section className="bg-blue-900 py-20">
      <div className="container mx-auto px-6 text-center max-w-3xl">

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Discover Your Next Favorite Book
        </h2>

        <p className="mt-4 text-blue-100">
          Explore thousands of titles curated for every kind of reader.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Browse Books
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
            View Best Sellers
          </button>
        </div>

      </div>
    </section>
  );
}
export default  CTA;