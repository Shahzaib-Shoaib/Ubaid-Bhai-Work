import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icons } from "./Icons";
import { FaLinkedin, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


const Footer: React.FC = () => {
  return (
    <footer className="bg-black font-medium ">
      {/* Footer */}
      <div className="footer text-white p-4 lg:p-12 xl:p-11 2xl:p-14 w-full inline-block">
        {/* Footer Logo / Column 1 */}
        <div className="footerlogo h-[50px] logo-col-footer">
          <img
            src={"/images/logo.png"}
            alt="Morsi M Partners"
            className="sm:w-[145px] sm:h-[38px] 2xl:w-[290px] 2xl:h-[76px]"
          />
        </div>

        {/* Quick Links / Column 2 */}
        <div className="quick-links first-col-footer flex flex-col gap-2 2xl:-ml-5">
          <h2 className="footer-heading text-golden text-[24px] 2xl:text-[27px] pb-2">
            Quick Links
          </h2>
          <Link className="link pb-1" href={"/about-us"}>
            About
          </Link>
          <Link className="link pb-1" href={"/services"}>
            Services
          </Link>
          <Link className="link pb-1" href={"/our-team"}>
            Our Team
          </Link>
          <Link className="link pb-1" href={"/careers"}>
            Careers
          </Link>
          <Link className="link pb-1" href={"/contact-us"}>
            Contact us
          </Link>
        </div>

        {/* Our Services / Column 3 */}
        <div className="our-services flex flex-col gap-2 2xl:-ml-5">
          <h2 className="footer-heading text-golden text-[24px] 2xl:text-[27px] pb-2">
            Our Services
          </h2>
          <Link className="link pb-1" href={"/services/finance-accounting"}>
            Finance & Accounting
          </Link>
          <Link className="link pb-1" href={"/services/corporate-finance-advisory"}>
            Corporate Finance Advisory
          </Link>
          <Link className="link pb-1" href={"/services/tax"}>
            Tax
          </Link>
          <Link
            className="link pb-1"
            href={"/services/investment-family-office-advisory"}
          >
            Investment & Family Office Advisory
          </Link>
          <Link className="link pb-1" href={"/services/risk-regulatory-advisory"}>
            Risk & Regulatory Advisory
          </Link>
          <Link className="link pb-1" href={"/services/management-consulting"}>
            Management Consulting
          </Link>
        </div>

        {/* Contact / Column 4 */}
        <div className="details 2xl:ml-6">
          <div className="contact flex flex-col gap-2 mb-6">
            <h2 className="footer-heading text-golden text-[24px] 2xl:text-[27px] pb-2">
              Contact
            </h2>
            <Link
              className="link hover:text-golden flex items-center gap-2 mb-2"
              href={"mailto:Info@morsimpartners.com"}
            >
              <div className="icon rounded-full text-white bg-golden h-7 w-7 flex items-center justify-center">
                {/* <Icons.mail className="h-3 w-3 text-white " /> */}
                <IoMdMail className="text-white h-4 w-4" />
              </div>
              Info@morsimpartners.com
            </Link>
            <Link
              className="link hover:text-golden flex items-center  gap-2"
              href={""}
            >
              <div className="icon rounded-full bg-golden h-7 w-7 flex items-center justify-center">
                {/* <Icons.mapPin className="h-3 w-3  text-white " /> */}
                <FaMapMarkerAlt className="text-white h-4 w-4" />
              </div>
              Dubai, UAE
            </Link>
          </div>

          <div className="follow-us flex flex-col gap-2">
            <h2 className="footer-heading text-golden text-[24px] 2xl:text-[27px] pb-3">
              Follow us
            </h2>
            <div className="flex gap-2 items-center">
              <Link
                className="link hover:text-golden flex items-center gap-2"
                href={"https://www.linkedin.com/company/morsimpartners/"}
              >
                <div className="icon rounded-full bg-golden h-7 w-7 flex items-center justify-center ">
                  {/* <Icons.linkedin className="h-3 w-3 text-white" /> */}
                  <FaLinkedin className="text-white h-4 w-4" />
                </div>
              </Link>
              <Link
                className="link hover:text-golden flex items-center  gap-2"
                href={"https://www.youtube.com/channel/UCs9ZjAbeMUOfLs0U2vHHJRA"}
              >
                <div className="icon rounded-full bg-golden h-7 w-7 flex items-center justify-center ">
                  {/* <Icons.youtube className="h-3 w-3 text-white" /> */}
                  <FaYoutube className="text-white h-4 w-4" />
                </div>
              </Link>
            </div>
          </div>
        </div>


      </div>
      <div className="pl-[3rem] sm:pl-[1rem] pb-2 text-white text-[9px] 2xl:text-[16px] w-[430px]">Morsi M Partners ® is a registered trademark. © 2023. All Rights Reserved.</div>

      {/* Copyright */}
      <div className="copyright border-t border-t-greyborder flex items-center justify-center text-white py-[10px] px-[50px] xl:py-[10px] xl:px-[50px] 2xl:py-[20px] 2xl:px-[50px]">
        <Link
          className="link px-3 border-r border-r-white text-[20px] sm:text-[14px] bold"
          href={"/privacy-policy"}
        >
          Privacy Policy
        </Link>
        <Link className="link px-3 text-[20px] sm:text-[14px] bold" href={"/terms-conditions"}>
          Terms & Condition
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
