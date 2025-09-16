import React from "react";
import bgQuotes from "../../assets/bg-quotes.png";
import profile1 from "../../assets/profile-1.jpg";
import profile2 from "../../assets/profile-2.jpg";
import profile3 from "../../assets/profile-3.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Satish Patel",
      role: "Founder & CEO, Huddle",
      image: profile1,
      feedback:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      id: 2,
      name: "Bruce McKenzie",
      role: "Founder & CEO, Huddle",
      image: profile2,
      feedback:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      id: 3,
      name: "Iva Boyd",
      role: "Founder & CEO, Huddle",
      image: profile3,
      feedback:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
  ];

  return (
    <section className="bg-Navy900 relative -top-[180px] lg:-top-[250px] max-sm:pt-20 z-10 py-20">
      <div className="container mx-auto px-6 lg:px-14">
        {/* Grid section */}
        <div className="z-50 relative grid grid-cols-1 sm:grid-cols-3 gap-8 text-White">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-Navy800 p-8 rounded-lg shadow-xl"
            >
              {index === 0 && (
                <img
                  src={bgQuotes}
                  alt="Quotes Background"
                  className="absolute -top-8 -left-2 -z-10"
                />
              )}
              <p className="text-left font-OpenSans opacity-75">
                {testimonial.feedback}
              </p>
              <div className="flex items-center mt-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-9 h-9 rounded-full mr-4"
                />
                <div className="text-left font-Raleway">
                  <h3 className="text-[14px] font-bold">{testimonial.name}</h3>
                  <p className="text-[12px] opacity-75">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
