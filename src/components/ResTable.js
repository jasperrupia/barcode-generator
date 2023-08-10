import React, { useRef } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel'

const ResTable = ({startNumber, length}) => {
  const currentDate = new Date();

  const numbers = Array.from({ length: length }, (_, index) => index + 1);
  // const inputDigits = [...startNumber].map(Number);
  const weightingFactor = [8, 6, 4, 2, 3, 5, 9, 7];
  startNumber = parseInt(--startNumber);
  const tableref = useRef(null);
  const {onDownload} = useDownloadExcel({
    currentTableRef: tableref.current,
    filename: 'Codes Generated',
    sheet: 'Data' 
  })

  return (
    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200">
      <div>
      <button 
        onClick={onDownload} 
        // disabled={setShowComponent}
        className="flex text-white bg-gray-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Export
      </button>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table ref={tableref} id="dTable" className="min-w-full">
                <thead className="bg-white border-b">
                  <tr className='text-center'>
                    <th scope="col" className="text-sm text-center font-medium text-gray-900 px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Barcode Id
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Given
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Remainder
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Generated
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      Validity
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                      DateTime
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {numbers.map(function (number) {
                    startNumber = startNumber + 1;

                    const remainder = 11 - (([...startNumber.toString()].map(Number).map((digit, index) => {
                      return (digit * weightingFactor[index]);
                    }).reduce((acc, curr) => acc + curr, 0) % 11))

                    var checkDigit = '';
                    if(remainder === 10) checkDigit = 0;
                    else if(remainder === 11) checkDigit = 5;
                    else checkDigit = remainder;

                    return (
                      <tr key={number} className="bg-gray-100 border-b text-center">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {number}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          01
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {startNumber}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {remainder}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {startNumber}{checkDigit}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          EE{startNumber}{checkDigit}TZ
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {currentDate.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResTable