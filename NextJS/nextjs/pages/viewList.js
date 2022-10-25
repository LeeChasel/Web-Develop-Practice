import useSWR from 'swr'
import React from 'react'
import Link from 'next/link'
import ModifyData from '../components/modifyData'

const fetcher = (...args) => fetch(...args).then(res => res.json())


function ViewList()
{
    const [isOpen, setIsOpen] = React.useState(false)

    const { data, error } = useSWR('http://localhost/api/userinfo/index', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <div>
            <h1 className="text-center text-purple-600 font-bold">You can view, add and delete data here</h1>
            <button onClick={() => setIsOpen(true)} className="mx-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                Add
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
                    </tr>
                </thead>
                <tbody>
                {data.map((d) => (
                <>
                    <tr className="bg-white">
                        <td className="p-3 text-sm text-blue-500 font-bold">
                        <Link href={{pathname: 'userinfo/[id_slug]', query: {id_slug: d.id},}}>
                            <span className="cursor-pointer hover:underline">
                                {d.id}
                            </span>
                        </Link>
                        </td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{d.name}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{d.gender}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{d.age}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{d.number}</td>
                        <td className="p-3 text-sm text-gray-700 font-bold">{d.email}</td>
                    </tr>
                </>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewList;