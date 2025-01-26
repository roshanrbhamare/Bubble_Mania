import React from "react";
import ggj1logo from "../../Images/ggj1.jpg";
import ggj1logo1 from "../../Images/ggj2.jpg";
import ggj1logo2 from "../../Images/ggj3.jpg";
import ggj1logo3 from "../../Images/ggj4.jpg";

export default function Footer() {
  const sponsors = [
    { name: "Sponsor 1", logo: ggj1logo },
    { name: "Sponsor 2", logo: ggj1logo1 },
    { name: "Sponsor 3", logo: ggj1logo2 },
    { name: "Sponsor 4", logo: ggj1logo3 },
  ];

  return (
    <footer className="bg-gray-900 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-2xl font-bold mb-6">
          Proudly Sponsored By
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-4">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex justify-center items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="object-cover h-20 w-20 rounded-md shadow-md bg-gray-100"
              />
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-8 text-sm">
          © {new Date().getFullYear()} All rights reserved. | Powered by{" "}
          <span className="text-purple-400">Traap-G</span>
        </p>
      </div>
    </footer>
  );
}
