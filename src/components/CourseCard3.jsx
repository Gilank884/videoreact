import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const CourseCard3 = () => {
  return (
    <div className="w-full max-w-xs bg-white rounded-xl shadow-md border border-gray-200 p-4">
      {/* Gambar */}
      <figure className="rounded-lg overflow-hidden">
        <img
          src="./kursus3.jpg"
          alt="Big 4 Auditor"
          className="w-full h-40 object-cover"
        />
      </figure>

      {/* Konten */}
      <div className="mt-4">
        <h2 className="font-semibold text-lg text-gray-800 leading-snug">
          Big 4 Auditor Financial Analyst
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Mulai transformasi dengan instruktur profesional, harga yang
          terjangkau, dan...
        </p>

        {/* Profil Instruktur */}
        <div className="flex items-center gap-3 mt-3">
          <img
            src="./Avatar3.png"
            alt="Jenna Ortega"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <p className="font-medium text-gray-800">Jenna Ortega</p>
            <p className="text-gray-500">Senior Accountant di <span className="font-medium">Gojek</span></p>
          </div>
        </div>

        {/* Rating dan Harga */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
            <span className="text-gray-600 ml-2">3.5 <span className="text-gray-400">(86)</span></span>
          </div>
          <div className="text-green-600 font-semibold text-lg">Rp 300K</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard3;
