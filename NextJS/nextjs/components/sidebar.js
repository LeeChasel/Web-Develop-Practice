import {Disclosure} from '@headlessui/react';
import {Bars3Icon} from '@heroicons/react/24/outline'
import Link from 'next/link'
function NavItem()
{
  <Link href={href}>
adad
  </Link>

}

function Sidebar()
{
    return (
        <Disclosure as="nav">
          <Disclosure.Button className="absolute top-2 right-3 inline-flex items-center justify-center rounded-md p-2 peer text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
            <Bars3Icon className="h-6 w-6 block md-hidden" aria-hidden="true"/>
          </Disclosure.Button>
          <Disclosure.Panel className="p-6 w-60 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <div className="flex flex-col item-center text-center h-screen relative">
            <h1 className="cursor-pointer font-bold text-blue-900 border-b border-gray-100 w-full pb-4">
              Nav Bar
            </h1>
            <div className="my-4 border-b border-gray-100 pb-4">
              {/* navbar item */}
              <Disclosure.Button as={NavItem} href="/homePage">
                
              </Disclosure.Button>
              
              
              <Link href="/homePage">
              <div className="flex flex-col mb-2  gap-4  hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto">
                  <h3 className="text-gray-800 group-hover:text-white font-semibold">
                  HomePage
                  </h3>
              </div>
              </Link>
              <Link href="/modifyData">
              <div className="flex flex-col mb-2  gap-4  hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto">
                <h3 className="text-gray-800 group-hover:text-white font-semibold">
                  Modify Data
                </h3>
              </div>
              </Link>
              <Link href="/viewList">
              <div className="flex flex-col mb-2  gap-4  hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto">
                <h3 className="text-gray-800 group-hover:text-white font-semibold">
                  View List
                </h3>
              </div>
              </Link>
            </div>
            {/* Login or Logout button */}
            {/* <div className="my-4 bottom-7 absolute mb-2 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group hover:shadow-lg m-auto w-full">
                <h3 className="text-gray-800 group-hover:text-white font-semibold ">
                  Login
                </h3>
            </div> */}
            </div>
          </Disclosure.Panel>
        </Disclosure>
    );
}

export default Sidebar;