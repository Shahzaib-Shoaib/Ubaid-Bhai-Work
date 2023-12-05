import Image from "next/image";
import React from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import CustomButton from "./customui/CustomButton";
import { FaLinkedin } from "react-icons/fa";

const FounderMessage = () => {
  return (
    <div className="w-full">
      <div className="bg-golden h-1 w-full"></div>
      <div className="content">
        <p className="pt-3 text-black">
          <span className="w-fit text-golden sub_heading sm:text-[25px] xl:text-[25px]">
            <strong>G</strong>
          </span>
          reetings to our valued stakeholders,
        </p>
        <p className="text-black text-justify">
          It is my pleasure to introduce to you, Morsi M Partners (“MMP”), an
          independent advisory and professional services firm.
        </p>
        <p className="text-black text-justify">
          Morsi M Partners was launched in 2023 with the ambition to become one
          of the leading professional services advisory firms in the Middle East
          and North Africa. We are UAE born, with a global network, reach, and
          outlook. We help our clients address operational, strategic, and
          complex challenges.
        </p>
        <p className="text-black text-justify">
          At the core of Morsi M Partners lies a strong foundation rooted in our
          progressive, pragmatic, and proactive approach, entrepreneurial
          philosophy, switched-on attitude, and collaborative mindset. These
          qualities, combined with our history of service excellence and the
          trusted relationships we have nurtured across the globe over the
          years, form the backbone of our firm.
        </p>
        <p className="text-black text-justify">
          As we invest in and reinforce these foundational pillars, we will
          relentlessly evolve, innovate, propel ourselves towards our ambitions,
          and rise to greater heights.
        </p>
        <h3 className="text-golden sub_heading sm:text-[14px] xl:text-[25px]">
          Our Mantra
        </h3>
        <p className="text-black text-justify">
          At Morsi M Partners, we believe that legacy creation is the noblest of
          all pursuits. This is our mantra that embodies and underpins the
          values and behaviors we carry and exhibit every day - with our
          clients, our people, and all our stakeholders.
        </p>
        <p className="text-black text-justify">
          Therefore, in our pursuit to create and be remembered for a lasting
          legacy – one that we wholeheartedly strive to build and sustain – we
          firmly believe that true solutions are not achieved through short-term
          fixes, and temporary measures should not be touted as sustainable or
          strategic. As a result, we are dedicated to providing reliable and
          independent advice that promotes innovative problem solving and
          fosters sustainable growth.
        </p>
        <p className="text-black text-justify">
          We take pride in the quality of our network and the trusted
          relationships we have built over the years. We view these as a
          testimony to our paramount commitment to quality and to delivering
          impactful and enduring results to our clients.
        </p>
        <h3 className="text-golden golden_heading sm:text-[14px] xl:text-[25px]">
          Our Purpose
        </h3>
        <p className="text-black text-justify">
          Our purpose is to build trust and promote collaborations where people
          and societies can sustainably advance, create, and be remembered for
          their legacies.
        </p>
        <h3 className="text-golden golden_heading sm:text-[14px] xl:text-[25px]">
          Our Services
        </h3>
        <p className="text-black text-justify">
          At Morsi M Partners, we offer a comprehensive suite of services that
          are tailored to meet the unique needs of our clients across various
          industries. Our deep advisory expertise covers a wide range of areas,
          including Finance & Accounting, Corporate Finance Advisory, Tax,
          Investment & Family Office Advisory, Risk & Regulatory Advisory, and
          Management Consulting.
        </p>
        <h3 className="text-golden golden_heading sm:text-[14px] xl:text-[25px]">
          Our People
        </h3>
        <p className="text-black text-justify">
          At Morsi M Partners, we believe that our people are our most valuable
          asset. We are dedicated to attracting and developing top talents to
          meet the evolving needs and aspirations of our clients.
        </p>
        <p className="text-black text-justify">
          Through a culture that values collaboration, innovation, and
          diversity, we foster a workplace where our people can thrive and
          achieve their full potentials.
        </p>
        <p className="text-black text-justify">
          Our commitment to empowering our people with the coaching, tools,
          resources, and supportive environment they need to lead healthy lives,
          drive impactful solutions, and express their unique perspectives
          within diverse teams is essential to delivering sustainable outcomes
          of the highest quality.
        </p>
        <h3 className="text-golden golden_heading sm:text-[14px] xl:text-[25px]">
          Forward Trajectory
        </h3>
        <p className="text-black text-justify">
          Looking ahead, we see tremendous potential for growth and impact in
          key markets in the region, such as KSA and Egypt. Our expansionary
          focus into these markets is a natural evolution of our strong UAE
          foothold and a reflection of our commitment to meeting the dynamic
          needs of our clients and driving positive change in the region.
        </p>
        <p className="text-black text-justify">
          With our selectively and strategically developed investments and
          partnerships, combined with our deep advisory expertise and
          understanding of the business environments in the markets we serve, we
          are uniquely positioned to provide tailored, value-added advisory
          services, unlock new opportunities, and drive transformative progress
          that deliver impactful results.
        </p>
        <p className="text-black text-justify">
          Thank you for taking the time to learn about Morsi M Partners, we
          are excited to embark on this journey to create sustainable outcomes,
          brighter futures, and legacies that inspire and endure.
        </p>
      </div>
      <div className="w-full flex  items-start sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse sm:items-start sm:justify-center md:justify-center lg:justify-center items-center  justify-between">
        <Link href={"https://www.linkedin.com/in/mahmoudmorsi"}>
          <CustomButton
            variant={"golden"}
            className="flex items-center justify-center"
          >
            Connect with Mahmoud M. Morsi
            {/* <Icons.linkedin className="h-4 w-4  ml-4 " /> */}
            <FaLinkedin className="text-white h-4 w-4 ml-4" />
          </CustomButton>
        </Link>
        <div className=" sm:w-full md:w-full lg:w-full xl:w-[50%] 2xl:w-[50%]">
          <Image
            alt="Mahmoud Morsi Signature"
            src={"/images/mahmoud-morsi-signature.png"}
            width={1120}
            height={412}
            // width={1119}
            // height={411}
          />
        </div>
      </div>
    </div>
  );
};

export default FounderMessage;
