import React from 'react';
import { FaSearch } from 'react-icons/fa';

export const SearchBar: React.FC = () => (
  <form className="w-auto" role="search" aria-label="Site search form">
    <div className="flex">
      <div className="hidden sm:flex items-center border rounded-l px-3 bg-white">
        <FaSearch className="text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-40 sm:w-full border sm:border-t sm:border-l-0 sm:border-b sm:border-r rounded-bl rounded-tl sm:rounded-l-none px-4 py-2 focus:outline-none"
        aria-label="Search products"
      />
      <button
        type="submit"
        className="hidden sm:block bg-primary text-white px-4 md:px-6 py-2 rounded-r font-semibold hover:bg-primary-light whitespace-nowrap"
        aria-label="Submit search"
      >
        Search
      </button>
      <button
        type="submit"
        className="flex items-center justify-center sm:hidden bg-primary text-white px-4 md:px-6 py-2 rounded-r font-semibold hover:bg-primary-light whitespace-nowrap"
        aria-label="Submit search"
      >
        <FaSearch className="text-white" aria-hidden="true" />
      </button>
    </div>
  </form>
); 