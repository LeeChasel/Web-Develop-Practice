import { useRouter } from 'next/router'
import useSWR from 'swr'
import React from 'react'
import ModifyData from '../../components/modifyData'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function InfoDetail()
{
    const [isOpen, setIsOpen] = React.useState(false)
    const router = useRouter();
    const id_slug = router.query.id_slug

    const { data, error } = useSWR('http://localhost/api/userinfo/index', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
        <button className="mx-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            Delete
        </button>
        <button onClick={() => setIsOpen(true)} className="mx-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
            Edit
        </button>
        <ModifyData isOpen={isOpen} setIsOpen={setIsOpen} />
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
                        <td className="p-3 text-sm text-blue-500 font-bold">{data[id_slug-1].id}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data[id_slug-1].name}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data[id_slug-1].gender}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data[id_slug-1].age}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data[id_slug-1].number}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data[id_slug-1].email}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data[id_slug-1].created_at}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{data[id_slug-1].updated_at}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default InfoDetail;