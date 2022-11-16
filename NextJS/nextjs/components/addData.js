import { Dialog } from '@headlessui/react'

function AddData({isOpen, setIsOpen})
{
  const handleSubmit = async(event) => {
    event.preventDefault()
    const data = {
      name: event.target.name.value,
      gender: event.target.gender.value,
      age: event.target.age.value,
      number: event.target.number.value,
      email: event.target.email.value,
    }
  
  if (!/^(0?[1-9]|[1-9][0-9])$/.test(data.age))
  {
    window.alert("Age should between 1~99 .")
  } else if (!/^(09[0-9]{8})$/.test(data.number))
  {
    window.alert("Contact number should be 10 digits in total, e.g. 09XXXXXXXX .")
  } else if (!/^([a-zA-Z0-9]*@[a-z]*\.com)$/.test(data.email))
  {
    window.alert("Email address should be (a to z)(A to Z)(0 to 9)@(a to z).com .")
  } else {
    const JsonData = JSON.stringify(data)
    const endpoint = 'http://localhost:80/api/userinfo/add'
    const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
    },
    body: JsonData,
  }
    const response = await fetch(endpoint, options)
    window.alert("Create Successful!")
    setIsOpen(false)
  }
  }

    return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="w-full relative z-50">
        <div className="fixed inset-0 flex items-center justify-center p-4 w-full">
      <Dialog.Panel className="w-1/3 rounded bg-sky-300 py-12 px-7">
        <Dialog.Title className="text-2xl font-bold text-center">Enter your data</Dialog.Title>
        <div className="mt-8 max-w-md">
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <label className="block">
          <span>Name</span>
          <input type="text" id="name" name="name" required className="indent-1 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
          </label>

          <label className="block">
          <span>Gender</span>
          <select id="gender" name="gender" defaultValue="" required className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
            <option value="" disabled hidden>Male or Female</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          </label>

          <label className="block">
          <span>Age</span>
          <input type="number" id="age" name="age" required className="indent-1 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
          </label>

          <label className="block">
          <span>Contact Number</span>
          <input type="tel" id="number" name="number" className="indent-1 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
          </label>

          <label className="block">
          <span>Email address</span>
          <input type="email" id="email" name="email" placeholder="chasel@example.com" className="indent-1 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"/>
          </label>

          <div className="relative">
          <button className="bg-red-300 rounded hover:bg-red-400 active:bg-red-500 left-0 w-5/12 absolute" type="submit">Create New Data</button>
          <button className="bg-red-300 rounded hover:bg-red-400 active:bg-red-500 right-0 w-5/12 absolute" onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </form>
        </div>
      </Dialog.Panel>
      </div>
    </Dialog>
    )    
}

export default AddData;