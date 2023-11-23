import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className="w-4/5 mx-auto">
            <SectionTitle
                heading={"---What Our Clients Say---"}
                subHeading={"TESTIMONIALS"}
            ></SectionTitle>
            <div className="py-10">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center gap-5 w-3/5 mx-auto">
                                
                                    {
                                        <Rating
                                            style={{ maxWidth: 180, textAlign: "center" }}
                                            value={review.rating}
                                            readOnly
                                        />
                                    }
                                
                                <p>{review.details}</p>
                                <p className="text-3xl mt-5 text-[#D99904]">
                                    {review.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
