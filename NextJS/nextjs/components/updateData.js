import { Dialog } from '@headlessui/react'

function UpdateData({isOpen, setIsOpen, dataList})
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
  const JsonData = JSON.stringify(data)
  const endpoint = 'http://localhost:80/api/userinfo/updateData/' + dataList.id + '?_method=patch'
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
    },
    body: JsonData,
  }
  const response = await fetch(endpoint, options)
  window.alert("Update Successful!")
  setIsOpen(false)
  }

    return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="w-full relative z-50">
        <div className="fixed inset-0 flex items-center justify-center p-4 w-full">
      <Dialog.Panel className="w-full max-w-sm rounded bg-sky-300">
        <Dialog.Title>Change the data you want</Dialog.Title>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" defaultValue={dataList.name}/>

          <label htmlFor="gender">Gender</label>

          <select id="gender" name="gender" defaultValue={dataList.gender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" defaultValue={dataList.age}/>

          <label htmlFor="number">Contact Number</label>
          <input type="tel" id="number" name="number" defaultValue={dataList.number}/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" defaultValue={dataList.email}/>
          
          <button type="submit">Save Data</button>
        </form>

        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
      </div>
    </Dialog>
    )    
}

export default UpdateData;