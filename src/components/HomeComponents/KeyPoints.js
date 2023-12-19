import React from "react";
import FeatureBridge from "../../assets/img/1.svg";
import FeatureBridge2 from "../../assets/img/2.svg";
import FeatureBridge3 from "../../assets/img/3.svg";
const KeyPOINTS = () => {
  return (
    <section className="flex flex-col space-y-4 my-11 py-10">
      <div className="grid cards2 grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[10px]">
        <div className="card">
          <div className="flex flex-col items-center space-y-4 rounded-md border border-cf-gray-4 pb-[24px] pt-4 relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-md before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] inner">
            <div></div>
            <div
              style={{ flexWrap: "wrap" }}
              className="flex space-x-2 px-[20px]"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  minWidth: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    marginRight: "0.5rem",
                    maxHeight: "24px",
                  }}
                >
                  <img src={FeatureBridge} width={19} height={19} alt="" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="font-aeonikMedium"
                    style={{ fontWeight: "bold" }}
                  >
                    On-chain analytics{" "}
                  </span>
                </div>
              </div>
              <div
                style={{ marginLeft: "28px !important" }}
                className="flex flex-col space-y-1"
              >
                <span className="leading-[20px] text-cf-light-2">
                  Performance analytics reveal the time and price where
                  positions yielded the highest profit
                </span>
              </div>
            </div>
            <div className="blob" style={{ opacity: 1 }} />
            <div className="fakeblob" />
          </div>
        </div>
        <div className="card">
          <div className="flex flex-col items-center space-y-4 rounded-md border border-cf-gray-4 pb-[24px] pt-4 relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-md before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] inner">
            <div>
              <img src="images/home/feature-composability.png" alt="" />
            </div>
            <div
              style={{ flexWrap: "wrap" }}
              className="flex space-x-2 px-[20px]"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  minWidth: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    marginRight: "0.5rem",
                    maxHeight: "24px",
                  }}
                >
                  <img src={FeatureBridge2} width={17} height={17} alt="" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="font-aeonikMedium"
                    style={{ fontWeight: "bold" }}
                  >
                    Professional execution terminal
                  </span>
                </div>
              </div>
              <div
                style={{ marginLeft: "25px !important" }}
                className="flex flex-col space-y-1"
              >
                <span className="leading-[20px] text-cf-light-2">
                  Connected to major DEXs for fast and cheap swaps
                </span>
              </div>
              <div className="blob" style={{ opacity: 1 }} />
              <div className="fakeblob" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex flex-col items-center space-y-4 rounded-md border border-cf-gray-4 pb-[24px] pt-4 relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:rounded-md before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] inner">
            <div>
              <img src="images/home/feature-tokens.png" alt="" />
            </div>
            <div
              style={{ flexWrap: "wrap" }}
              className="flex space-x-2 px-[20px]"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  minWidth: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    marginRight: "0.5rem",
                    maxHeight: "24px",
                  }}
                >
                  <img src={FeatureBridge3} width={22} height={22} alt="" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span
                    className="font-aeonikMedium"
                    style={{ fontWeight: "bold" }}
                  >
                    Open position tracking
                  </span>
                </div>
              </div>
              <div
                style={{ marginLeft: "29px !important" }}
                className="flex flex-col space-y-1"
              >
                <span className="leading-[20px] text-cf-light-2">
                  See swaps and liquidity positions with industry standard live
                  PnL tracking
                </span>
              </div>
            </div>
            <div className="blob" style={{ opacity: 1 }} />
            <div className="fakeblob" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyPOINTS;
