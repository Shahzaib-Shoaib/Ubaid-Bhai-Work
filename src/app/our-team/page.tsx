import ContactusSec from "@/components/ContactusSec";
import FounderMessage from "@/components/FounderMessage";
import Header from "@/components/Header";
import { Icons } from "@/components/Icons";
import CustomButton from "@/components/customui/CustomButton";
import CustomDialog from "@/components/customui/CustomDialog";
import { Metadata, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Our Team | Morsi M Partners",
  description:
    "An independent advisory and professional services firm  We are UAE born, with a global network, reach, and outlook",
};

const OurTeam: NextPage = () => {
  return (
    <main className="our-team-page">
      <Header />
      <div className="bg-black h-[70px] lg:h-[90px] w-full block xl:hidden 2xl:hidden"></div>
      {/* Banner */}
      <section className="banner relative flex items-center justify-center w-full h-[250px] lg:h-[520px] xl:h-[700px] 2xl:h-screen overflow-hidden bg-[url('/images/ourteam-banner.jpg')] bg-cover bg-center aspect-video">
        <div className="info maxw absolute z-[2] w-full h-full flex flex-col items-center justify-center my-auto 2xl:mt-[-80px]  ">
          <h2 className="text-white text-center leading-tight font-normal mb-4 text-[10px] md:text-[10px] lg:text-[20px] xl:text-[28px] 2xl:text-[31px]">
            We believe that legacy creation is the noblest of all pursuits
          </h2>
          <h2 className="text-white text-center leading-tight font-normal mb-2 xl:mb-4 text-[10px] md:text-[10px] lg:text-[20px] xl:text-[28px] 2xl:text-[31px] xl:w-[90%]">
            Creating and being remembered for our legacy is our mantra that
            encapsulates, embodies, and underpins the values and behaviors we
            carry and exhibit every day
          </h2>
          <CustomDialog
            contentClassName="w-full"
            trigger={
              <CustomButton variant={"golden"} className="2xl:mt-3">
                A Message From The Founder
              </CustomButton>
            }
            content={<FounderMessage />}
          ></CustomDialog>
        </div>
      </section>

      {/* Our Team */}
      <section id="our-team" className="our-team div_section bggolden">
        <div className="maxw">
          <h2 className="section_heading">Our Team</h2>
          {/* Row 1 */}
          <div className="row-1 grid grid-cols-3 w-full">
            <div className="col-1"></div>
            <CustomDialog
              contentClassName="max-w-[95%] "
              trigger={
                <div className="employee flex flex-col items-center sm:m-[5px] m-4 justify-center cursor-pointer">
                  <Image
                    alt="Mahmoud Morsi"
                    src={"/images/mahmoud-morsi.png"}
                    height={366}
                    width={326}
                  />
                  <h3 className="name heading text-golden mt-4 mb-0 text-center text-[12px] lg:text-[22px] xl:text-[26px] 2xl:text-[35px] sm:mb-0 xl:mb-0">
                    Mahmoud M. Morsi
                  </h3>
                  <p className="designation sub_heading text-center text-black sm:text-[7px] xl:text-[20px] sm:mb-0">
                    Founder & Managing Partner
                  </p>
                </div>
              }
              content={
                <div className="w-full">
                  <div className="w-full flex items-center justify-start gap-4">
                    <div className="sm:w-[105px] sm:h-[118px]">
                      <Image
                        alt="Mahmoud Morsi"
                        src={"/images/mahmoud-morsi.png"}
                        width={163}
                        height={183}
                      />
                    </div>
                    <div>
                      <h3 className="text-golden text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]  mb-0">
                        Mahmoud M. Morsi
                      </h3>
                      <h3 className="text-black text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px] ">
                        Founder & Managing Partner
                      </h3>
                    </div>
                  </div>
                  <div className="content mt-6">
                    <p className="text-black text-justify ">
                      Mahmoud M. Morsi is the Founder of Morsi M Partners, a
                      professional services advisory firm launched in 2023 with
                      the ambition to become one of the leading advisory firms
                      in the Middle East and North Africa.
                    </p>
                    <p className="text-black text-justify">
                      Mahmoud has over a decade of experience providing
                      professional services to a diverse range of clients,
                      including regulated financial services companies,
                      high-profile corporations, and startups. His proven track
                      record of successful collaborations stands as a testament
                      to his unwavering commitment to delivering best-in-class
                      advisory services.
                    </p>
                    <p className="text-black text-justify">
                      In his previous senior roles, Mahmoud successfully led
                      multiple initiatives, focusing on laying strong
                      operational and technical foundations, talent recruitment
                      and development, and driving transformative agendas.
                    </p>
                    <p className="text-black text-justify">
                      Mahmoud's expertise covers a wide range of industries,
                      including financial services such as commercial,
                      investment, and private banking, asset and wealth
                      management, investment brokers, fintech, crypto exchanges,
                      and currency exchanges. In addition, he has worked with
                      non-financial sectors, including manufacturing, mining,
                      shipping and logistics, and oil and gas.
                    </p>
                    <p className="text-black text-justify">
                      Mahmoud started his career in 2010 as a Financial Analyst
                      with Global Strategy & Governance, advising banking
                      clients in North Africa on strategic positioning and
                      strategy execution. He later joined Ernst & Young audit
                      practice in 2012, serving clients across three different
                      markets: Jordan, Kurdistan, and the United States of
                      America.
                    </p>
                    <p className="text-black text-justify">
                      In 2015, Mahmoud joined PriceWaterhouseCoopers Dubai
                      office, where he worked with the M&A Advisory teams across
                      the United Arab Emirates, Saudi Arabia, Oman, and Egypt,
                      as well as the financial services audit practice until the
                      end of 2021. He has also worked with Grant Thornton UAE
                      financial services practice until October 2022.
                    </p>
                    <p className="text-black text-justify">
                      Mahmoud holds a Bachelor’s degree in Finance from The
                      University of Jordan and is professionally qualified as a
                      Certified Public Accountant (CPA), licensed by the state
                      of New York, USA. In addition, he is an Affiliate Member
                      of the UAE Accountants and Auditors Association (AAA), a
                      Certified Cryptocurrency Auditor (CCA), and is fluent in
                      Arabic and English.
                    </p>
                    <p className="text-black text-justify">
                      Mahmoud's extensive experience and expertise, combined
                      with his dedication to delivering high-quality
                      professional services, make him a trusted partner for
                      clients in various sectors and industries.
                    </p>
                    <Link href={"https://www.linkedin.com/in/mahmoudmorsi"}>
                      <CustomButton
                        variant={"golden"}
                        className="flex items-center justify-center"
                      >
                        Connect with Mahmoud M. Morsi
                        {/* <Icons.linkedin className="h-4 w-4  ml-4 " /> */}
                        <FaLinkedin className="text-white h-4 w-4 ml-4" />
                      </CustomButton>
                    </Link>
                  </div>
                </div>
              }
            ></CustomDialog>
            <div className="col-3"></div>
          </div>
          {/* Row 2 */}
          <div className="row-2 grid grid-cols-3 w-full">
            <CustomDialog
              contentClassName="max-w-[95%] "
              trigger={
                <div className="employee flex flex-col items-center sm:m-[5px] m-4 justify-start cursor-pointer">
                  <Image
                    alt="haitham-jabak"
                    src={"/images/haitham-jabak.png"}
                    height={366}
                    width={326}
                  />
                  <h3 className="name heading text-golden mt-4 mb-0 text-center text-[12px] lg:text-[22px] xl:text-[26px] 2xl:text-[35px] sm:mb-0 xl:mb-0">
                    Haitham Jabak
                  </h3>
                  <p className="designation sub_heading text-center text-black sm:text-[7px] xl:text-[20px] sm:mb-0">
                    Director - Investment & Family Office Advisory
                  </p>
                </div>
              }
              content={
                <div className="w-full">
                  <div className="w-full flex items-center justify-start gap-4">
                    <div className="max-w-[50%] ">
                      <div className="sm:w-[105px] sm:h-[118px]">
                        <Image
                          alt="haitham-jabak"
                          src={"/images/haitham-jabak.png"}
                          width={163}
                          height={183}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-golden sub_heading text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px] mb-0">
                        Haitham Jabak
                      </h3>
                      <h3 className="text-black sub_heading text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
                        Director - Investment & Family Office Advisory
                      </h3>
                    </div>
                  </div>
                  <div className="content mt-6 ">
                    <p className="xl:text-black text-justify">
                      Haitham Jabak, Director of Investment & Family Office
                      Advisory at Morsi M Partners, has been instrumental in
                      spearheading the firm's specialized Investment & Family
                      Office initiatives.
                    </p>
                    <p className="xl:text-black text-justify">
                      With over a decade in Investment & Capital Markets,
                      Haitham has collaborated with leading Single-Family
                      Offices and major financial institutions, both listed and
                      non-listed.
                    </p>
                    <p className="xl:text-black text-justify">
                      His journey began in Jordan's telecom sector, soon
                      transitioning to Saudi Arabia where he made significant
                      transformative contributions to one of the Kingdom's
                      esteemed Family Offices. Following this, at Bupa Arabia,
                      he advanced their investment and treasury roles, setting a
                      new benchmark for one of Saudi's premier health insurance
                      companies.
                    </p>
                    <p className="xl:text-black text-justify">
                      After Bupa, he served as Treasurer at Bidaya Home Finance,
                      amplifying his reputation in treasury management. He
                      furthered his contributions by collaborating with another
                      Family Office in Saudi Arabia, orchestrating both
                      investment and treasury strategies for the family and
                      their expansive group.
                    </p>
                    <p className="xl:text-black text-justify">
                      His expertise includes custody selection, offshore
                      structuring, manager selection, due diligence, and both
                      Shariah and conventional investments. He is proficient in
                      real estate, private equity, cash management, and hedging
                      techniques, navigating sectors from Healthcare and
                      Pharmaceuticals to niche areas like AI - notably in realms
                      like Chatbots, Callbots, and Augmented Reality.
                    </p>
                    <p className="xl:text-black text-justify">
                      Haitham earned his Bachelor's degree in Finance from The
                      University of Jordan. His commitment to professional
                      advancement led him to acquire the Charter Financial
                      Consultant (CFC) from Vancouver, the Certified Accounting
                      Technician (CAT) from the USA, and an advanced diploma in
                      International Financial Consulting from British Columbia,
                      Canada. He's further honed his skills with specialized
                      training in Banking and Sukuk Valuation. With fluency in
                      both Arabic and English, Haitham adeptly navigates
                      cultural and linguistic nuances in the business realm.
                    </p>
                    <p className="xl:text-black text-justify">
                      In Haitham, Morsi M Partners' clients find a blend of vast
                      experience and an unwavering commitment to excellence. His
                      ethos emphasizes solutions tailored to individual client
                      needs, fostering partnerships that transcend the
                      transactional.
                    </p>
                    <Link
                      href={
                        "https://www.linkedin.com/in/haitham-jabak-4319a021"
                      }
                    >
                      <CustomButton
                        variant={"golden"}
                        className="flex items-center justify-center"
                      >
                        Connect with Haitham Jabak
                        {/* <Icons.linkedin className="h-4 w-4  ml-4 " /> */}
                        <FaLinkedin className="text-white h-4 w-4 ml-4" />
                      </CustomButton>
                    </Link>
                  </div>
                </div>
              }
            ></CustomDialog>
            <CustomDialog
              contentClassName="max-w-[95%] "
              trigger={
                <div className="employee flex flex-col items-center sm:m-[5px] m-4 justify-start cursor-pointer">
                  <Image
                    alt="mariam-absar"
                    src={"/images/mariam-absar.png"}
                    height={366}
                    width={326}
                  />
                  <h3 className="name heading text-golden mt-4 mb-0 text-center text-[12px] lg:text-[22px] xl:text-[26px] 2xl:text-[35px] sm:mb-0 xl:mb-0">
                    Mariam Absar
                  </h3>
                  <p className="designation sub_heading text-center text-black sm:text-[7px] xl:text-[20px] sm:mb-0">
                    Director - Risk & Controls
                  </p>
                </div>
              }
              content={
                <div className="w-full">
                  <div className="w-full flex items-center justify-start gap-4">
                    <div className="max-w-[50%] ">
                      <div className="sm:w-[105px] sm:h-[118px]">
                        <Image
                          alt="mariam-absar"
                          src={"/images/mariam-absar.png"}
                          width={163}
                          height={183}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-golden text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px] mb-0">
                        Mariam Absar
                      </h3>
                      <h3 className="text-black text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
                        Director - Risk & Controls
                      </h3>
                    </div>
                  </div>
                  <div className="content mt-6">
                    <p className="text-black text-justify">
                      Mariam Absar brings over a decade of experience in risk,
                      compliance, and management consultancy, showcasing her
                      in-depth expertise in compliance and regulatory
                      requirements.
                    </p>
                    <p className="text-black text-justify">
                      Her advisory portfolio is diverse and comprehensive,
                      encompassing various areas such as anti-money laundering,
                      compliance reviews, process improvement, and policy
                      development.
                    </p>
                    <p className="text-black text-justify">
                      Mariam has worked closely with key regulators in the UAE,
                      including Dubai Financial Services Authority (DFSA),
                      Financial Services Regulatory Authority (FSRA), Central
                      Bank of United Arab Emirates (CBUAE), and Securities and
                      Commodities Authority (SCA).
                    </p>
                    <p className="text-black text-justify">
                      In her capacity as an Authorized Compliance Officer and
                      Money Laundering Reporting Officer (MLRO), Mariam has made
                      substantial contributions to regulated financial services
                      entities in the UAE, further demonstrating her expertise
                      in the field.
                    </p>
                    <p className="text-black text-justify">
                      Commencing her career in 2012 as a Consultant with KPMG
                      TH&CO's Risk & Management Consulting Department, Mariam
                      gained valuable experience working closely with listed
                      banks, oil & gas companies, and public sector
                      organizations.
                    </p>
                    <p className="text-black text-justify">
                      In 2016, Mariam joined Grant Thornton UAE's Forensics &
                      Compliance Department, specializing in forensic reviews,
                      regulatory compliance, and FATCA / CRS services. She
                      played a pivotal role in driving successful projects
                      across multiple regions, including the UAE, Oman, and
                      Bahrain, exemplifying her adaptability and versatility.
                    </p>
                    <p className="text-black text-justify">
                      Mariam is a Fellow Chartered Accountant from the
                      Association of Chartered Certified Accountants (ACCA), and
                      holds a UAE Chartered Accountant certificate (UAECA) from
                      the Auditors & Accountants Association of the UAE (AAA).
                    </p>
                    <p className="text-black text-justify">
                      Mariam has earned a reputation as a trusted advisor,
                      providing a range of advisory services to both listed and
                      non-listed entities within the UAE.
                    </p>
                    <p className="text-black text-justify">
                      Mariam is also the Founder of Limitless Consulting UAE
                      that was founded in 2018.
                    </p>
                    <Link
                      href={
                        "https://www.linkedin.com/in/mariam-absar-fcca-7b6530b2/"
                      }
                    >
                      <CustomButton
                        variant={"golden"}
                        className="flex items-center justify-center"
                      >
                        Connect with Mariam Absar
                        {/* <Icons.linkedin className="h-4 w-4  ml-4 " /> */}
                        <FaLinkedin className="text-white h-4 w-4 ml-4" />
                      </CustomButton>
                    </Link>
                  </div>
                </div>
              }
            ></CustomDialog>
            <CustomDialog
              contentClassName="max-w-[95%] "
              trigger={
                <div className="employee flex flex-col items-center sm:m-[5px] m-4 justify-start cursor-pointer">
                  <Image
                    alt="steven-ireland"
                    src={"/images/steven-ireland.png"}
                    height={366}
                    width={326}
                  />
                  <h3 className="name heading text-golden mt-4 mb-0 text-center text-[12px] lg:text-[22px] xl:text-[26px] 2xl:text-[35px] sm:mb-0 xl:mb-0">
                    Steven Ireland
                  </h3>
                  <p className="designation sub_heading text-center text-black sm:text-[7px] xl:text-[20px] sm:mb-0">
                    Director - Tax
                  </p>
                </div>
              }
              content={
                <div className="w-full">
                  <div className="w-full flex items-center justify-start gap-4">
                    <div className="max-w-[50%] ">
                      <div className="sm:w-[105px] sm:h-[118px]">
                        <Image
                          alt="steven-ireland"
                          src={"/images/steven-ireland.png"}
                          width={163}
                          height={183}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-golden text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px] mb-0">
                        Steven Ireland
                      </h3>
                      <h3 className="text-black text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
                        Director - Tax
                      </h3>
                    </div>
                  </div>
                  <div className="content mt-6">
                    <p className="text-black text-justify">
                      Steven Ireland is the Head of Tax at Morsi M Partners,
                      bringing over 20 years of extensive and progressive tax
                      experience.
                    </p>
                    <p className="text-black text-justify">
                      After qualifying in 2002 and gaining experience as an
                      audit and tax supervisor, Steven joined KPMG UK's tax
                      practice in 2006, specializing in international tax
                      planning advice. In 2007, he transitioned to the M&A tax
                      team and relocated to the Middle East in 2010. Over the
                      years, Steven has worked with M&A and international tax
                      teams at KPMG, EY, and PwC in the UAE, Bahrain, and Saudi
                      Arabia, culminating in his role as Head of International
                      Tax at Grant Thornton. Steven is also a Director of the
                      British Business Group in the UAE.
                    </p>
                    <p className="text-black text-justify">
                      Steven's expertise covers a wide range of areas, including
                      M&A tax, international tax planning, VAT, corporate tax,
                      and Zakat advisory. He has been instrumental in assisting
                      multinational clients in performing VAT and Excise
                      implementation projects across the GCC, resulting in
                      cash-flow savings and superior VAT controls and
                      procedures.
                    </p>
                    <p className="text-black text-justify">
                      In his previous roles, Steven has been involved in
                      numerous significant engagements, including high-profile
                      deals and the world's largest initial public offering. He
                      has provided invaluable advice and guidance to
                      international and regional clients, from owner-managed
                      businesses to listed companies, and assisted in tax and
                      regulatory analyses for establishing regional treasury
                      centers in ADGM.
                    </p>
                    <p className="text-black text-justify">
                      Steven's thought leadership is evident in his published
                      articles and participation in webinars. He has shared
                      insights on topics such as the UAE's corporate tax,
                      economic substance regulations, country-by-country
                      reporting requirements, and more.
                    </p>
                    <p className="text-black text-justify">
                      Steven holds a Bachelor of Science (Honors) degree in
                      Business Mathematics with Applicable Mathematics from
                      Manchester Metropolitan University, Steven is also a
                      Chartered Certified Accountant (FCCA) with the Association
                      of Chartered Certified Accountants in the UK.
                    </p>
                    <Link href={"https://www.linkedin.com/in/stevenireland1"}>
                      <CustomButton
                        variant={"golden"}
                        className="flex items-center justify-center"
                      >
                        Connect with Steven Ireland
                        {/* <Icons.linkedin className="h-4 w-4  ml-4 " /> */}
                        <FaLinkedin className="text-white h-4 w-4 ml-4" />
                      </CustomButton>
                    </Link>
                  </div>
                </div>
              }
            ></CustomDialog>
          </div>
          {/* Row 3 New */}
          <div className="row-2 grid grid-cols-3 w-full">
            <CustomDialog
              contentClassName="max-w-[95%] "
              trigger={
                <div className="employee flex flex-col items-center sm:m-[5px] m-4 justify-start cursor-pointer">
                  <Image
                    alt="emad-bin-saleem"
                    src={"/images/emad-bin-saleem.png"}
                    height={366}
                    width={326}
                  />
                  <h3 className="name heading text-golden mt-4 mb-0 text-center text-[12px] lg:text-[22px] xl:text-[26px] 2xl:text-[35px] sm:mb-0 xl:mb-0">
                    Emad Bin Saleem
                  </h3>
                  <p className="designation sub_heading text-center text-black sm:text-[7px] xl:text-[20px] sm:mb-0">
                    Director - Forensic Advisory
                  </p>
                </div>
              }
              content={
                <div className="w-full">
                  <div className="w-full flex items-center justify-start gap-4">
                    <div className=" ">
                      <div className="sm:w-[105px] sm:h-[118px]">
                        <Image
                          alt="emad-bin-saleem"
                          src={"/images/emad-bin-saleem.png"}
                          width={163}
                          height={183}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-golden  mb-0 text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
                        Emad Bin Saleem
                      </h3>
                      <h3 className="text-black text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
                        Director - Forensic Advisory
                      </h3>
                    </div>
                  </div>
                  <div className="content mt-6">
                    <p className="text-black text-justify">
                      Emad Bin Saleem leads our Forensic Advisory division,
                      specializing in financial crime prevention, fraud risk
                      assessment, and fraud investigation.
                    </p>
                    <p className="text-black text-justify">
                      With over a decade of experience, Emad has orchestrated
                      key engagements in fraud investigations and arbitrations
                      across the UAE and GCC. His deep-seated expertise in risk
                      management has positioned him at the forefront of pivotal
                      investigations for premier companies.
                    </p>
                    <p className="text-black text-justify">
                      In recent years, Emad has played an instrumental role in
                      aiding large enterprises and financial institutions in
                      sculpting their fraud risk frameworks. He adeptly
                      identifies fraud scenarios involving a spectrum of
                      stakeholders, assesses the effectiveness of existing
                      controls, and offers counsel on enhancing risk mitigation
                      measures. His responsibilities extend to updating
                      board-level committees about the latest advances in fraud
                      detection, prevention, and investigation methodologies.
                    </p>
                    <p className="text-black text-justify">
                      In his advisory capacity, Emad has enhanced the corporate
                      governance and internal control structures of numerous
                      organizations, emphasizing robust fraud prevention. He has
                      partnered with esteemed banks on the integration of the
                      ICFR framework and has advised insurance and asset
                      management companies on instituting financial crime
                      prevention strategies.
                    </p>
                    <p className="text-black text-justify">
                      Additionally, Emad holds positions as an outsourced
                      compliance officer and MLRO for institutions regulated
                      under DIFC and ADGM. His work also encompasses the
                      evaluation of AML & CFT frameworks in alignment with UAE
                      regulations.
                    </p>
                    <p className="text-black text-justify">
                      Emad is a graduate of the University of Karachi, where he
                      earned his Bachelor of Science (Honors) in Actuarial
                      Science and Risk Management. His credentials also include
                      a certification as a Fraud Examiner from the Association
                      of Certified Fraud Examiners and an AML & Compliance
                      Management certification from Henley Business School.
                    </p>
                    <Link
                      href={
                        "https://www.linkedin.com/in/emad-bin-saleem-cfe-b159281a"
                      }
                    >
                      <CustomButton
                        variant={"golden"}
                        className="flex items-center justify-center"
                      >
                        Connect with Emad Bin Saleem
                        {/* <Icons.linkedin className="h-4 w-4  ml-4 " /> */}
                        <FaLinkedin className="text-white h-4 w-4 ml-4" />
                      </CustomButton>
                    </Link>
                  </div>
                </div>
              }
            ></CustomDialog>

            <CustomDialog
              contentClassName="max-w-[95%] "
              trigger={
                <div className="employee flex flex-col items-center sm:m-[5px] m-4 justify-start cursor-pointer">
                  <Image
                    alt="muhammad-hassaan-bhagat"
                    src={"/images/muhammad-hassaan-bhagat.png"}
                    height={366}
                    width={326}
                  />
                  <h3 className="name heading text-golden mt-4 mb-0 text-center text-[12px] lg:text-[22px] xl:text-[26px] 2xl:text-[35px] sm:mb-0 xl:mb-0">
                    Muhammad Hassaan Bhagat
                  </h3>
                  <p className="designation sub_heading text-center text-black sm:text-[7px] xl:text-[20px] sm:mb-0">
                    Director – Regulatory Compliance
                  </p>
                </div>
              }
              content={
                <div className="w-full">
                  <div className="w-full flex items-center justify-start gap-4">
                    <div className=" ">
                      <div className="sm:w-[105px] sm:h-[118px]">
                        <Image
                          alt="muhammad-hassaan-bhagat"
                          src={"/images/muhammad-hassaan-bhagat.png"}
                          width={163}
                          height={183}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-golden  mb-0 text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
                        Muhammad Hassaan Bhagat
                      </h3>
                      <h3 className="text-black  text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
                        Director – Regulatory Compliance
                      </h3>
                    </div>
                  </div>
                  <div className="content mt-6">
                    <p className="text-black text-justify">
                      Muhammad brings over 12 years of seasoned expertise in
                      regulatory, risk, compliance, forensics, and management
                      consulting, catering to an extensive clientele in the MENA
                      region and Pakistan.
                    </p>
                    <p className="text-black text-justify">
                      His comprehensive experience encompasses aiding both
                      financial and non-financial entities throughout MENA.
                      Muhammad's portfolio includes diverse assignments, such as
                      assisting with licensing in DIFC and ADGM, FATCA / CRS
                      compliance, business process re-engineering, policy
                      crafting, AML/CFT audits, and more.
                    </p>
                    <p className="text-black text-justify">
                      Beyond advisory, Muhammad serves as the Compliance Officer
                      and Money Laundering Reporting Officer for several
                      entities regulated within ADGM and DIFC. With a
                      specialized focus on FinTech firms and asset managers, his
                      rich background affords him a distinctive insight into the
                      intricate workings of the financial sector.
                    </p>
                    <p className="text-black text-justify">
                      Muhammad began his career at KPMG TH&CO, working across
                      diverse sectors from financial services to real estate. In
                      2014, he joined Grant Thornton's Regulatory Compliance and
                      Forensics Team, where he played a pivotal role in business
                      development and team expansion, successfully overseeing
                      projects across multiple jurisdictions.
                    </p>
                    <p className="text-black text-justify">
                      Muhammad is a Fellow Chartered Accountant certified by
                      ACCA. His professional qualifications include Certified
                      Internal Auditor (CIA), Project Management Professional
                      (PMP), Certified Internal Controls Auditor (CICA), and
                      Associate Forensic Auditor (AFA). Additionally, he earned
                      his Bachelor of Commerce degree from the University of
                      Karachi.
                    </p>
                    <p className="text-black text-justify">
                      Muhammad's thought leadership extends beyond his work, as
                      he regularly authors technical articles for international
                      magazines, aiming to enlighten the industry about evolving
                      compliance and business consulting nuances.
                    </p>
                    <Link
                      href={
                        "https://www.linkedin.com/in/muhammad-hassaan-bhagat-8b812b39"
                      }
                    >
                      <CustomButton
                        variant={"golden"}
                        className="flex items-center justify-center"
                      >
                        Connect with Muhammad Hassaan Bhagat
                        {/* <Icons.linkedin className="h-4 w-4  ml-4 " /> */}
                        <FaLinkedin className="text-white h-4 w-4 ml-4" />
                      </CustomButton>
                    </Link>
                  </div>
                </div>
              }
            ></CustomDialog>

            <CustomDialog
              contentClassName="max-w-[95%] "
              trigger={
                <div className="employee flex flex-col items-center sm:m-[5px] m-4 justify-start cursor-pointer">
                  <Image
                    alt="hazem-abdel-rahman"
                    src={"/images/hazem-abdel-rahman.png"}
                    height={366}
                    width={326}
                  />
                  <h3 className="name heading text-golden mt-4 mb-0 text-center text-[12px] lg:text-[22px] xl:text-[26px] 2xl:text-[35px] sm:mb-0 xl:mb-0">
                    Hazem Abdel Rahman
                  </h3>
                  <p className="designation sub_heading text-center text-black sm:text-[7px] xl:text-[20px] sm:mb-0">
                    Director - Actuarial Valuation
                  </p>
                </div>
              }
              content={
                <div className="w-full">
                  <div className="w-full flex items-center justify-start gap-4">
                    <div className="max-w-[50%] ">
                      <div className="sm:w-[105px] sm:h-[118px]">
                        <Image
                          alt="hazem-abdel-rahman"
                          src={"/images/hazem-abdel-rahman.png"}
                          width={163}
                          height={183}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-golden text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px] mb-0">
                        Hazem Abdel Rahman
                      </h3>
                      <h3 className="text-black text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
                        Director - Actuarial Valuation
                      </h3>
                    </div>
                  </div>
                  <div className="content mt-6">
                    <p className="text-black text-justify">
                      Hazem Abdel Rahman is an accomplished actuary and director
                      with a strong focus on actuarial valuations, particularly
                      in pensions and benefits. As a Fellow of the Society of
                      Actuaries, he brings extensive expertise to the field.
                    </p>
                    <p className="text-black text-justify">
                      Hazem holds a Bachelor’s degree in statistics from
                      Concordia University in Canada, providing a solid
                      foundation for his analytical approach to actuarial
                      science.
                    </p>
                    <p className="text-black text-justify">
                      With a wealth of experience spanning Canada and the Middle
                      East, Hazem offers a diverse perspective in actuarial
                      domains. He began his career as an actuarial consultant at
                      Canada's largest actuarial consulting firm, where his
                      precision and mastery quickly made him a sought-after
                      expert.
                    </p>
                    <p className="text-black text-justify">
                      In the UAE, Hazem served as the Head of the Retirement and
                      Actuarial Practice and Chief Actuary for a global
                      multinational firm in the Middle East. His leadership
                      transformed the pension and benefits landscape,
                      establishing him as a key figure in the actuarial
                      community.
                    </p>
                    <p className="text-black text-justify">
                      Hazem's expertise extends to collaboration with
                      governments in the GCC, where he provides comprehensive
                      solutions for social security pension programs, from
                      design to risk management.
                    </p>
                    <p className="text-black text-justify">
                      Notably, he has led actuarial efforts for the region's
                      largest institutional clients and multinational
                      corporations, demonstrating his proficiency in
                      International Financial Reporting Standards (IFRS),
                      including IAS 19R.
                    </p>
                    <p className="text-black text-justify">
                      Whether optimizing social security pension programs for
                      governments or navigating complex pension plans and IFRS
                      for organizations, Hazem is dedicated to delivering
                      strategic actuarial solutions, ensuring financial security
                      for his clients.
                    </p>
                    <Link href={"#"}>
                      <CustomButton
                        variant={"golden"}
                        className="flex items-center justify-center"
                      >
                        Connect with Hazem Abdel Rahman
                        {/* <Icons.linkedin className="h-4 w-4  ml-4 " /> */}
                        <FaLinkedin className="text-white h-4 w-4 ml-4" />
                      </CustomButton>
                    </Link>
                  </div>
                </div>
              }
            ></CustomDialog>
          </div>
          {/* Row 3 New */}
          {/* <div className="row-2 grid grid-cols-3 w-full">
  <CustomDialog
    contentClassName="max-w-[95%] "
    trigger={
      <div className="employee flex flex-col items-center justify-start sm:m-[5px] m-4 cursor-pointer col-span-2">
        <Image
          alt="emad-bin-saleem"
          src={"/images/emad-bin-saleem.png"}
          height={366}
          width={326}
        />
        <h3 className="name heading text-golden mt-4 mb-0 text-center text-[12px] lg:text-[22px] xl:text-[26px] 2xl:text-[35px] sm:mb-0 xl:mb-0">
          Emad Bin Saleem
        </h3>
        <p className="designation sub_heading text-center text-black sm:text-[7px] xl:text-[20px] sm:mb-0">
          Director - Forensic Advisory
        </p>
      </div>
    }
    content={
      <div className="w-full">
        <div className="w-full flex items-center justify-start gap-4">
          <div className=" ">
            <div className="sm:w-[105px] sm:h-[118px]">
              <Image
                alt="emad-bin-saleem"
                src={"/images/emad-bin-saleem.png"}
                width={163}
                height={183}
              />
            </div>
          </div>
          <div>
            <h3 className="text-golden  mb-0 text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
              Emad Bin Saleem
            </h3>
            <h3 className="text-black text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
              Director - Forensic Advisory
            </h3>
          </div>
        </div>
        <div className="content mt-6">
          <p className="text-black">
            Emad Bin Saleem leads our Forensic Advisory division, specializing
            in financial crime prevention, fraud risk assessment, and fraud
            investigation.
          </p>
          <p className="text-black">
            With over a decade of experience, Emad has orchestrated key
            engagements in fraud investigations and arbitrations across the UAE
            and GCC. His deep-seated expertise in risk management has positioned
            him at the forefront of pivotal investigations for premier
            companies.
          </p>
          <p className="text-black">
            In recent years, Emad has played an instrumental role in aiding
            large enterprises and financial institutions in sculpting their
            fraud risk frameworks. He adeptly identifies fraud scenarios
            involving a spectrum of stakeholders, assesses the effectiveness of
            existing controls, and offers counsel on enhancing risk mitigation
            measures. His responsibilities extend to updating board-level
            committees about the latest advances in fraud detection, prevention,
            and investigation methodologies.
          </p>
          <p className="text-black">
            In his advisory capacity, Emad has enhanced the corporate governance
            and internal control structures of numerous organizations,
            emphasizing robust fraud prevention. He has partnered with esteemed
            banks on the integration of the ICFR framework and has advised
            insurance and asset management companies on instituting financial
            crime prevention strategies.
          </p>
          <p className="text-black">
            Additionally, Emad holds positions as an outsourced compliance
            officer and MLRO for institutions regulated under DIFC and ADGM. His
            work also encompasses the evaluation of AML & CFT frameworks in
            alignment with UAE regulations.
          </p>
          <p className="text-black">
            Emad is a graduate of the University of Karachi, where he earned his
            Bachelor of Science (Honors) in Actuarial Science and Risk
            Management. His credentials also include a certification as a Fraud
            Examiner from the Association of Certified Fraud Examiners and an
            AML & Compliance Management certification from Henley Business
            School.
          </p>
          <Link
            href={"https://www.linkedin.com/in/emad-bin-saleem-cfe-b159281a"}
          >
            <CustomButton
              variant={"golden"}
              className="flex items-center justify-center"
            >
              Connect with Emad Bin Saleem
              <FaLinkedin className="text-white h-4 w-4 ml-4" />
            </CustomButton>
          </Link>
        </div>
      </div>
    }
  ></CustomDialog>

  <CustomDialog
    contentClassName="max-w-[95%] "
    trigger={
      <div className="employee flex flex-col items-center justify-start sm:m-[5px] m-4 cursor-pointer col-span-2">
        <Image
          alt="muhammad-hassaan-bhagat"
          src={"/images/muhammad-hassaan-bhagat.png"}
          height={366}
          width={326}
        />
        <h3 className="name heading text-golden mt-4 mb-0 text-center text-[12px] lg:text-[22px] xl:text-[26px] 2xl:text-[35px] sm:mb-0 xl:mb-0">
          Muhammad Hassaan Bhagat
        </h3>
        <p className="designation sub_heading text-center text-black sm:text-[7px] xl:text-[20px] sm:mb-0">
          Director – Regulatory Compliance
        </p>
      </div>
    }
    content={
      <div className="w-full">
        <div className="w-full flex items-center justify-start gap-4">
          <div className=" ">
            <div className="sm:w-[105px] sm:h-[118px]">
              <Image
                alt="muhammad-hassaan-bhagat"
                src={"/images/muhammad-hassaan-bhagat.png"}
                width={163}
                height={183}
              />
            </div>
          </div>
          <div>
            <h3 className="text-golden  mb-0 text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
              Muhammad Hassaan Bhagat
            </h3>
            <h3 className="text-black  text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
              Director – Regulatory Compliance
            </h3>
          </div>
        </div>
        <div className="content mt-6">
          <p className="text-black">
            Muhammad brings over 12 years of seasoned expertise in regulatory,
            risk, compliance, forensics, and management consulting, catering to
            an extensive clientele in the MENA region and Pakistan.
          </p>
          <p className="text-black">
            His comprehensive experience encompasses aiding both financial and
            non-financial entities throughout MENA. Muhammad's portfolio
            includes diverse assignments, such as assisting with licensing in
            DIFC and ADGM, FATCA / CRS compliance, business process
            re-engineering, policy crafting, AML/CFT audits, and more.
          </p>
          <p className="text-black">
            Beyond advisory, Muhammad serves as the Compliance Officer and Money
            Laundering Reporting Officer for several entities regulated within
            ADGM and DIFC. With a specialized focus on FinTech firms and asset
            managers, his rich background affords him a distinctive insight into
            the intricate workings of the financial sector.
          </p>
          <p className="text-black">
            Muhammad began his career at KPMG TH&CO, working across diverse
            sectors from financial services to real estate. In 2014, he joined
            Grant Thornton's Regulatory Compliance and Forensics Team, where he
            played a pivotal role in business development and team expansion,
            successfully overseeing projects across multiple jurisdictions.
          </p>
          <p className="text-black">
            Muhammad is a Fellow Chartered Accountant certified by ACCA. His
            professional qualifications include Certified Internal Auditor
            (CIA), Project Management Professional (PMP), Certified Internal
            Controls Auditor (CICA), and Associate Forensic Auditor (AFA).
            Additionally, he earned his Bachelor of Commerce degree from the
            University of Karachi.
          </p>
          <p className="text-black">
            Muhammad's thought leadership extends beyond his work, as he
            regularly authors technical articles for international magazines,
            aiming to enlighten the industry about evolving compliance and
            business consulting nuances.
          </p>
          <Link
            href={
              "https://www.linkedin.com/in/muhammad-hassaan-bhagat-8b812b39"
            }
          >
            <CustomButton
              variant={"golden"}
              className="flex items-center justify-center"
            >
              Connect with Muhammad Hassaan Bhagat
              <FaLinkedin className="text-white h-4 w-4 ml-4" />
            </CustomButton>
          </Link>
        </div>
      </div>
    }
  ></CustomDialog>

  <CustomDialog
    contentClassName="max-w-[95%] "
    trigger={
      <div className="employee flex flex-col items-center sm:m-[5px] m-4 justify-start cursor-pointer">
        <Image
          alt="hazem-abdel-rahman"
          src={"/images/hazem-abdel-rahman.png"}
          height={366}
          width={326}
        />
        <h3 className="name heading text-golden mt-4 mb-0 text-center text-[12px] lg:text-[22px] xl:text-[26px] 2xl:text-[35px] sm:mb-0 xl:mb-0">
          Hazem Abdel Rahman
        </h3>
        <p className="designation sub_heading text-center text-black sm:text-[7px] xl:text-[20px] sm:mb-0">
          Director - Tax
        </p>
      </div>
    }
    content={
      <div className="w-full">
        <div className="w-full flex items-center justify-start gap-4">
          <div className="max-w-[50%] ">
            <div className="sm:w-[105px] sm:h-[118px]">
              <Image
                alt="hazem-abdel-rahman"
                src={"/images/hazem-abdel-rahman.png"}
                width={163}
                height={183}
              />
            </div>
          </div>
          <div>
            <h3 className="text-golden text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px] mb-0">
              Hazem Abdel Rahman
            </h3>
            <h3 className="text-black text-[14px] md:text-[14px] lg:text-[24px] xl:text-[25px] 2xl:text-[25px]">
              Director
            </h3>
          </div>
        </div>
        <div className="content mt-6">
          <p className="text-black">
            Hazem Abdel Rahman is an accomplished actuary and director with a
            strong focus on actuarial valuations, particularly in pensions and
            benefits. As a Fellow of the Society of Actuaries, he brings
            extensive expertise to the field.
          </p>
          <p className="text-black">
            Hazem holds a Bachelor’s degree in statistics from Concordia
            University in Canada, providing a solid foundation for his
            analytical approach to actuarial science.
          </p>
          <p className="text-black">
            With a wealth of experience spanning Canada and the Middle East,
            Hazem offers a diverse perspective in actuarial domains. He began
            his career as an actuarial consultant at Canada's largest actuarial
            consulting firm, where his precision and mastery quickly made him a
            sought-after expert.
          </p>
          <p className="text-black">
            In the UAE, Hazem served as the Head of the Retirement and Actuarial
            Practice and Chief Actuary for a global multinational firm in the
            Middle East. His leadership transformed the pension and benefits
            landscape, establishing him as a key figure in the actuarial
            community.
          </p>
          <p className="text-black">
            Hazem's expertise extends to collaboration with governments in the
            GCC, where he provides comprehensive solutions for social security
            pension programs, from design to risk management.
          </p>
          <p className="text-black">
            Notably, he has led actuarial efforts for the region's largest
            institutional clients and multinational corporations, demonstrating
            his proficiency in International Financial Reporting Standards
            (IFRS), including IAS 19R.
          </p>
          <p className="text-black">
            Whether optimizing social security pension programs for governments
            or navigating complex pension plans and IFRS for organizations,
            Hazem is dedicated to delivering strategic actuarial solutions,
            ensuring financial security for his clients.
          </p>
          <Link href={"#"}>
            <CustomButton
              variant={"golden"}
              className="flex items-center justify-center"
            >
              Connect with Hazem Abdel Rahman
              <FaLinkedin className="text-white h-4 w-4 ml-4" />
            </CustomButton>
          </Link>
        </div>
      </div>
    }
  ></CustomDialog>
</div> */}
        </div>
      </section>

      {/* Contact us */}
      <ContactusSec />
    </main>
  );
};

export default OurTeam;
