import React, { useState } from "react";

function DropdownMenu({ options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].label);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option) {
    setSelectedOption(option.label);
    setIsOpen(false);
    onChange(option); // call the onChange function with the selected option
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          className="inline-flex w-[280px] justify-between gap-x-1.5 rounded-md bg-gray-200 px-3 py-3 text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300"
          aria-expanded={isOpen ? "true" : "false"}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="cursor-pointer absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-200 shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 font-semibold text-sm text-gray-500">
            {options.map((option, index) => (
              <a
                key={index}
                className="block px-4 py-2"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
