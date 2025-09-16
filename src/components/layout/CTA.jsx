import React, { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email address");

      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      setError("");
      alert("Successfully signed up with " + email);
      setEmail("");
    }
  };

  return (
    <section className="bg-Navy900 relative -top-[180px] px-6 lg:-top-[250px] max-sm:pt-20 z-10 py-20">
      <div className="bg-Navy850 rounded-lg shadow-lg max-w-3xl text-White p-10 text-center mx-auto container">
        <h2 className="text-3xl font-Raleway font-bold mb-4">
          Get early access today
        </h2>
        <p className="text-sm opacity-75 font-OpenSans lg:max-w-[600px] mx-auto mb-8">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="w-full sm:w-2/3 relative">
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-full text-black outline-none ${
                error ? "border-2 border-red-500" : ""
              }`}
            />
            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-xs text-left mt-2 ml-2 absolute">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="font-OpenSans font-semibold py-3 rounded-full w-[200px] lg:w-[250px] text-White bg-gradient-to-r from-Teal200 to-Cyan500 my-4 outline-none"
          >
            Get Started For Free
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
