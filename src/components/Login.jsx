import React, { useState } from "react";
import logo from "../assets/logo.png";
import pic from "../assets/bgpic.png";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div class="flex h-screen justify-center">
      {/* left side  */}
      <div className="md:w-[30%] md:min-w-fit w-full flex justify-center items-center m-14">
        <div className=" flex-col w-full">
          {/* logo centering */}
          <div className="flex justify-center">
            <img className="" src={logo} alt="logo" />
          </div>

          {/* form */}
          <div className="flex flex-col justify-center p-2 mt-10 ">
            <h1 className="text-lg text-amber-500 font-semibold ml-2">Login</h1>
            <form>
              <div className="flex-row p-2 mt-2 ">
                <p name="email" className="text-sm font-semibold mb-1">
                  Email or Mobile
                </p>
                <input
                  type="text"
                  placeholder="Enter registered email or mobile"
                  autoComplete="off"
                  input="email"
                  className="w-full  p-2 rounded-md border mb-2"
                />
                {/* password field */}
                <p className="text-sm font-semibold mb-1">Password</p>
                <div className=" flex flex-col w-full relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full pr-10 p-2 rounded-md border"
                  />
                  {showPassword ? (
                    <VscEyeClosed
                      className="text-2xl absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer "
                      onClick={handleClick}
                    />
                  ) : (
                    <VscEye
                      className="text-2xl absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                      onClick={handleClick}
                    />
                  )}
                </div>
                <div className="flex w-full justify-end">
                  <a href="#" className=" hover:text-blue-800 text-xs py-2">
                    FORGOT PASSWORD?
                  </a>
                </div>
                <button className="border bg-yellow-500 p-4 font-semibold text-xs rounded-md w-full">
                  SUBMIT
                </button>
                <div className="mt-14 flex justify-center">
                  <span className="mr-2 text-sm">Not have an account?</span>
                  <a href="#" className="underline text-sm text-blue-600">
                    Register Here
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* right side container */}
      <div className="w-[70%] bg-orange-100 p-5 hidden md:block ">
        <div className="flex justify-center w-full h-full">
          <img className="" src={pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
