import ChevronLeft from './Icons/ChevronLeft';
import ChevronRight from './Icons/ChevronRight';

export default function Pagination({ totalPages, selectedIdx, onPageChange }) {
  return (
    <div className="flex py-6 gap-x-6 mx-auto justify-center">
      <button
        onClick={() => onPageChange(selectedIdx - 1)}
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
              onClick={() => onPageChange(idx)}
            >
              {idx + 1}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onPageChange(selectedIdx + 1)}
        disabled={selectedIdx === totalPages - 1}
        className="flex items-center gap-x-2 font-medium text-sm border-[1px] rounded-[4px] py-1.5 px-3 border-[#D9D9D9]"
      >
        Next
        <ChevronLeft />
      </button>
    </div>
  );
}
