import React from "react";

const DashboardBanner = () => {
  return (
    <div className="bg-teal-600 pl-8 md:pl-12 pt-8 pr-10 md:pr-[35%] pb-[7rem] relative">
      <div className="group text-xs text-white mb-5">
        <span className="group-hover:hidden">Completed class</span>
        <span className="hidden group-hover:inline underline">
          Ongoing class
        </span>
        <span className="">
          {" "}
          / DP001T0: Designing and implementing a data science solution on
          Azure(Data Scientist)
        </span>
      </div>

      <div className="mb-4">
        <button className="border border-gray-400 text-xs mr-2 pl-1 pr-1 rounded-md bg-blue-200 text-white">
          Microsoft
        </button>
        <button className="border border-gray-400 text-xs mr-2 pl-1 pr-1 rounded-md bg-orange-200 text-white">
          Public
        </button>
      </div>

      <div className="text-white">
        <h1 className="md:text-[1.4rem] text-[1.2rem] text-white mb-3">
          DP001T0: Designing and Implementing a Data Science solution on
          Azure(Data Scientist)
        </h1>
        <p className="text-sm mb-6">Completed On: 24 Feb, 2023</p>
        <p className="text-xs mb-6 text-green-500">Your Attendance: 100%</p>
      </div>

      <div>
        <button className="border border-gray-400 text-sm p-1 pl-2 pr-2 mb-1 rounded-md text-white mr-2">
          Last Day Evalution
        </button>
        <button className="border border-gray-400 text-sm p-1 pl-2 pr-2 rounded-md text-white mr-2">
          Buy Exam
        </button>
        <button className="border border-gray-400 text-sm p-1 pl-2 pr-2 mb-1 rounded-md text-white mr-2">
          Access Digital Assests
        </button>
        <button className="border border-gray-400 text-sm p-1 pl-2 pr-2 rounded-md text-white mr-2">
          Class Recordings
        </button>
        <button className="border border-gray-400 text-sm p-1 pl-2 pr-2 rounded-md text-white mr-2">
          Additional Resources
        </button>
      </div>
    </div>
  );
};

export default DashboardBanner;
