import React, { useState } from 'react';
import SortIcon from './Icons/SortIcon';

export default function () {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <button
        onClick={handleDropdown}
        className="border-[#D9D9D9] border-[1px] rounded-[4px] relative font-normal text-sm px-4 py-2 text-center inline-flex items-center "
        type="button"
      >
        Sort <SortIcon />
        {/* <div
          id="dropdown"
          className={`z-50 absolute top-10 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${
            showDropdown ? 'block' : 'hidden'
          }`}
        >
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <button>ASC</button>
            </li>
            <li>
              <button>DESC</button>
            </li>
          </ul>
        </div> */}
      </button>
    </>
  );
}
