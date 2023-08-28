import React from 'react'

export default function Table() {
  return (
    <div>
        <section>
        <div className='relative md:flex-col my-6 md:py-20"'>
          <img src='Explore.png' alt/>
          <div className='container mx-auto absolute inset-0 bg-opacity-50 text-white py-6'>
            <h2 className='text-center text-2xl py-10 md:text-2xl md:py-10'>Explore Rockets</h2>
            <div className='flex flex-col md:flex-row gap-4 mx-auto container'>
            <div className=' md:w-1/2 my-6  container mx-auto flex-grow md:py-0'>
              <h2 className='py-10'>Search Capsules</h2>
              <div className=''>
                <label className='px-3'>status:</label>
                <select className='text-black'>
                <option value="">Select Status</option>
                <option value='active'>Active</option>
                <option value='inactive'>Inactive</option>
                </select> 
              </div>
              <div className='py-3'>
                <label className='px-'>Original Launch:</label>
                <input
                  type="text"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className='text-gray-800'
                />
                {/* Search button */}
                  <div className="mb-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                      onClick={handleSearch}
                            >
                      Search
                    </button>
                  </div>

                </div>
                <div>
                  <label className='px-3'>type:</label>
                  <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                  <option value="">All</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                </div>
            </div>
            <div className='md:w-1/2 flex-grow my-6 py-20 md:py-20'>
              <img src='capsule.png' alt='' />
              <p className='font-italic py-3 font-light text-sm' >search results</p>
             {/* Display selected capsule details */}
      {selectedCapsule && (
        <div className="w-1/4 p-4 bg-gray-100">
          <h3 className="text-lg font-semibold mb-2">Selected Capsule</h3>
          <p>Serial: {selectedCapsule.capsule_serial}</p>
          <p>Capsule ID: {selectedCapsule.capsule_id}</p>
          <p>Status: {selectedCapsule.status}</p>
          <p>Original Launch: {selectedCapsule.original_launch}</p>
        </div>
      )}

            </div>
          </div>
        </div>
        </div>
      </section>

    </div>
  )
}
