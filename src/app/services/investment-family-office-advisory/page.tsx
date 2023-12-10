import ContactusSec from '@/components/ContactusSec'
import Header from '@/components/Header'
import CustomButton from '@/components/customui/CustomButton'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Investment Family Offic eAdvisory | Morsi M Partners',
  description: 'An independent advisory and professional services firm  We are UAE born, with a global network, reach, and outlook',
}

const InvestmentFamilyOfficeAdvisory = () => {
  return (
    <main className="investment-family-office-advisory-page">
      <Header />
      <div className="bg-black h-[70px] lg:h-[90px] w-full block xl:hidden 2xl:hidden"></div>
      {/* Banner */}
      <section className="banner div_section bg-[url('/images/investment-banner.png')] bg-cover bg-center relative flex items-center justify-center sm:p-0 w-full overflow-hidden sm:h-[200px] xl:h-[500px] 2xl:h-[640px] ">
        <div className="info maxw w-full h-full flex flex-col items-center justify-center my-auto xl:my-[100px] 2xl:my-[100px]">
          <div className="content flex flex-col items-start justify-center px-4 h-full">
            <h2 className="normal_heading text-white mb-3 sm:mb-1 xl:text-[30px] 2xl:text-[50px]">Investment & Family Office Advisory</h2>
            <h2 className="heading text-golden mb-3 sm:mb-1 xl:text-[30px] 2xl:text-[30px]">
            Helping you today to create legacies for tomorrow's generations
            </h2>
            <p className="golden_heading text-white sm:text-[10px] xl:text-[23px] 2xl:text-[23px] sm:mb-2 xl:w-[85%]">
            Our differentiated and pioneering expertise helps you unlock new investment opportunities across a broad spectrum of asset classes and create a sound governance framework to preserve and grow your wealth. 
            </p>
            <p className="golden_heading text-white sm:text-[10px] xl:text-[23px] 2xl:text-[23px] ">
            We advise you with care and precision, while giving you full control over your portfolio
              <Link
                href={"investment-family-office-advisory/#our-investment-family-office-advisory-services"}
                className="text-golden underline ml-1"
              >
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Our Investment & Family Office Advisory services */}
      <section
        id="our-investment-family-office-advisory-services"
        className="our-tax-services div_section bggolden  overflow-hidden"
      >
        <div className="maxw mx-auto flex flex-col items-center justify-center">
          <h2 className="section_heading py-1 w-fit text-center border-b border-b-golden sm:text-[16px] 2xl:leading-[40px]">
          Our Investment & Family Office Advisory services
          </h2>
          <div className="content my-7 xl:mt-14 2xl:mt-14 sm:mt-4  w-full">
            <p className="text-textgrey">
            At MMP, we provide Investment & Family Office Advisory services that are tailored to your unique investment needs, along with personalized solutions for managing your portfolio and family business.
            </p>
            <p className="text-textgrey">
            Our services include: 
            </p>
            <ul className="points plist list-outside ml-4">
              <li className="p mb-[14px]">Investment & Asset Allocation Advisory - We provide bespoke investment advice across different strategies, asset classes, and regions that aligns with your risk profile and investment objectives.</li>
              <li className="p mb-[14px]">Family Office Advisory - We offer guidance on Family Office structure and governance, wealth planning, investment management, in addition to banking and custody solutions to help you create a legacy that will stand the test of time.</li>
            </ul>
            <p className="text-textgrey mt-4">
            With our deep expertise, strategic partnerships, and global network, we are dedicated to helping you achieve your financial goals and preserve and grow your family’s wealth for future generations.
            </p>
            <Tabs defaultValue="investment-asset-allocation-advisory" className="w-full mt-4">
              <TabsList className="w-full h-fit grid grid-cols-2 bg-transparent gap-1 xl:gap-2 2xl:gap-2 mb-4">
                <TabsTrigger
                  id="investment-asset-allocation-advisory"
                  value="investment-asset-allocation-advisory"
                  className="whitespace-normal h-full p-2 py-4 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black  hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                 Investment & Asset Allocation Advisory
                </TabsTrigger>
                <TabsTrigger
                  id="family-office-advisory"
                  value="family-office-advisory"
                  className="whitespace-normal h-full p-2 py-4 text-[6px] md:text-[10px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] border-t-4 border-t-transparent bg-black text-white hover:bg-white hover:text-black hover:border-t-4 hover:border-t-golden data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-b-0 data-[state=active]:border-t-4 data-[state=active]:border-t-golden w-full"
                >
                  Family Office Advisory
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="investment-asset-allocation-advisory"
                className="bg-white text-textgrey p-4 2xl:pr-32"
              >
                <p>
                Our Investment & Asset Allocation Advisory solutions are designed to help you achieve your investment objectives while you retain full control over your portfolio and investments. We provide tailored investment advice that aligns with your risk profile across different strategies, asset classes, and regions.
                </p>
                <p>
                With our extensive expertise and broad access to a wide spectrum of asset classes, including equities, bonds, investment funds, and alternative investments; both conventional and Shariah based instruments, we are uniquely positioned to advise on:
                </p>
                <ul className="points plist list-outside ml-4">
                  <li className="p mb-1">Tactical and Strategic asset allocation.</li>
                  <li className="p mb-1">Hedging techniques.</li>
                  <li className="p mb-1">Innovative investment selection opportunities that are bespoke to your strategy and risk appetite.</li>
                </ul>
              </TabsContent>
              <TabsContent
                value="family-office-advisory"
                className="bg-white text-textgrey p-4"
              >
                <p>
                At MMP, we are dedicated to helping you create a legacy that will stand the test of time.
                </p>
                <p>
                We recognize Family businesses as a cornerstone to the Middle East’s economies. This is precisely why our Family Office Advisory services are tailored to meet your specific needs, providing you with personalized solutions that add distinguished value to your business.
                </p>
                <p>Drawing on our extensive advisory expertise, strategic partnerships, and global network, we deliver tailored guidance and value-added solutions to support the unique needs of your family business.</p>
                <div className="w-full">
                  <div className="content">
                    <Accordion
                      type="multiple"
                      className="w-full items-center justify-center"
                    >
                      <AccordionItem value="Family-Office-Structure-Governance" className='my-6'>
                      <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                        <ul className="points accordionlist">
                            <li className="accordion mt-1 sm:m-0 sm:text-[14px] mb-0">
                            Family Office Structure & Governance
                            </li>
                          </ul>
                      </AccordionTrigger>
                      <AccordionContent className='p-4 pb-0'>
                        <p>We can assist you in establishing the key elements of a family office, including its structure, charter, constitution, governance, and risk framework.</p>
                        <p>We firmly believe that a business’s long-term value creation hinges on certain fundamental elements of sound governance practices. At MMP, we specialize in helping you establish this strong foundation for sustained success.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Banking-Custody-solutions" className='my-6'>
                      <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                        <ul className="points accordionlist">
                            <li className="accordion mt-1 sm:m-0 sm:text-[14px] mb-0">
                            Banking & Custody solutions
                            </li>
                          </ul>
                      </AccordionTrigger>
                      <AccordionContent className='p-4 pb-0'>
                        <p>We understand that the banking and custodial relationships of your family office are critical to achieving your financial goals and ensuring peace of mind.</p>
                        <p>We work with you to identify and implement customized banking and custody solutions that are aligned with your unique business and investment objectives.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Generational-Wealth-Planning" className='my-6'>
                      <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                        <ul className="points accordionlist">
                            <li className="accordion mt-1 sm:m-0 sm:text-[14px] mb-0">
                            Generational Wealth Planning
                            </li>
                          </ul>
                      </AccordionTrigger>
                      <AccordionContent className='p-4 pb-0'>
                        <p>Whether you are an entrepreneur, second, or third generation of the family, the responsibility of preserving and growing the family’s wealth requires a solid foundation of wealth governance.</p>
                        <p>Our team can help establish an investment strategy with short-, medium-, and long-term objectives to ensure the growth and longevity of your family’s wealth.</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Wealth-planning-and-investment-management-solutions" className='my-6'>
                      <AccordionTrigger className="hover:no-underline bg-pinkish border-l-4 border-l-golden p-3">
                        <ul className="points accordionlist">
                            <li className="accordion mt-1 sm:m-0 sm:text-[14px] text-left mb-0">
                            Wealth planning and investment management solutions
                            </li>
                          </ul>
                      </AccordionTrigger>
                      <AccordionContent className='p-4 pb-0'>
                        <p>We tailor our wealth planning and investment management solutions to fulfill your financial goals in line with your investment philosophy.</p>
                        <p>We cover a broad spectrum of asset classes that you can access (equities, bonds, investment funds, and alternative investments) both conventional and Shariah based instruments.</p>
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
              href={"/services/risk-regulatory-advisory"}
              className="w-full"
            >
              <p className="mb-0 skew-x-20 skewedlinks">Risk & Regulatory Advisory</p>
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
  )
}

export default InvestmentFamilyOfficeAdvisory