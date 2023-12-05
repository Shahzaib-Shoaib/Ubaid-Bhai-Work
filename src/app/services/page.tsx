import ContactusSec from "@/components/ContactusSec";
import Header from "@/components/Header";
import { Icons } from "@/components/Icons";
import CustomButton from "@/components/customui/CustomButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: 'Services | Morsi M Partners',
  description: 'An independent advisory and professional services firm  We are UAE born, with a global network, reach, and outlook',
}

const Services: NextPage = () => {
  return (<>
    <Header />
    <main className="services-page">
      <div className="bg-black h-[70px] lg:h-[90px] w-full block xl:hidden 2xl:hidden"></div>
      {/* Banner */}
      <section className="banner relative flex items-center justify-center w-full max-h-screen h-[250px] lg:h-[520px] xl:h-[700px] 2xl:h-screen overflow-hidden bg-center bg-[url('/images/services-banner.png')] bg-cover">
        <div className="bg-[#a7a1a1] bg-opacity-20 maxw w-[40%] sm:w-[90%] absolute z-[3] sm:bottom-6 bottom-10 flex items-center justify-around flex-wrap text-white p-2">
          {/* <Icons.movedown className="h-7 w-7 sm:w-5 sm:h-5 text-white" /> */}

          <Link
            href={"services/#our-industries-expertise"}
            className=" border-b-transparent border-b-2 hover:border-b-white hover:border-b-2 text-white hover:text-golden link-scroll mb-0"
          >
            Our Industries Expertise
          </Link>
          <Link
            href={"services/#our-services"}
            className=" border-b-transparent border-b-2 hover:border-b-white hover:border-b-2 text-white hover:text-golden link-scroll mb-0"
          >
            Our Services
          </Link>
        </div>
        <div className="info maxw absolute 2xl:mt-[-120px] xl:mt-[0px] z-[2] w-full h-full flex flex-col items-center justify-center my-auto">
          <h2 className="text-white text-center leading-tight font-normal mb-0 text-[10px] md:text-[10px] lg:text-[20px] xl:text-[28px] 2xl:text-[31px]">
            We help our clients address operational, strategic, and complex
            challenges
          </h2>
          <br />
          <h2 className="text-white text-center leading-tight font-normal mb-1 text-[10px] md:text-[10px] lg:text-[20px] xl:text-[28px] 2xl:text-[31px]">
            Our deep advisory expertise encompasses a comprehensive suite of
            services
          </h2>
          {/* <p>abc</p> */}
        </div>
      </section>

      {/* Our Industry Expertise */}
      <section
        id="our-industries-expertise"
        className="our-industries-expertise w-full p-4 lg:p-7 xl:p-12 2xl:p-12 overflow-hidden"
      >
        <div className="maxw mx-auto ">
          <h2 className="py-1 w-full text-center mb-6 text-[16px] md:text-[28px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px] text-black">
            Our Industry Expertise
          </h2>
          <Tabs defaultValue="financial-services" className="w-full">
            <TabsList className="h-fit bg-transparent flex items-center justify-center gap-6 border-b-2 rounded-none mb-[50px]">
              <TabsTrigger
                value="financial-services"
                className="flex flex-col items-center justify-center text-black data-[state=active]:text-golden "
              >
                <h2 className="heading font-normal sm:mb-0 text-[9px] md:text-[9px] lg:text-[20px] xl:text-[23px] 2xl:text-[35px]">Financial Services</h2>
              </TabsTrigger>
              <TabsTrigger
                value="diverse-industries"
                className="flex flex-col items-center justify-center text-black data-[state=active]:text-golden"
              >
                <h2 className="heading font-normal sm:mb-0 text-[9px] md:text-[9px] lg:text-[20px] xl:text-[23px] 2xl:text-[35px]">Diverse Industries</h2>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="financial-services">
              <div className="flex">
                <div className="content my-auto sm:mb-4 w-[70%] lg:w-[85%] xl:w-[85%] 2xl:w-[85%] text-black">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="asset-wealth-management">
                      <AccordionTrigger className="hover:no-underline">
                        <ul className="points accordionlist">
                          <li className="accordion mt-1 mb-0">
                          {/* <li className="accordion mt-1 mb-0 text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px] linelist"> */}
                            Asset & Wealth Management
                          </li>
                        </ul>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="points plist">
                          <li className="text-textgrey sm:mb-[5px] md:mb-[5px] mb-[14px] text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">Mutual funds</li>
                          <li className="text-textgrey sm:mb-[5px] md:mb-[5px] mb-[14px] text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">Pension funds</li>
                          <li className="text-textgrey sm:mb-[5px] md:mb-[5px] mb-[14px] text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">Hedge funds</li>
                          <li className="text-textgrey sm:mb-[5px] md:mb-[5px] mb-[14px] text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">Private Equity</li>
                          <li className="text-textgrey sm:mb-[5px] md:mb-[5px] mb-[14px] text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">Venture Capital</li>
                          <li className="text-textgrey sm:mb-[5px] md:mb-[5px] mb-[14px] text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                            Family and Private funds – With dedicated subject
                            matter experts to advise on your Family office’s
                            wealth building, wealth governance, investments, and
                            asset allocation.
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="banking">
                      <AccordionTrigger className="hover:no-underline">
                        <ul className="points accordionlist">
                          <li className="accordion mt-1 mb-0 ">Banking</li>
                        </ul>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="points plist">
                          <li className="text-textgrey sm:mb-[5px] md:mb-[5px] mb-[14px] text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">Commercial banking</li>
                          <li className="text-textgrey sm:mb-[5px] md:mb-[5px] mb-[14px] text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">Investment banking</li>
                          <li className="text-textgrey sm:mb-[5px] md:mb-[5px] mb-[14px] text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">Private banking</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="pointer-events-none down-arrow" value="brokerage-and-investments">
                      <AccordionTrigger className="hover:no-underline">
                        <ul className="points accordionlist">
                          <li className="accordion mt-1 mb-0 ">
                            Brokerage and Investments
                          </li>
                        </ul>
                      </AccordionTrigger>
                      <AccordionContent></AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="pointer-events-none down-arrow" value="crypto-exchanges-and-crypto-mining">
                      <AccordionTrigger className="hover:no-underline">
                        <ul className="points accordionlist">
                          <li className="accordion mt-1 mb-0 ">
                            Crypto Exchanges and Crypto Mining
                          </li>
                        </ul>
                      </AccordionTrigger>
                      <AccordionContent></AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="pointer-events-none down-arrow" value="currency-exchanges">
                      <AccordionTrigger className="hover:no-underline">
                        <ul className="points accordionlist">
                          <li className="accordion mt-1 mb-0 ">Currency Exchanges</li>
                        </ul>
                      </AccordionTrigger>
                      <AccordionContent></AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="fintech">
                      <AccordionTrigger className="hover:no-underline">
                        <ul className="points accordionlist">
                          <li className="accordion mt-1 mb-0 ">FinTech</li>
                        </ul>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="points plist">
                          <li className="text-textgrey sm:mb-[5px] md:mb-[5px] mb-[14px] text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">Digital Payments</li>
                          <li className="text-textgrey sm:mb-[5px] md:mb-[5px] mb-[14px] text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">Payment Gateways</li>
                          <li className="text-textgrey sm:mb-[5px] md:mb-[5px] mb-[14px] text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">Crowd-funding Platforms</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="pointer-events-none down-arrow" value="insurance">
                      <AccordionTrigger className="hover:no-underline">
                        <ul className="points accordionlist">
                          <li className="accordion mt-1 mb-0 ">Insurance</li>
                        </ul>
                      </AccordionTrigger>
                      <AccordionContent></AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="content  flex items-center justify-center w-[30%] lg:w-[35%] xl:w-[35%] 2xl:w-[35%] m-6">
                  <Image
                    alt="Financial-Services"
                    src={"/images/Financial-Services.png"}
                    height={648}
                    width={506}
                    className="sm:hidden md:hidden"
                  />
                  <img
                    alt="Financial-Services"
                    src={"/images/Financial-Services-sm.png"}
                    className="hidden sm:block md:block h-[100%] w-[100%]"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="diverse-industries">
              <div className="flex">
                <div className="content  flex items-center justify-center w-[30%]  lg:w-[35%] xl:w-[35%] 2xl:w-[35%] m-6">
                  <Image
                    alt="Diverse-Industries"
                    src={"/images/Diverse-Industries.png"}
                    height={648}
                    width={506}
                    className="sm:hidden md:hidden"
                  />
                  <img
                    alt="Financial-Services"
                    src={"/images/Diverse-Industries-sm.png"}
                    className="hidden sm:block md:block h-[100%] w-[100%]"
                  />
                </div>
                <div className="content  my-auto sm:mb-4 w-[70%]  lg:w-[85%] xl:w-[85%] 2xl:w-[85%] text-black">
                  <ul className="points accordionlist">
                    <li className="accordion my-1 border-b py-1 ">
                      Consumer & Retail
                    </li>
                    <li className="accordion my-1 border-b py-1 ">Food & Beverage</li>
                    <li className="accordion my-1 border-b py-1 ">Hospitality</li>
                    <li className="accordion my-1 border-b py-1 ">Manufacturing</li>
                    <li className="accordion my-1 border-b py-1 ">Mining</li>
                    <li className="accordion my-1 border-b py-1 ">Oil & Gas</li>
                    <li className="accordion my-1 border-b py-1 ">Pharmaceuticals</li>
                    <li className="accordion my-1 border-b py-1 ">
                      Shipping & Logistics
                    </li>
                    <li className="accordion my-1 border-b py-1 ">
                      Technology, Media, & Telecom
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Work with us */}
      <section className="message-banner bg-[url('/images/message-banner.jpg')] bg-cover text-white p-4">
        <div className="content maxw mx-auto flex  items-center justify-center sm:h-[250px] lg:h-[350px] xl:h-[350px] 2xl:h-[350px]">
          <div className="w-fit">
            <blockquote className="text-white">
              <Image
                alt="quote-open"
                src={"/images/quote-open.png"}
                width={36}
                height={25}
                className=" w-[22px]"
              />
              <p className="text-white text-center mb-0 text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                As we believe in the power of <strong>entrepreneurship</strong>,
                we are industry agnostic when it comes to working with and
                supporting <strong>Startups</strong>. With our deep
                understanding of the unique challenges faced by early-stage
                companies, we are passionate about guiding entrepreneurs
                navigate those challenges and turn their visions into successful
                realities.
              </p>
              <Image
                alt="quote-close"
                src={"/images/quote-close.png"}
                width={36}
                height={25}
                className="ml-auto w-[22px]"
              />
            </blockquote>
            <h3 className="sub_heading text-white text-right mt-6 text-[16px] md:text-[28px] lg:text-[28px] xl:text-[22px] 2xl:text-[22px]">
              - Mahmoud M. Morsi
            </h3>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="our-services" className="div_section">
        <div className="maxw mx-auto ">
          <h2 className="section_heading text-center text-[16px] md:text-[28px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px] ">Our Services</h2>
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Finance & Accounting */}
            <div className="Finance-Accounting post w-full flex">
              <div className="img bg-[url('/images/Finance-Accounting.png')] bg-center w-[50%] max-h-[380px] bg-cover aspect-square "></div>
              <div className="content div_section  bg-pinkish max-h-[500px] w-[50%] flex flex-col justify-center sm:p-[10px] md:p-[15px] lg:p-[20px] xl:p-[30px] 2xl:p-[30px]">
                <Link href={"/services/finance-accounting/"}>
                  <h2 className="leading-[100%] text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px] mb-3">Finance & Accounting</h2>
                </Link>

                <p className="text-textgrey leading-tight text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  Our solutions ensure that your F&A function is adequately
                  established, closely monitored, and professionally and
                  effectively managed.
                </p>
                <p className="text-textgrey leading-tight text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  We provide a variety of services, from outsourced finance
                  officer solutions to financial statements audit readiness,
                  financial reporting, and technical accounting advisory
                  services, as well as several other value creation services.
                  Our offerings are comprehensive, exceptional, and
                  best-in-class.
                </p>
                <Link href={"/services/finance-accounting/"}>
                  <CustomButton className="font-normal" variant={"goldish"}>
                    Learn More
                    <Icons.arrowRight className="w-4 h-4 ml-2 sm:w-2 sm:h-2" />
                  </CustomButton>
                </Link>
              </div>
            </div>
            {/* Corporate Finance Advisory */}
            <div className="Corporate-Finance-Advisory post w-full flex">
              <div className="img bg-[url('/images/Corporate-Finance.png')] bg-center w-[50%] max-h-[380px] bg-cover aspect-square "></div>
              <div className="content div_section  bg-pinkish max-h-[500px] w-[50%] flex flex-col justify-center sm:p-[10px] md:p-[15px] lg:p-[20px] xl:p-[30px] 2xl:p-[30px]">
                <Link href={"/services/corporate-finance-advisory/"}>
                  <h2 className="leading-[100%] text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px] mb-3">
                    Corporate Finance Advisory
                  </h2>
                </Link>

                <p className="text-textgrey leading-tight text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  In today’s fast-paced and complex Mergers & Acquisitions
                  (“M&A”) market, we help dealmakers unlock opportunities with
                  speed, precision, and confidence.
                </p>
                <p className="text-textgrey leading-tight text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  We provide our clients with strategic, financial, and tactical
                  advice in connection with business valuations, financial
                  modeling, capital structuring, and executing mergers,
                  acquisitions, company sales and divestitures, including
                  carve-outs and spin-offs.
                </p>
                <Link href={"/services/corporate-finance-advisory/"}>
                  <CustomButton className="font-normal" variant={"goldish"}>
                    Learn More
                    <Icons.arrowRight className="w-4 h-4 ml-2 sm:w-2 sm:h-2" />
                  </CustomButton>
                </Link>
              </div>
            </div>
            {/* Tax */}
            <div className="tax post w-full flex">
              <div className="img bg-[url('/images/tax-bg.png')] bg-center w-[50%] max-h-[380px] bg-cover aspect-square "></div>
              <div className="content div_section  bg-pinkish max-h-[500px] w-[50%] flex flex-col justify-center sm:p-[10px] md:p-[15px] lg:p-[20px] xl:p-[30px] 2xl:p-[30px]">
                <Link href={"/services/tax/"}>
                  <h2 className="text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px] mb-3 leading-[100%]">Tax</h2>
                </Link>

                <p className="text-textgrey leading-tight text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  We help you navigate the evolving tax landscape in the UAE and
                  GCC and ensure compliance with the evolving regulations.
                </p>
                <p className="text-textgrey leading-tight text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  Our services cover VAT, corporate tax, transfer pricing,
                  excise tax, international tax, mergers & acquisitions tax
                  planning and due diligence, FATCA and CRS compliance, and
                  Zakat advisory.
                </p>
                <Link href={"/services/tax/"}>
                  <CustomButton className="font-normal" variant={"goldish"}>
                    Learn More
                    <Icons.arrowRight className="w-4 h-4 ml-2 sm:w-2 sm:h-2" />
                  </CustomButton>
                </Link>
              </div>
            </div>
            {/* Investment & Family office Advisory */}
            <div className="Investment-Family-office-Advisory post w-full flex">
              <div className="img bg-[url('/images/investment-bg.png')] bg-center w-[50%] max-h-[380px] bg-cover aspect-square "></div>
              <div className="content div_section  bg-pinkish max-h-[500px] w-[50%] flex flex-col justify-center sm:p-[10px] md:p-[15px] lg:p-[20px] xl:p-[30px] 2xl:p-[30px]">
                <Link href={"/services/investment-family-office-advisory/"}>
                  <h2 className="text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px] mb-3 leading-[100%]">
                    Investment & Family office Advisory
                  </h2>
                </Link>

                <p className="text-textgrey leading-tight text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  We help you today, to create legacies for tomorrow’s
                  generations. Advising you with care and precision, while
                  giving you full control over your portfolio.
                </p>
                <p className="text-textgrey leading-tight text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  Our differentiated and pioneering expertise helps unlock new
                  investment opportunities across a broad spectrum of asset
                  classes and create a sound governance framework to preserve
                  and grow your wealth.
                </p>
                <Link href={"/services/investment-family-office-advisory/"}>
                  <CustomButton className="font-normal" variant={"goldish"}>
                    Learn More
                    <Icons.arrowRight className="w-4 h-4 ml-2 sm:w-2 sm:h-2" />
                  </CustomButton>
                </Link>
              </div>
            </div>
            {/* Risk & Regulatory Advisory */}
            <div className="Risk-Regulatory-Advisory post w-full flex">
              <div className="img bg-[url('/images/risk-bg.png')] bg-center w-[50%] max-h-[380px] bg-cover aspect-square "></div>
              <div className="content div_section  bg-pinkish max-h-[500px] w-[50%] flex flex-col justify-center sm:p-[10px] md:p-[15px] lg:p-[20px] xl:p-[30px] 2xl:p-[30px]">
                <Link href={"/services/risk-regulatory-advisory/"}>
                  <h2 className="text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px] mb-3 leading-[100%]">
                    Risk & Regulatory Advisory
                  </h2>
                </Link>

                <p className="text-textgrey leading-tight text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  We help you navigate the complexities of today's regulatory
                  environment by proactively managing enterprise risk,
                  maintaining strong corporate governance, improving internal
                  audit processes, and enhancing business resilience in today's
                  complex regulatory environment.
                </p>
                <p className="text-textgrey leading-tight text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  We also cater for Environmental, Social, and Governance
                  ("ESG") compliance advisory and forensic advisory services.
                </p>
                <Link href={"/services/risk-regulatory-advisory/"}>
                  <CustomButton className="font-normal" variant={"goldish"}>
                    Learn More
                    <Icons.arrowRight className="w-4 h-4 ml-2 sm:w-2 sm:h-2" />
                  </CustomButton>
                </Link>
              </div>
            </div>
            {/* Management Consulting */}
            <div className="Management-Consulting post w-full flex">
              <div className="img bg-[url('/images/consulting-bg.png')] bg-center w-[50%] max-h-[400px] bg-cover aspect-square "></div>
              <div className="content div_section  bg-pinkish max-h-[500px] w-[50%] flex flex-col justify-center sm:p-[10px] md:p-[15px] lg:p-[20px] xl:p-[30px] 2xl:p-[30px]">
                <Link href={"/services/management-consulting/"}>
                  <h2 className="text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px] mb-3 leading-[100%]">Management Consulting</h2>
                </Link>
                <p className="text-textgrey leading-tight text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  MMP provides expert guidance across the entire spectrum of
                  organizational development, improvement, and transformation,
                  covering strategy formulation and planning, operational
                  design, policy development, process improvement, and data
                  analytics solutions.
                </p>
                <p className="text-textgrey leading-tight text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                  Our team analyzes existing problems and designs roadmaps,
                  providing robust support during the execution of your
                  strategy. Our aim is to empower you with strategic insights,
                  operational efficiency, and data-driven decision-making
                  capabilities.
                </p>
                <Link href={"/services/management-consulting/"}>
                  <CustomButton className="font-normal" variant={"goldish"}>
                    Learn More
                    <Icons.arrowRight className="w-4 h-4 ml-2 sm:w-2 sm:h-2" />
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact us */}
      <ContactusSec />
    </main>
    </>
  );
};

export default Services;
