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
        <li>
          <Link
            className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 z"
            href="/"
          >
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <Link
            className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded"
            href="/"
          >
            <Copy />
            Orders
          </Link>
        </li>
        <li>
          <Link
            className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded"
            href="/"
          >
            <Squares />
            Products
          </Link>
        </li>
        <li>
          <Link
            className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded"
            href="/"
          >
            <Truck />
            Delivery
          </Link>
        </li>
        <li>
          <Link
            className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded"
            href="/"
          >
            <Mic />
            Marketing
          </Link>
        </li>
        <li>
          <Link
            className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded"
            href="/"
          >
            <ChartIcon />
            Analytics
          </Link>
        </li>
        <li>
          <Link
            className="py-2 px-4 bg-white/10 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded"
            href="/"
          >
            <CardsIcon />
            Payments
          </Link>
        </li>
        <li>
          <Link
            className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded"
            href="/"
          >
            <CursorIcon />
            Tools
          </Link>
        </li>
        <li>
          <Link
            className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded"
            href="/"
          >
            <DiscoutsIcon />
            Discounts
          </Link>
        </li>
        <li>
          <Link
            className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded"
            href="/"
          >
            <UsersIcon />
            Audience
          </Link>
        </li>
        <li>
          <Link
            className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded"
            href="/"
          >
            <ArtIcon />
            Appearance
          </Link>
        </li>
        <li>
          <Link
            className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white/90 hover:bg-white/10 rounded"
            href="/"
          >
            <ShockIcon />
            Plugins
          </Link>
        </li>
      </ul>
      <Credits />
    </nav>
  );
}

function Credits() {
  return (
    <div className="bg-[#353C53] mt-auto flex gap-x-2 rounded items-center py-1.5 px-3 bottom-4 w-full text-white justify-self-end">
      <div className=" bg-white/10 rounded p-[6px]">
        <WalletIcon />
      </div>
      <div className="flex flex-col">
        <p className="text-white/80 text-[13px]">Available Credits</p>
        <span className="text-white font-medium text-base">222.10</span>
      </div>
    </div>
  );
}
