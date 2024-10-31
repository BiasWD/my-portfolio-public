import ContactForm from "../Components/ContactForm.jsx";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Footer from "../Components/Footer.jsx";

function Contact({ anchorClick }) {
  const [formStatus, setFormStatus] = useState("");

  const formSuccess = () => {
    setFormStatus("success");
  };
  const formFail = () => {
    setFormStatus("fail");
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col overflow-hidden border-t-[1px] border-white border-opacity-30 bg-black"
    >
      <div className="mx-auto flex max-w-7xl flex-1 flex-col overflow-hidden pt-16 text-white md:pt-40">
        <h2 className="mb-10 w-fit px-4 text-left text-4xl font-semibold text-white md:px-12 md:text-6xl">
          Contact Me
        </h2>
        <div>
          <p className="px-4 text-left text-lg leading-relaxed md:px-12 md:text-xl">
            I am currently willing to consider <strong>Job Offers</strong>, work
            on <strong>freelance projects</strong>, or discuss any{" "}
            <strong>other opportunities</strong>. <br />
            Feel free to use the form below or send me an email at{" "}
            <a
              href="mailto:tobysheets.contact@gmail.com"
              className="text-blue-500"
            >
              tobysheets.contact@gmail.com
            </a>
            .
          </p>
        </div>
        <div className="flex items-center justify-center">
          <ContactForm setSuccess={formSuccess} setFail={formFail} />
        </div>
        {formStatus === "success" ? (
          <div className="h-20 w-full text-center text-2xl text-white sm:text-4xl md:h-40 md:text-5xl">
            <Typewriter
              options={{
                strings: [
                  `<span style="color: #3b82f6;">Thanks!</span> I'll get back to you soon.`,
                ],
                autoStart: true,
                deleteSpeed: Infinity,
                loop: false,
              }}
            />
          </div>
        ) : formStatus === "fail" ? (
          <div className="h-20 w-full text-center text-xl text-white md:h-40">
            <span>
              <span className="text-red-400">Oops!</span> Something went wrong.
              Please try again later or contact me directly using the email
              provided above.
            </span>
          </div>
        ) : (
          <div className="h-20 w-full text-center text-2xl text-white sm:text-4xl md:h-40 md:text-5xl"></div>
        )}
      </div>
      <Footer anchorClick={anchorClick} />
    </section>
  );
}

export default Contact;
