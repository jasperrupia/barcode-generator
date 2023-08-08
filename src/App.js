import "./App.css";
import ResTable from "./components/ResTable";
import React, { useState } from "react";

function App() {
  var [startNumber, setStartNumber] = useState("");
  const [length, setLength] = useState("");
  // const [error, setError] = useState("");

  // const handleButtonClick = () => {
  //   if (startNumber.trim() === '' || length.trim() === '') {
  //     setError('Please enter numbers before clicking the button.');
  //   } else if(startNumber.trim() < 10000000) {
  //     setError('Input number must be greater than 1,000,000');
  //   }else{ 
  //     setError('');
  //     console.log('Number input is:', startNumber, ' and length is', length);
  //     setStartNumber(10000001)
  //     setLength(40)
  //   }
  // };

  const handleChange = (event) => {
    const startNumber = event.target.value;
    setStartNumber(startNumber);
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              BarCode Generator
            </h1>
          </div>
          <div className="w-full lg:w-1/3 sm:w-4/5 mx-auto">
            <div className="flex flex-wrap -m-2">

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="start" className="leading-7 text-sm text-gray-600">
                    Starting from:
                  </label>
                  <input
                    type="number"
                    min={10000000}
                    max={99999999}
                    value={startNumber}
                    placeholder="Enter a number"
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="end" className="leading-7 text-sm text-gray-600">
                    How many:
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={10000}
                    placeholder="1 ~ 10,000"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* {error && <div className="w-full pb-2 text-center text-red-500">{error}</div>} */}
              
              {/* <div className="p-2 w-full">
                <button onClick={handleButtonClick} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Generate
                </button>
              </div> */}

            </div>
          </div>

          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200">
            <ResTable startNumber={startNumber.length === 8 ? startNumber : ''} length={startNumber.length === 8 ? length : ''} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
