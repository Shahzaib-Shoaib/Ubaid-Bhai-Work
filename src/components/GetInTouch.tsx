import Link from 'next/link'
import React from 'react'
import CustomButton from './customui/CustomButton'

const GetInTouch: React.FC = () => {
  return (
    <section className="get-in-touch flex h-[57vh] sm:h-[230px]">
      <div className="img bg-[url('/images/footbanner1.jpg')] w-[50%] bg-cover "></div>
      <div className="content  bg-[url('/images/footbanner2.jpg')] w-[50%] bg-cover div_section flex flex-col items-between justify-center gap-2 sm:p-4">
        <h2 className="text-white mb-5 xl:w-[90%] text-[12px] lg:text-[24px] xl:text-[28px] 2xl:text-[37px] !font-normal xl:leading-[36px] 2xl:leading-[44px]">We are here to support you to elevate and propel your business, unlock new ideas, and unveil opportunities for sustainable growth</h2>
        <Link href={"/contact-us"} className="w-fit 2xl:-mt-[6px]">
          <CustomButton variant={"light"}>
            Get in Touch
          </CustomButton>
        </Link>
      </div>
    </section>
  )
}

export default GetInTouch
