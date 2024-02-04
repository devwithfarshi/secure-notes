"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik } from "formik";
import Link from "next/link";
import { registerHandler } from "@/app/api/userApi";
const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [loading, setloading] = useState(false);
  const passShowHandler = () => {
    setPassShow(!passShow);
  };

  return (
    <>
      <div className="container">
        <main className="flex items-center justify-center h-[100vh]">
          <section className="authBox dark:bg-dark bg-bgLight p-[3rem] w-[52rem] rounded-xl shadow-md">
            <div className="w-full">
              <h2 className="pt-5 text-center text-[3rem]  dark:text-light text-dark capitalize">
                Create Your Account
              </h2>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  c_password: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = "Name is required";
                  }
                  if (!values.password) {
                    errors.password = "password is required";
                  }
                  if (!values.c_password) {
                    errors.c_password = "confirm password is required";
                  }
                  if (
                    values.password &&
                    values.c_password &&
                    values.password !== values.c_password
                  ) {
                    errors.password =
                      "Password and confrim password does't match!";
                  }
                  if (!values.email) {
                    errors.email = "Email is required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values) => {
                  setloading(true);
                  registerHandler(values);
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
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        onChange={handleChange}
                        name="name"
                        className="input_filed"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                      />
                      <p className=" capitalize text-xl text-[#FF3800]">
                        {errors.name && touched.name && errors.name}
                      </p>
                    </div>
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
                        type="text"
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
                          placeholder="Use a strong password"
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
                    <div className="mb-10">
                      <label
                        className="block dark:text-light text-dark text-3xl font-bold mb-2"
                        htmlFor="password"
                      >
                        Confrim Password
                      </label>
                      <div className="flex items-center shadow border rounded w-full p-3 bg-transparent text-3xl leading-tight focus:outline-none">
                        <input
                          onChange={handleChange}
                          className="bg-transparent w-full outline-none"
                          name="c_password"
                          id="password"
                          type={passShow ? "text" : "password"}
                          placeholder="Use a strong password"
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
                      <p className=" capitalize text-xl  text-[#FF3800]">
                        {errors.c_password &&
                          touched.c_password &&
                          errors.c_password}
                      </p>
                    </div>

                    <button
                      className="btn btn-primary py-3 w-full px-5 rounded-xl transition-all duration-300 hover:scale-90 uppercase"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Creating Your Account.." : "Sign Up"}
                    </button>
                    <p className="text-center mt-7 text-3xl">
                      All ready have an account?{" "}
                      <Link
                        className="underline text-[#007FFF]"
                        href="/auth/login"
                      >
                        Login
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

export default Register;
