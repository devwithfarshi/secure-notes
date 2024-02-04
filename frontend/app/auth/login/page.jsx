"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { Formik } from "formik";
import { loginHandler } from "@/app/api/userApi";

const Loing = () => {
  const [passShow, setPassShow] = useState(false);
  const [loading, setloading] = useState(false);

  const passShowHandler = () => {
    setPassShow(!passShow);
  };
  return (
    <>
      {" "}
      <div className="container">
        <main className="flex items-center justify-center h-[100vh]">
          <section className="authBox dark:bg-dark bg-bgLight p-[3rem] w-[52rem] rounded-xl shadow-md">
            <div className="w-full">
              <h2 className="pt-5 text-center text-[3rem]  dark:text-light text-dark capitalize">
                Login to your account
              </h2>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={(values) => {
                  const errors = {};

                  if (!values.password) {
                    errors.password = "password is required";
                  }

                  if (!values.email) {
                    errors.email = "Email is required";
                  }
                  return errors;
                }}
                onSubmit={(values) => {
                  setloading(true);
                  loginHandler(values);
                  setloading(false);
                }}
              >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded px-8 pt-6 pb-8 mb-4"
                  >
                    <div className="mb-10">
                      <label
                        className="block dark:text-light text-dark text-3xl font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        onChange={handleChange}
                        name="email"
                        className="input_filed"
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                      />
                      <p className=" capitalize text-xl text-[#FF3800]">
                        {errors.email && touched.email && errors.email}
                      </p>
                    </div>
                    <div className="mb-10">
                      <label
                        className="block dark:text-light text-dark text-3xl font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <div className="flex items-center shadow border rounded w-full p-3 bg-transparent text-3xl leading-tight focus:outline-none">
                        <input
                          onChange={handleChange}
                          name="password"
                          className="bg-transparent w-full outline-none"
                          type={passShow ? "text" : "password"}
                          id="password"
                          placeholder="Enter your password"
                        />
                        <div
                          className="cursor-pointer"
                          onClick={passShowHandler}
                        >
                          {passShow ? (
                            <FaEye className="text-3xl" />
                          ) : (
                            <FaEyeSlash className="text-3xl" />
                          )}
                        </div>
                      </div>

                      <p className=" capitalize text-xl text-[#FF3800]">
                        {errors.password && touched.password && errors.password}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="btn btn-primary py-3 w-[50%] px-5 rounded-xl transition-all duration-300 hover:scale-90 uppercase"
                        type="submit"
                      >
                        {loading ? "Trying to login you..." : "Sign In"}
                      </button>
                      <Link
                        href={"/auth/passReset"}
                        className="text-2xl underline"
                      >
                        Forget password?
                      </Link>
                    </div>
                    <p className="text-center mt-7 text-3xl">
                      No account?{" "}
                      <Link
                        className="underline text-[#007FFF]"
                        href="/auth/register"
                      >
                        Create One!
                      </Link>
                    </p>
                  </form>
                )}
              </Formik>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Loing;
