import ContactusSec from "@/components/ContactusSec";
import Header from "@/components/Header";
import CustomButton from "@/components/customui/CustomButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Tax | Morsi M Partners",
  description:
    "An independent advisory and professional services firm  We are UAE born, with a global network, reach, and outlook",
};

const Tax = () => {
  return (
    <main className="tax-page">
      <Header />
      <div className="bg-black h-[70px] lg:h-[90px] w-full block xl:hidden 2xl:hidden"></div>
      {/* Banner */}
      <section className="banner div_section bg-[url('/images/tax-banner.png')] bg-center bg-cover relative flex items-center justify-center sm:p-0 w-full overflow-hidden sm:h-[200px] xl:h-[500px] 2xl:h-[640px]">
        <div className="info maxw w-full h-full flex flex-col items-center justify-center my-auto xl:my-[100px] 2xl:my-[100px]">
          <div className="content flex flex-col items-start justify-center px-4 h-full">
            <h2 className="normal_heading text-white mb-3 sm:mb-1 xl:text-[30px] 2xl:text-[50px] ">
              Tax​
            </h2>
            <h2 className="heading text-golden mb-3 sm:mb-1 xl:text-[30px] 2xl:text-[30px]">
              Taxes to sustain societies
            </h2>
            <p className="golden_heading text-white sm:text-[10px] xl:text-[21px] 2xl:text-[23px]">
              Our tax services are designed to support businesses in navigating
              the evolving tax landscape in the UAE and GCC, including Value
              Added Tax (“VAT”), Corporate Tax, Transfer Pricing, Excise Tax,
              International Tax, Mergers & Acquisitions Tax planning and due
              diligence, FATCA and CRS compliance, and Zakat advisory
              <Link
                href={"tax/#our-tax-services"}
                className="text-golden underline ml-1"
              >
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Our Tax Services */}
      <section
        id="our-tax-services"
        className="our-tax-services div_section bggolden  overflow-hidden"
      >
        <div className="maxw mx-auto flex flex-col items-center justify-center">
          <h2 className="section_heading py-1 w-fit text-center border-b border-b-golden 2xl:leading-[40px]">
            Our Tax services
          </h2>
          <div className="content my-7 xl:mt-14 2xl:mt-14  w-full">
            <p className="text-textgrey">
              The tax landscape in the UAE and GCC is constantly evolving, with
              the introduction of Excise Tax and Value Added Tax in 2017 and
              2018 respectively, and the subsequent implementation of Economic
              Substance and Country by Country Reporting regulations.
            </p>
            <p className="text-textgrey">
              The introduction of Corporate Tax in December 2022 further
              emphasizes the need for businesses to proactively evaluate these
              changes and establish structures and processes to ensure
              compliance with UAE tax laws and regulations.
            </p>
            <p className="text-textgrey">
              MMP can provide comprehensive tax services to help businesses
              navigate these complex changes and ensure they remain compliant
              with the evolving regulations.
            </p>
            <ul className="points plist">
              <li className="p p-0 mb-1">Value Added Tax.</li>
              <li className="p p-0 mb-1">Corporate Tax.</li>
              <li className="p p-0 mb-1">Transfer Pricing Advisory.</li>
              <li className="p p-0 mb-1">Excise Tax.</li>
              <li className="p p-0 mb-1">International Tax.</li>
              <li className="p p-0 mb-1">
                Mergers & Acquisitions Tax planning and due diligence.
              </li>
              <li className="p p-0 mb-1">FATCA and CRS Advisory.</li>
              <li className="p p-0 mb-1">Zakat Advisory.</li>
            </ul>
            <Tabs defaultValue="value-added-tax" className="w-full mt-4">
              <TabsList className="w-full h-fit grid grid-cols-8 bg-transparent gap-1 xl:gap-2 2xl:gap-2 mb-4">
                <TabsTrigger
                  id="value-added-tax"
                  value="value-added-tax"
                  className="whitespace-normal h-full p-1 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] bg-black border-t-4 border-t-transparent text-white hover:bg-white hover:text-black  hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                  Value Added Tax
                </TabsTrigger>
                <TabsTrigger
                  id="corporate-tax"
                  value="corporate-tax"
                  className="whitespace-normal h-full p-1 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] bg-black border-t-4 border-t-transparent text-white hover:bg-white hover:text-black hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                  Corporate Tax
                </TabsTrigger>
                <TabsTrigger
                  id="transfer-pricing-advisory"
                  value="transfer-pricing-advisory"
                  className="whitespace-normal h-full p-1 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] bg-black border-t-4 border-t-transparent text-white hover:bg-white hover:text-black hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                  Transfer Pricing Advisory
                </TabsTrigger>
                <TabsTrigger
                  id="excise-tax"
                  value="excise-tax"
                  className="whitespace-normal h-full p-1 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] bg-black border-t-4 border-t-transparent text-white hover:bg-white hover:text-black hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                  Excise Tax
                </TabsTrigger>
                <TabsTrigger
                  id="international-tax"
                  value="international-tax"
                  className="whitespace-normal h-full p-1 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] bg-black border-t-4 border-t-transparent text-white hover:bg-white hover:text-black hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                  International Tax
                </TabsTrigger>
                <TabsTrigger
                  id="mergers"
                  value="MA-tax-planning-due-diligence"
                  className="whitespace-normal h-full p-1 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] bg-black border-t-4 border-t-transparent text-white hover:bg-white hover:text-black hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                  M&A Tax planning & due diligence
                </TabsTrigger>
                <TabsTrigger
                  id="fatca"
                  value="FATCA-and-CRS-advisory"
                  className="whitespace-normal h-full p-1 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] bg-black border-t-4 border-t-transparent text-white hover:bg-white hover:text-black hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                  FATCA and CRS Advisory
                </TabsTrigger>
                <TabsTrigger
                  id="zakat-advisory"
                  value="Zakat-advisory"
                  className="whitespace-normal h-full p-1 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] bg-black border-t-4 border-t-transparent text-white hover:bg-white hover:text-black hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                  Zakat Advisory
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="value-added-tax"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  Our VAT services go beyond tax compliance assistance. We
                  provide comprehensive advice and support to our clients across
                  the supply chain. Our team helps establish effective
                  processes, offers expert advice on tax positions, and ensures
                  accurate VAT returns are filed with tax authorities.
                </p>
                <p>
                  Our expertise covers various sectors, including financial
                  services, real estate, oil & gas, manufacturing, and retail,
                  allowing us to provide tailored and comprehensive tax
                  solutions that fit your unique business needs.
                </p>
                <p>Our key service offerings include:</p>
                <div className="w-full grid grid-cols-2 gap-2">
                  <div className="content   ">
                    <Accordion
                      type="multiple"
                      className="w-full items-center justify-center"
                    >
                      <AccordionItem
                        value="VAT-Compliance-Services"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 text-left mb-0">
                              VAT Compliance Services
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p>
                            As VAT compliance regulations constantly evolve, it
                            is crucial for businesses to stay vigilant and
                            equipped. Our experienced VAT compliance team
                            provides the necessary support in the preparation
                            and review of your VAT returns based on VAT ledgers,
                            ensuring accurate and timely filing and submission
                            in accordance with UAE laws and regulations.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="VAT-Advisory-Services"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 text-left mb-0">
                              VAT Advisory Services
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p>
                            Our expertise in UAE VAT legislations enables us to
                            provide comprehensive and specialized tax advice,
                            assisting you in meeting your tax obligations.
                            Whether you are dealing with technically complex
                            issues or need expert guidance on specific tax
                            matters, our team is ready to provide the necessary
                            support.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="Health-Checks-and-Mock-VAT-Audits"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 text-left mb-0">
                              Health Checks and Mock VAT Audits
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p>
                            Our VAT health checks include mock tax audits to
                            detect and rectify non-compliance issues early on,
                            minimizing risks and errors before official FTA
                            audits. This best practice helps your business
                            prepare for the audit and avoid any penalties or
                            other implications.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="Private-Clarifications-Support"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 text-left mb-0">
                              Private Clarifications Support
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p>
                            We assist taxpayers in applying for technical
                            clarifications regarding specific tax matters by
                            providing a thorough understanding of the necessary
                            requirements and ensuring accurate capture of facts
                            and the clarification sought.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="content">
                    <Accordion
                      type="multiple"
                      className="w-full items-center justify-center"
                    >
                      <AccordionItem
                        value="Transaction-Mapping-and-Impact-Assessments"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 text-left mb-0">
                              Transaction Mapping and Impact Assessments
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p>
                            We conduct comprehensive examinations to align
                            appropriate tax treatments for your business
                            transactions and establish a robust internal process
                            that meets the UAE VAT laws and regulations.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="Guidance-on-VAT-Administrative-Procedures"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 text-left mb-0">
                              Guidance on VAT Administrative Procedures
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p>
                            Our dispute and controversy team specializes in
                            assisting clients with objections and appeals
                            related to tax matters. We can help you draft
                            reconsideration requests for filing with the Federal
                            Tax Authority (“FTA”), as well as objections before
                            the Ministry of Justice Tax Dispute Resolution
                            Committees (“TDRC”).
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="Refund-Support" className="my-6">
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 text-left mb-0">
                              Refund Support
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p>
                            We assist taxpayers in effectively applying for
                            claims for refundable tax positions (including
                            direct and special refunds). We also help our
                            clients navigate the new tax portal, utilizing our
                            thorough understanding of the necessary
                            requirements.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="corporate-tax"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  The Ministry of Finance (“MoF”) has introduced and implemented
                  Corporate Tax in the UAE with effect from financial years
                  starting on or after 1 June 2023 at a standard rate of 9%.
                </p>
                <p>
                  Our approach is flexible and experience-driven to meet your
                  specific needs and requirements.
                </p>
                <p>
                  Our key service offerings include{" "}
                  <strong className="underline">
                    Corporate Tax Impact Assessment
                  </strong>{" "}
                  and <strong className="underline">Ongoing Assistance:</strong>
                </p>
                <div className="w-full grid grid-cols-2 gap-2">
                  <div className="content">
                    <Accordion
                      type="multiple"
                      className="w-full items-center justify-center"
                    >
                      <AccordionItem
                        value="VAT-Compliance-Services"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 text-left mb-0">
                              Corporate Tax Impact Assessment
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            We help you gain a comprehensive understanding of
                            the potential implications of UAE Corporate Tax on
                            your business through our detailed impact
                            assessments, enabling you to navigate the tax
                            landscape effectively.
                          </p>
                          <p className="text-textgrey">
                            Our team will assist you in enhancing your corporate
                            structure and exploring strategic restructuring
                            alternatives from a Corporate Tax perspective,
                            ensuring an optimized and efficient group structure.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="content">
                    <Accordion
                      type="multiple"
                      className="w-full items-center justify-center"
                    >
                      <AccordionItem
                        value="Transaction-Mapping-and-Impact-Assessments"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 text-left mb-0">
                              Ongoing Assistance
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            Our team possesses a comprehensive understanding of
                            both International Corporate Tax laws and the UAE
                            Federal Decree law, along with the related
                            consultation documents.
                          </p>
                          <p className="text-textgrey">
                            We provide continuous support, offering insights and
                            guidance tailored to your business needs, ensuring
                            compliance and optimization in light of the evolving
                            Corporate Tax law, and enabling you to effectively
                            navigate the complex tax landscape.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="transfer-pricing-advisory"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  Transfer Pricing rules, which require transactions between
                  related parties to be conducted at arm’s length, must be
                  followed in accordance with the guidelines set out by the
                  Organization for Economic Co-operation and Development
                  (“OECD”).
                </p>
                <p>
                  Considering these rules, businesses must evaluate their
                  structures and assess the impact on their transactions.
                </p>
                <p>Our offerings include:</p>
                <ul className="points plist">
                  <li className="p mb-1">
                    Helping businesses understand these rules.
                  </li>
                  <li className="p mb-1">
                    Reviewing corporate and legal arrangements to determine
                    transfer pricing applicability.
                  </li>
                  <li className="p mb-1">
                    Providing guidance on compliance requirements as stipulated
                    in the Corporate Tax consultation document.
                  </li>
                </ul>
              </TabsContent>
              <TabsContent
                value="excise-tax"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  Since the implementation of excise tax in the UAE, the tax
                  authorities have expanded the scope of excise goods and
                  developed tracing mechanisms to combat tax evasion, making it
                  increasingly challenging for businesses to keep track of these
                  developments and meet the tax legislative requirements.
                </p>
                <p>Our excise tax offerings include:</p>
                <ul className="points plist">
                  <li className="p mb-1">
                    Excise tax registration with the FTA.
                  </li>
                  <li className="p mb-1">
                    Advising on excise tax compliance and reporting
                    requirements.
                  </li>
                  <li className="p mb-1">
                    Preparing your business for a mock excise tax audit.
                  </li>
                </ul>
              </TabsContent>
              <TabsContent
                value="international-tax"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  Our experienced team understands the complexities of
                  international taxation and stays up to date with the
                  ever-changing regulations and cross-border tax implications.
                </p>
                <p>
                  We provide tailored solutions to help you navigate the
                  intricate tax environments of multiple jurisdictions,
                  fostering compliance, and optimizing your tax position.
                </p>
                <p>
                  Whether you’re expanding overseas, engaging in cross-border
                  transactions, or managing international tax risks, our
                  international tax experts will help you achieve tax
                  efficiency, mitigate risks, and maximize opportunities in the
                  global marketplace.
                </p>
              </TabsContent>
              <TabsContent
                value="MA-tax-planning-due-diligence"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  In the dynamic world of mergers and acquisitions, strategic
                  tax planning and thorough due diligence are crucial for
                  successful transactions.
                </p>
                <p>
                  With our in-depth knowledge of tax regulations and extensive
                  M&A experience, we offer comprehensive guidance throughout the
                  deal lifecycle and actively support you in executing M&A
                  transactions with precision, ultimately delivering optimal tax
                  outcomes.
                </p>
                <p>Unlock the potential of our M&A Tax solutions:</p>
                <ul className="points plist">
                  <li className="p mb-1">
                    Comprehensive guidance throughout the entire deal lifecycle.
                  </li>
                  <li className="p mb-1">
                    Identification of tax risks and optimization of deal
                    structures.
                  </li>
                  <li className="p mb-1">
                    Meticulous due diligence to uncover potential tax
                    liabilities.
                  </li>
                  <li className="p mb-1">
                    Evaluation of tax impact and strategic recommendations.
                  </li>
                  <li className="p mb-1">
                    Maximizing tax efficiencies and minimizing tax risks.
                  </li>
                </ul>
              </TabsContent>
              <TabsContent
                value="FATCA-and-CRS-advisory"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  Exchange of information between governments and tax
                  authorities has become increasingly important in recent years,
                  and financial institutions now face greater compliance
                  requirements due to the implementation of Foreign Account Tax
                  Compliance Act (“FATCA”) and Common Reporting Standards
                  (“CRS”) regulations.
                </p>
                <p>
                  Our experienced team has worked with financial institutions in
                  UAE, Oman, Pakistan, Cayman Islands, and British Virgin
                  Islands to implement FATCA / CRS regulations.
                </p>
                <p>Our key service offerings include: </p>
                <ul className="points plist">
                  <li className="p mb-1">
                    Review of regulatory structure to determine FATCA / CRS
                    applicability.
                  </li>
                  <li className="p mb-1">
                    Creating FATCA / CRS Compliance Program.
                  </li>
                  <li className="p mb-1">
                    Reviewing, updating, and enhancing account opening and KYC
                    documents.
                  </li>
                  <li className="p mb-1">
                    Supporting organizations in reporting information to
                    competent authorities.
                  </li>
                  <li className="p mb-1">
                    Registration of entities with Internal Revenue Services
                    ("IRS") to obtain Global Intermediary Identification Number
                    (“GIIN”).
                  </li>
                </ul>
              </TabsContent>
              <TabsContent
                value="Zakat-advisory"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  Zakat is a cornerstone of Islamic economies, focusing on
                  social welfare and ensuring the fair distribution of wealth
                  among needy citizens. As a key financial resource, it helps
                  maintain the social fabric of society, fostering solidarity,
                  and promoting the overall economic well-being.
                </p>
                <p>
                  Zakat applies in the Kingdom of
                  Saudi Arabia and Kuwait; it affects shareholders of local
                  companies who are Saudi or GCC nationals in Saudi Arabia,
                  Kuwaiti public companies, and GCC companies with operations in
                  Kuwait.
                </p>
                <p>
                  Our comprehensive Zakat advisory services help ensure your
                  business remains compliant.
                </p>
                <p>Our offerings include:</p>
                <ul className="points plist">
                  <li className="p mb-1">
                    In-depth Zakat advisory for KSA, Kuwait, and Oman.
                  </li>
                  <li className="p mb-1">
                    Assistance with calculating Zakat and tax obligations.
                  </li>
                  <li className="p mb-1">
                    Support in the preparation and filing of Zakat and tax
                    returns.
                  </li>
                  <li className="p mb-1">
                    Guidance on Zakat and tax assessments, appeals, and related
                    matters.
                  </li>
                  <li className="p mb-1">
                    Zakat filings and compliance reviews and support.
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

export default Tax;
