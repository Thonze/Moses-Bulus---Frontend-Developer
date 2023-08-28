'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
    const [capsules, setCapsules] = useState([]);
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [statusFilter, setStatusFilter] = useState('');
  const [launchFilter, setLaunchFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [filteredCapsules, setFilteredCapsules] = useState(capsules);


  useEffect(() => {
    // Fetch data from the SpaceX API
    axios.get('https://api.spacexdata.com/v3/capsules')
      .then(response => {
        setCapsules(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleRowClick = (capsule) => {
    setSelectedCapsule(capsule);
  };


  // Filter capsules based on the search filters
//   const filteredCapsules = capsules.filter(capsule => {
//     const statusMatch = statusFilter ? capsule.status === statusFilter : true;
//     const launchMatch = launchFilter ? capsule.original_launch === launchFilter : true;
//     const typeMatch = typeFilter ? capsule.type === typeFilter : true;
    
//     return statusMatch && launchMatch && typeMatch;
//   });

  const handleSearch = () => {
    setSelectedCapsule(null); // Clear selected capsule
  
    // Filter capsules based on the search filters
    const filteredCapsules = capsules.filter(capsule => {
      const statusMatch = statusFilter ? capsule.status === statusFilter : true;
      const launchMatch = launchFilter ? capsule.original_launch === launchFilter : true;
      const typeMatch = typeFilter ? capsule.type === typeFilter : true;
  
      return statusMatch && launchMatch && typeMatch;
    });
    setSelectedCapsule(null); // Clear selected capsule
  
    // Filter capsules based on the search filters
    const filteredCapsulesStatus = capsules.filter(capsule => {
      const statusMatch = statusFilter ? capsule.status === statusFilter : true;
  
      return statusMatch;
    });

    const handleRowClick = (capsule) => {
        setSelectedCapsule(capsule);
      };
  
    // Update the state with the filtered capsules
    setFilteredCapsules(filteredCapsules, filteredCapsulesStatus);
  };
  
  

  return (
    <div className="flex text-black mx-auto my-20 relative">
      <div className="flex-1">
        <h2 className='my-6'>Search Capsules</h2>
        <div className="mb-4">
          <label>Status:</label>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="destroyed">Destroyed</option>
          <option value="retired">Retired</option>
          <option value="unknown">Unknown</option>
        </select>
        </div>
        <div className="mb-4">
          <label>Original Launch:</label>
          <input
            type="text"
            value={launchFilter}
            onChange={(e) => setLaunchFilter(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label>Type:</label>
          <input
            type="text"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          />
        </div>
        
        {/* Search button */}
        <div className="mb-4">
          <button
            className="bg-blue-500 outline outline-1 hover:bg-blue-700  py-2 px-4 text-black rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Table */}
        <table className="table-auto w-full border-collapse border border-gray-500">
          <thead>
          <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Serial
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Capsule ID
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Status
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Original Launch
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
          {/* Add more header columns as needed */}
        </tr>
          </thead>
          <tbody>
            {filteredCapsules.map(capsule => (
              <tr
                key={capsule.capsule_serial}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => handleRowClick(capsule)}
              >
                {capsules.map(capsule => (
          <tr key={capsule.capsule_id}
              onClick={() => handleRowClick(capsule)}        
          >
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{capsule.capsule_serial}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{capsule.capsule_id}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{capsule.status}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{new Date(capsule.original_launch).toLocaleDateString()}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900"><button className='outline outline-gray-500'>see details</button></div>
            </td>
            {/* Add more data columns as needed */}
          </tr>
          ))}  
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Display selected capsule details */}
      {/* ... */}
    </div>
  );
};
