import AnnouncementIcon from '../Icons/AnnouncementIcon';
import HelpIcon from '../Icons/HelpIcon';
import PolygonIcon from '../Icons/Polygon';
import SearchBar from '../Searchbar';

export default function Navbar() {
  return (
    <nav className="flex sticky bg-white items-center py-3 px-8 justify-between border-b-[1px] border-[#D9D9D9]">
      <div className="flex gap-x-4">
        <span className="text-[#1A181E] text-[15px]">Payments</span>
        <p className="flex gap-2 items-center text-xs text-[#4D4D4D]">
          <HelpIcon /> How it works?
        </p>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full grid place-items-center bg-[#E6E6E6]">
          <AnnouncementIcon />
        </div>
        <div className="w-10 h-10 rounded-full grid place-items-center bg-[#E6E6E6]">
          <PolygonIcon />
        </div>
      </div>
    </nav>
  );
}
