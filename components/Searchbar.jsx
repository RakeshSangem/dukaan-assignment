import React, { useRef, useEffect } from 'react';
import SearchIcon from './Icons/SearchIcon';

export default function SearchBar() {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="flex items-center rounded-md px-4 w-96 py-2 bg-[#F2F2F2] gap-x-2 relative">
      <SearchIcon />
      <input
        ref={inputRef}
        className="outline-none bg-transparent w-full"
        placeholder="Search features, tutorials, etc."
        type="text"
      />
      {/* <pre>⌘K</pre> */}
      <div className="absolute right-2 text-xs  p-1 rounded-md top-1/2 transform -translate-y-1/2 text-slate-400 border-[1px] border-gray-300">
        ⌘K
      </div>
    </div>
  );
}
