// import React from 'react';
import {Disclosure} from '@headlessui/react';

function Sidebar()
{
    return (
        <Disclosure as="nav">
          <Disclosure.Button>
            Open here

          </Disclosure.Button>
          <Disclosure.Panel>
            Inside here
          </Disclosure.Panel>
        </Disclosure>






        
    
        
        
    );
}

export default Sidebar;