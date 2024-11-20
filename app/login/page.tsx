"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const changeHandler = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
    console.log(name, value);
  };
  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/admin/login`,
        userData
      );
      toast.success("User logged in");
      router.push("/admin");
    } catch (error: any) {
      toast.error(error.response.data.msg);
      console.log("Error", error.response.data.msg);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Login
              </h1>
            </div>
            <div className="w-1/3 mx-auto">
              <div className="flex justify-center flex-wrap -m-2">
                <div className="fields w-full">
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        onChange={changeHandler}
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="password"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          onChange={changeHandler}
                          id="password"
                          name="password"
                          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        {showPassword ? (
                          <IoMdEyeOff
                            className="absolute top-3 right-2"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <IoMdEye
                            className="absolute top-3 right-2"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2 w-full mt-2">
                  <button className="flex justify-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 w-full rounded text-lg">
                    Login
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 flex justify-end">
                  <Link
                    href="/auth/forgot-password"
                    className="text-indigo-500"
                  >
                    Forget Password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}
