// import React from 'react';
import {Disclosure} from '@headlessui/react';
import {Bars3Icon} from '@heroicons/react/24/outline'
function Sidebar()
{
    return (
        <Disclosure as="nav">
          <Disclosure.Button className="absolute top-4 left-4 inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <Bars3Icon className="h-6 w-6" />
          </Disclosure.Button>
          <Disclosure.Panel>
            Inside here
          </Disclosure.Panel>
        </Disclosure>






        
    
        
        
    );
}

export default Sidebar;