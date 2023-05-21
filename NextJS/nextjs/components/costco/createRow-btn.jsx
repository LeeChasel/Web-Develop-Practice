import { useState } from 'react'
import { Dialog } from '@headlessui/react'

function CreateRowBtn({table_name})
{
    const [ isOpen, setIsOpen ] = useState(false);
    const handleSubmit = (e) => {
        const formData = new FormData(e.target);
        // const formJson = Object.fromEntries(formData.entries());
        fetch(`http://localhost:80/api/costco/${table_name}/create`, {
            // headers: {
            //     "Content-Type": "application/json",
            // },
            method: 'POST',
            // body: JSON.stringify(formJson),
            body: formData,
        })
    }
    return (
        <>
            <button className="btn btn-outline text-black" onClick={() => setIsOpen(true)}>Create</button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="w-full relative z-50">
                <div className="fixed inset-0 flex items-center justify-center p-4 w-full">
                    <Dialog.Panel className="w-1/3 rounded bg-blue-400 py-12 px-7">
                        <Dialog.Title className="text-2xl text-black font-bold text-center">Create Row In This Table</Dialog.Title>
                        <form method="POST" onSubmit={handleSubmit} className="form-control w-full gap-1">
                            <div>
                                <label className="label">
                                    <span className="label-text text-lg text-black">Id</span>
                                </label>
                                <input type="number" name="id" min="0" required placeholder="Type id..." className="input input-bordered w-full bg-gray-100 text-black"/>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-lg text-black">Name</span>
                                </label>
                                <input type="text" name="name" required placeholder="Type name..." className="input input-bordered w-full bg-gray-100 text-black"/>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-lg text-black">Price</span>
                                </label>
                                <input type="number" name="price" min="0" required placeholder="Type price..." className="input input-bordered w-full bg-gray-100 text-black"/>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-lg text-black">Stock</span>
                                </label>
                                <input type="number" name="stock" min="0" required placeholder="Type stock..." className="input input-bordered w-full bg-gray-100 text-black"/>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-lg text-black">Type</span>
                                </label>
                                <input type="text" name="type" required placeholder="Type type..." className="input input-bordered w-full bg-gray-100 text-black"/>
                            </div>
                            <div className='flex items-center justify-around mt-2'>
                                <button className="btn btn-outline text-black hover:bg-blue-500 w-1/3 rounded-full" onClick={() => setIsOpen(false)}>Cancel</button>
                                <button className="btn btn-outline text-black hover:bg-blue-500 w-1/3 rounded-full" type="submit">Create</button>
                            </div>
                        </form>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}

export default CreateRowBtn