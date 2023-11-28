import React, { FC } from 'react';
interface SearchBarProps {
    setSearchTerm: (term: string) => void;
}
const SearchBar: FC<SearchBarProps> = ({ setSearchTerm }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center my-14 z-50">
            <div className="relative mt-4 md:mt-0">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                  >
                    <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                     type="text"
                     onChange={handleChange}
                     className="w-full py-2 pl-10 pr-4
                                text-gray-700 bg-white border rounded-lg
                                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                                focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none
                                focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                     placeholder="Search"
                />
            </div>
        </form>
    );
};

export default SearchBar;
