import React from "react";

function Pagination({ data, nextPage, prevPage, page , totalPages}) {
  console.log(data);
  

  return (
    <div className="buttons flex justify-center space-x-3 mb-6">
      <button className={`w-20  ${page<2 ? "bg-gray-400 opacity-90" : " bg-black text-white p-2 hover:bg-white hover:text-gray-700 hover:border hover:border-1 hover:border-gray-300"}`} disabled={page<2 ? true : false} onClick={prevPage}>
        Back
      </button>
      <button className={`w-20 ${page>17 ? "bg-gray-400 opacity-90" :  "bg-black text-white p-2 hover:bg-white hover:text-gray-700 hover:border hover:border-1 hover:border-gray-300"} `}  disabled={page>17 ? true : false} onClick={nextPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
