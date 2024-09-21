"use client";

interface BadgeProps { 
  value: string,
  onRemove: () => void
}

export default function FilterBadge({ value, onRemove }: BadgeProps) {
  return (
    <div className="inline-flex items-center px-3 py-1 bg-white text-black border rounded-full font-FiraGO text-sm font-normal">
      <span>{value}</span>
      <button
        onClick={onRemove}
        className="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
