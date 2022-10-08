// import React from 'react';
import {Disclosure} from '@headlessui/react';
import {Bars3Icon} from '@heroicons/react/24/outline'

function Sidebar()
{

    return (
        <Disclosure as="nav">
          <Disclosure.Button className="absolute top-4 left-4 inline-flex items-center justify-center rounded-md p-2 peer text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
            <Bars3Icon className="h-6 w-6 block md-hidden" aria-hidden="true"/>
          </Disclosure.Button>
          <Disclosure.Panel className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-40 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Virtual Dashboard
            </h1>
            </div>
            
          </Disclosure.Panel>
        </Disclosure>


    );
}

export default Sidebar;