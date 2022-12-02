import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/842b1f38-3a00-483c-9bfc-4611f4275334/NG-en-20221128-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  type="
                        email"
                  placeholder="Email"
                  autoComplete="email"
                  className="p-3 my-2 bg-gray-700 rounded "
                />

                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  className="p-3 my-2 bg-gray-700 rounded "
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>

                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;