import ContactusSec from "@/components/ContactusSec";
import Header from "@/components/Header";
import CustomButton from "@/components/customui/CustomButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata, NextPage } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Finance Accounting | Morsi M Partners",
  description:
    "An independent advisory and professional services firm  We are UAE born, with a global network, reach, and outlook",
};

const FinanceAccounting: NextPage = () => {
  return (
    <main className="finance-accounting-page">
      <Header />
      <div className="bg-black h-[70px] lg:h-[90px] w-full block xl:hidden 2xl:hidden"></div>
      {/* Banner */}
      <section className="banner div_section bg-[url('/images/finance-accounting-banner.jpg')] bg-center bg-cover relative flex items-center justify-center w-full overflow-hidden sm:h-[200px] xl:h-[500px] 2xl:h-[640px] sm:p-0">
        <div className="info maxw w-full h-full flex flex-col items-center justify-center my-auto xl:my-[100px] 2xl:my-[100px]">
          <div className="content flex flex-col items-start justify-center px-4 h-full">
            <h2 className="normal_heading text-white mb-3 sm:mb-1 xl:text-[30px] 2xl:text-[50px]">
              Finance & Accounting
            </h2>
            <h2 className="heading text-golden mb-3 sm:mb-1 xl:text-[30px] 2xl:text-[30px]">
              Harnessing the power of your financial past to drive future
              success
            </h2>
            <p className="golden_heading text-white sm:text-[10px] xl:text-[23px] 2xl:text-[23px]">
              From outsourced finance officer solutions, financial statements
              audit readiness, financial reporting, and technical accounting
              advisory services, our offerings are comprehensive, exceptional,
              and best-in-class
              <Link
                href={"finance-accounting/#our-finance-accounting-services"}
                className="text-golden underline ml-1"
              >
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Our Finance & Accounting services */}
      <section
        id="our-finance-accounting-services"
        className="our-finance-accounting-services div_section bggolden  overflow-hidden"
      >
        <div className="maxw mx-auto flex flex-col items-center justify-center">
          <h2 className="section_heading py-1 2xl:leading-[40px] w-fit text-center border-b border-b-golden mb-0">
            Our Finance & Accounting services
          </h2>
          <div className="content my-7 sm:mt-4 xl:mt-14 2xl:mt-14  w-full">
            <p className="text-textgrey">
              MMP offers a comprehensive set of solutions to strengthen your
              Finance & Accounting operations, streamline financial reporting,
              and ensure compliance with the local and international financial
              reporting standards.
            </p>
            <p className="text-textgrey">
              Our F&A services can be customized to meet your unique business
              requirements and to augment timely decision making.
            </p>
            <p className="text-textgrey">Our key offerings include: </p>
            <ul className="points plist">
              <li className="p mb-1">
                Outsourced Finance Officer for regulated / authorized firms.
              </li>
              <li className="p mb-1">
                Financial statements preparation support (Statutory and special
                purpose financial statements).
              </li>
              <li className="p mb-1">Technical Accounting Advisory.</li>
              <li className="p mb-1">
                Audit readiness and assistance / Financial statements audit
                support.
              </li>
              <li className="p mb-1">
                Regulatory returns preparation support.
              </li>
              <li className="p mb-1">
                Accounting policies drafting in line with International
                Financial Reporting Standards (“IFRS”).
              </li>
              <li className="p mb-1">
                IAS 19 “Employee Benefits” Actuarial valuations.
              </li>
              <li className="p mb-1">Bookkeeping services.</li>
            </ul>
            <Tabs defaultValue="financial-reporting" className="w-full mt-4">
              <TabsList className="w-full h-fit flex items-center justify-between bg-transparent gap-1 xl:gap-2 2xl:gap-2 mb-4">
                <TabsTrigger
                  id="financial-reporting"
                  value="financial-reporting"
                  className="p-1 text-[6px]  md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] bg-black 2xl:p-2 text-white hover:bg-white hover:text-black hover:border-t-[6px] hover:border-t-golden border-t-4 border-t-transparent data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-[6px] data-[state=active]:border-t-golden w-full"
                >
                  Financial Reporting
                </TabsTrigger>
                <TabsTrigger
                  id="finance-value-creation"
                  value="finance-value-creation"
                  className="p-1 text-[6px]  md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] bg-black 2xl:p-2 text-white hover:bg-white hover:text-black hover:border-t-[6px] hover:border-t-golden border-t-4 border-t-transparent data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-[6px] data-[state=active]:border-t-golden w-full"
                >
                  Finance Value Creation
                </TabsTrigger>
                <TabsTrigger
                  id="technical-accounting-advisory"
                  value="technical-accounting-advisory"
                  className="p-1 text-[6px]  md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] bg-black 2xl:p-2 text-white hover:bg-white hover:text-black hover:border-t-[6px] hover:border-t-golden border-t-4 border-t-transparent data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-[6px] data-[state=active]:border-t-golden w-full"
                >
                  Technical Accounting Advisory
                </TabsTrigger>
                <TabsTrigger
                  id="accounting-administration"
                  value="accounting-administration"
                  className="p-1 text-[6px]  md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] bg-black 2xl:p-2 text-white hover:bg-white hover:text-black hover:border-t-[6px] hover:border-t-golden border-t-4 border-t-transparent data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-[6px] data-[state=active]:border-t-golden w-full"
                >
                  Accounting Administration
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="financial-reporting"
                className="bg-white text-textgrey p-4"
              >
                <p>Our Financial Reporting offerings include:</p>
                <ul className="points plist list-outside ml-4">
                  <li className="p mb-1">
                    Financial statements preparation support (Statutory and
                    special purpose financial statements).
                  </li>
                  <li className="p mb-1">
                    Financial reporting packs preparation support to address
                    regular and / or ad-hoc financial reporting requirements
                    (e.g., reporting to Head office / Group reporting).
                  </li>
                  <li className="p mb-1">
                    Regulatory returns preparation support (Annual and quarterly
                    regulatory returns such as PIB, Client Money, Safe Custody
                    and Insurance Money).
                  </li>
                  <li className="p mb-1">
                    Agreed Upon Procedures (“AUPs”) and financial reviews.
                  </li>
                  <li className="p mb-1">
                    Board of Directors’ presentations preparation support and
                    other financial presentations and reports.
                  </li>
                  <li className="p mb-1">
                    Budgets creation and business forecasts.
                  </li>
                </ul>
              </TabsContent>
              <TabsContent
                value="finance-value-creation"
                className="bg-white text-textgrey p-4"
              >
                <p>Our Finance Value Creation offerings include:</p>
                <ul className="points plist list-outside ml-4">
                  <li className="p mb-1">
                    Outsourced Finance Officer for regulated / authorized firms.
                  </li>
                  <li className="p mb-1">
                    Audit readiness and assistance / Financial statements audit
                    support.
                  </li>
                  <li className="p mb-1">
                    Accounting policies drafting in line with International
                    Financial Reporting Standards (“IFRS”).
                  </li>
                  <li className="p mb-1">
                    Standard Operating Procedures (“SOP”) – Finance policies
                    manuals and Finance procedures manuals.
                  </li>
                  <li className="p mb-1">
                    Finance Talent Solutions ("FTS") - We assist clients in
                    assessing the technical skills of new and potential finance
                    and accounting recruits, from interviews to skills
                    assessments.
                  </li>
                  <li className="p mb-1">
                    IAS 19 “Employee Benefits” Actuarial valuations.
                  </li>
                  <li className="p mb-1">
                    Enterprise Resource Planning (“ERP”) systems solutions and
                    implementation.
                  </li>
                  <li className="p mb-1">
                    Fixed assets and inventory tracking / barcoding.
                  </li>
                  <li className="p mb-1">Finance & Accounting training.</li>
                </ul>
              </TabsContent>
              <TabsContent
                value="technical-accounting-advisory"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  Our Technical Accounting Advisory services provide robust
                  support to businesses navigating complex accounting challenges
                  in rapidly evolving environments. We are committed to
                  delivering precise and compliant technical accounting
                  solutions, tailored to your unique business needs.
                </p>
                <p>
                  We provide comprehensive coverage of all areas of technical
                  accounting, including specialized sectors where established
                  precedents may be limited. Some examples include, but are not
                  limited to:
                </p>
                <ul className="points plist list-outside ml-4">
                  <li className="p mb-1">Accounting for digital assets.</li>
                  <li className="p mb-1">
                    Accounting for business combinations, divestitures, and
                    spin-offs.
                  </li>
                </ul>
              </TabsContent>
              <TabsContent
                value="accounting-administration"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  Optimize your F&A function with our Accounting Administration
                  services. Our offerings include, but are not limited to:
                </p>
                <ul className="points plist list-outside ml-4">
                  <li className="p mb-1">
                    Bookkeeping and accounts management services.{" "}
                  </li>
                  <li className="p mb-1">
                    Chart of accounts setup and creation.
                  </li>
                  <li className="p mb-1">Reconciliations services.</li>
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

export default FinanceAccounting;
