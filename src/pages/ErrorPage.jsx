import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center p-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md bg-base-200 shadow-xl rounded-2xl p-10 border border-accent/30"
      >
        {/* --- Image Section --- */}
        <motion.img
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Page not found"
          className="w-64 mx-auto mb-6 rounded-xl"
        />

        {/* --- Icon --- */}
        <AlertTriangle className="text-accent w-12 h-12 mx-auto mb-4" />

        {/* --- Text --- */}
        <h1 className="text-6xl font-bold text-accent mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* --- Button --- */}
        <Link
          to="/"
          className="btn btn-accent text-white px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-200"
        >
         Go Back Home
        </Link>
      </motion.div>

      <p className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Book Heaven — All rights reserved.
      </p>
    </div>
  );
};

export default ErrorPage;
