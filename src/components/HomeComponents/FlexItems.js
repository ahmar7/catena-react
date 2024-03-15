import React from "react";
import "./style.css";
import Catalogue from "../../assets/img/trade-catalogue.png";
import Img4 from "../../assets/img/4.png";
import Img5 from "../../assets/img/5.png";
import Img6 from "../../assets/img/6.png";
import Img7 from "../../assets/img/7.png";
import Img8 from "../../assets/img/8.png";

const FlexItems = () => {
  return (
    <section className="flex all-imgs flex-col flexes space-y-10">
      <div className="relative flex w-full flex-col items-center justify-end gap-8 sm:flex-row-reverse">
        <div className="relative z-[-1] aspect-square min-h-[40vh] flex-1 img-flex sm:min-h-0 sm:min-w-[600px]">
          <img className="absolute" src={Img4} alt="" />
        </div>
        <div className="flex max-w-md flex-1 flex-col sm:max-w-none">
          <h1 className="text-24 font-semibold sm:text-[35px]">
            Aggregated Address Importation
          </h1>
          <p className="text-cf-light-2">
            Import unlimited trading addresses to efficiently manage multiple
            portfolios with ease
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-end gap-8 sm:flex-row">
        <div className="relative z-[-1] aspect-square min-h-[40vh] flex-1 img-flex sm:min-h-0 sm:min-w-[600px]">
          <img
            className="absolute left-[-60%] top-1/4 scale-[220%]"
            src={Img5}
            alt=""
          />
        </div>
        <div className="flex max-w-md flex-1 flex-col sm:max-w-none">
          <h1 className="text-24 font-semibold sm:text-[35px]">
            Visualize Liquidity Pools
          </h1>
          <p className="text-cf-light-2">
            See liquidity pools as positions, providing insight about
            profitability and impermanent loss
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-end gap-8 sm:flex-row-reverse">
        <div className="relative z-[-1] aspect-square min-h-[40vh] flex-1 img-flex sm:min-h-0 sm:min-w-[600px]">
          <img
            className="scale-[100%] sm:-top-40 sm:left-10 sm:scale-150"
            src={Img6}
            alt=""
          />
        </div>
        <div className="flex max-w-md flex-1 flex-col sm:max-w-none">
          <h1 className="text-24 font-semibold sm:text-[35px]">
            Automated Trade Cataloging
          </h1>
          <p className="text-cf-light-2">
            Instantly log swaps and liquidity positions into an automated
            journal
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-end gap-8 sm:flex-row">
        <div className="relative z-[-1] aspect-square min-h-[40vh] flex-1 img-flex sm:min-h-0 sm:min-w-[600px]">
          <img
            className="absolute right-3 scale-[95%] sm:right-6 sm:scale-125"
            src={Img7}
            alt=""
          />
        </div>
        <div className="flex max-w-md flex-1 flex-col sm:max-w-none">
          <h1 className="text-24 font-semibold sm:text-[35px]">
            Versatile Protocol Integrations &amp; Performance Sharing
          </h1>
          <p className="text-cf-light-2">
            Mint an account to retain and share your trading achievements
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlexItems;
