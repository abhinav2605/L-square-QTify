import styles from "./carousel.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Card from "../../components/Card/card";

function Carousel({ data }) {
//   console.log(data);
  return (
    <div>
      <Swiper
        spaceBetween={40}
        slidesPerView={"auto"}
        modules={[Navigation]}
        allowTouchMove
        initialSlide={0}
      >
        {data.map((ele) => (
          <SwiperSlide className={styles.swiper}><Card image={ele.image} follow={ele.follows} title={ele.title} /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
