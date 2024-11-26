import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      if (currentPage > 3) {
        pageNumbers.push("...");
      }

      const start = Math.max(2, currentPage);
      const end = Math.min(totalPages - 1, currentPage + 2);

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 3) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center mt-6 space-x-2">
   
   

      {pageNumbers.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            className={`px-3 py-2 rounded-lg border ${
              page === currentPage + 1
                ? "bg-black text-white"
                : "bg-transparent border-0 text-[#2C2C2C] hover:bg-gray-100"
            }`}
            onClick={() => onPageChange(page - 1)}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="px-3 py-2 text-gray-500">
            {page}
          </span>
        )
      )}

      
  
    </div>
  );
};

export default Pagination;
