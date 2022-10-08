// import React from 'react';
import {Disclosure} from '@headlessui/react';
import {Bars3Icon, HomeIcon} from '@heroicons/react/24/outline'

function Sidebar()
{
    return (
        <Disclosure as="nav">
          <Disclosure.Button className="absolute top-4 left-4 inline-flex items-center justify-center rounded-md p-2 peer text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
            <Bars3Icon className="h-6 w-6 block md-hidden" aria-hidden="true"/>
          </Disclosure.Button>
          <Disclosure.Panel className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-40 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 w-full pb-4">
              Nav Bar
            </h1>
            <div className="my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5  hover:bg-gray-900 group p-2 rounded-md hover:shadow-lg m-auto cursor-pointer ">
                {/* Icon don't show because prev line code */}
                <HomeIcon className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                  HomePage
                </h3>
              </div>

              <div>
                <h3>
                  sss
                </h3>

              </div>
            


            </div>
            
            {/* <div>
              homePage
            </div>
            <div>
              Modify data
            </div>
            <div>
              View list
            </div>
            <div>
              Login in
            </div> */}
            </div>
            
          </Disclosure.Panel>
        </Disclosure>
    );
}

export default Sidebar;