"use client";
import { config } from "@/config/config";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "./customui/CustomButton";
import Search from "@/components/Search"
import { Icons } from "./Icons";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [services, setServices] = useState<boolean>(false);
  const [subCategory, setSubCategory] = useState<string>("");
  const [navColor, setNavColor] = useState<boolean>(false);
  const changeNavColor = () => {
    if (window.scrollY >= 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
  }, []);

  return (
    <header className={`header fixed top-0 z-10 border-b border-b-white min-w-full text-white py-[10px] px-[15px] lg:py-[20px] lg:px-[30px] xl:py-[10px] xl:px-[50px] 2xl:py-[8px] 2xl:px-[50px] ${navColor ? "bg-black" : "bg-transparent"}`}>
      <div className="flex items-center justify-between fluideContainer">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            alt={config.logo.alt}
            src={config.logo.src}
            width={config.logo.width}
            height={config.logo.height}
          />
        </Link>

        {/* Nav Menu */}
        <nav className="nav hidden xl:flex 2xl:flex items-center h-full justify-center text-[18px] leading-[20px] gap-4">

          <Link
            href={"/about-us"}
            className={"transition duration-300 hover:text-golden px-[12px] py-[13px]"}
          >
            About us
          </Link>
          <div className="group/dropdown h-full">
            <Link
              href={"/services"}
              className={
                "transition duration-300 hover:text-golden flex gap-4 group/drop px-[28px] py-[13px] relative"
              }
            >
              Services
              <Icons.chevrondown className="h-5 w-5 mt-0 absolute right-1 text-white group-hover/drop:text-golden transition duration-300" />
            </Link>
            <div className="invisible absolute left-0 top-[60px]  p-4 transition-all duration-500 z-50  w-screen h-[350px] bg-black text-gray-800 shadow-xl group-hover/dropdown:visible">
              <div className="maxw relative">
                <ul>
                  <li className="m-0">
                    <div className="group/finance-accounting inline-flex w-fit hover:w-auto ">
                      <Link
                        href={"/services/finance-accounting"}
                        className={
                          "transition duration-300 min-w-[400px] border-r-2 border-r-golden px-4 py-2 hover:bg-golden text-white flex items-center justify-between group-hover/finance-accounting:bg-golden"
                        }
                      >
                        Finance & Accounting
                        <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                      </Link>
                      <div className="hidden group-hover/finance-accounting:inline-flex text-[18px] text-white min-w-full flex-col absolute top-0 left-[400px] h-[400px] transition-all duration-500">
                        <Link
                          href={
                            "/services/finance-accounting/#financial-reporting"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Financial Reporting
                        </Link>
                        <Link
                          href={
                            "/services/finance-accounting/#finance-value-creation"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Finance Value Creation
                        </Link>
                        <Link
                          href={
                            "/services/finance-accounting/#technical-accounting-advisory"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Technical Accounting Advisory
                        </Link>
                        <Link
                          href={
                            "/services/finance-accounting/#accounting-administration"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Financial Reporting
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="m-0">
                    <div className="group/corporate-finance-advisory inline-flex w-fit hover:w-auto">
                      <Link
                        href={"/services/corporate-finance-advisory"}
                        className={
                          "transition duration-300 min-w-[400px] border-r-2 border-r-golden px-4 py-2 hover:bg-golden text-white flex items-center justify-between group-hover/corporate-finance-advisory:bg-golden"
                        }
                      >
                        Corporate Finance Advisory
                        <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                      </Link>
                      <div className="hidden group-hover/corporate-finance-advisory:inline-flex text-[18px] text-white min-w-full py-4 flex-col absolute top-0 left-[400px] h-[400px] transition-all duration-500">
                        <Link
                          href={
                            "/services/corporate-finance-advisory/#business-valuation"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Business Valuation
                        </Link>
                        <Link
                          href={
                            "/services/corporate-finance-advisory/#capital-structuring-restructuring"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Capital Structuring & Restructuring
                        </Link>
                        <Link
                          href={
                            "/services/corporate-finance-advisory/#financial-modeling"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Financial Modeling
                        </Link>
                        <Link
                          href={
                            "/services/corporate-finance-advisory/#ma-buy-side-sell-side-advisory"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          M&A Buy-side & Sell-side advisory
                        </Link>
                        <Link
                          href={
                            "/services/corporate-finance-advisory/#startups-fundraising"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Startups Fundraising
                        </Link>
                        <Link
                          href={
                            "/services/corporate-finance-advisory/#deal-documentation-support-coordination"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Deal Documentation Support & Coordination
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="m-0">
                    <div className="group/tax inline-flex w-fit hover:w-auto">
                      <Link
                        href={"/services/tax"}
                        className={
                          "transition duration-300 min-w-[400px] border-r-2 border-r-golden px-4 py-2 hover:bg-golden text-white flex items-center justify-between group-hover/tax:bg-golden"
                        }
                      >
                        Tax
                        <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                      </Link>
                      <div className="hidden group-hover/tax:inline-flex text-[18px] text-white min-w-full py-4 flex-col absolute top-0 left-[400px] h-[400px] transition-all duration-500">
                        <Link
                          href={"/services/tax/#value-added-tax"}
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Value Added Tax
                        </Link>
                        <Link
                          href={"/services/tax/#corporate-tax"}
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Corporate Tax
                        </Link>
                        <Link
                          href={"/services/tax/#transfer-pricing-advisory"}
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Transfer Pricing Advisory
                        </Link>
                        <Link
                          href={"/services/tax/#excise-tax"}
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Excise Tax
                        </Link>
                        <Link
                          href={"/services/tax/#international-tax"}
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          International Tax
                        </Link>
                        <Link
                          href={"/services/tax/#mergers"}
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Mergers & Acquisitions Tax planning and due diligence
                        </Link>
                        <Link
                          href={"/services/tax/#fatca"}
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          FATCA and CRS Advisory
                        </Link>
                        <Link
                          href={"/services/tax/#zakat-advisory"}
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Zakat Advisory
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="m-0">
                    <div className="group/investment-family-office-advisory inline-flex w-fit hover:w-auto">
                      <Link
                        href={"/services/investment-family-office-advisory"}
                        className={
                          "transition duration-300 min-w-[400px] border-r-2 border-r-golden px-4 py-2 hover:bg-golden text-white flex items-center justify-between  group-hover/investment-family-office-advisory:bg-golden"
                        }
                      >
                        Investment & Family Office Advisory
                        <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                      </Link>
                      <div className="hidden group-hover/investment-family-office-advisory:inline-flex text-[18px]  text-white min-w-full py-4 flex-col absolute top-0 left-[400px] h-[400px] transition-all duration-500">
                        <Link
                          href={
                            "/services/investment-family-office-advisory/#investment-asset-allocation-advisory"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Investment & Asset Allocation Advisory
                        </Link>
                        <Link
                          href={
                            "/services/investment-family-office-advisory/#family-office-advisory"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Family Office Advisory
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="m-0">
                    <div className="group/risk-regulatory-advisory inline-flex w-fit hover:w-auto">
                      <Link
                        href={"/services/risk-regulatory-advisory"}
                        className={
                          "transition duration-300 min-w-[400px] border-r-2 border-r-golden px-4 py-2 hover:bg-golden text-white flex items-center justify-between group-hover/risk-regulatory-advisory:bg-golden"
                        }
                      >
                        Risk & Regulatory Advisory
                        <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                      </Link>
                      <div className="hidden group-hover/risk-regulatory-advisory:inline-flex text-[18px]  text-white min-w-full py-4 flex-col absolute top-0 left-[400px] h-[400px] transition-all duration-500">
                        <Link
                          href={
                            "/services/risk-regulatory-advisory/#risk-controls"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Risk & Controls
                        </Link>
                        <Link
                          href={
                            "/services/risk-regulatory-advisory/#regulatory-compliance"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Regulatory Compliance
                        </Link>
                        <Link
                          href={
                            "/services/risk-regulatory-advisory/#forensic-advisory"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Forensic Advisory
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="m-0">
                    <div className="group/management-consulting inline-flex w-fit hover:w-auto">
                      <Link
                        href={"/services/management-consulting"}
                        className={
                          "transition duration-300 min-w-[400px] border-r-2 border-r-golden px-4 py-2 hover:bg-golden text-white flex items-center justify-between group-hover/management-consulting:bg-golden"
                        }
                      >
                        Management Consulting
                        <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                      </Link>
                      <div className="hidden group-hover/management-consulting:inline-flex text-[18px]  text-white min-w-full py-4 flex-col absolute top-0 left-[400px] h-[400px] transition-all duration-500">
                        <Link
                          href={
                            "/services/management-consulting/#business-operations-transformation-advisory"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Business Operations & Transformation Advisory
                        </Link>
                        <Link
                          href={
                            "/services/management-consulting/#growth-strategy-advisory"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Growth Strategy Advisory
                        </Link>
                        <Link
                          href={
                            "/services/management-consulting/#data-analytics"
                          }
                          className={
                            "transition duration-300 w-full px-4 py-2 hover:bg-golden text-white"
                          }
                        >
                          Data Analytics
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link
            href={"/our-team"}
            className={"transition duration-300 hover:text-golden  px-[12px] py-[13px]"}
          >
            Our Team
          </Link>
          <Link
            href={"/careers"}
            className={"transition duration-300 hover:text-golden  px-[12px] py-[13px]"}
          >
            Careers
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center justify-center">
          <Link
            href={"/contact-us"}
            className="hidden xl:flex 2xl:flex items-center justify-center"
          >
            <CustomButton variant={"golden"}>Contact us</CustomButton>
          </Link>
          <Search />
          <div className="flex xl:hidden 2xl:hidden">
            <div
              className="menu-icon bg-black rounded-sm p-1 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Icons.menu className="h-6 w-6  text-golden " />
            </div>
          </div>
          <div
            className={`w-[350px] p-0 bg-black h-full right-0 fixed z-[60] top-0  text-white transition ease-in-out animate-in  overflow-x-hidden overflow-y-auto ${isOpen ? "-translate-x-0 duration-500" : "translate-x-full duration-0"
              }`}
          >
            <div className="relative min-h-full  text-[20px]">
              <ul>
                <li>
                  <div
                    className={
                      "transition duration-300 w-full p-4 text-white flex items-center justify-end "
                    }
                  >
                    <Icons.x
                      className="h-5 w-5 -rotate-90 text-white  cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                </li>
                <li>
                  <Link
                    href={"/about-us"}
                    className={
                      "transition duration-300 w-full p-4 hover:bg-golden text-white block"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <div className="w-full h-fit flex items-center justify-between hover:bg-golden hover:cursor-pointer">
                    <Link
                      href={"/services"}
                      className={
                        "transition duration-300 w-full p-4 text-white flex items-center justify-between"
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Link>
                    <div
                      className="h-full w-6"
                      onClick={(e) => {
                        setServices(true);
                      }}
                    >
                      <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                    </div>
                  </div>
                  {/* Settings Menu */}
                  <div
                    className={`w-full h-full absolute z-[60] top-0 bg-black text-white transition ease-in-out animate-in  duration-500 overflow-y-auto overflow-x-hidden ${services ? "-translate-x-0 " : "translate-x-full"
                      }`}
                  >
                    <div
                      className="flex items-center justify-start gap-4 w-full py-4 bg-golden hover:cursor-pointer px-2"
                      onClick={() => {
                        setServices(false);
                      }}
                    >
                      <Icons.chevrondown className="h-5 w-5 rotate-90 text-white " />
                      Back
                    </div>
                    <ul>
                      <li>
                        <div className="w-full h-fit flex items-center justify-between hover:bg-golden hover:cursor-pointer">
                          <Link
                            href={"/services/finance-accounting"}
                            className={
                              "transition duration-300 w-full p-4 hover:bg-golden text-white  flex items-center justify-between"
                            }
                            onClick={() => {
                              setServices(false);
                              setIsOpen(false);
                            }}
                          >
                            Finance & Accounting
                          </Link>
                          <div
                            className="h-full w-6"
                            onClick={(e) => {
                              setSubCategory("finance-accounting");
                            }}
                          >
                            <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                          </div>
                        </div>
                        {/* Finance & Accounting */}
                        <div
                          className={`w-full h-full absolute z-[70] top-0 bg-black text-white transition ease-in-out animate-in  duration-500 overflow-y-auto ${subCategory === "finance-accounting"
                              ? "-translate-x-0 "
                              : "translate-x-full"
                            }`}
                        >
                          <div
                            className="flex items-center justify-start gap-4 w-full py-4 bg-golden hover:cursor-pointer px-2"
                            onClick={() => {
                              setSubCategory("");
                            }}
                          >
                            <Icons.chevrondown className="h-5 w-5 rotate-90 text-white " />
                            Back
                          </div>
                          <ul>
                            <li>
                              <Link
                                href={
                                  "/services/finance-accounting/#financial-reporting"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Financial Reporting
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/finance-accounting/#finance-value-creation"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Finance Value Creation
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/finance-accounting/#technical-accounting-advisory"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Technical Accounting Advisory
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/finance-accounting/#accounting-administration"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Accounting Administration
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="w-full h-fit flex items-center justify-between hover:bg-golden hover:cursor-pointer">
                          <Link
                            href={"/services/corporate-finance-advisory"}
                            className={
                              "transition duration-300 w-full p-4 hover:bg-golden text-white  flex items-center justify-between"
                            }
                            onClick={() => {
                              setServices(false);
                              setIsOpen(false);
                            }}
                          >
                            Corporate Finance Advisory
                          </Link>
                          <div
                            className="h-full w-6"
                            onClick={(e) => {
                              setSubCategory("corporate-finance-advisory");
                            }}
                          >
                            <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                          </div>
                        </div>
                        {/* Corporate Finance Advisory */}
                        <div
                          className={`w-full h-full absolute z-[70] top-0 bg-black text-white transition ease-in-out animate-in  duration-500  overflow-y-auto ${subCategory === "corporate-finance-advisory"
                              ? "-translate-x-0 "
                              : "translate-x-full"
                            }`}
                        >
                          <div
                            className="flex items-center justify-start gap-4 w-full py-4 bg-golden hover:cursor-pointer px-2"
                            onClick={() => {
                              setSubCategory("");
                            }}
                          >
                            <Icons.chevrondown className="h-5 w-5 rotate-90 text-white " />
                            Back
                          </div>
                          <ul>
                            <li>
                              <Link
                                href={
                                  "/services/corporate-finance-advisory/#business-valuation"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Business Valuation
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/corporate-finance-advisory/#capital-structuring-restructuring"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Capital Structuring & Restructuring
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/corporate-finance-advisory/#financial-modeling"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Financial Modeling
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/corporate-finance-advisory/#ma-buy-side-sell-side-advisory"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                M&A Buy-side & Sell-side advisory
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/corporate-finance-advisory/#startups-fundraising"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Startups Fundraising
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/corporate-finance-advisory/#deal-documentation-support-coordination"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Deal Documentation Support & Coordination
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="w-full h-fit flex items-center justify-between hover:bg-golden hover:cursor-pointer">
                          <Link
                            href={"/services/tax"}
                            className={
                              "transition duration-300 w-full p-4 hover:bg-golden text-white  flex items-center justify-between"
                            }
                            onClick={() => {
                              setServices(false);
                              setIsOpen(false);
                            }}
                          >
                            Tax
                          </Link>
                          <div
                            className="h-full w-6"
                            onClick={(e) => {
                              setSubCategory("tax");
                            }}
                          >
                            <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                          </div>
                        </div>
                        {/* Tax */}
                        <div
                          className={`w-full h-full absolute z-[70] top-0 bg-black text-white transition ease-in-out animate-in  duration-500  overflow-y-auto ${subCategory === "tax"
                              ? "-translate-x-0 "
                              : "translate-x-full"
                            }`}
                        >
                          <div
                            className="flex items-center justify-start gap-4 w-full py-4 bg-golden hover:cursor-pointer px-2"
                            onClick={() => {
                              setSubCategory("");
                            }}
                          >
                            <Icons.chevrondown className="h-5 w-5 rotate-90 text-white " />
                            Back
                          </div>
                          <ul>
                            <li>
                              <Link
                                href={"/services/tax/#value-added-tax"}
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Value Added Tax
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={"/services/tax/#corporate-tax"}
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Corporate Tax
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/tax/#transfer-pricing-advisory"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Transfer Pricing Advisory
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={"/services/tax/#excise-tax"}
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Excise Tax
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={"/services/tax/#international-tax"}
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                International Tax
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={"/services/tax/#mergers"}
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Mergers & Acquisitions Tax planning and due
                                diligence
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={"/services/tax/#fatca"}
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                FATCA and CRS Advisory
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={"/services/tax/#zakat-advisory"}
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Zakat Advisory
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="w-full h-fit flex items-center justify-between hover:bg-golden hover:cursor-pointer">
                          <Link
                            href={"/services/investment-family-office-advisory"}
                            className={
                              "transition duration-300 w-full p-4 hover:bg-golden text-white  flex items-center justify-between"
                            }
                            onClick={() => {
                              setServices(false);
                              setIsOpen(false);
                            }}
                          >
                            Investment Family Office Advisory
                          </Link>
                          <div
                            className="h-full w-6"
                            onClick={(e) => {
                              setSubCategory("investment-family-office-advisory");
                            }}
                          >
                            <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                          </div>
                        </div>
                        {/* Investment & Family Office Advisory */}
                        <div
                          className={`w-full h-full absolute z-[70] top-0 bg-black text-white transition ease-in-out animate-in  duration-500  overflow-y-auto ${subCategory === "investment-family-office-advisory"
                              ? "-translate-x-0 "
                              : "translate-x-full"
                            }`}
                        >
                          <div
                            className="flex items-center justify-start gap-4 w-full py-4 bg-golden hover:cursor-pointer px-2"
                            onClick={() => {
                              setSubCategory("");
                            }}
                          >
                            <Icons.chevrondown className="h-5 w-5 rotate-90 text-white " />
                            Back
                          </div>
                          <ul>
                            <li>
                              <Link
                                href={
                                  "/services/investment-family-office-advisory/#investment-asset-allocation-advisory"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Investment & Asset Allocation Advisory
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/investment-family-office-advisory/#family-office-advisory"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Family Office Advisory
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="w-full h-fit flex items-center justify-between hover:bg-golden hover:cursor-pointer">
                          <Link
                            href={"/services/risk-regulatory-advisory"}
                            className={
                              "transition duration-300 w-full p-4 hover:bg-golden text-white  flex items-center justify-between"
                            }
                            onClick={() => {
                              setServices(false);
                              setIsOpen(false);
                            }}
                          >
                            Risk & Regulatory Advisory
                          </Link>
                          <div
                            className="h-full w-6"
                            onClick={(e) => {
                              setSubCategory("risk-regulatory-advisory");
                            }}
                          >
                            <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                          </div>
                        </div>
                        {/* Risk & Regulatory Advisory */}
                        <div
                          className={`w-full h-full absolute z-[70] top-0 bg-black text-white transition ease-in-out animate-in  duration-500  overflow-y-auto ${subCategory === "risk-regulatory-advisory"
                              ? "-translate-x-0 "
                              : "translate-x-full"
                            }`}
                        >
                          <div
                            className="flex items-center justify-start gap-4 w-full py-4 bg-golden hover:cursor-pointer px-2"
                            onClick={() => {
                              setSubCategory("");
                            }}
                          >
                            <Icons.chevrondown className="h-5 w-5 rotate-90 text-white " />
                            Back
                          </div>
                          <ul>
                            <li>
                              <Link
                                href={
                                  "/services/risk-regulatory-advisory/#risk-controls"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Risk & Controls
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/risk-regulatory-advisory/#regulatory-compliance"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Regulatory Compliance
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/risk-regulatory-advisory/#forensic-advisory"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Forensic Advisory
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="w-full h-fit flex items-center justify-between hover:bg-golden hover:cursor-pointer">
                          <Link
                            href={"/services/management-consulting"}
                            className={
                              "transition duration-300 w-full p-4 hover:bg-golden text-white  flex items-center justify-between"
                            }
                            onClick={() => {
                              setServices(false);
                              setIsOpen(false);
                            }}
                          >
                            Management Consulting
                          </Link>
                          <div
                            className="h-full w-6"
                            onClick={(e) => {
                              setSubCategory("management-consulting");
                            }}
                          >
                            <Icons.chevrondown className="h-5 w-5 -rotate-90 text-white " />
                          </div>
                        </div>
                        {/* Management Consulting */}
                        <div
                          className={`w-full h-full absolute z-[70] top-0 bg-black text-white transition ease-in-out animate-in  duration-500  overflow-y-auto ${subCategory === "management-consulting"
                              ? "-translate-x-0 "
                              : "translate-x-full"
                            }`}
                        >
                          <div
                            className="flex items-center justify-start gap-4 w-full py-4 bg-golden hover:cursor-pointer px-2"
                            onClick={() => {
                              setSubCategory("");
                            }}
                          >
                            <Icons.chevrondown className="h-5 w-5 rotate-90 text-white " />
                            Back
                          </div>
                          <ul>
                            <li>
                              <Link
                                href={
                                  "/services/management-consulting/#business-operations-transformation-advisory"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Business Operations & Transformation Advisory
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/management-consulting/#growth-strategy-advisory"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Growth Strategy Advisory
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={
                                  "/services/management-consulting/#data-analytics"
                                }
                                className={
                                  "transition duration-300 w-full p-4 hover:bg-golden text-white flex items-center justify-between"
                                }
                                onClick={() => {
                                  setSubCategory("");
                                  setServices(false);
                                  setIsOpen(false);
                                }}
                              >
                                Data Analytics
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    href={"/our-team"}
                    className={
                      "transition duration-300 w-full p-4 hover:bg-golden text-white block"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/careers"}
                    className={
                      "transition duration-300 w-full p-4 hover:bg-golden text-white block"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/contact-us"}
                    className={
                      "transition duration-300 w-full p-4 hover:bg-golden text-white block"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;