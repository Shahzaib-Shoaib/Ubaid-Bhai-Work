import Header from "@/components/Header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: 'Explore Our Current Opportunities | Morsi M Partners',
  description: 'An independent advisory and professional services firm  We are UAE born, with a global network, reach, and outlook',
}

const exploreOurCurrentOpportunities = () => {
  return (
    <main className="explore-our-current-opportunities-page">
      <Header />
      <div className="bg-black h-[70px] lg:h-[90px] w-full block xl:hidden 2xl:hidden"></div>
      {/* Banner */}
      <section className="banner relative flex items-center justify-center w-full sm:h-[200px] xl:h-[620px] 2xl:h-[700px] overflow-hidden bg-[url('/images/explore-our-current-opportunities-banner.png')] bg-cover bg-center aspect-video">
        <div className="info absolute z-[2] w-full h-full flex flex-col items-center justify-center my-auto">
          <h2 className="text-white text-center leading-tight font-normal mb-1 text-[10px] md:text-[10px] lg:text-[20px] xl:text-[28px] 2xl:text-[31px]">
            Thank you for your interest in Morsi M Partners. We look forward to
            receiving your application
          </h2>
        </div>
      </section>

      {/* Current job openings */}
      <section className=" div_section bggolden">
        <div className="maxw ">
          <h2 className="font-medium text-black mb-0 text-[16px] leading-tight lg:text-[28px] xl:text-[36px] 2xl:text-[36px] ">Current job Openings</h2>
          <div className="content my-10 w-full flex flex-col ">
            <div className="headers bg-golden flex items-center justify-around w-full">
                <h3 className="text-white sub_heading p-4 mb-0">Job Title</h3>
                <h3 className="text-white sub_heading p-4 mb-0">Location</h3>
                <h3 className="text-white sub_heading p-4 mb-0">Posting Date</h3>
                <h3 className="text-white sub_heading p-4 mb-0">Actions</h3>
            </div>
            <div className="content p-4 bg-white w-full min-h-[120px]">
                <p className='text-black'>There are no job openings available.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default exploreOurCurrentOpportunities;
