import React from "react";

const MainCard = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row h-screen w-full items-center justify-center place-items-center ">
        <div className="relative h-[58%] w-[20.5rem] rounded-[2rem] bg-gradient-to-b from-light-slate-blue to-light-royal-blue">
          <div className="grid place-items-center">
            <h1 className="mt-7 font-hanken text-light-lavender text-2xl font-medium">
              Your Result
            </h1>
            <div>
              <div className="flex flex-col justify-center items-center size-48 rounded-full bg-gradient-to-b from-violet-blue to-persian-blue my-7 font-hanken">
                <span className="text-white text-7xl font-extrabold">76</span>
                <p className="text-light-lavender text-lg font-medium">
                  of 100
                </p>
              </div>
            </div>
            <div className="grid place-items-center mx-12 font-hanken">
              <span className="text-3xl text-white">Great</span>
              <p className="text-light-lavender text-lg text-center my-2">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[58%] w-[21.75rem] rounded-r-[2rem] bg-white -ml-5 shadow-xl shadow-pale-blue">
          <h2 className="mt-7 font-hanken text-dark-grey-blue text-2xl font-bold mx-11">
            Summary
          </h2>
          <div className="my-7 mx-10 flex flex-col gap-3">
            <div className="flex h-14 rounded-xl bg-light-red/10 items-center font-hanken font-bold text-lg justify-between pr-4">
              <div className="flex items-center">
                <img
                  className="mx-3"
                  src="/assets/images/icon-reaction.svg"
                  alt="Reaction Icon"
                />
                <p className="text-light-red">Reaction</p>
              </div>
              <div className="flex items-center">
                <span className="font-extrabold pr-2">80</span>
                <span className="text-dark-gray-blue/40">/ 100</span>
              </div>
            </div>

            <div className="flex h-14 rounded-xl bg-orangey-yellow/10 items-center font-hanken font-bold text-lg justify-between pr-4">
              <div className="flex items-center">
                <img
                  className="mx-3"
                  src="/assets/images/icon-memory.svg"
                  alt="Memory Icon"
                />
                <p className="text-orangey-yellow">Memory</p>
              </div>
              <div className="flex items-center">
                <span className="font-extrabold pr-2">92</span>
                <span className="text-dark-gray-blue/40">/ 100</span>
              </div>
            </div>

            <div className="flex h-14 rounded-xl bg-green-teal/10 items-center font-hanken font-bold text-lg justify-between pr-4">
              <div className="flex items-center">
                <img
                  className="mx-3"
                  src="/assets/images/icon-verbal.svg"
                  alt="Verbal Icon"
                />
                <p className="text-green-teal">Verbal</p>
              </div>
              <div className="flex items-center">
                <span className="font-extrabold pr-2">61</span>
                <span className="text-dark-gray-blue/40">/ 100</span>
              </div>
            </div>

            <div className="flex h-14 rounded-xl bg-cobalt-blue/10 items-center font-hanken font-bold text-lg justify-between pr-4">
              <div className="flex items-center">
                <img
                  className="mx-3"
                  src="/assets/images/icon-visual.svg"
                  alt="Visual Icon"
                />
                <p className="text-cobalt-blue">Visual</p>
              </div>
              <div className="flex items-center">
                <span className="font-extrabold pr-2">72</span>
                <span className="text-dark-gray-blue/40">/ 100</span>
              </div>
            </div>
          </div>
          <div className="flex place-items-center justify-center">
            <button className="bg-dark-gray-blue hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royal-blue rounded-full text-white text-lg px-24 py-4 font-bold font-hanken">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
