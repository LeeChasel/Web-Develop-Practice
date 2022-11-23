import useSWR from 'swr'
import React from 'react'
import Link from 'next/link'
import AddData from '../components/addData'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function ViewList()
{
    const [isOpen, setIsOpen] = React.useState(false)

    const { data, error } = useSWR('http://localhost/api/userinfo/index', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <div className="h-[87%]">
            <span>
            <h1 className="translate-x-1/2 text-purple-600 font-bold text-2xl my-1 inline-block ">You can view, add, modify and delete data here</h1>
            <button onClick={() => setIsOpen(true)} className="absolute right-28 top-1 p-1 rounded bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300">
                Add
            </button>
            </span>
            
            <AddData isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="overflow-y-auto h-full bg-sky-400 ">
            <table className="w-full h-full">
                <thead className="bg-fuchsia-300 border-b-2 border-fuchsia-400">
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
                    <tr className="bg-fuchsia-200 border-y border-fuchsia-400">
                        <td className="p-3 text-sm text-blue-500 font-bold ">
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
        </div>
    )
}

export default ViewList;