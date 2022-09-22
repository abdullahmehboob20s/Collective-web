import Slider from "components/Slider";
import SliderButtons from "components/SliderButtons";
import TitleBar from "components/TitleBar";
import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import MembershipCard from "./MembershipCard";

function Membership() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <div className="container-wrapper">
        <div className="mb-50px">
          <TitleBar title="Explore our memberships" />
        </div>
      </div>

      <div>
        <div className="mb-3vw ml-6vw">
          <Slider
            slidesPerView={2.5}
            spaceBetween={20}
            prevRef={prevRef}
            nextRef={nextRef}
          >
            <SwiperSlide>
              <MembershipCard />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard />
            </SwiperSlide>
            <SwiperSlide>
              <MembershipCard />
            </SwiperSlide>
          </Slider>
        </div>

        <div className="container-wrapper">
          <SliderButtons prevRef={prevRef} nextRef={nextRef} />
        </div>
      </div>
    </div>
  );
}

export default Membership;
