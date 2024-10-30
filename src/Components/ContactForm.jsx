import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Spinner from "./Spinner.jsx";

function ContactForm({ setSuccess, setFail }) {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    emailjs
      .sendForm("service_96bguqy", "template_dldz9nj", form.current, {
        publicKey: "ITM0UXwmN4X-TRRnk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          setSuccess();
          formik.resetForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          setFail();
        },
      );
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      reason: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      email: Yup.string()
        .trim()
        .email("Invalid email address")
        .required("Required"),
      reason: Yup.string().required("Required"),
      message: Yup.string()
        .min(10, "Must be at least 10 characters")
        .max(1000, "Must be 1000 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      sendEmail();
    },
  });

  return (
    <form
      ref={form}
      onSubmit={formik.handleSubmit}
      className="m-2 md:m-10 flex max-w-xl flex-1 mt-20 flex-col rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-10"
    >
      <h4 className="font-orbitron mb-10 border-b-2 border-black pb-2 text-center text-3xl text-black">
        Let's Connect
      </h4>
      <label htmlFor="email" className="px-2 font-semibold">
        Your Name
      </label>
      <input
        className="rounded-full bg-black p-2 px-4 text-white"
        id="name"
        name="name"
        type="text"
        placeholder="Enter your name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="ml-2 mr-auto h-5 rounded-lg bg-white px-2 text-center text-sm font-semibold text-red-500 drop-shadow-lg">
          {formik.errors.name}
        </div>
      ) : (
        <div className="h-5"></div>
      )}

      <label htmlFor="email" className="px-2 font-semibold">
        Email Address
      </label>
      <input
        className="rounded-full bg-black p-2 px-4 text-white"
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="ml-2 mr-auto h-5 rounded-lg bg-white px-2 text-center text-sm font-semibold text-red-500 drop-shadow-lg">
          {formik.errors.email}
        </div>
      ) : (
        <div className="h-5"></div>
      )}
      <label htmlFor="reason" className="px-2 font-semibold">
        Reason for Contact
      </label>
      <select
        className="rounded-full bg-black p-2 px-4 text-white"
        id="reason"
        name="reason"
        onBlur={formik.handleBlur}
        value={formik.values.reason}
        onChange={formik.handleChange}
      >
        <option value="" defaultValue hidden>
          Select a Reason
        </option>
        <option value="freelance">Freelance project proposal</option>
        <option value="jobOffer">Job Offer</option>
        <option value="collaboration">Collaboration</option>
        <option value="feedback">Feedback</option>
        <option value="other">Other</option>
      </select>
      {formik.touched.reason && formik.errors.reason ? (
        <div className="ml-2 mr-auto h-5 rounded-lg bg-white px-2 text-center text-sm font-semibold text-red-500 drop-shadow-lg">
          {formik.errors.reason}
        </div>
      ) : (
        <div className="h-5"></div>
      )}

      <label htmlFor="message" className="px-2 font-semibold">
        Message
      </label>
      <textarea
        className="rounded-3xl bg-black p-2 px-4 text-white"
        id="message"
        name="message"
        placeholder="Enter a short message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
      />
      {formik.touched.message && formik.errors.message ? (
        <div className="ml-2 mr-auto h-5 rounded-lg bg-white px-2 text-center text-sm font-semibold text-red-500 drop-shadow-lg">
          {formik.errors.message}
        </div>
      ) : (
        <div className="h-5"></div>
      )}

      {!loading ? <button
        type="submit"
        className="mx-auto mt-5 w-fit rounded-lg border-2 transition-all duration-200 hover:border-black hover:text-black active:text-opacity-50 active:transition-none px-10 py-2 font-semibold"
      >
       Submit
      </button> :
      <div className="mx-auto border-2 border-white border-opacity-0 mt-5 w-fit rounded-lg px-10 py-2 font-semibold">
        <Spinner />
      </div>
}
    </form>
  );
}

export default ContactForm;
