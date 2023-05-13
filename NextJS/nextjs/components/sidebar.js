import {Disclosure} from '@headlessui/react';
import {Bars3Icon} from '@heroicons/react/24/outline'
import Link from 'next/link'

function Sidebar()
{
    return (
        <Disclosure as="nav">
            <Disclosure.Button className="ui-open:translate-x-56 absolute top-2 left-5 inline-flex items-center justify-center rounded-md p-2 peer text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
            <Bars3Icon className="h-6 w-6 block md-hidden" aria-hidden="true"/>
          </Disclosure.Button>
          <Disclosure.Panel className="p-6 w-60 h-screen bg-indigo-400 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          {({close}) => (
            <div className="flex flex-col item-center text-center h-screen relative">
            <h1 className="font-bold text-black border-b border-gray-100 w-full pb-4">
              Nav Bar
            </h1>
            <div className="my-4 border-b border-gray-100 pb-4">
              <Link href="/" passHref legacyBehavior>
                <a onClick={() => close()} className="flex flex-col mb-2  gap-4  hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto cursor-pointer">
                  <h3 className="text-black group-hover:text-white font-semibold">
                  HomePage
                  </h3>
              </a>
              </Link>
              <Link href="/viewList" passHref legacyBehavior>
                <a onClick={() => close()} className="flex flex-col mb-2 gap-4 hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto cursor-pointer">
                <h3 className="text-black group-hover:text-white font-semibold">
                  View List
                </h3>
              </a>
              </Link>
            </div>
            </div>
          )}   
          </Disclosure.Panel>
        </Disclosure>
    )
}

export default Sidebar;