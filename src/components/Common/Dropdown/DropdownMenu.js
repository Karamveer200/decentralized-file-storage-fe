import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ARRAY_KEYS } from '../../../utils/constants';

import { ChevronDownIcon } from '@heroicons/react/20/solid';

const DropdownMenu = ({ options = [], label = 'null' }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" inline-flex items-center w-full justify-center gap-x-1.5 rounded-full bg-indigo-600 pl-4 pr-2 py-2 text-xs text-gray-100 shadow-sm hover:bg-indigo-500">
          <div className="hidden sm:inline w-3 h-3 rounded-full bg-green-400 mr-1"></div>
          {label}
          <ChevronDownIcon className="h-5 w-5 text-gray-100" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            {options.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  <div
                    className={`text-gray-900
                      block px-4 py-2 text-xs hover:bg-indigo-600 hover:text-white transition-all duration-100 ease-in cursor-pointer`}
                    onClick={item[ARRAY_KEYS.ON_CLICK]}>
                    {item[ARRAY_KEYS.LABEL]}
                  </div>
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
