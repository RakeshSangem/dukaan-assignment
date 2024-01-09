import Link from 'next/link';
import CompanyInfo from './CompanyInfo';
import Copy from '../Icons/Copy';
import Squares from '../Icons/Squares';
import Truck from '../Icons/Truck';
import Mic from '../Icons/Mic';
import ChartIcon from '../Icons/charIcon';
import CardsIcon from '../Icons/CardsIcon';
import CursorIcon from '../Icons/Cursor';
import DiscoutsIcon from '../Icons/DiscountsIcons';
import UsersIcon from '../Icons/UsersIcon';
import ArtIcon from '../Icons/ArtIcon';
import ShockIcon from '../Icons/ShockIcon';
import WalletIcon from '../Icons/WalletIcon';
import HomeIcon from '../Icons/HomeIcon';

export default function SiderBar() {
  return (
    <nav
      className={
        'px-[10px] py-[16px] w-[224px] flex flex-col gap-y-6 h-screen bg-[#1E2640]'
      }
    >
      <CompanyInfo />
      <ul className="flex flex-col gap-y-1 overflow-y-auto">
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 rounded-[4px]">
          <HomeIcon />
          <Link href="/">Home</Link>
        </li>
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded-[4px]">
          <Copy />
          <Link href="/">Orders</Link>
        </li>
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded-[4px]">
          <Squares />
          <Link href="/">Products</Link>
        </li>
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded-[4px]">
          <Truck />
          <Link href="/">Delivery</Link>
        </li>
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded-[4px]">
          <Mic />
          <Link href="/">Marketing</Link>
        </li>
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded-[4px]">
          <ChartIcon />
          <Link href="/">Analytics</Link>
        </li>
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded-[4px]">
          <CardsIcon />
          <Link href="/">Payments</Link>
        </li>
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded-[4px]">
          <CursorIcon />
          <Link href="/">Tools</Link>
        </li>
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded-[4px]">
          <DiscoutsIcon />
          <Link href="/">Discounts</Link>
        </li>
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded-[4px]">
          <UsersIcon />
          <Link href="/">Audience</Link>
        </li>
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded-[4px]">
          <ArtIcon />
          <Link href="/">Appearance</Link>
        </li>
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded-[4px]">
          <ShockIcon />
          <Link href="/">Plugins</Link>
        </li>
      </ul>
      <Credits />
    </nav>
  );
}

function Credits() {
  return (
    <div className="bg-[#353C53] mt-auto flex gap-x-2 rounded-[4px] items-center py-[6px] px-3 bottom-4 w-full text-white justify-self-end">
      <div className=" bg-white/10 rounded-[4px] p-[6px]">
        <WalletIcon />
      </div>
      <div className="flex flex-col">
        <p className="text-white/80 text-[13px]">Available Credits</p>
        <span className="text-white font-medium text-base">222.10</span>
      </div>
    </div>
  );
}
