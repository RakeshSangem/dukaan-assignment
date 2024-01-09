import { useState } from 'react';
import { Inter } from 'next/font/google';

import ChevronRight from '@/components/Icons/ChevronRight';
import ChevronLeft from '@/components/Icons/ChevronLeft';
import Navbar from '@/components/navigation/navbar';
import Layout from '@/components/Layout';
import TransactionTable from '@/components/table/transactionsTable';
import SearchIcon from '@/components/Icons/SearchIcon';

import { transactions } from '@/data/transactions';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [selectedIdx, setSelectedIdx] = useState(0);
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
    <main className={`${inter.className}`}>
      <Layout>
        <Navbar />
        <section className="bg-[#D9D9D9] h-screen overflow-y-scroll pb-8">
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
              </select>
            </div>
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
            <div className="mb-5">
              <h2 className="text-xl font-medium text-[#1A181E]">
                Transactions | This Month
              </h2>
            </div>
            <div className="bg-white h-full rounded-lg p-3 shadow-[0 2px 6px 0 rgba(26, 24, 30, 0.04)] mb-20">
              {/*  */}
              <div class="flex w-fit space-x-2 py-2.5 px-4 items-center border border-border rounded">
                <SearchIcon />
                <input
                  class="bg-white outline-none text-sm font-normal w-44 placeholder:text-[#999]"
                  placeholder="Search by order ID..."
                />
              </div>

              <TransactionTable transactions={paginatedTransactions} />
              {/* Pagination */}

              <div className="flex py-6 gap-x-6 mx-auto justify-center">
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
