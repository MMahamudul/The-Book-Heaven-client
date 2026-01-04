import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";




export default function Banner() {
  const slides = [
    {
      title: "Discover Your Next Destination",
      description: "Explore thousands of books across genres — from timeless classics to modern favorites.",
      image: "https://i.ibb.co/gLDdb3sZ/header-6.avif",
    },
    {
      title: "Create and Share Your Collection",
      description: "Add your favorite books, write reviews, and build your personal digital library.",
      image: "https://i.ibb.co/fVtxd6rV/header-10.avif",
    },
    {
      title: "Join Our Reading Community",
      description: "Connect with fellow readers, exchange ideas, and find your next recommendation.",
      image: "https://i.ibb.co/ccYYKXWM/header-2.jpg",
    },
  ];

 
  return (
    <section className="w-full text-accent text-4xl font-bold">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        
        loop
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="container mx-auto px-6 py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                
                {/* TEXT SIDE */}
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-gray-600 text-lg">
                    {slide.description}
                  </p>
              
                </div>

                {/* IMAGE SIDE */}
                <div className="relative">
                  <div className="overflow-hidden ">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-[750px]  h-[350px] md:h-[420px] object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
