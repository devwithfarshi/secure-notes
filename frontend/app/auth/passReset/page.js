import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const page = () => {
  return (
    <>
      <div className="container">
        <main className="flex items-center justify-center h-[100vh]">
          <section className="authBox dark:bg-dark bg-bgLight py-[2.529rem] px-[3rem] w-[52rem] h-[60rem] rounded-xl shadow-md flex items-center justify-center flex-col">
            <Link href="/auth/login">
              <FaArrowAltCircleLeft className="text-[3rem] text-primary bg-light rounded-full cursor-pointer" />
            </Link>

            <h2 className="pt-5 text-center text-[3rem]  dark:text-light text-dark capitalize">
              Reset Your Password
            </h2>
            <form className="rounded px-8 pt-6 pb-8 mb-4 w-full">
              <div className="mb-10">
                <label
                  className="block dark:text-light text-dark text-3xl font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="input_filed"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <button
                className="btn btn-primary py-3 w-full px-5 rounded-xl transition-all duration-300 hover:scale-90 uppercase"
                type="button"
              >
                Send Code
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

export default page;
