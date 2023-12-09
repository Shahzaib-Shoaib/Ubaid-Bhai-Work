import ContactusSec from "@/components/ContactusSec";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="termsCondition-main ">
      <Header />
      <div className="h-[70px] bg-black w-full"></div>
      <div className="breadcrumb div_section bg-[url('/images/contact-breadcrumb.jpg')] sm:h-[80px] flex items-center justify-center">
        <div className="maxw">
          <h1 className="sub_heading text-center text-white text-[31px] sm:text-[12px]">
            We are UAE born with a global network, reach, and outlook
          </h1>
        </div>
      </div>
      <div className="inner-text div_section">
        <div className="maxw 2xl:mt-2">
          <h3 className="section_heading text-center border-b-[1px] border-b-golden w-fit mx-auto 2xl:leading-[45px]">
            Our Offices
          </h3>
        </div>
        <div className="maxw 2xl:max-w-[1150px] grid grid-cols-3 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-4 2xl:gap-10 2xl:mt-14">
          <div className="images-box">
            <img
              className="Images_fill"
              src="/images/Dubai-office.jpg"
              alt="Dubai Office"
            />
            <h3 className="sub_heading mt-2 2xl:mt-4 mb-1">Dubai</h3>
            <p className="text-[#5d5d5d] font-normal sm:text-[6px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]">
              A2 Building, Dubai Digital Parks, <br /> Dubai, United Arab
              Emirates
            </p>
          </div>
          <div className="images-box">
            <img
              className="Images_fill"
              src="/images/Riyadh-office.jpg"
              alt="Riyadh Office"
            />
            <h3 className="sub_heading mt-2 2xl:mt-4 mb-1">Riyadh</h3>
            <p className="text-[#5d5d5d] font-normal sm:text-[6px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]">
              Coming soon
            </p>
          </div>
          <div className="images-box">
            <img
              className="Images_fill"
              src="/images/Cairo-office.jpg"
              alt="Cairo Office"
            />
            <h3 className="sub_heading mt-2 2xl:mt-4 mb-1">Cairo</h3>
            <p className="text-[#5d5d5d] font-normal sm:text-[6px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px]">
              Coming soon
            </p>
          </div>
        </div>
      </div>
      {/* Contact us */}
      <ContactusSec />
    </div>
  );
}

export default page;
