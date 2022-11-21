import { useRouter } from 'next/router'
import useSWR from 'swr'
import React from 'react'
import UpdateData from '../../components/updateData'
import DeleteData from '../../components/deleteData'

const fetcher = (...args) => fetch(...args).then(res => res.json())


function InfoDetail()
{
    const [updateIsOpen, setUpdateIsOpen] = React.useState(false)
    const [deleteIsOpen, setDeleteIsOpen] = React.useState(false)
    const router = useRouter();
    const { data, error } = useSWR('http://localhost:80/api/userinfo/show/' + router.query.id_slug, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    
    const formatDate = (dateString) => {
        const options = {year : "numeric", month: "long", day: "numeric", hour: 'numeric', minute: 'numeric', timeZoneName: 'shortOffset'}
        return new Date(dateString).toLocaleDateString("zh-TW", options)
    }
    
    return (
        <>
        <div className="relative h-10">
        <span className="invisible">space</span>
        <button onClick={() => setUpdateIsOpen(true)} className="right-32 absolute rounded p-1 top-1 bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300">
            Edit
        </button>
        <button onClick={() => setDeleteIsOpen(true)} className="right-12 absolute rounded p-1 top-1 bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300">
            Delete
        </button>
        </div>
        <UpdateData isOpen={updateIsOpen} setIsOpen={setUpdateIsOpen} dataList={data}/>
        <DeleteData isOpen={deleteIsOpen} setIsOpen={setDeleteIsOpen} id={data.id}/>
        <table className="w-full">
                <thead className="bg-fuchsia-300 border-b-2 border-fuchsia-400">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Id</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Gender</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Age</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Contact Number</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Create Time</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Update Time</th>
                    </tr>
                </thead>
                <tbody>               
                    <tr className="bg-fuchsia-200 border-y border-fuchsia-400">
                        <td className="p-3 text-sm text-blue-500 font-bold">{data.id}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data.name}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data.gender}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data.age}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data.number}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data.email}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{formatDate(data.created_at)}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{formatDate(data.updated_at)}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default InfoDetail;