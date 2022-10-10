// import React from 'react';
import {Disclosure} from '@headlessui/react';
import {Bars3Icon} from '@heroicons/react/24/outline'

function Sidebar()
{
    return (
        <Disclosure as="nav">
          <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-2 peer text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
            <Bars3Icon className="h-6 w-6 block md-hidden" aria-hidden="true"/>
          </Disclosure.Button>
          <Disclosure.Panel className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <div className="flex flex-col item-center text-center h-screen">
            <h1 className="text-base cursor-pointer font-bold text-blue-900 border-b border-gray-100 w-full pb-4">
              Nav Bar
            </h1>
            <div className="my-4 border-b border-gray-100 pb-4">
              {/* navbar item */}
              <div className="flex flex-col mb-2  gap-4  hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                  HomePage
                  </h3>
              </div>
              <div className="flex flex-col mb-2  gap-4  hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto">
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                  Modify Data
                </h3>
              </div>
              <div className="flex flex-col mb-2  gap-4  hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto">
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                  View List
                </h3>
              </div>

            </div>
            {/* Login or Logout button */}
            <div className="flex my-4  bottom-0  ">
              <div className="mb-2 items-center  border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <h3 className="text-base text-gray-800 text-center items-center group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
            
            </div>
            
          </Disclosure.Panel>
        </Disclosure>
    );
}

export default Sidebar;