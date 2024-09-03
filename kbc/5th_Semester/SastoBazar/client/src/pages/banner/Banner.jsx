import React from "react";
import { items } from "./BannerData";

//!Import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

//!import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <Swiper
      navigation={true}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay, Pagination]}
    >
     
      {items.map((value) => (
        <SwiperSlide key={value.id}>
          <img src={value.image} alt={value.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import { items } from "./BannerData";

// export default function Banner() {
//   return (
//     <>
//       <Carousel indicators={false}>
//         {items.map((value, index) => (
//           <Carousel.Item key={value.id}>
//             <img src={value.image} alt="value.title" />
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </>
//   );
// }
