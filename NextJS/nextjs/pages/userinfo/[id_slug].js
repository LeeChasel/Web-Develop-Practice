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
    
//     const [data, setData] = React.useState(null)
//     const [isLoading, setLoading] = React.useState(false)
//     const router = useRouter();

//     React.useEffect(() => {
//         setLoading(true)
//         fetch('http://localhost:80/api/userinfo/show/' + router.query.id_slug)
//         .then(res => res.json())
//         .then(data => {
//         setData(data)
//         setLoading(false)
//       })
//   }, [])

//   if (isLoading) return <p>Loading...</p>
//   if (!data) return <p>No profile data</p>

    return (
        <>
        <button onClick={() => setDeleteIsOpen(true)}className="mx-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            Delete
        </button>
        <button onClick={() => setUpdateIsOpen(true)} className="mx-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            Edit
        </button>
        <UpdateData isOpen={updateIsOpen} setIsOpen={setUpdateIsOpen} dataList={data}/>
        <DeleteData isOpen={deleteIsOpen} setIsOpen={setDeleteIsOpen} id={data.id}/>
        <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
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
                    <tr className="bg-white">
                        <td className="p-3 text-sm text-blue-500 font-bold">{data.id}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data.name}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data.gender}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data.age}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data.number}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data.email}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data.created_at}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data.updated_at}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default InfoDetail;