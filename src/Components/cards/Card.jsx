import React from "react";
import { list2 } from "./imagenes.js";
import "./style.css";
import { FaStar } from "react-icons/fa";
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Card() {
  const data = list2;
  console.log(data);

  return (
    <ul className="card-container">
      {data.map((cardInfo, i) => (
        <li className="card-img" key={i} style={{ maxWidth: "250px" }}>
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            navigation={true}
            pagination={true}
            mousewheel={true}
          >
            {cardInfo.imgSrc.map((imageUrl) => (
              <SwiperSlide key={imageUrl}>
                <img src={imageUrl} className="card-img" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="card-title-rating">
            <span className="b">{cardInfo.title}</span>
            <span className=" rating">
              {" "}
              <FaStar />
              {cardInfo.rating}
            </span>
          </div>

          <div className="price">
            <span className="opacity-70">{cardInfo.desc}</span>
            <span className="b ">
              {cardInfo.price}$ <small className="weight">Night</small>{" "}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
