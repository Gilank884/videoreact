import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import CourseCard2 from "../components/CourseCard2";
import CourseCard3 from "../components/CourseCard3";

function Main() {
  const [activeTab, setActiveTab] = useState("Semua Kelas");

  const tabs = ["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"];

  return (
    <>
    <Navbar />
      {/* HERO SECTION */}
      <section className="p-6 md:p-10">
        <div
          className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center bg-center bg-cover"
          style={{ backgroundImage: "url('/hero-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white px-4 md:px-10 max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h1>
            <p className="text-base md:text-lg mb-6">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran
              berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan
              interaktif yang akan meningkatkan pemahaman Anda.
            </p>
            <button className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition duration-300">
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </div>
      </section>

      {/* KOLEKSI VIDEO SECTION */}
      <section className="px-6 md:px-20 py-12 bg-white">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-gray-600 mt-2">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 text-gray-600 font-medium text-base border-b-2 border-gray-200 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 transition duration-200 ${
                activeTab === tab ? "text-black font-semibold" : "hover:text-black"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

     {/* Grid Card */}
<div className="bg-white p-6 md:p-10">
  <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
    <CourseCard />
    <CourseCard2 />
    <CourseCard3 />
    <CourseCard3/>
    <CourseCard />
    <CourseCard2 />
    <CourseCard/>
    <CourseCard2 />
    <CourseCard3 />
  </div>
</div>

 <section className="p-6 md:p-10">
  <div
    className="relative rounded-2xl overflow-hidden h-auto md:h-[400px] flex items-center justify-center bg-center bg-cover py-16 md:py-0"
    style={{ backgroundImage: "url('/hero-image.jpg')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    <div className="relative z-10 text-white text-center w-full max-w-2xl px-4">
      <p className="uppercase text-sm tracking-wider text-gray-300 mb-2">Newsletter</p>
      <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
        Mau Belajar Lebih Banyak?
      </h2>
      <p className="text-base md:text-lg mb-6 px-2 md:px-10">
        Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
      </p>

      {/* Form Wrapper */}
<form className="w-full flex justify-center">
  <div className="relative w-full max-w-md">
    {/* Input Field */}
    <input
      type="email"
      placeholder="Masukkan Emailmu"
      className="w-full px-4 py-3 pr-28 rounded-xl shadow-md text-sm text-gray-800 text-center px-8 md:text-left"
    />

    {/* Tombol (desktop - di dalam input) */}
    <button
      type="submit"
      className="hidden md:block absolute right-1 top-1 bottom-1 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 rounded-lg text-sm"
    >
      Subscribe
    </button>

    {/* Tombol (mobile - di bawah input) */}
    <button
      type="submit"
      className="block md:hidden mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-3 rounded-xl text-sm"
    >
      Subscribe
    </button>
  </div>
</form>

    </div>
  </div>
</section>

      </section>
      <Footer />
    </>
  );
}

export default Main;
