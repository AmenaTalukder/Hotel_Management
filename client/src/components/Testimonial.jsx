import React from "react";
import Title from "./Title";
import StarRating from "./StarRating";

const testimonials = [
  {
    name: "Arif Hossain",
    role: "Travel Blogger",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
    review:
      "Using QuickStay completely transformed my travel experience. The service was seamless, luxurious, and incredibly reliable.",
  },
  {
    name: "Nusrat Jahan",
    role: "Content Creator",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    review:
      "From booking to checkout, everything was smooth and stress-free. QuickStay truly delivers premium comfort.",
  },
  {
    name: "Mehedi Hasan",
    role: "Digital Marketer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
    review:
      "An outstanding platform for luxury accommodations. I would highly recommend QuickStay to frequent travelers.",
  },
];


const Testimonial = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30">
      <Title
        title="What Our Guests Say"
        subtitle="Discover why discerning travelers consistently choose QuickStay for exclusive and luxurious stays around the world."
      />

      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden"
          >
            <div className="flex items-center gap-4 px-5 py-4 bg-red-500/10">
              <img
                className="h-12 w-12 rounded-full"
                src={item.image}
                alt={item.name}
              />
              <div>
                <h1 className="text-lg font-medium text-gray-800">
                  {item.name}
                </h1>
                <p className="text-gray-800/80">{item.role}</p>
              </div>
            </div>

            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
                <StarRating/>
              </div>
              <p className="text-gray-500 mt-5">{item.review}</p>
            </div>

            <button className="text-red-500 underline px-5">
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
