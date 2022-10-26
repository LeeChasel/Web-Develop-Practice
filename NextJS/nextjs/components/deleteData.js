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
      <Dialog.Panel className="w-full max-w-sm rounded bg-sky-300">
        <Dialog.Title>Are you sure you want to delete?</Dialog.Title>
        <h2>Can not recover!!!</h2>
        <button onClick={handleDelete}>Sure to delete</button>
        <br />
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
      </div>
    </Dialog>
    )
}

export default DeleteData;