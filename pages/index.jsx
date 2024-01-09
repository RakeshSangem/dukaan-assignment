import { useState } from 'react';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import AnnouncementIcon from '@/components/Icons/AnnouncementIcon';
import HelpIcon from '@/components/Icons/HelpIcon';
import PolygonIcon from '@/components/Icons/Polygon';
import SearchBar from '@/components/Searchbar';
import InfoIcon from '@/components/Icons/InfoIcon';
import ChevronRight from '@/components/Icons/ChevronRight';
import ChevronLeft from '@/components/Icons/ChevronLeft';
import { transactions } from '@/data/transactions';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const handlePageChange = (page) => {
    setSelectedIdx(page);
  };

  const paginatedTransactions = transactions.slice(
    selectedIdx * itemsPerPage,
    (selectedIdx + 1) * itemsPerPage
  );

  return (
    <main className={inter.className}>
      <Layout>
        <section className="bg-[#D9D9D9] h-screen overflow-y-auto pb-10">
          <nav className="flex bg-white items-center py-3 px-8 justify-between border-b-[1px] border-[#D9D9D9]">
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
          {/* Dashboard starts from here! */}
          <div className="px-8">
            <div className="flex justify-between mt-8 mb-6">
              <h2 className="text-xl font-medium text-[#1A181E]">Overview</h2>

              <select className="bg-white px-2.5 py-1.5 border-[1px] border-[#D9D9D9] rounded-[4px]">
                <option
                  value="Last Month"
                  className="text-[#4D4D4D] text-base font-normal"
                >
                  Last Month
                </option>
                <option value="Last Month" className="text-[#4D4D4D] text-base">
                  Last Month
                </option>
                <option value="Last Month" className="text-[#4D4D4D] text-base">
                  Last Month
                </option>
                <option value="Last Month" className="text-[#4D4D4D] text-base">
                  Last Month
                </option>
              </select>
            </div>
            {/* Overview of the payments */}
            <div className="flex gap-x-2 my-8">
              <div className="w-1/2 bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-[#4D4D4D] text-base font-normal">
                  Total orders
                </h4>
                <p className="text-[#1A181E] font-medium text-[32px]">231</p>
              </div>
              <div className="w-1/2 bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-[#4D4D4D] text-base font-normal">
                  Amount recieved
                </h4>
                <p className="text-[#1A181E] font-medium text-[32px]">
                  ₹23,92,312.19
                </p>
              </div>
            </div>

            {/* Transations */}
            <div className="mb-5">
              <h2 className="text-xl font-medium text-[#1A181E]">
                Transactions | This Month
              </h2>
            </div>
            {/* Table starts from here */}
            <div className="bg-white h-full rounded-lg p-3">
              {/*  */}
              <div class="flex w-fit space-x-2 py-2.5 px-4 items-center border border-border rounded">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_91734_75730)">
                    <path
                      d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z"
                      fill="#999999"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_91734_75730">
                      <rect width="14" height="14" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <input
                  class="bg-white outline-none text-sm font-normal w-44 placeholder:text-[#999]"
                  placeholder="Search by order ID..."
                />
              </div>

              {/*  */}
              {/* <SearchBar /> */}

              <table className="w-full mt-3">
                <thead className="text-xs bg-[#F2F2F2] font-thin px-3">
                  <tr className="">
                    <th className="rounded-l-[4px] pl-3 font-normal text-start py-[10px]">
                      Order ID
                    </th>
                    <th className="pl-3 font-normal text-start py-[10px]">
                      Order Date
                    </th>
                    <th className="pl-3 font-normal text-right  py-[10px]">
                      Order Amount
                    </th>
                    <th className="pr-3 font-normal text-right  py-[10px] rounded-r-[4px]">
                      <span className="flex justify-end items-center gap-x-1">
                        Transaction fees
                        <InfoIcon />
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransactions.map((elem, id) => (
                    <tr key={id}>
                      <td className="pl-3 text-[#146EB4]   border-b  py-3.5 text-sm font-medium">
                        {elem.id}
                      </td>
                      <td className="pl-3 text-sm font-normal  border-b py-3.5 text-[#1A181E]">
                        {elem.date}
                      </td>
                      <td className="pl-3 text-sm font-normal border-b py-3.5 text-right text-[#1A181E]">
                        ₹{elem.amount.toLocaleString()}
                      </td>
                      <td className="pr-3 text-sm font-normal  border-b py-3.5 text-right text-[#1A181E]">
                        ₹{elem.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination */}

              <div className="flex py-10 gap-x-6 mx-auto justify-center">
                <button
                  onClick={() => handlePageChange(selectedIdx - 1)}
                  disabled={selectedIdx === 0}
                  className="flex items-center gap-x-2 font-medium text-sm border-[1px] rounded-[4px] py-1.5 px-3 border-[#D9D9D9]"
                >
                  <ChevronRight />
                  Previous
                </button>
                <ul className="flex gap-x-2 items-center">
                  {Array.from({ length: totalPages }, (_, idx) => (
                    <li key={idx}>
                      <button
                        className={`p-0.5 h-7 w-7 text-sm grid place-items-center rounded-[4px] ${
                          selectedIdx === idx
                            ? 'bg-[#146EB4] text-white'
                            : 'text-[#4D4D4D]'
                        }`}
                        onClick={() => handlePageChange(idx)}
                      >
                        {idx + 1}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePageChange(selectedIdx + 1)}
                  disabled={selectedIdx === totalPages - 1}
                  className="flex items-center gap-x-2 font-medium text-sm border-[1px] rounded-[4px] py-1.5 px-3 border-[#D9D9D9]"
                >
                  Next
                  <ChevronLeft />
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
}
