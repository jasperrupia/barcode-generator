import React from 'react'

const Row = ({startNumber, endNumber}) => {
  const currentDate = new Date();


  const length =  endNumber - startNumber + 1;
  const numbers = Array.from({ length: length }, (_, index) => index + 1);
  return (
          <tbody>
            {numbers.map((number) => (
            <tr className="bg-gray-100 border-b text-center">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {number}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                01
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {startNumber++}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {startNumber % 11}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {startNumber}{startNumber % 11}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                EE{startNumber}{startNumber % 11}TZ
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {currentDate.toLocaleString()}
              </td>
            </tr>
            ))}
          </tbody>
  )
}

export default Row