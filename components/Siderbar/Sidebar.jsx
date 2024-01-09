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

export default function SiderBar() {
  return (
    <nav
      className={
        'px-[10px] py-[16px] w-[224px] flex flex-col gap-y-6 h-screen bg-[#1E2640]'
      }
    >
      <CompanyInfo />
      <ul className="flex flex-col gap-y-1 grow overflow-y-auto">
        <li className="py-2 px-4 flex items-center gap-x-3 text-sm w-full h-full text-white hover:bg-[#ffff]/10 rounded-[4px]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9398 17.75H12.0675C11.7165 17.75 11.3797 17.6111 11.1307 17.3636C10.8816 17.1162 10.7407 16.7802 10.7385 16.4292V11.1622H7.22722V16.4292C7.22505 16.7802 7.08407 17.1162 6.83507 17.3636C6.58606 17.6111 6.24925 17.75 5.89818 17.75H2.02593C1.62123 17.75 1.2331 17.5892 0.946934 17.3031C0.660767 17.0169 0.5 16.6288 0.5 16.2241V6.99465C0.500317 6.75707 0.556109 6.52284 0.662931 6.31062C0.769752 6.0984 0.924652 5.91405 1.11529 5.77227L8.15426 0.554571C8.41825 0.35686 8.73919 0.25 9.069 0.25C9.39882 0.25 9.71975 0.35686 9.98374 0.554571L16.8832 5.76406C17.0665 5.91176 17.2136 6.09945 17.3131 6.31275C17.4126 6.52605 17.462 6.75931 17.4575 6.99465V16.2241C17.4586 16.4241 17.4201 16.6223 17.3443 16.8074C17.2686 16.9925 17.1569 17.1608 17.0159 17.3026C16.8749 17.4444 16.7072 17.5569 16.5225 17.6337C16.3378 17.7105 16.1398 17.75 15.9398 17.75ZM12.1496 16.3553H15.9562C15.9896 16.3532 16.0209 16.3385 16.0438 16.3141C16.0666 16.2897 16.0793 16.2575 16.0793 16.2241V6.99465C16.08 6.97543 16.0758 6.95635 16.0672 6.93915C16.0586 6.92195 16.0458 6.90718 16.03 6.89621L9.11412 1.68671C9.09109 1.67119 9.06396 1.6629 9.03619 1.6629C9.00842 1.6629 8.98128 1.67119 8.95825 1.68671L1.92748 6.90441C1.91051 6.91673 1.89653 6.93271 1.88659 6.95117C1.87664 6.96964 1.87099 6.99011 1.87006 7.01106V16.2241C1.87006 16.2589 1.88389 16.2923 1.9085 16.3169C1.93312 16.3415 1.96651 16.3553 2.00132 16.3553H5.80794V11.0228C5.81009 10.6905 5.94303 10.3725 6.17796 10.1376C6.41289 9.90267 6.73091 9.76973 7.06314 9.76758H10.878C11.0439 9.7665 11.2084 9.79811 11.3621 9.8606C11.5158 9.9231 11.6557 10.0153 11.7737 10.1318C11.8918 10.2484 11.9858 10.387 12.0503 10.5399C12.1148 10.6928 12.1485 10.8569 12.1496 11.0228V16.3553Z"
              fill="white"
            />
          </svg>
          <Link href="/">Dashboard</Link>
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
    <div className="bg-[#353C53] flex gap-x-2 rounded-[4px] items-center py-[6px] px-3 bottom-4 w-full text-white justify-self-end">
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
