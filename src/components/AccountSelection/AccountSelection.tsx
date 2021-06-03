import React, { Fragment, useState } from "react";
import { AccountSelectionProps } from "./AccountSelection.types";
import { Menu, Transition } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'
import { joinClassnames } from "../../utils/tailwindHelpers";

export const AccountSelection: React.FC<AccountSelectionProps & React.HTMLAttributes<HTMLDivElement>> = ({ options, activeOption, setActiveOption, className, ...props }) => {

  return (
    <Menu as="div" className="relative inline-block text-left w-52">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="h-16 group w-full bg-white px-3.5 py-3 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-offset-gray-100">
              <span className="flex w-full justify-between items-center">
                <span className="flex min-w-0 items-center justify-between space-x-3">

                  <span className="flex-1 flex flex-col min-w-0">
                    <span className="text-gray-900 text-sm font-medium truncate">{activeOption ? activeOption.name : "Select..."}</span>
                  </span>
                </span>
                <SelectorIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="z-10 origin-top absolute right-0 left-0 mt-1 shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
            >
              <div className="py-1">
                {options.map(item => {
                  if (activeOption && item.id === activeOption.id)
                    return;
                  return (
                    <Menu.Item key={item.id}>
                      {({ active }) => (
                        <button
                          onClick={() => setActiveOption(item)}
                          className={joinClassnames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm w-full'
                          )}
                        >
                          {item.name}
                        </button>
                      )}
                    </Menu.Item>
                  )
                })}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}