import AnnouncementIcon from '@/components/Icons/AnnouncementIcon';
import HelpIcon from '@/components/Icons/HelpIcon';
import PolygonIcon from '@/components/Icons/Polygon';

import Layout from '@/components/Layout';
import SearchBar from '@/components/Searchbar';
import React from 'react';

export default function Payments() {
  return (
    <Layout>
      <section className="bg-[#D9D9D9] h-screen overflow-y-auto">
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

            <select
              name=""
              id=""
              className="bg-white py-1 px-2 border-[1px] border-[#D9D9D9] rounded-[4px]"
            >
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
          <div className="bg-white h-full">
            <table className="w-full">
              <thead className="text-xs text-gray-700 font-thin">
                <tr className="">
                  <th className="">Order ID</th>
                  <th className="">Order Date</th>
                  <th className="">Order Amount</th>
                  <th className="">Transaction fees</th>
                </tr>
              </thead>
              <tbody>
                {Array(10)
                  .fill({
                    id: '#12321321',
                    date: '7 July, 2023',
                    amount: 1278.23,
                    fee: 22,
                  })
                  .map((elem, id) => (
                    <tr key={id}>
                      <td>{elem.id}</td>
                      <td>{elem.date}</td>
                      <td>{elem.amount}</td>
                      <td>{elem.fee}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}
