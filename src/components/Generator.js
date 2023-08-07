import React, { useState } from "react";

const Generator = () => {
  const [startNumber, setStartNumber] = useState("");
  const [endNumber, setEndNumber] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = () => {
    if (startNumber.trim() === '' || endNumber.trim() === '') {
      setError('Please enter numbers before clicking the button.');
    } else if(startNumber.trim() < 10000000 || endNumber.trim() < 10000000) {
      setError('Input number must be greater than 1,000,000');
    }else{
      setError('');
      console.log('Number input is:', startNumber, ' and ', endNumber);
    }
  };

  return (
    <div className="w-full lg:w-1/3 sm:w-4/5 mx-auto">
      <div className="flex flex-wrap -m-2">

        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="start" className="leading-7 text-sm text-gray-600">
              Start
            </label>
            <input
              type="number"
              min={10000000}
              value={startNumber}
              onChange={(e) => setStartNumber(e.target.value)}
              id="start"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="end" className="leading-7 text-sm text-gray-600">
              End
            </label>
            <input
              type="number"
              min={10000000}
              value={endNumber}
              onChange={(e) => setEndNumber(e.target.value)}
              id="end"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        {error && <div className="w-full pb-2 text-center text-red-500">{error}</div>}
        
        <div className="p-2 w-full">
          <button onClick={handleButtonClick} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Generator;
