import React from "react";
import LogoY from "../../assets/img/Compass Logo Gif.gif";
const Future = () => {
  return (
    <section className="w-full">
      <div className="flex w-full flex-col items-center">
        <div className="relative">
          <img className="logos-b" src={LogoY} alt="cf-jit" style={{}} />
        </div>
        <div className="flex pjui w-full flex-col no-padi items-center justify-start px-2 sm:px-0">
          <span className="   text-16" style={{ color: "#c54a85" }}>
            Protocol Y
          </span>
          <span className="max-w-[858px] bg-gradient-to-r from-black to-cf-light-2 bg-clip-text text-center font-aeonikMedium text-42 leading-[45px] text-transparent sm:text-6xl sm:leading-[73px]">
            The future generation of decentralized protocols
          </span>
          <span className="mt-6 max-w-[719px] text-center text-cf-light-3">
            {/* */}
            <b className="text-14 text-white sm:text-16 " />
            Be part of the next generation of Web3 ecosystems, open-source and
            community owned. Backed by censorship resistant digital tokens.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Future;
