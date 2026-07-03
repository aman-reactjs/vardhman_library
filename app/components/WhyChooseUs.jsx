import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const facilities = [
    {
      id: 1,
      title: "📚 Affordable",
      description: "Quality study space at an affordable price.",
    },
    {
      id: 2,
      title: "🎯 Focused Study",
      description: "Stay focused and achieve your goals.",
    },
    {
      id: 3,
      title: "🔒 Safe & Secure",
      description: "Peaceful and secure study environment.",
    },
    {
      id: 4,
      title: "🌐 High-Speed WiFi",
      description: "Fast internet for uninterrupted learning.",
    },
    {
      id: 5,
      title: "❄️ Comfortable Seating",
      description: "Comfortable chairs for long study sessions.",
    },
    {
      id: 6,
      title: "⏰ Flexible Hours",
      description: "Open timings suitable for everyone.",
    },
  ];

  return (
    <section
      id="facilities"
      className="py-16 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700">
            Why Choose Us?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide everything you need for a productive and peaceful study
            environment.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* Left Cards */}
          <div className="space-y-6">
            {facilities.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition duration-300"
              >
                <h3 className="font-bold text-lg text-blue-700">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <Image
              src="/assets/chooseUs/img1.png"
              alt="Library"
              width={420}
              height={420}
              className="w-64 md:w-80 lg:w-[420px] drop-shadow-2xl"
            />
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            {facilities.slice(3).map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-2xl p-5 hover:shadow-2xl transition duration-300"
              >
                <h3 className="font-bold text-lg text-blue-700">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;