import React from "react";
import LogoBanner from "../../assets/img/LOGO C.png";
const Banner = () => {
  return (
    <section
      className="mt-[-130px] flex flex-col items-center md:mt-[-140px]"
      style={{ marginTop: "0%" }}
    >
      <img
        className="animate-fade-in logo-c"
        src={LogoBanner}
        alt=""
        style={{}}
      />
      <div className="flex main-banners max-w-[350px] flex-col items-center space-y-8 text-center md:max-w-[884px]">
        <div
          className="font-aeonikMedium txt-banner text-[40px] leading-[47px] md:leading-[73px] lg:text-[64px] animate-move-down"
          style={{
            background:
              "linear-gradient(91.69deg,#ffffff 50.28%,rgba(255, 255, 255, 0.62) 90.44%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            transform: "translateY(-35px) translateZ(0)",
            color: "black",
          }}
        >
          The ultimate on-chain DeFi analytics nexus{" "}
        </div>
        <div
          className="max-w-[487px]"
          style={{ transform: "translateY(-15px) translateZ(0)" }}
        >
          <span className="animate-move-down-2">
            Catena provides visual analytics, live liquidity &amp; swap position
            tracking and an execution terminal for DEX participants. <br />
          </span>
          <br />
          <div className="w-full asha text-[14px] animate-move-up">
            <div
              className="h-[38px] w-full overflow-hidden md:h-auto md:w-[500px] pl-3 border-spacing-1 rounded-md text-cf-light-2 border-cf-gray-4 bg-cf-gray-2 flex justify-start items-center border hover:border-cf-gray-5 hover:ease-out duration-300 focus-within:bg-cf-gray-3 focus-within:border-cf-gray-5 focus-within:text-white border-cf-gray-4"
              style={{
                border: "1px solid #dadada",
                backgroundColor: "#eeeeee",
              }}
            >
              <input
                type="text"
                className="
rounded-xl
text-cf-light-3
flex-1
appearance-none
w-full
py-2
pl-2.5
pr-2.5
bg-transparent
placeholder-cf-light-1
shadow-sm
focus:text-cf-light-3
focus:outline-none
focus:border-transparent
h-12
 pointer-events-auto h-[44px] border-none bg-none"
                placeholder="Enter your email"
                defaultValue
                style={{ color: "black" }}
              />
              <button
                className="flex h-[44px] w-12 items-center justify-center rounded-r-md duration-300 ease-out hover:text-white"
                type="submit"
                style={{ backgroundColor: "#d4d4d4" }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-cf-light-2 duration-300 hover:text-white hover:ease-out"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12H4.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <br />
            Keep up to date with our progress
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
