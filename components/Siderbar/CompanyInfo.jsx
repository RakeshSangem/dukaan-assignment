import BrandImage from '../Icons/BrandImage';
import DropDown from '../Icons/DropDown';

export default function CompanyInfo() {
  return (
    <div className="flex items-center w-full px-[8px]">
      <BrandImage />
      <div className="flex flex-col ml-[12px]">
        <h1 className="text-[15px] text-white">Nishyan</h1>
        <a className="cursor-pointer underline text-[13px] text-[#FFFFFF]/80">
          visit store
        </a>
      </div>
      <button className="ml-auto ">
        <DropDown />
      </button>
    </div>
  );
}
