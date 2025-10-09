// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

// icons
import { RxPencil2, RxDesktop, RxArrowTopRight } from "react-icons/rx";
import { FaBlogger, FaDatabase, FaTools } from "react-icons/fa";

import Link from "next/link";
import { BsLinkedin, BsMailbox, BsMailbox2, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { BiMailSend } from "react-icons/bi";
import {
  RiBloggerLine,
  RiLinkedinLine,
  RiMailSendLine,
  RiTwitterLine,
} from "react-icons/ri";

// data
const serviceData = [
  {
    icon: <RiTwitterLine />,
    title: "Twitter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "x.com/rsinghat",
  },
  {
    icon: <RiLinkedinLine />,
    title: "Linkedin",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "rajneesh.dev",
  },
  {
    icon: <RiMailSendLine />,
    title: "Automation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "mailto:singhatiya.rajneesh2@gmail.com",
  },
  ,
  {
    icon: <RiBloggerLine />,
    title: "Blog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "rajneesh304.github.io",
  },
  // {
  //   icon: <RxPencil2 />,
  //   title: "Design",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   url: "behance.net/rajneeshcodes",
  // },
];

const swiperBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 15,
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
};
const ContactSlider = () => {
  return (
    <Swiper
      breakpoints={swiperBreakpoints}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[240px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <Link
                href={item.url ? `https://${item.url}` : "#"}
                target="_blank"
              >
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
              </Link>
              {/* title and desc */}
              {/* <div className="">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="leading-normal">{item.description}</p>
              </div> */}
              {/* arrow */}
              {/* <div className="text-3xl">
                <Link
                  href={item.url ? `https://${item.url}` : "#"}
                  target="_blank"
                >
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                </Link>
              </div> */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ContactSlider;
