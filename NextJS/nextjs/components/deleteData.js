import { Dialog } from '@headlessui/react'

function DeleteData({isOpen, setIsOpen, id})
{
    function handleDelete()
    {
        const endpoint = 'http://localhost:80/api/userinfo/delete/' + id
        const response =  fetch(endpoint, {method: "DELETE",})
        window.location.assign("http://localhost:64550/viewList")
        window.alert("Delete Successful!")
    }

    return (
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="w-full relative z-50">
      <div className="fixed inset-0 flex items-center justify-center p-4 w-full">
    <Dialog.Panel className="w-1/3 rounded bg-sky-300 py-12 px-7">
      <Dialog.Title className="text-2xl font-bold text-center">Are you sure to delete this data?</Dialog.Title>
      <div className="mt-8 max-w-md">
      <h2 className="text-center my-4">Can not recover!</h2>
      <div className="relative">
          <button onClick={handleDelete} className="bg-red-300 rounded hover:bg-red-400 active:bg-red-500 left-0 w-5/12 absolute">Sure to delete</button>
          <button className="bg-red-300 rounded hover:bg-red-400 active:bg-red-500 right-0 w-5/12 absolute" onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
      </div>
    </Dialog.Panel>
    </div>
  </Dialog>
    )
}

export default DeleteData;