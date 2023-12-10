import ContactusSec from "@/components/ContactusSec";
import Header from "@/components/Header";
import CustomButton from "@/components/customui/CustomButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata, NextPage } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Corporate Finance Advisory | Morsi M Partners",
  description:
    "An independent advisory and professional services firm  We are UAE born, with a global network, reach, and outlook",
};

const CorporateFinanceAdvisory: NextPage = () => {
  return (
    <main className="corporate-finance-advisory-page">
      <Header />
      <div className="bg-black h-[70px] lg:h-[90px] w-full block xl:hidden 2xl:hidden"></div>
      {/* Banner */}
      <section className="banner div_section bg-[url('/images/corporate-finance-advisory-banner.jpg')] bg-center bg-cover relative flex items-center justify-center sm:p-0 w-full overflow-hidden  sm:h-[200px] xl:h-[500px] 2xl:h-[640px]">
        <div className="info maxw w-full h-full flex flex-col items-center justify-center my-auto xl:my-[100px] 2xl:my-[100px]">
          <div className="content flex flex-col items-start justify-center px-4 h-full xl:px-0">
            <h2 className="normal_heading text-white mb-3 sm:mb-1 xl:text-[30px] 2xl:text-[50px]">
              Corporate Finance Advisory
            </h2>
            <h2 className="heading text-golden mb-3 sm:mb-1 xl:text-[30px] 2xl:text-[30px]">
              Synergies for a better world
            </h2>
            <p className="golden_heading text-white sm:text-[10px] xl:text-[23px] 2xl:text-[23px]">
              We help dealmakers navigate the M&A world and unlock opportunities
              with speed, precision, and confidence
              <Link
                href={
                  "corporate-finance-advisory/#our-corporate-finance-advisory-services"
                }
                className="text-golden underline ml-1"
              >
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Our Corporate Finance Advisory services */}
      <section
        id="our-corporate-finance-advisory-services"
        className="our-finance-accounting-services div_section bggolden  overflow-hidden"
      >
        <div className="maxw mx-auto flex flex-col items-center justify-center">
          <h2 className="section_heading py-1 w-fit 2xl:leading-[40px] text-center border-b border-b-golden font-normal">
            Our Corporate Finance Advisory services
          </h2>
          <div className="content my-7 sm:mt-4 xl:mt-14 2xl:mt-14  w-full">
            <p className="text-textgrey 2xl:pr-16">
              At MMP, we provide our clients with strategic, financial, and
              tactical advice in connection with business valuations, financial
              modeling, capital structuring, and executing mergers,
              acquisitions, company sales and divestitures, including carve-outs
              and spin-offs.
            </p>
            <p className="text-textgrey 2xl:pr-20">
              Whether you are looking for advice on a disposal or identifying
              the next target to acquire, or require assistance in raising
              capital as a startup, MMP will help you steer your way through the
              full spectrum of Corporate Finance activities and M&A
              transactions.
            </p>
            <p className="text-textgrey">Our offerings include:</p>
            <ul className="points plist">
              <li className="p mb-1">Valuation.</li>
              <li className="p mb-1">
                Capital structuring, optimization, and restructuring.
              </li>
              <li className="p mb-1">Financial Modeling.</li>
              <li className="p mb-1">
                Buy-side and Sell-side financial due diligence.
              </li>
              <li className="p mb-1">
                Startups Fundraising – We assist startups in raising capital
                through private placements, leveraging our extensive network of
                investors and our advisory expertise in structuring investment
                deals.
              </li>
              <li className="p mb-1">
                Deal Documentation Support and Coordination – We offer
                comprehensive support throughout the transaction cycle, ranging
                from valuation reports and investment teasers to the drafting
                and review of key transaction documents such as private
                placement memorandums, prospectuses, sale and purchase
                agreements ("SPA"), and shareholder agreements.
              </li>
            </ul>
            <p className="text-textgrey mt-4">
              We work with a broad range of clients, from financial
              institutions, family offices, corporations, private companies, and
              start-ups.
            </p>
            <Tabs defaultValue="valuation" className="w-full mt-4">
              <TabsList className="w-full h-fit grid grid-cols-6 bg-transparent gap-1 xl:gap-2 2xl:gap-2 mb-4">
                <TabsTrigger
                  id="business-valuation"
                  value="valuation"
                  className="whitespace-normal h-full py-1 px-0 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black hover:border-t-[6px] hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-[6px] data-[state=active]:border-t-golden w-full"
                >
                  Valuation
                </TabsTrigger>
                <TabsTrigger
                  id="capital-structuring-restructuring"
                  value="capital-structuring-restructuring"
                  className="whitespace-normal h-full py-1 px-0 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black hover:border-t-[6px] hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 [6px] data-[state=active]:border-t-golden w-full"
                >
                  Capital Structuring & Restructuring
                </TabsTrigger>
                <TabsTrigger
                  id="financial-modeling"
                  value="financial-modeling"
                  className="whitespace-normal h-full py-1 px-0 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black hover:border-t-[6px] hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 [6px] data-[state=active]:border-t-golden w-full"
                >
                  Financial Modeling
                </TabsTrigger>
                <TabsTrigger
                  id="ma-buy-side-sell-side-advisory"
                  value="MA-buy-side-sell-side-advisory"
                  className="whitespace-normal h-full py-1 px-0 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black hover:border-t-[6px] hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 [6px] data-[state=active]:border-t-golden w-full"
                >
                  M&A Buy-side & Sell-side advisory
                </TabsTrigger>
                <TabsTrigger
                  id="startups-fundraising"
                  value="startups-fundraising"
                  className="whitespace-normal h-full py-1 px-0 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black hover:border-t-[6px] hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 [6px] data-[state=active]:border-t-golden w-full"
                >
                  Startups Fundraising
                </TabsTrigger>
                <TabsTrigger
                  id="deal-documentation-support-coordination"
                  value="deal-documentation-support-coordination"
                  className="whitespace-normal h-full py-1 px-0 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black hover:border-t-[6px] hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 [6px] data-[state=active]:border-t-golden w-full"
                >
                  Deal Documentation Support & Coordination
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="valuation"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  We provide a factual perception that helps you to understand
                  the value of your business.
                </p>
                <p>Valuation is required in various situations including:</p>
                <ul className="points plist list-outside ml-4">
                  <li className="p mb-1">Merger and acquisition.</li>
                  <li className="p mb-1">Transaction Planning.</li>
                  <li className="p mb-1">Purchase or sale of assets.</li>
                  <li className="p mb-1">Litigation support.</li>
                  <li className="p mb-1">Fundraising.</li>
                  <li className="p mb-1">Financial reporting.</li>
                </ul>
                <p className="mt-4 2xl:pr-28">
                  Our valuation services will be conducted in accordance with
                  internationally recognized valuation methodologies, and will
                  be executed by experienced professionals with comprehensive
                  knowledge across a range of industries.
                </p>
                <p className="2xl:pr-16">
                  Our team is committed to collaborating with all stakeholders,
                  including directors, lawyers, and bankers, in order to achieve
                  the best possible results.
                </p>
              </TabsContent>
              <TabsContent
                value="capital-structuring-restructuring"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  Each organization’s capital structure needs are distinct, and
                  whether driven by strategic repositioning or financial
                  distress, our expertise can assist clients in enhancing and
                  restructuring their balance sheet to achieve an optimal
                  capital structure and regain financial well-being.
                </p>
                <p>We can support on multiple fronts:</p>
                <ul className="points plist list-outside ml-4">
                  <li className="p mb-1">
                    Optimize / deleverage balance sheet and provide maximum
                    operational flexibility.
                  </li>
                  <li className="p mb-1">
                    Debt management advisory – Debt covenants advisory with
                    lenders, bondholders, and other interest bearing debt
                    instruments.
                  </li>
                  <li className="p mb-1">
                    Liquidity enhancement strategies and working capital
                    assessments.
                  </li>
                  <li className="p mb-1">
                    Capital Raise Advisory (Debt or / and Equity).
                  </li>
                </ul>
              </TabsContent>
              <TabsContent
                value="financial-modeling"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  Financial models play a vital role in business decision-making
                  by projecting future financial performance and evaluating
                  potential outcomes across various circumstances.
                </p>
                <p>
                  Our flexible and adaptable financial models can provide you
                  with valuable insights to support informed, accurate, and
                  timely operational and strategic decision-making, and to
                  formulate dependable forecasts based on different scenarios.
                </p>
                <p>
                  MMP’s integrated financial models cover various areas,
                  including (but not limited to) the following:
                </p>
                <ul className="points plist list-outside ml-4">
                  <li className="p mb-1">Budgeting and financial forecasts.</li>
                  <li className="p mb-1">Mergers and acquisitions.</li>
                  <li className="p mb-1">
                    Investment and Capital budgeting decisions.
                  </li>
                  <li className="p mb-1">
                    Valuation and discounted cash flow models.
                  </li>
                  <li className="p mb-1">
                    Refinancing and equity raising analysis.
                  </li>
                  <li className="p mb-1">Capital projects.</li>
                  <li className="p mb-1">
                    Working capital analysis and budgeting.
                  </li>
                  <li className="p mb-1">Commercial analysis.</li>
                </ul>
              </TabsContent>
              <TabsContent
                value="MA-buy-side-sell-side-advisory"
                className="bg-white text-textgrey p-4 2xl:pr-32"
              >
                <p>
                  Our M&A team firmly believes that a profound comprehension of
                  deal participants’ objectives and expectations lays the
                  foundation for a successful M&A transaction. We actively
                  engage with our clients, working to crystallize transaction
                  objectives, unearth synergies, and deliver tailored solutions
                  that generate exceptional value.
                </p>
                <p>
                  We provide our buy-side and sell-side advisory services to a
                  broad spectrum of clientele, including large-scale
                  corporations, small to mid-cap businesses, both publicly
                  listed and privately held companies, startups, and family
                  offices.
                </p>
                <ul className="points plist list-outside ml-4">
                  <li className="p m-0 text-black">
                    Buy-side Financial Due Diligence
                  </li>
                  <p className="sm:ml-3 sm:mt-2">
                    MMP assists buyers in making informed and timely investment
                    decisions by offering comprehensive analyses of the target’s
                    financials. Our analysis identifies potential synergies and
                    opportunities that can impact the value of the investment,
                    enabling you to negotiate the right deal at the right terms
                    and price.
                  </p>
                  <li className="p m-0 text-black">
                    Sell-side Financial Due Diligence
                  </li>
                  <p className="sm:ml-3 sm:mt-2">
                    As a seller, MMP will work with you to highlight and present
                    your business’s key financial strengths to maximize the sale
                    price and achieve the best value from the divestiture.
                  </p>
                </ul>
              </TabsContent>
              <TabsContent
                value="startups-fundraising"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  We assist startups in raising capital, leveraging our
                  extensive network of investors and our advisory expertise in
                  structuring investment deals, including private placements and
                  other fundraising opportunities.
                </p>
              </TabsContent>
              <TabsContent
                value="deal-documentation-support-coordination"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  MMP can support you throughout the transaction cycle on
                  several fronts:
                </p>
                <ul className="points plist list-outside ml-4">
                  <li className="p mb-1">Providing valuation reports.</li>
                  <li className="p mb-1">
                    Assisting with private placements memorandum / information
                    memorandum.
                  </li>
                  <li className="p mb-1">Developing investment teasers.</li>
                  <li className="p mb-1">Creating prospectuses.</li>
                  <li className="p mb-1">
                    Drafting sale and purchase agreements (SPA).
                  </li>
                  <li className="p mb-1">
                    Preparing shareholders' agreements.
                  </li>
                </ul>
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
          <div className="category -skew-x-30 border-b-2 border-b-golden border-r-2 border-r-golden w-fit pl-1 pr-2 py-2">
            <Link href={"/services/management-consulting"} className="w-full">
              <p className="mb-0 skew-x-20 skewedlinks">
                Management Consulting
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

export default CorporateFinanceAdvisory;
