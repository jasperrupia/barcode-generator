import React from 'react'
import Row from './Row'

const ResTable = ({startNumber, endNumber}) => {
  return (
<div className="flex flex-col">
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
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
          <Row startNumber={startNumber} endNumber={endNumber} />
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default ResTable