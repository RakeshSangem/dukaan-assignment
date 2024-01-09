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
      </button>
    </>
  );
}
