import Image from "next/image";
import { useState } from "react";

function cutzuengine() {
  const mainColor = "text-orange-500";
  const mainHover = "hover:text-orange-500"; // For dumb tailwind reasons I had to make this
  const mainName = "cutzu";
  const logoPath = "/redlogo.png";
  // To change logo color go to line 33 and fuck around with the hue rotation, whole component is made in tailwind

  const [cutzuInfo, setcutzuInfo] = useState({
    user: "",
    password: "",
  });

  async function handleSubmit() {
    if (cutzuInfo.user !== "" && cutzuInfo.password !== "") {
      setcutzuInfo({
        user: "",
        password: "",
      });
      console.log(cutzuInfo);
    }
  }
  return (
    <>
      <div className="flex h-[520px] w-[600px] flex-col items-center justify-center rounded-md bg-[#0b0b0b]">
        <div className="flex w-[360px] flex-col items-center justify-center gap-6">
          <div className="flex w-full items-center justify-center gap-3">
            <Image
              src={logoPath}
              width={500}
              height={500}
              className="h-[50px] w-[52px] hue-rotate-[63deg]"
              alt="Logo"
            />
            <h1 className="text-3xl font-light tracking-widest text-white">
              <span className={`text-3xl font-semibold ${mainColor}`}>
                {mainName}
              </span>
              ENGINE
            </h1>
          </div>
          <div className=" flex w-full flex-col items-center justify-center">
            <p className="text-xs font-bold text-[#696969]">
              Thank you for choosing us
            </p>
            <p className="font-semibold text-white">
              Sign in to continue to {mainName}ENGINE
            </p>
          </div>
          <form className="mt-1 flex w-full flex-col items-center justify-center gap-7">
            <div className="flex w-full flex-col gap-2">
              <label className="w-full text-xs font-bold text-white">
                E-Mail or Username
              </label>
              <input
                type="text"
                placeholder="Enter your e-mail or username"
                className="w-full rounded-md border border-white border-opacity-5 bg-transparent px-2 py-2 text-sm font-semibold text-white outline-none transition-all duration-[850ms] placeholder:font-semibold placeholder:text-[#787878] hover:border-opacity-100 focus:border-opacity-100"
                value={cutzuInfo.user}
                onChange={(e) =>
                  setcutzuInfo({ ...cutzuInfo, user: e.target.value })
                }
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <div className="flex w-full items-center justify-between">
                <label className="text-xs font-bold text-white">Password</label>
                <span
                  className={`text-xs font-bold text-[#787878] transition-all duration-500 ${mainHover}`}
                >
                  Forgot password?
                </span>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-white border-opacity-5 bg-transparent px-2 py-2 text-sm font-semibold text-white outline-none transition-all duration-[850ms] placeholder:font-semibold placeholder:text-[#787878] hover:border-opacity-100 focus:border-opacity-100"
                onChange={(e) =>
                  setcutzuInfo({ ...cutzuInfo, password: e.target.value })
                }
                value={cutzuInfo.password}
              />
            </div>
          </form>
          <button
            onClick={() => {
              handleSubmit();
            }}
            className="mt-1 w-full rounded-md border border-white border-opacity-5 bg-white bg-opacity-[0.025] px-2 py-[12px] text-xs font-bold text-white transition-all duration-300 active:bg-white active:bg-opacity-10"
          >
            Login Now
          </button>
        </div>
      </div>
    </>
  );
}

export default cutzuengine;
