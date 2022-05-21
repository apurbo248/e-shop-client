import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchHandler = (e) => {
     
    console.log(keyword);
    if (keyword.trim()) {
      navigate(`/v1/products/${keyword}`);
    } 
    else {
      navigate("/v1/products");
    }
  };

  useEffect(() => {}, []);

  return (
    <div>
      <form onSubmit={searchHandler}>
        <div class="relative text-lg bg-transparent text-gray-800 md:pl-96">
          <div class="flex items-center   py-2">
            <input
              class=" text-sm  mr- px-2 leading-tight border rounded-full"
              type="text"
              placeholder="Search ..."
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
