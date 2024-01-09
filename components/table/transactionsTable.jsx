import InfoIcon from '../Icons/InfoIcon';


function TableRow({ elem, id }) {
  return (
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
  );
}

export default function TransactionTable({ transactions }) {
  return (
    <table className="w-full mt-3">
      <thead className="text-xs bg-[#F2F2F2] font-thin px-3">
        <tr className="">
          <th className="rounded-l-[4px] pl-3 font-normal text-start py-[10px]">
            Order ID
          </th>
          <th className="pl-3 font-normal text-start py-[10px]">Order Date</th>
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
        {transactions.map((elem, id) => (
          <TableRow key={id} elem={elem} />
        ))}
      </tbody>
    </table>
  );
}
