import { Disclosure } from '@headlessui/react'

function Test() {
  return (
    <Disclosure>
      <Disclosure.Button className="py-2 bg-blue-300">
        Is team pricing available?
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 bg-red-600">
        Yes! You can purchase a license that you can share with your entire
        team.
      </Disclosure.Panel>
    </Disclosure>
  )
}

export default Test;