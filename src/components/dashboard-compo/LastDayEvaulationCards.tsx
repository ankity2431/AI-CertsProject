import React from "react";

const LastDayEvaulationCards = () => {
  return (
    <div className=" bg-gray-300 pb-[3rem]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl -mt-12 relative z-10">

      <div className="flex border border-white-500 rounded-lg p-4 justify-between shadow-lg w-full bg-white">
        <div>
          <h2>Claim your Badge</h2>
          <p className="text-xs mt-2 mb-2">
            Scan QR to download on Mobile Phone
          </p>
          <button className="p-1 bg-blue-500 text-white rounded-md text-xs">
            Download
          </button>
        </div>
        <div>
          <img
            className="h-20"
            alt="QR"
            src="https://images.seeklogo.com/logo-png/21/2/qr-code-logo-png_seeklogo-217342.png"
          />
        </div>
      </div>
      
        <div className="flex border border-white-500 rounded-lg p-4 justify-between shadow-lg w-full bg-white">
          <div>
            <h2>Claim your Badge</h2>
            <p className="text-xs mt-2 mb-2">
              Scan QR to download on Mobile Phone
            </p>
            <button className="p-1 bg-blue-500 text-white rounded-md text-xs">
              Download
            </button>
          </div>
          <div>
            <img
              className="h-20"
              alt="QR"
              src="https://www.pngplay.com/wp-content/uploads/6/Training-Course-Certificate-PNG-HD-Quality.png"
            />
          </div>
        </div>
      
        <div className="md:col-span-2 flex flex-col md:flex-row justify-between gap-4 shadow-lg border border-white-500 p-4 rounded-lg bg-white w-full">
  {/* Title Block */}
  <div className="md:w-1/3 flex md:flex-none items-center justify-center">
    <p className="text-lg font-bold">Access-</p>
    <p className="text-lg font-bold">lab module</p>
  </div>

  {/* Form Block */}
  <div className="bg-gray-400 rounded-lg p-4 md:w-2/3 w-full relative z-10">
    <p>lab module</p>
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
      <select
        className="text-xs p-2 rounded-sm w-full sm:w-auto flex-1"
        name="module"
        id="module"
      >
        <option value="chapter1">01 Exploring the Lab Environment</option>
        <option value="chapter2">02 Exploring the Lab Environment</option>
        <option value="chapter3">03 Exploring the Lab Environment</option>
        <option value="chapter4">04 Exploring the Lab Environment</option>
      </select>
      <button className="p-2 bg-blue-600 text-white rounded-lg text-xs sm:ml-2">
        Access LAB
      </button>
    </div>

    <div className="flex items-center gap-2">
      <img
        className="h-5"
        src="https://cdn-icons-png.flaticon.com/512/12891/12891962.png"
        alt="icon"
      />
      <p className="text-xs">
        Expires in 180 days (Valid till 2023-02-24)
      </p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default LastDayEvaulationCards;
