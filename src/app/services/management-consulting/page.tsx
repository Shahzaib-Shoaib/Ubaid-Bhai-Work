import ContactusSec from "@/components/ContactusSec";
import Header from "@/components/Header";
import CustomButton from "@/components/customui/CustomButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Management Consulting | Morsi M Partners",
  description:
    "An independent advisory and professional services firm  We are UAE born, with a global network, reach, and outlook",
};

const ManagementConsulting = () => {
  return (
    <main className="management-consulting-page">
      <Header />
      <div className="bg-black h-[70px] lg:h-[90px] w-full block xl:hidden 2xl:hidden"></div>
      {/* Banner */}
      <section className="banner div_section bg-[url('/images/management-consulting-banner.png')] bg-center bg-cover relative flex items-center justify-center sm:p-0 w-full overflow-hidden sm:h-[200px] xl:h-[500px] 2xl:h-[640px]">
        <div className="info maxw w-full h-full flex flex-col items-center justify-center my-auto xl:my-[100px] 2xl:my-[100px]">
          <div className="content flex flex-col items-start justify-center px-4 h-full">
            <h2 className="normal_heading text-white mb-3 sm:mb-1 xl:text-[30px] 2xl:text-[50px]">
              Management Consulting
            </h2>
            <h2 className="heading text-golden mb-3 sm:mb-1 xl:text-[30px] 2xl:text-[30px]">
              Navigating uncertainties, driving transformation
            </h2>
            <p className="golden_heading text-white sm:text-[10px] xl:text-[23px] 2xl:text-[23px] xl:w-[85%] 2xl:w-[83%]">
              Empower your business and lead the way with our comprehensive
              offerings, from strategy, operations, and data analytics solutions
              <Link
                href={
                  "management-consulting/#our-management-consulting-services"
                }
                className="text-golden underline ml-1"
              >
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Our Management Consulting services */}
      <section
        id="our-management-consulting-services"
        className="our-tax-services div_section bggolden  overflow-hidden"
      >
        <div className="maxw mx-auto flex flex-col items-center justify-center">
          <h2 className="section_heading py-1 w-fit text-center border-b border-b-golden 2xl:leading-[40px]">
            Our Management Consulting services
          </h2>
          <div className="content my-7 sm:mt-4 xl:mt-10 2xl:mt-14  w-full">
            <p className="text-textgrey">
              At MMP, we help our clients achieve their operational and
              strategic objectives by providing best-in-class advisory solutions
              to optimize organization’s performance, improve efficiency, reduce
              costs, and achieve sustainable growth.
            </p>
            <p className="text-textgrey">
              We specialize in developing business, market entry, growth,
              operational, digital, and organizational strategies, as well as
              providing data analytics insights and applications.
            </p>
            <p className="text-textgrey">Our services include:</p>
            <ul className="points plist">
              <li className="p mb-[14px]">
                Operational design and implementation support.
              </li>
              <li className="p mb-[14px]">Enterprise performance advisory.</li>
              <li className="p mb-[14px]">
                Strategy formulation and strategic planning.
              </li>
              <li className="p mb-[14px]">Data Analytics solutions.</li>
            </ul>
            <Tabs
              defaultValue="business-operations-transformation-advisory"
              className="w-full mt-4"
            >
              <TabsList className="w-full h-fit grid grid-cols-3 bg-transparent gap-1 xl:gap-2 2xl:gap-2 mb-4">
                <TabsTrigger
                  id="business-operations-transformation-advisory"
                  value="business-operations-transformation-advisory"
                  className="whitespace-normal h-full p-2 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black  hover:border-t-[6px] hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-[6px] data-[state=active]:border-t-golden w-full"
                >
                  Business Operations & Transformation Advisory
                </TabsTrigger>
                <TabsTrigger
                  id="growth-strategy-advisory"
                  value="growth-strategy-advisory"
                  className="whitespace-normal h-full p-2 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black  hover:border-t-[6px] hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-[6px] data-[state=active]:border-t-golden w-full"
                >
                  Growth Strategy Advisory
                </TabsTrigger>
                <TabsTrigger
                  value="data-analytics"
                  id="data-analytics"
                  className="whitespace-normal h-full p-2 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black  hover:border-t-[6px] hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-[6px] data-[state=active]:border-t-golden w-full"
                >
                  Data Analytics
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="business-operations-transformation-advisory"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  The lingering effects of the pandemic have disrupted supply
                  chains and created a demand for scarce talent.
                </p>
                <p>
                  Alongside these challenges, various technological, economic,
                  social, and geopolitical factors have raised questions about
                  the pace and momentum at which organizations need to rethink
                  and transform their business models to stay ahead of the
                  competition.
                </p>
                <p>
                  Our Business Operations & Transformation Advisory services
                  help you navigate uncertainties, streamline operations, create
                  a more efficient and effective organization, and unveil
                  opportunities to unlock new ideas and create sustainable
                  value.
                </p>
                <p>Our Risk & Controls offerings include:</p>
                <div className="">
                  <ul className="points accordionlist mb-4 sm:mb-2 list-outside ml-5">
                    <li className="accordion mt-1 text-golden sm:m-0 sm:text-[18px]">
                      Business Process Transformation
                    </li>
                  </ul>
                  <ul className="points plist  list-outside ml-10 sm:ml-8">
                    <li className="p mb-1">Cost structure reviews.</li>
                    <li className="p mb-1">
                      Operational models restructuring.
                    </li>
                    <li className="p mb-1">
                      Comprehensive business processes review and
                      transformation.
                    </li>
                    <li className="p mb-1">
                      Outsourcing, shared services, and cost allocation
                      advisory.
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="points accordionlist my-4 sm:my-2 list-outside ml-5">
                    <li className="accordion mt-1 text-golden sm:m-0 sm:text-[18px]">
                      Business Process Management
                    </li>
                  </ul>
                  <ul className="points plist list-outside ml-10 sm:ml-8">
                    <li className="p mb-1">Framework design and setup.</li>
                    <li className="p mb-1">
                      Policies design and documentation (including policies
                      manuals).
                    </li>
                    <li className="p mb-1">
                      Processes / procedures design and documentation (including
                      Standard Operating Procedures (“SOPs”) manuals).
                    </li>
                    <li className="p mb-1">
                      Process gap assessments and benchmarking.
                    </li>
                    <li className="p mb-1">
                      Process measurement and continuous improvement.
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent
                value="growth-strategy-advisory"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  At MMP, we recognize that sustainable growth demands a clear
                  strategy and adaptability to shifting market conditions. Our
                  Growth Strategy Consulting services deliver customized
                  solutions to identify growth opportunities, create a success
                  roadmap, and achieve your objectives.
                </p>
                <p>
                  Our expert team, specializing in business, market entry,
                  digital, innovation, and performance optimization,
                  collaborates with you to craft a growth strategy tailored to
                  your unique needs.
                </p>
                <ul className="points plist list-outside ml-5">
                  <li className="p mb-[14px]">
                    <strong className="font-bold">Business strategy - </strong>
                    We help our clients develop a long-term vision, mission, and
                    objectives for their organizations. We work with them to
                    identify new markets and growth opportunities and develop a
                    growth strategy that optimizes returns.
                  </li>
                  <li className="p mb-[14px]">
                    <strong className="font-bold">
                      Market entry strategy -{" "}
                    </strong>
                    We support our clients in identifying and evaluating new
                    market opportunities, as well as defining target segments,
                    and developing an entry strategy.
                  </li>
                  <li className="p mb-[14px]">
                    <strong className="font-bold">Digital strategy - </strong>
                    We help our clients develop a digital strategy that
                    leverages emerging technologies and platforms to drive
                    growth, increase efficiency, and enhance customer
                    engagement.
                  </li>
                  <li className="p mb-[14px]">
                    <strong className="font-bold">
                      Innovation strategy -{" "}
                    </strong>
                    We work with our clients to develop an innovation strategy
                    that fosters a culture of creativity and experimentation,
                    identifies new opportunities, and develops solutions that
                    differentiate their organizations in the market.
                  </li>
                  <li className="p mb-[14px]">
                    {" "}
                    <strong className="font-bold">
                      Performance optimization -{" "}
                    </strong>
                    We support our clients in optimizing performance by
                    identifying operational inefficiencies, implementing best
                    practices, and driving continuous improvement.
                  </li>
                </ul>
              </TabsContent>
              <TabsContent
                value="data-analytics"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  At MMP, we specialize in unlocking the full potential of your
                  data through our advanced Data Analytics solutions.
                </p>
                <p>
                  Utilizing cutting-edge technology, we help you identify
                  patterns, uncover trends, and predict outcomes, providing
                  invaluable support for your marketing initiatives, strategic
                  positioning, root-cause analysis, and predictive analytics
                  efforts.
                </p>
                <p>
                  Our Data Analytics services empower you to make informed
                  decisions, seize untapped opportunities, and transform raw
                  data into meaningful intelligence that unlocks new
                  possibilities for your business. With our expertise, you can
                  harness the power of data to drive growth and stay ahead in
                  today’s dynamic and competitive business landscape.
                </p>
              </TabsContent>
            </Tabs>
            <div className="flex flex-wrap items-center justify-start gap-3 w-full mt-4">
              <p className="mb-0">
                For queries, or to submit a request for proposal
              </p>
              <Link href={"/contact-us"}>
                <CustomButton variant={"golden"}>Contact Us</CustomButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore other services */}
      <section
        id="explore-other-services"
        className="explore-other-services w-full div_section overflow-hidden"
      >
        <div className="maxw mx-auto flex items-center justify-center">
          <h2 className="section_heading py-1 mb-6 border-b border-b-golden w-fit">
            Explore other services
          </h2>
        </div>
        <div className="w-full maxw mx-auto flex  items-center justify-between gap-2 mt-4">
          <div className="category -skew-x-30 border-b-2 border-b-golden border-r-2 border-r-golden w-fit pl-1 pr-2 py-2">
            <Link href={"/services/finance-accounting"} className="w-full">
              <p className="mb-0 skew-x-20 skewedlinks">Finance & Accounting</p>
            </Link>
          </div>
          <div className="category -skew-x-30 border-b-2 border-b-golden border-r-2 border-r-golden w-fit pl-1 pr-2 py-2">
            <Link
              href={"/services/corporate-finance-advisory"}
              className="w-full"
            >
              <p className="mb-0 skew-x-20 skewedlinks">
                Corporate Finance Advisory
              </p>
            </Link>
          </div>
          <div className="category -skew-x-30 border-b-2 border-b-golden border-r-2 border-r-golden w-fit pl-1 pr-2 py-2">
            <Link href={"/services/tax"} className="w-full">
              <p className="mb-0 skew-x-20 skewedlinks">Tax</p>
            </Link>
          </div>
          <div className="category -skew-x-30 border-b-2 border-b-golden border-r-2 border-r-golden w-fit pl-1 pr-2 py-2">
            <Link
              href={"/services/investment-family-office-advisory"}
              className="w-full"
            >
              <p className="mb-0 skew-x-20 skewedlinks">
                Investment & Family Office Advisory
              </p>
            </Link>
          </div>
          <div className="category -skew-x-30 border-b-2 border-b-golden border-r-2 border-r-golden w-fit pl-1 pr-2 py-2">
            <Link
              href={"/services/risk-regulatory-advisory"}
              className="w-full"
            >
              <p className="mb-0 skew-x-20 skewedlinks">
                Risk & Regulatory Advisory
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us*/}
      <ContactusSec />
    </main>
  );
};

export default ManagementConsulting;
