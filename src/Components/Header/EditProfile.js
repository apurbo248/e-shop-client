import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

const EditProfile = ({userData}) => {

  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  
  return (
    <div className="row">
      <div className="p-2 md:w-1/2 w-full">
        <div className="relative">
          <label for="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            // onBlur={handleValue}
            required
            name="name"
            className="w-full bg-gray-100 bg-opacity-50 rounded border-1 border-mainBaseColor f focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 md:w-1/2 w-full">
        <div className="relative">
          <label for="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            // onBlur={handleValue}
            required
            name="name"
            className="w-full bg-gray-100 bg-opacity-50 rounded border-1 border-mainBaseColor f focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 md:w-1/2 w-full">
        <div className="relative">
          <label for="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            // onBlur={handleValue}
            required
            name="name"
            className="w-full bg-gray-100 bg-opacity-50 rounded border-1 border-mainBaseColor f focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 md:w-1/2 w-full">
        <div className="relative">
          <label for="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            // onBlur={handleValue}
            required
            name="name"
            className="w-full bg-gray-100 bg-opacity-50 rounded border-1 border-mainBaseColor f focus:bg-white focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
