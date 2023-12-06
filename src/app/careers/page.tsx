import Header from "@/components/Header";
import CustomButton from "@/components/customui/CustomButton";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Careers | Morsi M Partners",
  description:
    "An independent advisory and professional services firm  We are UAE born, with a global network, reach, and outlook",
};

const Careers = () => {
  return (
    <main className="careers-page">
      <Header />
      <div className="bg-black h-[70px] lg:h-[90px] w-full block xl:hidden 2xl:hidden"></div>
      {/* Banner */}
      <section className="banner relative flex items-center justify-center w-full h-[250px] lg:h-[520px] xl:h-[700px] 2xl:h-screen overflow-hidden bg-[url('/images/careers-banner.jpg')] bg-cover aspect-video">
        <div className="info bottom-9 maxw absolute   z-[2] w-full h-full flex flex-col items-center justify-center my-auto">
          <h2 className="text-white text-center leading-[100%] font-normal  text-[10px] md:text-[10px] lg:text-[20px] xl:text-[28px] 2xl:text-[31px] mb-[30px]">
            Lead with character, Be the Game Changer, Elevate one another
          </h2>
          <h2 className="text-white text-center leading-[100%] font-normal mb-1 text-[10px] md:text-[10px] lg:text-[20px] xl:text-[28px] 2xl:text-[31px]">
            We win together, this is our culture at Morsi M Partners
          </h2>
        </div>
      </section>

      {/* Message */}
      <section className="dv_section p-[30px] xl:py-[50px] 2xl:py-[50px] ">
        <div className="maxw flex items-center justify-center">
          <h2 className="text-center text-black mb-0 text-[16px] leading-tight lg:text-[20px] xl:text-[22px] 2xl:text-[27px] 2xl:leading-[46px]">
            Unlock your full potential and join a Winning Team - where passion
            meets excellence.
          </h2>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values div_section bg-[url('/images/carees-secbg.jpg')] bg-cover  max-h-[400px]">
        <div className="maxw flex items-center justify-center">
          <h2 className="text-center text-white w-fit border-b border-b-golden text-[16px] md:text-[28px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px]">
            Our values
          </h2>
        </div>
        <div className="maxw mx-auto grid grid-cols-4 mt-4 p-0">
          <Link
            href={"/about-us/#integrity"}
            className="flex flex-col items-center justify-start"
          >
            <Image
              alt="Integrity"
              src={"/images/integrity.png"}
              height={66}
              width={66}
              className="w-7 h-7 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:w-16 2xl:h-16 "
            />
            <p className="text-center mt-3 text-white text-[10px] md:text-[12px] lg:text-[16px] xl:text-[22px] 2xl:text-[30px]">
              Integrity & <br />
              Transparency
            </p>
          </Link>
          <Link
            href={"/about-us/#quality"}
            className="flex flex-col items-center justify-start"
          >
            <Image
              alt="Quality"
              src={"/images/quality.png"}
              height={66}
              width={66}
              className="w-7 h-7 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:w-16 2xl:h-16 "
            />
            <p className="text-center mt-3 text-white text-[10px] md:text-[12px] lg:text-[16px] xl:text-[22px] 2xl:text-[30px]">
              Quality & <br />
              Excellence
            </p>
          </Link>
          <Link
            href={"/about-us/#collaborate"}
            className="flex flex-col items-center justify-start"
          >
            <Image
              alt="Collaborate"
              src={"/images/deal.png"}
              height={66}
              width={66}
              className="w-7 h-7 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:w-16 2xl:h-16 "
            />
            <p className="text-center mt-3 text-white text-[10px] md:text-[12px] lg:text-[16px] xl:text-[22px] 2xl:text-[30px]">
              Collaborate & <br />
              Inspire
            </p>
          </Link>
          <Link
            href={"/about-us/#alpha"}
            className="flex flex-col items-center justify-start"
          >
            <Image
              alt="Alpha"
              src={"/images/civil-rights.png"}
              height={66}
              width={66}
              className="w-7 h-7 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:w-16 2xl:h-16 "
            />
            <p className="text-center mt-3 text-white text-[10px] md:text-[12px] lg:text-[16px] xl:text-[22px] 2xl:text-[30px] sm:w-[80%]">
              Be the Alpha,
              <br /> Be Entrepreneurial,
              <br /> Do the right thing
            </p>
          </Link>
        </div>
      </section>

      {/* Work with us */}
      <section id="work-with-us" className="our-values div_section bggolden">
        <div className="maxw ">
          <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px] font-medium">
            Work with us
          </h2>
          <div className="content my-5  w-full grid gap-2 grid-cols-2 ">
            <div className=" bg-white w-full p-4">
              <Image
                className="carrer-icon"
                alt="buisnessman"
                src={"/images/businessman.png"}
                height={71}
                width={71}
              />
              <p className="text-textgrey mt-3 mb-0 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[18px] 2xl:text-[18px]">
                Are you an experienced professional with an entrepreneurial
                spirit and a drive to challenge the status quo, while remaining
                focused on achieving sustainable best-in-class results?
              </p>
            </div>
            <div className=" bg-white w-full p-4">
              <Image
                className="carrer-icon"
                alt="critical-thinking"
                src={"/images/critical-thinking.png"}
                height={71}
                width={71}
              />
              <p className="text-textgrey mt-3 mb-0 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[18px] 2xl:text-[18px]">
                Do you possess the versatility and resilience to effortlessly
                shift between operational, tactical, and strategic mindsets?
              </p>
            </div>
            <div className=" bg-white w-full p-4">
              <Image
                className="carrer-icon"
                alt="skill"
                src={"/images/skill.png"}
                height={71}
                width={71}
              />
              <p className="text-textgrey mt-3 mb-0 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[18px] 2xl:text-[18px]">
                Do you have a strong combination of people skills, business
                acumen, and technical excellence to provide exceptional service
                to our clients?
              </p>
            </div>
            <div className=" bg-white w-full p-4">
              <Image
                className="carrer-icon"
                alt="success"
                src={"/images/success.png"}
                height={71}
                width={71}
              />
              <p className="text-textgrey mt-3 mb-0 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[18px] 2xl:text-[18px]">
                Do you want more out of your career, to stand out, to create
                more, and to grow exponentially?
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={"/explore-our-current-opportunities"}>
              <CustomButton variant={"golden"}>Apply now</CustomButton>
            </Link>
            <Link href={"/explore-our-current-opportunities"}>
              <CustomButton variant={"dark"}>
                Explore our current opportunities
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Message Banner */}
      <section className="message-banner div_section bg-[url('/images/message-banner.jpg')] bg-cover sm:py-[30px] sm:h-[250px] flex items-center justify-center h-[250px] xl:h-[300px] 2xl:h-[390px]">
        <div className=" maxwflex h-fit ">
          <h2 className="section_heading text-center text-white font-bold mb-4 text-[16px] d:text-[28px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px]">
            Diversity, Equity, and Inclusion
          </h2>
          <p className="text-center text-white mb-0 text-[10px] leading-snug md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
            At MMP, we foster an inclusive environment that highly values
            diversity, equity, and inclusion.
          </p>
          <p className="text-center text-white mb-0 text-[10px] leading-snug md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
            We are committed to actively recruiting, supporting, and developing
            individuals from all backgrounds.
          </p>
          <p className="text-center text-white mb-0 text-[10px] leading-snug md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
            Our workforce is a mosaic of people and perspectives which fuels our
            ability to provide innovative and creative solutions to our clients.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Careers;
