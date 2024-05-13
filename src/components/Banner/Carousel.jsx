// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import Slide from "./Slide";

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="container px-4 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={
              "https://i.ibb.co/Qb2LS2C/photo-1481391032119-d89fee407e44-q-80-w-1530-auto-format-fit-crop-ixlib-rb-4-0.jpg"
            }
            text="Indulge in Culinary Delights"
            des="Experience a symphony of flavors crafted with passion and precision. Join us on a journey of culinary excellence."
          ></Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            image={
              "https://i.ibb.co/0DmHgQn/premium-photo-1697648334180-1e9879fed54e-q-80-w-1471-auto-format-fit-crop-ixlib-rb-4-0.jpg"
            }
            text="Taste the Difference"
            des="Elevate your senses with our chef-inspired creations. Each dish is a masterpiece, meticulously prepared to tantalize your taste buds"
          ></Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            image={
              "https://i.ibb.co/KmVPQBB/photo-1513442542250-854d436a73f2-q-80-w-1547-auto-format-fit-crop-ixlib-rb-4-0.jpg"
            }
            text="Discover Exquisite Flavors"
            des="Embark on a culinary adventure like no other. Our menu showcases a fusion of global cuisines, offering something extraordinary for every palate"
          ></Slide>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
