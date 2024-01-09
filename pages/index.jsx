import { useState } from 'react';
import { transactions } from '@/data/transactions';

import Navbar from '@/components/navigation/navbar';
import Layout from '@/components/Layout';
import TransactionTable from '@/components/table/transactionsTable';
import SearchIcon from '@/components/Icons/SearchIcon';
import Pagination from '@/components/Pagination';
import DropDown from '@/components/DropDown';
import DownloadIcon from '@/components/Icons/DownloadIcon';

export default function Home() {
  const [search, setSearch] = useState('');
  const [filteredTxn, setFilterdTxn] = useState(transactions);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const itemsPerPage = 15;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const handlePageChange = (page) => {
    setSelectedIdx(page);
  };

  const handleSearch = (e) => {
    const searchKeyword = e.target.value.toLowerCase();

    setSearch(searchKeyword);

    const filteredTransactions = transactions.filter(
      ({ id, amount, date, fee }) =>
        id.toLowerCase().includes(searchKeyword) ||
        amount.toString().includes(searchKeyword) ||
        date.toLowerCase().includes(searchKeyword) ||
        fee.toString().includes(searchKeyword)
    );

    setFilterdTxn(filteredTransactions);
  };

  const paginatedTransactions = filteredTxn.slice(
    selectedIdx * itemsPerPage,
    (selectedIdx + 1) * itemsPerPage
  );

  const sortByDate = () => {
    const sortedTransactions = transactions.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    setFilterdTxn(sortedTransactions);
  };

  return (
    <Layout>
      <Navbar />
      <section className="bg-[#D9D9D9] h-screen overflow-y-scroll pb-8">
        <div className="px-8 max-w-7xl mx-auto">
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
            <div className="flex items-center justify-between">
              <div className="flex w-fit space-x-2 py-2.5 px-4 items-center border border-border rounded">
                <SearchIcon />
                <input
                  type="text"
                  onChange={handleSearch}
                  className="bg-white outline-none text-sm font-normal w-44 placeholder:text-[#999]"
                  placeholder="Search by order ID..."
                />
              </div>
              <div className="flex items-center gap-x-2">
                <DropDown />
                <button className="bg-white px-2.5 py-2 border-[1px] border-[#D9D9D9] rounded-[4px]">
                  <DownloadIcon />
                </button>
              </div>
            </div>
            <TransactionTable
              sortByDate={sortByDate}
              transactions={paginatedTransactions}
            />
            <Pagination
              totalPages={totalPages}
              selectedIdx={selectedIdx}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
