import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John McNair",
      text:
        "Proin tempus egestas purus, eget gravida mi dictum ut. Etiam eget ligula eu lectus lobortis condimentum.",
      rating: 5,
    },
    {
      name: "Martha Budi",
      text:
        "Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 px-12 bg-[#F6FAF7]">
      <h4 className="text-center font-bold text-xl mb-8">
        Hear From Our Happy Customers!
      </h4>
      <div className="flex justify-center gap-8 flex-wrap">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-8 flex flex-col items-center w-96"
          >
            <div className="flex gap-1 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-4 text-center">{testimonial.text}</p>
            <h5 className="font-bold">{testimonial.name}</h5>
          </div>
        ))}
      </div>
    </section>
  );
}
