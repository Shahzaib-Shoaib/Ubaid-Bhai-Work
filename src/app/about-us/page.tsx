import FounderMessage from "@/components/FounderMessage";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import CustomButton from "@/components/customui/CustomButton";
import CustomDialog from "@/components/customui/CustomDialog";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUS: NextPage = () => {
  return (
    <main className="about-us-page">
      <Header />
      <div className="bg-black h-[70px] lg:h-[90px] w-full block xl:hidden 2xl:hidden"></div>
      {/* Banner */}
      <section className="banner relative flex items-center justify-center w-full max-h-screen h-[250px] sm:h-[200px] lg:h-[520px] xl:h-[700px] 2xl:h-screen overflow-hidden bg-[url('/images/aboutus-banner.jpg')] bg-cover bg-center">
        <div className="bg-[#a7a1a1] bg-opacity-20 maxw w-[50%] xl:w-[70%] sm:w-[90%] sm:mb-4 absolute z-[3] bottom-14 sm:bottom-5  flex items-center justify-around flex-wrap text-white p-2 sm:p-0 ">
          {/* <Icons.movedown className="h-7 w-7 sm:w-5 sm:h-5 text-white" /> */}
          <Link
            href={"about-us/#who-we-are"}
            className="2xl:ml-10 border-b-transparent border-b-2 hover:border-b-white hover:border-b-2 text-white hover:text-golden link-scroll mb-0"
          >
            Who we are
          </Link>
          <Link
            href={"about-us/#our-mantra"}
            className="border-b-transparent border-b-2 hover:border-b-white hover:border-b-2 text-white hover:text-golden link-scroll mb-0"
          >
            Our mantra
          </Link>
          <Link
            href={"about-us/#our-mission"}
            className=" border-b-transparent border-b-2 hover:border-b-white hover:border-b-2 text-white hover:text-golden link-scroll mb-0"
          >
            Our mission
          </Link>
          <Link
            href={"about-us/#our-purpose"}
            className="border-b-transparent border-b-2 hover:border-b-white hover:border-b-2 text-white hover:text-golden link-scroll mb-0"
          >
            Our Purpose
          </Link>
          <Link
            href={"about-us/#our-values"}
            className="2xl:mr-10 border-b-transparent border-b-2 hover:border-b-white hover:border-b-2 text-white hover:text-golden link-scroll mb-0"
          >
            Our values
          </Link>
        </div>
        <div className="info 2xl:mt-[-60px] xl:mt-[100px] maxw absolute z-[2] w-full h-full flex flex-col items-center justify-center my-auto ">
          <h2 className="text-white text-center leading-[100%] font-normal mb-0 xl:mb-1 text-[10px] md:text-[10px] lg:text-[20px] xl:text-[28px] 2xl:text-[31px] sm:mb-2 sm:mx-5">
            Our values and behaviors are fueled by our purpose in life as individuals and as professionals
          </h2>
          <h2 className="text-white text-center leading-[100%] font-normal mb-1 text-[10px] md:text-[10px] lg:text-[20px] xl:text-[28px] 2xl:text-[31px]">
            We believe that legacy creation is the noblest of all pursuits
          </h2>
        </div>
      </section>
      <div className="m-2">
        {/* Who we are */}
        <section id="who-we-are" className="div_section ">
          <div className="maxw flex items-center gap-4">
            <div className="content w-[60%]">
              <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px] font-normal">Who we are</h2>
              <p className="mb-0 xl:mb-[14px] 2xl:mb-[14px] leading-tight sm:leading-4 xl:leading-[24px] 2xl:leading-[27px]  text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px] xl:w-[90%]">
                Morsi M Partners <strong> (“MMP”) </strong> was launched in 2023 with a clear purpose
                to build trust and promote collaborations where people and
                societies can sustainably advance, create, and be remembered for
                their legacies.
              </p>
              <p className="mb-0 xl:mb-[14px] 2xl:mb-[14px] leading-tight sm:leading-4 xl:leading-[24px] 2xl:leading-[27px]  text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px] xl:w-[90%]">
                Capitalizing on the amalgamation of knowledge and advisory
                expertise gained over the years across diverse environments,
                sectors, and geographies, we offer our clients an unrivaled level
                of service excellence to help them streamline their business
                operations, bolster their governance models in a rapidly evolving
                regulatory landscape, and offer strategic and tactical advice on
                complex challenges.
              </p>
              <p className="mb-0 xl:mb-[14px] 2xl:mb-[14px] leading-tight sm:leading-4 xl:leading-[24px] 2xl:leading-[27px]  text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px] xl:w-[90%]">
                As a team, we are well-embedded in the markets that we serve, and
                we have a strong global network.
              </p>
              <p className="mb-0 xl:mb-[14px] 2xl:mb-[14px] leading-tight sm:leading-4 xl:leading-[24px] 2xl:leading-[27px]  text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px] xl:w-[90%]">
                Our entrepreneurial mindset, extensive experience, and pragmatic
                philosophy drive our client-focused approach. We believe in
                continuous learning, collaboration, and deep analysis. This
                approach allows us to deliver innovative and progressive
                solutions, helping businesses, people, and societies to advance
                sustainably.
              </p>
              <div className="actions mt-[50px] sm:mt-2">
                <CustomDialog
                  contentClassName="w-full "
                  trigger={
                    <CustomButton
                      variant={"golden"}
                      className=" ml-2 sm:ml-0 sm:mt-2 md:mt-2 lg:mt-2"
                    >
                      A Message From The Founder
                    </CustomButton>
                  }
                  content={<FounderMessage />}
                ></CustomDialog>
              </div>
            </div>
            <div className="image w-[40%] sm:flex sm:items-center sm:justify-center xl:flex xl:items-center xl:justify-center 2xl:flex 2xl:items-center 2xl:justify-center">
              <img
                alt="Get to know us image"
                src={"/images/aboutus-whoweare.jpg"}
                className="hidden md:block lg:block xl:block 2xl:block xl:[315px] xl:h-[404px] 2xl:w-[413px] 2xl:h-[529px]"
              />
              <img
                alt="Get to know us image"
                src={"/images/aboutus-whowearesm.png"}
                className="md:hidden lg:hidden xl:hidden 2xl:hidden sm:w-[127px] sm:h-[351px]"
              />
            </div>
          </div>
        </section>

        {/* Our Mantra */}
        <section id="our-mantra" className="div_section bggolden ">
          <div className="maxw flex items-center gap-4  2xl:py-14 ">
            <div className="image w-[40%] flex items-center justify-center ">
              <img
                alt="Our Mantra image"
                src={"/images/aboutus-ourmantra.jpg"}
                className="hidden md:block lg:block xl:block 2xl:block xl:[321px] xl:h-[411px] 2xl:w-[413px] 2xl:h-[529px]"
              />
              <img
                alt="Our Mantra image"
                src={"/images/aboutus-ourmantrasm.png"}
                className="md:hidden lg:hidden xl:hidden 2xl:hidden sm:w-[127px] sm:h-[348px]"
              />
            </div>
            <div className="content w-[60%]">
              <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px] font-normal">Our mantra</h2>
              <p className="mb-0 xl:mb-[14px] 2xl:mb-[14px] leading-tight sm:leading-4 xl:leading-[24px] 2xl:leading-[27px]  text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px] xl:w-[90%]">
                Creating and being remembered for our legacy is our mantra that
                embodies and underpins the values and behaviors we carry and
                exhibit every day.
              </p>
              <p className="mb-0 xl:mb-[14px] 2xl:mb-[14px] leading-tight sm:leading-4 xl:leading-[24px] 2xl:leading-[27px]  text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px]">
                We believe that true solutions are not achieved through short-term
                fixes, and temporary measures should not be touted as sustainable
                or strategic. As a result, we are dedicated to providing reliable,
                independent advice, and innovative solutions that promote long
                term sustainability and strategic success for our clients.
              </p>
              <p className="mb-0 xl:mb-[14px] 2xl:mb-[14px] leading-tight sm:leading-4 xl:leading-[24px] 2xl:leading-[27px]  text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px] xl:w-[95%] 2xl:w-[94%]">
                At our core, we prioritize the well-being of our people. We are
                committed to fostering a supportive environment for our team,
                where they can prioritize their well-being, feel empowered to
                innovate, collaborate towards positive change, and celebrate their
                uniqueness within our diverse teams.
              </p>
              <div className="actions mt-[30px] sm:mt-4">
                <Link href={"/services"}>
                  <CustomButton variant={"golden"}>Services</CustomButton>
                </Link>
                <Link href={"/contact-us"} className="mr-2 ml-4">
                  <CustomButton variant={"dark"} className="bg-transparent">Contact Us</CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission / Our Purpose */}
        <section id="our-mission" className="div_section">
          <div id="our-purpose" className="maxw flex items-center gap-4  2xl:py-20">
            <div className="content w-[60%]">
              <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px] font-normal">Our mission</h2>
              <p className="mb-0 xl:mb-[14px] 2xl:mb-[14px] leading-tight sm:leading-4 xl:leading-[24px] 2xl:leading-[27px]  text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px]">
                To provide <strong>our clients</strong> with an unrivaled level of
                service excellence, empowering them to realize their full
                potential and achieve sustainable growth.
              </p>
              <p className="mb-0 xl:mb-[14px] 2xl:mb-[14px] leading-tight sm:leading-4 xl:leading-[24px] 2xl:leading-[27px]  text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px]">
                To create a workplace that empowers <strong>our people</strong> to
                lead healthy lives, drive innovation, influence outcomes, and
                celebrate their uniqueness within our diverse teams.
              </p>
              <h2 className="text-black my-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px] font-normal">Our purpose</h2>
              <p className="mb-0 xl:mb-[14px] 2xl:mb-[14px] leading-tight sm:leading-4 xl:leading-[24px] 2xl:leading-[27px]  text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px]">
                Build trust and promote collaborations where people and societies
                can sustainably advance, create, and be remembered for their
                legacies.
              </p>
              <div className="actions mt-[30px] sm:mt-[16px]">
                <Link href={"/contact-us"}>
                  <CustomButton variant={"golden"}>Contact us</CustomButton>
                </Link>
              </div>
            </div>
            <div className="image w-[40%]  flex items-center justify-center">
              <img
                alt="Our mission image"
                src={"/images/aboutus-ourmission.jpg"}
                className="hidden md:block lg:block xl:block 2xl:block xl:[321px] xl:h-[411px] 2xl:w-[413px] 2xl:h-[529px]"
              />
              <img
                alt="Our mission image"
                src={"/images/aboutus-ourmissionsm.png"}
                className="md:hidden lg:hidden xl:hidden 2xl:hidden sm:w-[127px] sm:h-[351px]"
              />
            </div>
          </div>
        </section>

        {/* Our values */}
        <section id="our-values" className="div_section bggolden">
          <div className="maxw 2xl:px-9 ">
            <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px] font-normal">Our values</h2>
            {/* Integrity & Transparency */}
            <div id="integrity" className="bg-white p-4 mb-4">
              <h3 className="text-black w-fit border-b-2 border-b-golden mb-5 sm:text-[20px] text-[25px] leading-[28px] sm:leading-tight">
                Integrity & Transparency
              </h3>
              <div className="list-icon">
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>Our reputation is paramount.</p>
                </div>
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>Transparency is at the forefront of everything we do.</p>
                </div>
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>We hold ourselves accountable to the highest ethical standards.</p>
                </div>
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>We seek longevity and endurance in our relationships with our stakeholders.</p>
                </div>
              </div>
            </div>
            {/* Quality & Excellence */}
            <div id="quality" className="bg-white p-4 mb-4">
              <h3 className="text-black w-fit border-b-2 border-b-golden mb-5 sm:text-[20px] text-[25px] leading-[28px] sm:leading-tight">
                Quality & Excellence
              </h3>
              <div className="list-icon">
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>Consistency in delivering the highest levels of service excellence and quality is top priority.</p>
                </div>
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>Our focus on quality and excellence shapes our client interactions and guides our daily activities.</p>
                </div>
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>Quality and excellence permeate the entire client experience journey, not just the service outcome.</p>
                </div>
              </div>
            </div>
            {/* Collaborate & Inspire */}
            <div id="collaborate" className="bg-white p-4 mb-4">
              <h3 className="text-black w-fit border-b-2 border-b-golden mb-5 sm:text-[20px] text-[25px] leading-[28px] sm:leading-tight">
                Collaborate & Inspire
              </h3>
              <div className="list-icon">
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>Lead by example.</p>
                </div>
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>Care about and respect others.</p>
                </div>
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>We win together, this is our culture.</p>
                </div>
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>Empower others to be the best version of themselves.</p>
                </div>
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>Be to others, the mentor you would want for yourself and look up to.</p>
                </div>
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>Cultivate individuality and uniqueness to maximize outcomes within diverse teams.</p>
                </div>
              </div>
            </div>
            {/* Be the Alpha, Be Entrepreneurial, Do the right thing */}
            <div id="alpha" className="bg-white p-4 mb-4 2xl:mb-10">
              <h3 className="text-black w-fit border-b-2 border-b-golden mb-5 sm:text-[20px] text-[25px] leading-[28px] sm:leading-tight">
                Be the Alpha, Be Entrepreneurial, Do the right thing
              </h3>
              <div className="list-icon">
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>We strive to be the best in everything we do.</p>
                </div>
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>We put our clients' interests first and do what is in their best interests, even if it means making difficult decisions.</p>
                </div>
                <div className="list-main flex justify-start items-start gap-2">
                  <img className='areo-icon-1' src="/images/icon.png" alt="areo-icon-1" />
                  <p className='m-1 sm:text-[10px] sm:leading-[16px] text-[20px] leading-[30px]'>We approach our work with an entrepreneurial spirit, seeking out new and innovative ways to help our clients succeed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Get in Touch */}
      <GetInTouch />
    </main>
  );
};

export default AboutUS;
