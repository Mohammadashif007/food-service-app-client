import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper py-10 mb-20"
        >
            <SwiperSlide>
                <img src={img1} alt="" />
                <h2 className="text-4xl text-center text-white uppercase -mt-16">Salads</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="" />
                <h2 className="text-4xl text-center text-white uppercase -mt-16">Soups</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="" />
                <h2 className="text-4xl text-center text-white uppercase -mt-16">pizzas</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img4} alt="" />
                <h2 className="text-4xl text-center text-white uppercase -mt-16">Desserts</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="" />
                <h2 className="text-4xl text-center text-white uppercase -mt-16">Salads</h2>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;
