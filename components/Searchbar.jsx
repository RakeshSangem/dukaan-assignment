import SearchIcon from './Icons/SearchIcon';

export default function SearchBar() {
  return (
    <div className="flex items-center rounded-md px-4 w-96 py-2 bg-[#F2F2F2] gap-x-2">
      <SearchIcon />
      <input
        className="outline-none bg-transparent w-full"
        placeholder="Search features, tutorials, etc."
        type="text"
      />
    </div>
  );
}
