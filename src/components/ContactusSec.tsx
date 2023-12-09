import React from 'react'
import Contactus from './Contactus'

const ContactusSec:React.FC = () => {
  return (
    <section className="contact-us flex bg-[url('/images/message-banner.jpg')] bg-center bg-cover">
        <div className="img bg-[url('/images/contact-us.png')] sm:w-[40%] w-[50%] bg-cover"></div>
        <div className="content div_section sm:w-[60%] w-[50%] sm:p-2 xl:p-[50px] 2xl:p-[50px] p-4 flex flex-col justify-center ">
          <h2 className="text-white section_heading pb-2 2xl:pb-0 font-normal">
            Contact Us
          </h2>
          <Contactus />
        </div>
      </section>
  )
}

export default ContactusSec