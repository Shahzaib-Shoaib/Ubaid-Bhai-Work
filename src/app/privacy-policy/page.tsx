import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="privacy-main ">
      <Header />
      <div className="bg-black h-[70px] lg:h-[90px] xl:[90px] 2xl:[120px] w-full !block"></div>
        <div className="breadcrumb div_section bggolden">
            <div className="maxw">
              <h1 className="breadcurmb text-golden sm:text-center">Privacy Policy</h1>
            </div>
        </div>
        <div className="inner-text div_section">
            <div className="maxw">
              <h3 className="sub_heading">The Privacy Policy set forth below apply to this website (collectively, the “Site”)</h3>
              <p>This Privacy Policy together with the <Link className='text-golden underline font-semibold' href={'/terms-conditions'} aria-label='Terms & Conditions'>Terms & Conditions</Link> set out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please review our Privacy Policy carefully to understand our practices regarding your personal data and how we will treat it. By using this Site, you acknowledge that you have read, understood and agreed to the terms and conditions of use. If you do not agree to these terms and conditions of use, you may not access or use the Site.</p>
            </div>
            <div className="maxw">
              <h3 className="sub_heading">Information We Collect</h3>
              <p>We may collect personal information from you when you use our Site. The personal information we may collect is voluntarily provided by you to us through our Site. The personal information includes your name, email address, phone number, and job title, and company name.</p>
            </div>
            <div className="maxw">
              <h3 className="sub_heading">How We Use Your Information</h3>
              <p>We will only use your personal information for the purposes for which it was collected. We may use your personal information to respond to your enquiries, to provide you with information about our services, or to invite you to events.</p>
            </div>
            <div className="maxw">
              <h3 className="sub_heading">How We Store Your Information</h3>
              <p>We will take all reasonable steps to protect your personal information. We will store your personal information on our secure servers and will take appropriate technical and organisational measures to prevent the loss, misuse, or alteration of your personal information.</p>
              </div>
            <div className="maxw mb-4">
              <h3 className="sub_heading">Disclosure of Your Information</h3>
              <p>We will not disclose your personal information to third parties, except:</p>
              <div className="list-icon">
                <div className="list-main flex justify-start items-center gap-2">
                    <img className='areo-icon-1 sm:h-[8px] sm:w-[8px] sm:mt-[0px] xl:mt-[-2px]' src="/images/icon.png" alt="areo-icon-1" />
                    <p className='m-0'>where we are required to do so by law.</p>
                </div>
                <div className="list-main flex justify-start items-center gap-2">
                    <img className='areo-icon-1 sm:h-[8px] sm:w-[8px] sm:mt-[-10px] xl:mt-[-2px]' src="/images/icon.png" alt="areo-icon-1" />
                    <p className='m-0'>where we need to share your information with our service providers in order to provide you with our services.</p>
                </div>
                <div className="list-main flex justify-start items-center gap-2">
                    <img className='areo-icon-1 sm:h-[8px] sm:w-[8px] sm:mt-[0px] xl:mt-[-1px]' src="/images/icon.png" alt="areo-icon-1" />
                    <p className='m-0'>where you have given us your consent to do so.</p>
                </div>
              </div>
              </div>
            <div className="maxw">
              <h3 className="sub_heading">Your Rights</h3>
              <p>You have the right to request access to, rectification, or erasure of your personal information, as well as the right to object to or restrict processing of your personal information. If you wish to exercise any of these rights, please contact us using the contact details provided below.</p>
              
              
            </div>
            <div className="maxw">
              <h3 className="sub_heading">Changes to This Policy</h3>
              <p>We may update this policy from time to time by publishing a new version on our Site. Therefore, you are encouraged to frequently visit these sections in order to be updated about the changes on the Site.</p>
            </div>
            <div className="maxw">
              <h3 className="sub_heading">Contact us</h3>
              <p>If you have any questions about this policy or our treatment of your personal information, please contact us by email at <br /> <Link className='text-golden' href={'mailto:info@morsimpartners.com'} aria-label='emial'>info@morsimpartners.com</Link></p>
            </div>
          </div>
    </div>

  )
}

export default page