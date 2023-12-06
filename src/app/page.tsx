import FounderMessage from "@/components/FounderMessage";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import { Icons } from "@/components/Icons";
import CustomButton from "@/components/customui/CustomButton";
import CustomDialog from "@/components/customui/CustomDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <Header />
      <div className="bg-black h-[70px] lg:h-[90px] w-full block xl:hidden 2xl:hidden"></div>
      {/* Banner */}
      <section className="banner relative flex items-center justify-center w-full max-h-[104vh] h-[370px] lg:h-[520px] xl:h-[582px] 2xl:h-[104vh] overflow-hidden">
        <div className="overlay h-full w-full absolute z-[2] bg-black opacity-30"></div>
        <video
          src="/videos/morsi_banner.mp4"
          autoPlay
          loop
          muted
          className="banner-bg-video z-[1]  min-h-full max-w-none"
        ></video>
        <Link
          className="border-2 border-white absolute z-[3] bottom-4 w-12 h-12 sm:w-7 sm:h-7 rounded-full flex items-center justify-center cursor-pointer"
          href="/#advisory-expertise"
        >
          <Icons.movedown className="h-7 w-7 sm:w-5 sm:h-5 text-white" />
        </Link>
        <div className="info maxw absolute z-[2] w-full h-full flex flex-col items-center justify-center my-auto mb-6 ">
          <Image
            alt="Morsi M Partners Banner"
            src={"/images/banner_heading.png"}
            width={1003}
            height={100}
            className=" mb-6 banner-image-morsi"
          />
          <h2 className="text-white text-center leading-none font-normal  text-[12px] md:text-[18px] lg:text-[24px] xl:text-[26px] 2xl:text-[34px]">
            An independent advisory and professional services firm
          </h2>
          <h2 className="text-white text-center sm:max-w-[85%] leading-none font-normal my-5 text-[12px] md:text-[18px] lg:text-[24px] xl:text-[26px] 2xl:text-[34px]">
            We help our clients address operational, strategic, and complex
            challenges
          </h2>
        </div>
      </section>

      {/* Advisory Expertise */}
      <section
        id="advisory-expertise"
        className="div_section bggolden  "
      >
        <div className="maxw">
          <h2 className=" text-center text-black pb-3 border-b border-b-golden w-fit mx-auto text-[22px] lg:text-[30px] xl:text-[45px] 2xl:text-[45px]">
            Our deep advisory expertise
          </h2>
          <div className="expertise-tabs w-full mt-5 2xl:mt-7 ">
            <Tabs
              defaultValue="finance-accounting"
              className="sm:hidden w-full mt-4"
            >
              <TabsList className="h-fit bg-transparent w-full flex items-center justify-between ">
                <TabsTrigger
                  value="finance-accounting"
                  className="flex flex-col items-center justify-center p-0 m-1"
                >
                  <Image
                    alt="Finance and Accounting"
                    src={"/images/financeaccounting.png"}
                    height={60}
                    width={60}
                    className="mb-1 w-[13px] h-[13px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px]"
                  />
                  <p className="text-[4px] md:text-[4px] lg:text-[12px] xl:text-[16px] 2xl:text-[16px] mb-0 sm:-mb-[15px]">
                    Finance & Accounting
                  </p>
                  <div className="arrow-icon"></div>
                </TabsTrigger>
                <TabsTrigger
                  value="corporate-finance-advisory"
                  className="flex flex-col items-center justify-center p-0 m-1"
                >
                  <Image
                    alt="Finance and Accounting"
                    src={"/images/corporate-finance-advisory.png"}
                    height={60}
                    width={60}
                    className="mb-1 w-[13px] h-[13px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px]"
                  />
                  <p className="text-[4px] md:text-[4px] lg:text-[12px] xl:text-[16px] 2xl:text-[16px] mb-0 sm:-mb-[15px]">
                    Corporate Finance Advisory
                  </p>
                  <div className="arrow-icon"></div>
                </TabsTrigger>
                <TabsTrigger
                  value="tax"
                  className="flex flex-col items-center justify-center p-0 m-1"
                >
                  <Image
                    alt="tax"
                    src={"/images/tax.png"}
                    height={60}
                    width={60}
                    className="mb-1 w-[13px] h-[13px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px]"
                  />
                  <p className="text-[4px] md:text-[4px] lg:text-[12px] xl:text-[16px] 2xl:text-[16px] mb-0 sm:-mb-[15px]">
                    Tax
                  </p>
                  <div className="arrow-icon"></div>
                </TabsTrigger>
                <TabsTrigger
                  value="investment-family-office-advisory"
                  className="flex flex-col items-center justify-center p-0 m-1"
                >
                  <Image
                    alt="tax"
                    src={"/images/investment-family-office-advisory.png"}
                    height={60}
                    width={60}
                    className="mb-1 w-[13px] h-[13px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px]"
                  />
                  <p className="text-[4px] md:text-[4px] lg:text-[12px] xl:text-[16px] 2xl:text-[16px] mb-0 sm:-mb-[15px]">
                    Investment & Family Office Advisory
                  </p>
                  <div className="arrow-icon"></div>
                </TabsTrigger>
                <TabsTrigger
                  value="risk-regulatory-advisory"
                  className="flex flex-col items-center justify-center p-0 m-1"
                >
                  <Image
                    alt="tax"
                    src={"/images/risk-regulatory-advisory.png"}
                    height={60}
                    width={60}
                    className="mb-1 w-[13px] h-[13px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px]"
                  />
                  <p className="text-[4px] md:text-[4px] lg:text-[12px] xl:text-[16px] 2xl:text-[16px] mb-0 sm:-mb-[15px]">
                    Risk & Regulatory Advisory
                  </p>
                  <div className="arrow-icon"></div>
                </TabsTrigger>
                <TabsTrigger
                  value="management-consulting"
                  className="flex flex-col items-center justify-center p-0 m-0"
                >
                  <Image
                    alt="tax"
                    src={"/images/management-consulting.png"}
                    height={60}
                    width={60}
                    className="mb-1 w-[13px] h-[13px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px] 2xl:w-[60px] 2xl:h-[60px]"
                  />
                  <p className="text-[4px] md:text-[4px] lg:text-[12px] xl:text-[16px] 2xl:text-[16px] mb-1 sm:-mb-[15px]">
                    Management Consulting
                  </p>
                  <div className="arrow-icon"></div>
                </TabsTrigger>
              </TabsList>
              <TabsContent className="mt-4" value="finance-accounting">
                <h2 className=" text-black font-medium mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[35px]">
                  Finance & Accounting
                </h2>
                <p className="text-textgrey mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[94%]">
                  MMP provides comprehensive and best-in-class solutions for
                  your Finance and Accounting (“F&A”) functions, including
                  outsourced finance officer solutions, financial statements
                  audit readiness, financial reporting, and technical accounting
                  advisory services.
                </p>
                <p className="text-textgrey mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[80%]">
                  Our offerings ensure that your F&A function is adequately
                  established, closely monitored, and professionally and
                  effectively managed.
                </p>
                <Link href={"/services/finance-accounting/"}>
                  <CustomButton variant={"golden"} className="gap-1">
                    Learn More
                    <Icons.arrowRight className="w-4 h-4 sm:w-2 sm:h-2" />
                  </CustomButton>
                </Link>
              </TabsContent>
              <TabsContent className="mt-4" value="corporate-finance-advisory">
                <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[35px]">
                  Corporate Finance Advisory
                </h2>
                <p className="text-textgrey mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[94%]">
                  MMP provides strategic, financial, and tactical advice in
                  connection with business valuations, financial modelling,
                  capital structuring, fundraising for startups, and executing
                  mergers, acquisitions, company sales and divestitures,
                  including carve-outs and spin-offs.
                </p>
                <p className="text-textgrey mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[94%]">
                  Our expertise helps dealmakers unlock opportunities with
                  speed, precision, and confidence.
                </p>
                <Link href={"/services/corporate-finance-advisory/"}>
                  <CustomButton variant={"golden"} className="gap-1">
                    Learn More
                    <Icons.arrowRight className="w-4 h-4 sm:w-2 sm:h-2" />
                  </CustomButton>
                </Link>
              </TabsContent>
              <TabsContent className="mt-4" value="tax">
                <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[35px]">
                  Tax
                </h2>
                <p className="text-textgrey mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[94%]">
                  MMP provides expert guidance on tax services, covering value
                  added tax (“VAT”), corporate tax, transfer pricing, excise
                  tax, international tax, mergers & acquisitions tax planning
                  and due diligence, FATCA and CRS compliance, and Zakat
                  advisory.
                </p>
                <p className="text-textgrey mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[94%]">
                  Our expertise enables you to navigate the tax landscape in the
                  UAE and GCC while ensuring compliance with the evolving
                  regulations.
                </p>
                <Link href={"/services/tax/"}>
                  <CustomButton variant={"golden"} className="gap-1">
                    Learn More
                    <Icons.arrowRight className="w-4 h-4 sm:w-2 sm:h-2" />
                  </CustomButton>
                </Link>
              </TabsContent>
              <TabsContent
                className="mt-4"
                value="investment-family-office-advisory"
              >
                <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[35px]">
                  Investment & Family Office Advisory
                </h2>
                <p className="text-textgrey mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[94%]">
                  MMP provides tailored investment and asset allocation advice,
                  and family office advisory services. Our differentiated and
                  pioneering expertise helps unlock new investment opportunities
                  across a broad spectrum of asset classes and create a sound
                  governance framework to preserve and grow your wealth.
                </p>
                <p className="text-textgrey mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[94%]">
                  We advise you with care and precision, while giving you full
                  control over your portfolio.
                </p>
                <Link href={"/services/investment-family-office-advisory/"}>
                  <CustomButton variant={"golden"} className="gap-1">
                    Learn More
                    <Icons.arrowRight className="w-4 h-4 sm:w-2 sm:h-2" />
                  </CustomButton>
                </Link>
              </TabsContent>
              <TabsContent className="mt-4" value="risk-regulatory-advisory">
                <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[35px]">
                  Risk & Regulatory Advisory
                </h2>
                <p className="text-textgrey mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[94%]">
                  MMP provides comprehensive Risk & Regulatory Advisory
                  services, ranging from proactive risk management, ESG
                  Advisory, regulatory compliance, corporate governance,
                  internal audit, Anti-money laundering controls reviews, and
                  Forensic Advisory.
                </p>
                <p className="text-textgrey mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[94%]">
                  We help you navigate the complexities of today’s regulatory
                  environment.
                </p>
                <Link href={"/services/risk-regulatory-advisory/"}>
                  <CustomButton variant={"golden"} className="gap-1">
                    Learn More
                    <Icons.arrowRight className="w-4 h-4 sm:w-2 sm:h-2" />
                  </CustomButton>
                </Link>
              </TabsContent>
              <TabsContent className="mt-4" value="management-consulting">
                <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[35px]">
                  Management Consulting
                </h2>
                <p className="text-textgrey mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[94%]">
                  MMP provides expert guidance across the entire spectrum of
                  organizational development, improvement, and transformation,
                  covering strategy formulation and planning, operational
                  design, policy development, process improvement, and data
                  analytics solutions.
                </p>
                <p className="text-textgrey mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[94%]">
                  Our team analyzes existing problems and designs roadmaps,
                  providing robust support during the execution of your
                  strategy. Our aim is to empower you with strategic insights,
                  operational efficiency, and data-driven decision-making
                  capabilities.
                </p>
                <Link href={"/services/management-consulting/"}>
                  <CustomButton variant={"golden"} className="gap-1">
                    Learn More
                    <Icons.arrowRight className="w-4 h-4 sm:w-2 sm:h-2" />
                  </CustomButton>
                </Link>
              </TabsContent>
            </Tabs>
            <Accordion
              type="multiple"
              className=" md:hidden lg:hidden xl:hidden 2xl:hidden w-full items-center justify-center"
            >
              <AccordionItem
                value="finance-accounting"
                className="mt-0 border-b-0"
              >
                <AccordionTrigger className="hover:no-underline py-2 border-b border-b-[#5D5D5D]  data-[state=open]:text-golden data-[state=open]:border-b-golden ">
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      alt="Finance and Accounting"
                      src={"/images/financeaccounting.png"}
                      height={60}
                      width={60}
                      className="w-[51px] h-[51px] according-class-image"
                    />
                    <p className="according-class mb-0 text-left text-inherit data-[state=open]:text-golden text-[20px] xl:text-[24px] 2xl:text-[24px] ">
                      Finance & Accounting
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-0 pt-4">
                  <p className="text-textgrey mb-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                    MMP provides comprehensive and best-in-class solutions for
                    your Finance and Accounting (“F&A”) functions, including
                    outsourced finance officer solutions, financial statements
                    audit readiness, financial reporting, and technical
                    accounting advisory services.
                  </p>
                  <p className="text-textgrey mb-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                    Our offerings ensure that your F&A function is adequately
                    established, closely monitored, and professionally and
                    effectively managed.
                  </p>
                  <Link href={"/services/finance-accounting/"}>
                    <CustomButton
                      variant={"golden"}
                      className="gap-1 py-2 px-5 text-[17px]"
                    >
                      Learn More
                      <Icons.arrowRight className="w-4 h-4 sm:w-2 sm:h-2" />
                    </CustomButton>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="corporate-finance-advisory"
                className="mt-0 border-b-0"
              >
                <AccordionTrigger className="hover:no-underline py-2 border-b border-b-[#5D5D5D]  data-[state=open]:text-golden data-[state=open]:border-b-golden">
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      alt="Finance and Accounting"
                      src={"/images/corporate-finance-advisory.png"}
                      height={60}
                      width={60}
                      className="w-[51px] h-[51px] according-class-image"
                    />
                    <p className="according-class mb-0 text-left text-inherit text-[20px] xl:text-[24px] 2xl:text-[24px]">
                      Corporate Finance Advisory
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-0 pt-4">
                  <p className="text-textgrey mb-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                    MMP provides strategic, financial, and tactical advice in
                    connection with business valuations, financial modelling,
                    capital structuring, fundraising for startups, and executing
                    mergers, acquisitions, company sales and divestitures,
                    including carve-outs and spin-offs.
                  </p>
                  <p className="text-textgrey mb-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                    Our expertise helps dealmakers unlock opportunities with
                    speed, precision, and confidence.
                  </p>
                  <Link href={"/services/corporate-finance-advisory/"}>
                    <CustomButton
                      variant={"golden"}
                      className="gap-1 py-2 px-5 text-[17px]"
                    >
                      Learn More
                      <Icons.arrowRight className="w-4 h-4 sm:w-2 sm:h-2" />
                    </CustomButton>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tax" className="mt-0 border-b-0">
                <AccordionTrigger className="hover:no-underline py-2 border-b border-b-[#5D5D5D]  data-[state=open]:text-golden data-[state=open]:border-b-golden">
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      alt="tax"
                      src={"/images/tax.png"}
                      height={60}
                      width={60}
                      className="w-[51px] h-[51px] according-class-image"
                    />
                    <p className="mb-0 text-left text-inherit text-[20px] xl:text-[24px] 2xl:text-[24px]">
                      Tax
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-0 pt-4">
                  <p className="text-textgrey mb-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px]">
                    MMP provides expert guidance on tax services, covering value
                    added tax (“VAT”), corporate tax, transfer pricing, excise
                    tax, international tax, mergers & acquisitions tax planning
                    and due diligence, FATCA and CRS compliance, and Zakat
                    advisory.
                  </p>
                  <p className="text-textgrey mb-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                    Our expertise enables you to navigate the tax landscape in
                    the UAE and GCC while ensuring compliance with the evolving
                    regulations.
                  </p>
                  <Link href={"/services/tax/"}>
                    <CustomButton
                      variant={"golden"}
                      className="gap-1 py-2 px-5 text-[17px]"
                    >
                      Learn More
                      <Icons.arrowRight className="w-4 h-4 sm:w-2 sm:h-2" />
                    </CustomButton>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="investment-family-office-advisory"
                className="mt-0 border-b-0"
              >
                <AccordionTrigger className="hover:no-underline py-2 border-b border-b-[#5D5D5D]  data-[state=open]:text-golden data-[state=open]:border-b-golden">
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      alt="investment-family-office-advisory"
                      src={"/images/investment-family-office-advisory.png"}
                      height={60}
                      width={60}
                      className="w-[51px] h-[51px] according-class-image"
                    />
                    <p className="according-class mb-0 text-left text-inherit text-[20px] xl:text-[24px] 2xl:text-[24px]">
                      Investment & Family Office Advisory
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-0 pt-4">
                  <p className="text-textgrey mb-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                    MMP provides tailored investment and asset allocation
                    advice, and family office advisory services. Our
                    differentiated and pioneering expertise helps unlock new
                    investment opportunities across a broad spectrum of asset
                    classes and create a sound governance framework to preserve
                    and grow your wealth.
                  </p>
                  <p className="text-textgrey mb-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                    We advise you with care and precision, while giving you full
                    control over your portfolio.
                  </p>
                  <Link href={"/services/investment-family-office-advisory/"}>
                    <CustomButton
                      variant={"golden"}
                      className="gap-1 py-2 px-5 text-[17px]"
                    >
                      Learn More
                      <Icons.arrowRight className="w-4 h-4 sm:w-2 sm:h-2" />
                    </CustomButton>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="risk-regulatory-advisory"
                className="mt-0 border-b-0"
              >
                <AccordionTrigger className="hover:no-underline py-2 border-b border-b-[#5D5D5D]  data-[state=open]:text-golden data-[state=open]:border-b-golden">
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      alt="risk-regulatory-advisory"
                      src={"/images/risk-regulatory-advisory.png"}
                      height={60}
                      width={60}
                      className="w-[51px] h-[51px] according-class-image"
                    />
                    <p className="according-class mb-0 text-left text-inherit text-[20px] xl:text-[24px] 2xl:text-[24px]">
                      Risk & Regulatory Advisory
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-0 pt-4">
                  <p className="text-textgrey mb-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                    MMP provides comprehensive Risk & Regulatory Advisory
                    services, ranging from proactive risk management, ESG
                    Advisory, regulatory compliance, corporate governance,
                    internal audit, Anti-money laundering controls reviews, and
                    Forensic Advisory.
                  </p>
                  <p className="text-textgrey mb-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                    We help you navigate the complexities of today’s regulatory
                    environment.
                  </p>
                  <Link href={"/services/risk-regulatory-advisory/"}>
                    <CustomButton
                      variant={"golden"}
                      className="gap-1 py-2 px-5 text-[17px]"
                    >
                      Learn More
                      <Icons.arrowRight className="w-4 h-4 sm:w-2 sm:h-2" />
                    </CustomButton>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="management-consulting"
                className="mt-0 border-b-0"
              >
                <AccordionTrigger className="hover:no-underline py-2 border-b border-b-[#5D5D5D]  data-[state=open]:text-golden data-[state=open]:border-b-golden">
                  <div className="flex items-center justify-start gap-4">
                    <Image
                      alt="management-consulting"
                      src={"/images/management-consulting.png"}
                      height={60}
                      width={60}
                      className="w-[51px] h-[51px] according-class-image"
                    />
                    <p className="according-class mb-0 text-left text-inherit text-[20px] xl:text-[24px] 2xl:text-[24px]">
                      Management Consulting
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-0 pt-4">
                  <p className="text-textgrey mb-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                    MMP provides expert guidance across the entire spectrum of
                    organizational development, improvement, and transformation,
                    covering strategy formulation and planning, operational
                    design, policy development, process improvement, and data
                    analytics solutions.
                  </p>
                  <p className="text-textgrey mb-[14px] text-[16px] xl:text-[18px] 2xl:text-[20px] ">
                    Our team analyzes existing problems and designs roadmaps,
                    providing robust support during the execution of your
                    strategy. Our aim is to empower you with strategic insights,
                    operational efficiency, and data-driven decision-making
                    capabilities.
                  </p>
                  <Link href={"/services/management-consulting/"}>
                    <CustomButton
                      variant={"golden"}
                      className="gap-1 py-2 px-5 text-[17px]"
                    >
                      Learn More
                      <Icons.arrowRight className="w-4 h-4 sm:w-2 sm:h-2" />
                    </CustomButton>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Get to know us */}
      <section className="div_section">
        <div className="maxw flex items-center gap-2 ">
          <div className="content w-[65%] ">
            <h2 className="border-b border-b-golden w-fit text-golden mb-5 text-[12px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium">
              Get to know us
            </h2>
            <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px] font-medium">
              Progressive, Pragmatic, Switched on
            </h2>
            <p className=" mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] ">
              Our approach is collaborative, our philosophy is entrepreneurial.
            </p>
            <p className="mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[90%] 2xl:w-[85%]">
              We take genuine interest in collaborating with you and
              understanding your business.
            </p>
            <p className="mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[95%] xl:w-[90%] 2xl:w-[80%]">
              We bring diverse expertise and perspectives to gain a 360 view of
              your business and its macros.
            </p>
            <p className="mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[90%] xl:w-[85%]">
              Our objective is to unveil opportunities and unlock innovative
              ideas that promote sustainable growth.{" "}
            </p>
            <div className="actions flex items-center gap-1 xl:gap-4 2xl:gap-4">
              <Link href={"/about-us"}>
                <CustomButton variant={"golden"}>About</CustomButton>
              </Link>
              <Link href={"/our-team"} className="">
                <CustomButton variant={"dark"}>Our Team</CustomButton>
              </Link>
              <CustomDialog
                contentClassName="w-full "
                trigger={
                  <CustomButton variant={"dark"} className="">
                    A Message From The Founder
                  </CustomButton>
                }
                content={<FounderMessage />}
              ></CustomDialog>
            </div>
          </div>
          <div className="image w-[35%] flex items-center justify-center xl:flex xl:items-center xl:justify-end 2xl:flex 2xl:items-center 2xl:justify-end">
            <img
              alt="Get to know us image"
              src={"/images/knowus.jpg"}
              className="hidden xl:block 2xl:block xl:w-[330px] xl:h-[423px] 2xl:w-[432px] 2xl:h-[553px]"
            />
            <img
              alt="Get to know us image"
              src={"/images/knowussm.png"}
              className=" xl:hidden 2xl:hidden sm:w-[110px] sm:h-[305px] md:w-[178px] md:h-[496px] lg:w-[235px] lg:h-[653px]"
            />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="div_section bggolden">
        <div className="maxw flex items-center gap-4">
          <div className="image w-[40%] sm:flex sm:items-center sm:justify-center xl:flex xl:items-center xl:justify-start 2xl:flex 2xl:items-center 2xl:justify-start">
            <img
              alt="Get to know us image"
              src={"/images/whyus.png"}
              className="hidden md:block lg:block xl:block 2xl:block xl:w-[330px] xl:h-[423px] 2xl:w-[432px] 2xl:h-[553px]"
            />
            <img
              alt="Get to know us image"
              src={"/images/whyussm.png"}
              className="md:hidden lg:hidden xl:hidden 2xl:hidden sm:w-[110px] sm:h-[305px]"
            />
          </div>
          <div className="content w-[60%]  ">
            <h2 className="border-b border-b-golden w-fit text-golden mb-5 text-[12px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium">
              Why us
            </h2>
            <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px] font-medium">
              Trusted, Independent, Experienced
            </h2>
            <p className="mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[100%]">
              Our commitment to our clients is an unrivaled level of service
              excellence across the suite of our services.
            </p>
            <p className="mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
              We pride ourselves with the trusted relationships and the
              borderless network that we have built over the years.
            </p>
            <p className="mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[100%]">
              We prioritize building strong and trustworthy relationships with
              our clients, ensuring that their growth is at the forefront of our
              daily interactions.
            </p>
            <p className="mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] w-[100%]">
              At every interaction, we bring a depth of insight and foresight.
              We go beyond providing advisory solutions to existing problems,
              leveraging our experience to proactively maximize opportunities
              for sustainable growth.
            </p>
            <div className="actions pt-8">
              <Link href={"/services"}>
                <CustomButton variant={"golden"}>Services</CustomButton>
              </Link>
              <Link href={"/contact-us"} className="mr-2 ml-4">
                <CustomButton variant={"dark"}>Contact Us</CustomButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join our team */}
      <section className="div_section">
        <div className="maxw flex items-center gap-4">
          <div className="content w-[55%] ">
            <h2 className="border-b border-b-golden w-fit text-golden mb-5 text-[12px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium">
              Join our team
            </h2>
            <h2 className="text-black mb-5 text-[16px] lg:text-[28px] xl:text-[36px] 2xl:text-[45px] font-medium">
              Lead with character, Win together
            </h2>
            <p className="mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] xl:w-[90%]">
              At Morsi M Partners, we foster an inclusive environment that
              highly values diversity, equity, and inclusion.
            </p>
            <p className="mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] xl:w-[95%]">
              Our commitment is to create a workplace that empowers our people
              to lead healthy lives, drive innovation, influence outcomes, and
              celebrate their uniqueness within our diverse teams.
            </p>
            <p className="mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] xl:w-[95%]">
              Our team is a mosaic of people and perspectives which fuels our
              ability to provide innovative and creative solutions to our
              clients.
            </p>
            <p className="mb-[14px] text-[10px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] xl:w-[95%]">
              We are committed to actively recruiting, supporting, and
              developing individuals from all backgrounds.{" "}
            </p>
            <div className="actions 2xl:pt-7">
              <Link href={"/careers"}>
                <CustomButton variant={"golden"}>Careers</CustomButton>
              </Link>
            </div>
          </div>
          <div className="image w-[45%] sm:flex sm:items-center sm:justify-center  xl:flex xl:items-center xl:justify-end 2xl:flex 2xl:items-center 2xl:justify-end">
            <img
              alt="Get to know us image"
              src={"/images/joinourteam.jpg"}
              className="hidden md:block lg:block xl:block 2xl:block xl:w-[330px] xl:h-[423px] 2xl:w-[432px] 2xl:h-[553px]"
            />
            <img
              alt="Get to know us image"
              src={"/images/joinourteamsm.png"}
              className="md:hidden lg:hidden xl:hidden 2xl:hidden sm:w-[110px] sm:h-[305px]"
            />
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <GetInTouch />
    </main>
  );
}
