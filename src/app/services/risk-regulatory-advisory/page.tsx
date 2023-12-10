import ContactusSec from "@/components/ContactusSec";
import Header from "@/components/Header";
import { Icons } from "@/components/Icons";
import CustomButton from "@/components/customui/CustomButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: 'Risk Regulatory Advisory | Morsi M Partners',
  description: 'An independent advisory and professional services firm  We are UAE born, with a global network, reach, and outlook',
}

const riskRegulatoryAdvisory = () => {
  return (
    <main className="risk-regulatory-advisory-page">
      <Header />
      <div className="bg-black h-[70px] lg:h-[90px] w-full block xl:hidden 2xl:hidden"></div>
      {/* Banner */}
      <section className="banner div_section bg-[url('/images/risk-banner.png')] bg-cover bg-center relative flex items-center justify-center sm:p-0 w-full overflow-hidden sm:h-[200px] xl:h-[500px] 2xl:h-[640px]">
        <div className="info maxw w-full h-full flex flex-col items-center justify-center my-auto xl:my-[100px] 2xl:my-[100px]">
          <div className="content flex flex-col items-start justify-center px-4 h-full">
            <h2 className="normal_heading text-white mb-3 sm:mb-1 xl:text-[30px] 2xl:text-[50px]">
              Risk & Regulatory Advisory
            </h2>
            <h2 className="heading text-golden mb-3 sm:mb-1 xl:text-[30px] 2xl:text-[30px]">
              Risk is inevitable, but the impact is not
            </h2>
            <p className="golden_heading text-white sm:text-[10px] xl:text-[23px] 2xl:text-[23px]">
              We help you navigate the complexities of today’s regulatory
              environment, proactively thrive in times of uncertainty, and seize
              opportunities with confidence
              <Link
                href={
                  "risk-regulatory-advisory/#our-risk-regulatory-advisory-services"
                }
                className="text-golden underline ml-1"
              >
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Our Risk & Regulatory Advisory services */}
      <section
        id="our-risk-regulatory-advisory-services"
        className="our-risk-regulatory-advisory-services bggolden  overflow-hidden"
      >
        <div className="maxw mx-auto flex flex-col items-center justify-center px-5">
          <h2 className="section_heading py-1 w-fit text-center border-b border-b-golden ">
            Our Risk & Regulatory Advisory services
          </h2>
          <div className="content my-7 sm:mt-4 xl:mt-14 2xl:mt-14  w-full">
            <p className="text-textgrey">
              MMP provides comprehensive Risk & Regulatory Advisory services,
              including proactive enterprise risk management, corporate
              governance, internal audit, regulatory compliance, anti-money
              laundering compliance, controls design and reviews, business
              resilience, and forensic advisory.
            </p>
            <p className="text-textgrey">
              We are also well-versed in the evolving requirements of
              Environmental, Social, and Governance (ESG), ensuring that your
              organization is compliant and prepared to build a sustainable
              future.
            </p>
            <p className="text-textgrey">
              Our services are tailored to guide you through regulatory
              complexity with confidence and composure.
            </p>
            <div className="flex items-start  justify-center gap-2 ">
              <div className="px-4 sm:px-1 xl:pr-[50px] 2xl:pr-[50px]  border-r border-r-golden  w-[30%]">
                <ul className="points plist">
                  <li className="p mt-1 text-black -ml-2">Risk & Controls</li>
                </ul>
                <ul className="points line-list linelist list-outside ml-2 sm:ml-2 sm:mt-[-10px]">
                  <li className=" m-0">Enterprise Risk Management ("ERM").</li>
                  <li className=" m-0">Internal Audit.</li>
                  <li className=" m-0">Corporate Governance.</li>
                  <li className=" m-0">Business Resilience.</li>
                  <li className=" m-0">
                    Internal Control over Financial Reporting (“ICFR”).
                  </li>
                </ul>
              </div>
              <div className="px-4 sm:px-1 xl:px-[50px] 2xl:px-[50px]  border-r border-r-golden w-[44%]">
                <ul className="points plist">
                  <li className="p mt-1 text-black -ml-2">Regulatory Compliance</li>
                </ul>
                <ul className="points line-list linelist list-outside ml-2 sm:ml-2 sm:mt-[-10px] sm:w-[83%]">
                  <li className=" m-0">Regulatory Compliance Reviews.</li>
                  <li className=" m-0">
                    Anti-Money Laundering (“AML”) Reviews.
                  </li>
                  <li className=" m-0">
                    Outsourcing of Compliance Officer and Money Laundering
                    Reporting Officer ("MLRO").
                  </li>
                  <li className=" m-0">
                    Environmental, Social, and Governance ("ESG") Advisory.
                  </li>
                  <li className=" m-0">
                    Economic Substance Regulations ("ESR").
                  </li>
                  <li className=" m-0">Corporate Services & Setup.</li>
                </ul>
              </div>
              <div className="px-4 sm:px-1 xl:pl-[50px] 2xl:pl-[50px] w-[30%]">
                <ul className="points plist">
                  <li className="p mt-1 text-black -ml-2">Forensic Advisory</li>
                </ul>
                <ul className="points line-list linelist list-outside ml-2 sm:ml-2 sm:mt-[-10px]">
                  <li className=" m-0">Fraud Prevention.</li>
                  <li className=" m-0">Fraud Detection.</li>
                  <li className=" m-0">Fraud Investigation.</li>
                </ul>
              </div>
            </div>
            <Tabs defaultValue="risk-controls" className="w-full mt-4">
              <TabsList className="w-full h-fit grid grid-cols-3 bg-transparent gap-1 xl:gap-2 2xl:gap-2 mb-4">
                <TabsTrigger
                  id="risk-controls"
                  value="risk-controls"
                  className="whitespace-normal h-full p-2 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black  hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                  Risk & Controls
                </TabsTrigger>
                <TabsTrigger
                  id="regulatory-compliance"
                  value="regulatory-compliance"
                  className="whitespace-normal h-full p-2 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black  hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                  Regulatory Compliance
                </TabsTrigger>
                <TabsTrigger
                  id="forensic-advisory"
                  value="forensic-advisory"
                  className="whitespace-normal h-full p-2 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black  hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                  Forensic Advisory
                </TabsTrigger>
              </TabsList>
              
              <TabsContent
                value="risk-controls"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  At MMP, we recognize the pivotal role of risk management in
                  today’s dynamic business landscape. Our suite of risk &
                  controls services is designed to help businesses effectively
                  navigate and mitigate risks, strengthening corporate
                  governance, ensuring operational resilience and regulatory
                  compliance.
                </p>
                <p>
                  We bring extensive industry knowledge and a results-driven
                  approach with a focus on delivering tailored solutions that
                  address your organization’s unique needs and safeguard your
                  business interests.
                </p>
                <p>Our Risk & Controls offerings include:</p>
                <div className="w-full flex sm:flex-col md:flex-col gap-2 sm:gap-0 md:gap-0 items-start justify-between">
                  <div className="content w-full text-black sm:-mt-4 md:-mt-4">
                    <Accordion
                      type="single"
                      collapsible={true}
                      className="w-full items-center justify-center"
                    >
                      <AccordionItem
                        value="Enterprise-Risk-Management"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 sm:m-0 sm:text-[16px] mb-0">
                            Enterprise Risk Management
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            Enterprise Risk Management (ERM) is an oversight
                            tool that helps management to enhance their risk
                            management capabilities proactively and effectively
                            by capturing strategic, operational, compliance,
                            financial, and external risks.
                          </p>
                          <p className="text-textgrey">
                            To provide the desired risk information and
                            assurances, the ERM system should be fit-for-purpose
                            and provide a complete and accurate view of the risk
                            profile. Failure to do so may expose the
                            organization to increased scrutiny from
                            stakeholders.
                          </p>
                          <p className="text-textgrey">
                            We can help you in the following areas:​
                          </p>
                          <ul className="points plist">
                  <li className="p mb-[14px]">Setting up your ERM function​.</li>
                  <li className="p mb-[14px]">Fine tuning your risk appetite​.</li>
                  <li className="p mb-[14px]">ERM maturity review​.</li>
                  <li className="p mb-[14px]">Risk assessment and Dashboarding.</li>
                </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="Internal-Audit" className="my-6">
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 sm:m-0 sm:text-[16px] mb-0">
                            Internal Audit
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            Businesses are constantly confronted with rapid
                            changes, such as shifts in customer behaviors,
                            technology, competition, and regulations, which
                            require them to rethink their value proposition.
                          </p>
                          <p className="text-textgrey">
                            While these changes present significant
                            opportunities, they also expose organizations to new
                            and often complex risks. In this context, Internal
                            Audit has become a critical lever for companies to
                            build confidence and act decisively and proactively
                            in a world of constant change.
                          </p>
                          <p className="text-textgrey">
                            Our Internal Audit offerings include:​
                          </p>
                          <div className="point w-full">
                            <ul className="points plist">
                  <li className="p mb-[14px] text-golden underline">External Quality Assessment Review of Internal
                                Audit Function</li>
                  </ul>
                            <p className="text-textgrey">
                              In accordance with the Internal Audit standards,
                              our team can perform an external quality
                              assessment review of the Internal Audit function
                              at your organization.
                            </p>
                            <p className="text-textgrey">
                              Our external quality review is primarily focused
                              on the following aspects of the Internal Audit
                              function:
                            </p>
                            <ol className=" p text-golden ">
                              <li>
                                <p className="text-textgrey">
                                  <span className="text-golden">(a) </span>Positioning.</p>
                              </li>
                              <li>
                                <p className="text-textgrey"><span className="text-golden">(b) </span>People.</p>
                              </li>
                              <li>
                                <p className="text-textgrey"><span className="text-golden">(c) </span>Processes.</p>
                              </li>
                            </ol>
                            <p className="text-textgrey">
                              We can support Senior Management and Audit
                              Committees unlocking value through:{" "}
                            </p>
                            <div className="p-point mb-4 ">
                            <ul className="points plist">
                  <li className="p my-1 text-golden">Gap Assessments: <span className="my-1 text-textgrey">
                                Evaluation of current state of the internal
                                Audit function against the International
                                Standards for the Professional Practice of
                                Internal Auditing and the industry best
                                practices.
                              </span></li>
                  </ul>
                              
                            </div>
                            <div className="p-point">
                            <ul className="points plist">
                  <li className="p my-1 text-golden">Recommendations: <span className="my-1 text-textgrey">
                                We further recommend actions to be taken to
                                reduce the gap between the current and the
                                targeted state of the Internal Audit function.
                              </span></li>
                  </ul>
                              
                            </div>
                          </div>
                          <div className="point w-full">
                            
                            <ul className="points plist mt-4">
                  <li className="p mb-[14px] text-golden underline">Internal Audit Outsourcing / Co-sourcing
                                services</li>
                  </ul>
                            <p className="text-textgrey">
                              Our team can undertake the duties of an
                              organization’s Internal Audit function as directed
                              by the board, audit committee, and senior
                              management. Our team will prepare the internal
                              audit plan and execute it in line with the
                              internal audit standards and industry best
                              practices.
                            </p>
                            <p className="text-textgrey">
                              This model provides essential expertise for the
                              organization, leading to reduced operating costs
                              and the identification of improvement
                              opportunities.
                            </p>
                          </div>
                          <div className="point w-full">
                          <ul className="points plist mt-4">
                  <li className="p mb-[14px] text-golden underline">Establishing the Internal Audit Function</li>
                  </ul>
                            <p className="text-textgrey">
                              Our team offers assistance and advice to clients
                              looking to establish an effective Internal Audit
                              function; a task that requires time, dedication,
                              and experience.
                            </p>
                            <p className="text-textgrey">
                              Our services in this regard include:
                            </p>
                            <p className="text-textgrey">
                              We can support Senior Management and Audit
                              Committees unlocking value through:{" "}
                            </p>
                            <ul className="points plist mt-4">
                  <li className="p mb-[14px]">Internal Audit function positioning planning.</li>
                  <li className="p mb-[14px]">Assist in preparation of the Internal Audit activity’s charter, procedures, and audit plans.</li>
                  <li className="p mb-[14px]">Carry out Internal Audit assignments together with the organization’s staff to collaborate, share, and transfer knowledge.</li>
                  <li className="p mb-[14px]">Assessing new-hires or current employees’ competency.</li>
                  <li className="p mb-[14px]">Staff training and workshops.</li>
                  </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="corporate-governance"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 sm:m-0 sm:text-[16px] mb-0">
                            Corporate Governance
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            Effective corporate governance is a foundational
                            pillar for a robust and sustainable organization,
                            providing a framework for strategic execution and
                            sound operations.
                          </p>
                          <p className="text-textgrey">
                            As regulations, risks, and responsibilities related
                            to ESG continue to evolve, entity governance and
                            compliance have become more prominent on the
                            boardroom agenda.
                          </p>
                          <p className="text-textgrey">
                            Consequently, the support from governance
                            professionals is increasingly critical to ensure an
                            organization’s long-term success.​
                          </p>
                          <p className="text-textgrey">
                            Our Corporate Governance services include:​
                          </p>
                          <ul className="points plist">
                  <li className="p mb-[14px]">Review of the current corporate governance structure, provide recommendations, and support on the recommendations’ implementation.</li>
                  <li className="p mb-[14px]">Enhance risk management systems and processes.</li>
                  <li className="p mb-[14px]">Develop codes for corporate governance, business conduct, and other relevant corporate documents to promote compliance and ethical practices.</li>
                  <li className="p mb-[14px]">Improve corporate governance processes for group companies.</li>
                  <li className="p mb-[14px]">Conduct Board of Directors’ effectiveness reviews.</li>
                  <li className="p mb-[14px]">Provide assistance in meeting regulatory requirements on corporate governance and information disclosure.</li>
                  <li className="p mb-[14px]">Advise on information disclosure issues.</li>
                  <li className="p mb-[14px]">Environmental, Social, and Governance (ESG) Advisory.</li>
                </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="business-resilience"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 sm:m-0 sm:text-[16px] mb-0">
                            Business Resilience
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            The pandemic has reminded us of the unpredictable
                            nature of our world, where crises can emerge without
                            warning and impact individuals, companies, and
                            communities on a global scale.
                          </p>
                          <p className="text-textgrey">
                            Despite the negative connotation of crises, we
                            believe that every problem can be an opportunity in
                            disguise and can lead to positive outcomes if
                            managed effectively.
                          </p>
                          <p className="text-textgrey">
                            With this in mind, crisis management has become more
                            important than ever. Governments, ministries, and
                            corporations are re-evaluating their response to
                            threats and risks, recognizing the advantage of
                            being prepared for worst-case scenarios.​
                          </p>
                          <p className="text-textgrey">
                            As part of our comprehensive business resilience
                            offerings, we can help you with the following:​
                          </p>
                          <ul className="points plist">
                  <li className="p mb-[14px]">Crisis management.</li>
                  <li className="p mb-[14px]">Succession planning.</li>
                  <li className="p mb-[14px]">Business continuity management (“BCM”) – BCM Assessments, BCM Program set up, and BCM Documentation.</li>
                </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="Internal-Control-over-Financial-Reporting"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 sm:m-0 sm:text-[16px] mb-0">
                            Internal Control over Financial Reporting (ICFR)
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            An effective internal control system enables
                            management to mitigate risks and enhance value by
                            aligning controls with the organization’s culture,
                            values, size, stakeholder expectations, and risk
                            priorities. This promotes transparency,
                            accountability, and compliance, while safeguarding
                            assets and improving operational efficiency.
                          </p>
                          <p className="text-textgrey">
                            Our services include the following: ​
                          </p>
                          <div className="point w-full">
                            
                            <ul className="points plist">
                  <li className="p mb-[14px] text-golden underline">Effectiveness review of Internal Controls</li>
                </ul>
                            <p className="text-textgrey">
                              We assist our clients in conducting diagnostic
                              reviews of their current internal controls,
                              offering valuable insights and recommendations
                              based on industry best practices.
                            </p>
                          </div>
                          <div className="point w-full">
                            <ul className="points plist">
                  <li className="p mb-[14px] text-golden underline">Design and implementation of Internal Controls</li>
                </ul>
                            <p className="text-textgrey">
                              We assist our clients in designing and
                              implementing effective internal controls, which
                              includes process mapping to identify potential
                              risks and monitoring procedures to ensure
                              compliance with applicable regulations, industry
                              standards, and the organization’s bylaws.
                            </p>
                            <p className="text-textgrey">
                              Our team of experts will work with you to develop
                              an internal control structure tailored to your
                              business needs, incorporating best practices and
                              professional standards.
                            </p>
                          </div>
                          <div className="point w-full">
                            <ul className="points plist">
                  <li className="p mb-[14px] text-golden underline">Trainings and workshops</li>
                </ul>
                            <p className="text-textgrey">
                              We provide training workshops to help your staff
                              acquire the professional knowledge and technical
                              skills necessary for their roles.
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="regulatory-compliance"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  At MMP, we recognize the ever-changing nature of today’s
                  regulatory landscape and the undisputed importance of
                  regulatory compliance for businesses.
                </p>
                <p>
                  As regulations continue to evolve, and with requirements
                  undergoing constant changes, organizations must remain agile
                  and adaptable to ensure ongoing compliance.
                </p>
                <p>
                  Our comprehensive suite of regulatory compliance services is
                  specifically designed to assist businesses in navigating these
                  dynamic changes, staying ahead of regulatory updates, and
                  proactively addressing compliance challenges.
                </p>
                <p>Our Regulatory Compliance offerings include:</p>
                <div className="w-full flex sm:flex-col md:flex-col gap-2 sm:gap-0 md:gap-0 items-start justify-between">
                  <div className="content w-full text-black sm:-mt-4 md:-mt-4">
                    <Accordion
                      type="single"
                      collapsible={true}
                      className="w-full items-center justify-center"
                    >
                      <AccordionItem
                        value="regulatory-compliance-reviews"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 sm:m-0 sm:text-[16px] text-left mb-0">
                            Regulatory Compliance Reviews
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            As the global regulatory landscape rapidly evolves
                            and new asset classes and transactions become
                            integral to many businesses, organizations must
                            confidently and resiliently navigate this complexity
                            while ensuring compliance with regulatory
                            requirements.{" "}
                          </p>
                          <p className="text-textgrey">
                            Our team will support you in establishing,
                            transforming, and monitoring your regulatory
                            compliance frameworks to adapt to this changing
                            landscape.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="aml-reviews" className="my-6">
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 mb-0">
                            AML Reviews
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            With Anti-Money Laundering (AML) regulations
                            becoming more stringent and critical worldwide,
                            regulators are placing greater emphasis on agile and
                            effective AML frameworks.
                          </p>
                          <p className="text-textgrey">
                            Our team keeps abreast of the latest AML regulations
                            in the UAE, KSA, GCC, and globally, enabling us to
                            provide expert guidance and support in developing
                            and implementing effective AML frameworks for your
                            organization.
                          </p>
                          <p className="text-textgrey">
                            Our AML regulatory team can help you with:
                          </p>
                          <ul className="points plist">
                  <li className="p mb-[14px]">AML Reviews – We can assist you in performing risk-based AML reviews to assess the effectiveness of your AML framework.</li>
                  <li className="p mb-[14px]">AML Controls – We recommend measures to ensure your AML controls operate effectively and meet the evolving compliance requirements.</li>
                </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="Outsourcing-of-Compliance-Officer-and-MLRO"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 mb-0">
                            Outsourcing of Compliance Officer and MLRO
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            Our team possesses extensive knowledge in regulatory
                            compliance across diverse industries. As part of our
                            offerings, we provide tailored outsourced Compliance
                            and Money Laundering Reporting Officer (MLRO)
                            services to cater to your specific requirements.
                          </p>
                          <p className="text-textgrey">
                            Whether your operations are based in Dubai
                            International Financial Center (“DIFC”), Abu Dhabi
                            Global Markets (“ADGM”), other free zones, or the
                            UAE Mainland, our outsourcing solutions grant you
                            access to specialized expertise while minimizing
                            costs.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="ESG-Advisory" className="my-6">
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 mb-0">
                            ESG Advisory
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            As ESG gains prominence on the boardroom agenda and
                            sustainable operations become increasingly important
                            to regulators, investors, creditors, and
                            stakeholders, crafting a robust ESG proposition is
                            essential for achieving sustainable value in the
                            short, medium, and long term.
                          </p>
                          <p className="text-textgrey">
                            Our team can help boost your ESG performance by
                            integrating ESG into your business strategy,
                            aligning with global and regulatory frameworks,
                            developing an ESG-oriented culture within your
                            organization, and ensuring effective communication
                            channels for your ESG practices.
                          </p>
                          <p className="text-textgrey">
                            Our comprehensive offerings will help you anticipate
                            and proactively meet regulatory and market
                            expectations on the ESG front.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="Economic-Substance-Regulations"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 mb-0">
                            Economic Substance Regulations (ESR)
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            Our Regulatory and Tax experts will assist your
                            organization on both fronts;{" "}
                            <strong className="underline">
                              ESR compliance
                            </strong>{" "}
                            and{" "}
                            <strong className="underline">
                              ESR reporting.
                            </strong>{" "}
                          </p>
                          <ul className="points plist">
                  <li className="p mb-[14px]">Gap assessment on ESR reporting readiness.</li>
                  <li className="p mb-[14px]">Support on preparation and submission of ESR supporting documents and reports.</li>
                </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="Corporate-Services-Setup"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 mb-0">
                            Corporate Services & Setup
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            Our strategic partners in corporate services possess
                            extensive experience in assisting promoters with
                            licensing processes from the Dubai Financial
                            Services Authority (“DFSA”) and Financial Services
                            Regulatory Authority (“FSRA”).
                          </p>
                          <p className="text-textgrey">
                            To date, we have provided regulatory assistance to
                            several applicants and, such assistance broadly
                            encompasses the following services:
                          </p>
                          <ul className="points plist">
                  <li className="p mb-[14px]">Comprehensive assistance with the incorporation / licensing process for authorization by the DFSA, FSRA, and SCA.</li>
                  <li className="p mb-[14px]">Assistance with the preparation and review of the regulatory business plan.</li>
                  <li className="p mb-[14px]">Preparation of the financial projections and assistance with the preparation of the PIB returns.</li>
                  <li className="p mb-[14px]">Assistance with the preparation of the compliance manual, compliance monitoring program, anti-money laundering manual, risk management manual, and other regulatory manuals.</li>
                  <li className="p mb-[14px]">Assistance with the registration and incorporation process of legal entities with the DIFC and ADGM Registrar of Companies (“ROC”).</li>
                </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
              <TabsContent
                value="forensic-advisory"
                className="bg-white text-textgrey p-4"
              >
                <p>
                  In today’s rapidly changing business landscape, fraud is a
                  significant threat to organizations of all sizes, across all
                  industries. Whether it’s financial fraud, cyber fraud, or
                  occupational fraud, the impact on an organization’s reputation
                  and financial stability can be massive.
                </p>
                <p>
                  Our Forensic Advisory team is well-equipped to assist you in
                  mitigating fraud risks by providing a comprehensive suite of
                  services, including <span className="underline">fraud prevention</span>, <span className="underline">detection</span>, and <span className="underline">investigation</span>
                  .
                </p>
                <p>
                  With our tailored approach, we can help you protect your
                  organization from potential threats and minimize the impact of
                  fraud-related incidents.
                </p>
                <div className="w-full flex sm:flex-col md:flex-col gap-2 sm:gap-0 md:gap-0 items-start justify-between">
                  <div className="content w-full text-black sm:-mt-4 md:-mt-4">
                    <Accordion
                      type="single"
                      collapsible={true}
                      className="w-full items-center justify-center"
                    >
                      <AccordionItem value="Fraud-Prevention" className="my-6">
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 mb-0">
                            Fraud Prevention
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            Effective fraud prevention is essential for any
                            organization to maintain its reputation, protect its
                            assets, and ensure the trust of its stakeholders.
                          </p>
                          <p className="text-textgrey">
                            Our Fraud Prevention services are designed to help
                            you identify and mitigate potential fraud risks
                            before they become a problem:
                          </p>
                          <ul className="points plist">
                  <li className="p mb-[14px]">Enhancement of Anti-fraud frameworks.</li>
                  <li className="p mb-[14px]">Conducting fraud risk assessment.</li>
                  <li className="p mb-[14px]">Development of strategies and policies for prevention of fraud, corruption, misconduct, and whistle blowing policies.</li>
                  <li className="p mb-[14px]">Fraud awareness programs and training for employees.</li>
                </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="Fraud-Detection" className="my-6">
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                        <ul className="points accordionlist">
                            <li className="accordion mt-1 mb-0">
                            Fraud Detection
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            Fraudulent activities can cause significant
                            financial losses and reputational damage to
                            organizations, which can be detrimental in today’s
                            highly competitive business environment.
                          </p>
                          <p className="text-textgrey">
                            We provide a comprehensive suite of Fraud Detection
                            services:
                          </p>
                          <ul className="points plist">
                  <li className="p mb-[14px]">Anti-bribery and corruption reviews.</li>
                  <li className="p mb-[14px]">Foreign Corrupt Practices Act reviews.</li>
                  <li className="p mb-[14px]">Development and implementation of whistle-blower hotlines and reporting mechanisms.</li>
                  <li className="p mb-[14px]">Setup and design of fraud monitoring systems and controls.</li>
                </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="Fraud-Investigation"
                        className="my-6"
                      >
                        <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                          <ul className="points accordionlist">
                            <li className="accordion mt-1 mb-0">
                            Fraud Investigation
                            </li>
                          </ul>
                        </AccordionTrigger>
                        <AccordionContent className="p-4 pb-0">
                          <p className="text-textgrey">
                            Promptly investigating any allegations of fraud is
                            crucial to mitigate potential risks and minimize any
                            negative impact on the organization.
                          </p>
                          <p className="text-textgrey">
                            Our Fraud Investigation services are designed to
                            help you respond to allegations of fraud,
                            misconduct, and other irregularities.
                          </p>
                          <ul className="points plist">
                  <li className="p mb-[14px]">Fact finding missions.</li>
                  <li className="p mb-[14px]">Investigation of whistleblower allegations.</li>
                  <li className="p mb-[14px]">Forensic accounting.</li>
                  <li className="p mb-[14px]">Regulatory and compliance investigations.</li>
                </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
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
              href={"/services/finance-accounting"}
              className="w-full"
            >
              <p className="mb-0 skew-x-20 skewedlinks">Finance & Accounting</p>
            </Link>
          </div>
          <div className="category -skew-x-30 border-b-2 border-b-golden border-r-2 border-r-golden w-fit pl-1 pr-2 py-2">
          <Link
              href={"/services/corporate-finance-advisory"}
              className="w-full"
            >
              <p className="mb-0 skew-x-20 skewedlinks">Corporate Finance Advisory</p>
            </Link>
          </div>
          <div className="category -skew-x-30 border-b-2 border-b-golden border-r-2 border-r-golden w-fit pl-1 pr-2 py-2">
          <Link
              href={"/services/tax"}
              className="w-full"
            >
              <p className="mb-0 skew-x-20 skewedlinks">Tax</p>
            </Link>
          </div>
          <div className="category -skew-x-30 border-b-2 border-b-golden border-r-2 border-r-golden w-fit pl-1 pr-2 py-2">
          <Link
              href={"/services/investment-family-office-advisory"}
              className="w-full"
            >
              <p className="mb-0 skew-x-20 skewedlinks">Investment & Family Office Advisory</p>
            </Link>
          </div>
          <div className="category -skew-x-30 border-b-2 border-b-golden border-r-2 border-r-golden w-fit pl-1 pr-2 py-2">
            <Link
              href={"/services/management-consulting"}
              className="w-full"
            >
              <p className="mb-0 skew-x-20 skewedlinks">Management Consulting</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us*/}
      <ContactusSec />
    </main>
  );
};

export default riskRegulatoryAdvisory;
