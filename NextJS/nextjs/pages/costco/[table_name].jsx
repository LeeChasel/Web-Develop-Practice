import { useRouter } from 'next/router'
import { useState } from 'react';
import useSWR from 'swr'
import CreateRowBtn from '../../components/costco/createRow-btn';
import DeleteRowBtn from '../../components/costco/deleteRow-btn';
import SearchBtn from '../../components/costco/search-btn';

function Data_Table({data})
{
    const router = useRouter();
    const handleUpdate = (id, updatedRow) => {
        fetch(`http://localhost:80/api/costco/${router.query.table_name}/update/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'PUT',
            body: JSON.stringify(updatedRow),
        })
        router.reload()
    }

    return (
        <div className="grow flex justify-center">
            <table className="table w-full bg-gray-100 rounded-lg">
                <thead>
                <tr>
                    <th className="text-black bg-zinc-100 border-b-2 border-b-zinc-300">ID</th>
                    <th className="text-black bg-zinc-100 border-b-2 border-b-zinc-300">Name</th>
                    <th className="text-black bg-zinc-100 border-b-2 border-b-zinc-300">Price</th>
                    <th className="text-black bg-zinc-100 border-b-2 border-b-zinc-300">Stock</th>
                    <th className="text-black bg-zinc-100 border-b-2 border-b-zinc-300">Type</th>
                    <th className="text-black bg-zinc-100 border-b-2 border-b-zinc-300"></th>
                </tr>
                </thead>
                <tbody>
                {data.map(rowData => (
                    <tr key={rowData.id}>
                        <TableRow rowData={rowData} onUpdate={handleUpdate} table_name={router.query.table_name}/>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

function TableRow({rowData, onUpdate, table_name})
{
    const [ isEditable, setIsEditable ] = useState(false);
    const [ updatedRow, setUpdatedRow ] = useState(rowData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedRow((prevRow) => ({
          ...prevRow,
          [name]: value,
        }));
    }
    const handleEdit = () => {
        if (isEditable)
        {
            setUpdatedRow(rowData)
        }
        setIsEditable(!isEditable);
    };

    const handleUpdate = () => {
        onUpdate(rowData.id, updatedRow);
    };

    return (
        <>
            <td className="text-black bg-zinc-100 border-zinc-300">
                {isEditable ? (
                    <input type="number" name="id" min="0" required value={updatedRow.id} onChange={handleChange} className="border border-gray-300 rounded p-1 max-w-xs w-full bg-gray-100 text-black"/>):(
                    <span>{rowData.id}</span>
                )}
            </td>
            <td className="text-black bg-zinc-100 border-zinc-300">
                {isEditable ? (
                    <input type="text" name="name" required value={updatedRow.name} onChange={handleChange} className="border border-gray-300 rounded p-1 max-w-xs w-full bg-gray-100 text-black"/>):(
                    <span>{rowData.name}</span>
                )}
            </td>
            <td className="text-black bg-zinc-100 border-zinc-300">
                {isEditable ? (
                    <input type="number" name="price" min="0" required value={updatedRow.price} onChange={handleChange} className="border border-gray-300 rounded p-1 max-w-xs w-full bg-gray-100 text-black"/>):(
                    <span>{rowData.price}</span>
                )}
            </td>
            <td className="text-black bg-zinc-100 border-zinc-300">
                {isEditable ? (
                    <input type="number" name="stock" min="0" required value={updatedRow.stock} onChange={handleChange} className="border border-gray-300 rounded p-1 max-w-xs w-full bg-gray-100 text-black"/>):(
                    <span>{rowData.stock}</span>
                )}
            </td>
            <td className="text-black bg-zinc-100 border-zinc-300">
                {isEditable ? (
                    <input type="text" name="type" required value={updatedRow.type} onChange={handleChange} className="border border-gray-300 rounded p-1 max-w-xs w-full bg-gray-100 text-black"/>):(
                    <span>{rowData.type}</span>
                )}
            </td>
            <td className="text-black bg-zinc-100 border-zinc-300 flex gap-1">
                <button onClick={handleEdit} className="btn btn-sm btn-ghost">{isEditable ? "Cancel" : "Edit"}</button>
                {isEditable && <button onClick={handleUpdate} className="btn btn-sm btn-ghost">Save</button>}
                {!isEditable && <DeleteRowBtn table_name={table_name} id={rowData.id}/>}
            </td>
        </>
    )
}

function Home()
{
    const router = useRouter();
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('http://localhost/api/costco/' + router.query.table_name + '/index', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <div className="flex flex-col p-5 gap-2 max-h-full overflow-y-auto">
            <div className="flex justify-between">
                <button className="btn btn-outline text-black" onClick={() => router.push('/costco')}>Back</button>
                <SearchBtn table_name={router.query.table_name}/>
                <CreateRowBtn table_name={router.query.table_name}/>
            </div>
            <Data_Table data={data}/>
        </div>
    )
}

export default Home