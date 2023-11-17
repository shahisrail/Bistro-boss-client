/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SectoinTitale from "../../../Components/SectoinTitale/SectoinTitale";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";  
const Testomial = () => {
  const [revies, setRevies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviws")
      .then((res) => res.json())
      .then((data) => setRevies(data));
  }, []);
  return (
    <section className="my-20">
      <SectoinTitale
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectoinTitale>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {revies.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center  my-16 mx-24">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8"> {review.details} </p>
              <p className="text-[#CD9003] text-2xl"> {review.name} </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testomial;
