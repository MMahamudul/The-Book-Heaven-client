import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Banner() {
  const slides = [
    {
      title: "Discover Your Next Great Read",
      text: "Explore thousands of books across genres — from timeless classics to modern favorites.",
      img: "https://i.ibb.co/hJ0sxwDV/try.jpg",
    },
    {
      title: "Create and Share Your Collection",
      text: "Add your favorite books, write reviews, and build your personal digital library.",
      img: "https://i.ibb.co/LDXLK6nL/kourosh-qaffari-Rrhhzit-Yizg-unsplash.jpg",
    },
    {
      title: "Join Our Reading Community",
      text: "Connect with fellow readers, exchange ideas, and find your next recommendation.",
      img: "https://i.ibb.co/FkZYdbh6/dollar-gill-0-V7-N62z-Zc-U-unsplash.jpg",
    },
  ];

 

  return (
    <section className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[75vh] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 text-center text-white max-w-3xl px-6">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  {slide.text}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="btn btn-accent text-white px-6 py-3 rounded-lg text-lg shadow-md">
                    All Books
                  </button>
                  <button className="btn btn-outline btn-accent px-6 py-3 rounded-lg text-lg">
                    Create Book
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
