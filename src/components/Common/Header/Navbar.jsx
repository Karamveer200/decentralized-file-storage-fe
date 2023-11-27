import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

import { ALL_ROUTES_PATHS } from '../../../utils/routes';

export default function Header() {
  return (
    <Disclosure as="nav" className={`relative headerPurpleBG z-50`}>
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8 z-50">
            <div className="flex h-16 sm:h-20 justify-between z-50">
              <div className="flex z-50">
                <div className="-ml-2 mr-2 flex items-center lg:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <Link to={ALL_ROUTES_PATHS.LANDING} className="flex z-20">
                  <div
                    className={`${classes.reduceLineHeight} text-lg sm:text-2xl lg:text-3xl ml-4 flex items-center bold pinkWhiteText font-bold`}>
                    File Storage
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
