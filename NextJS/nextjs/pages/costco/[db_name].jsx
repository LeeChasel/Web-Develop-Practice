import { useRouter } from 'next/router'
import useSWR from 'swr'

function Data_Table({data})
{
    return (
        <div className="flex justify-center h-full p-5">
            <div className="overflow-y-auto h-full w-full rounded-md">
                <table className="table w-full h-full bg-gray-100">
                    <thead>
                    <tr>
                        <th className="text-black bg-zinc-100 border-b-2 border-b-zinc-300">ID</th>
                        <th className="text-black bg-zinc-100 border-b-2 border-b-zinc-300">Name</th>
                        <th className="text-black bg-zinc-100 border-b-2 border-b-zinc-300">Price</th>
                        <th className="text-black bg-zinc-100 border-b-2 border-b-zinc-300">Stock</th>
                        <th className="text-black bg-zinc-100 border-b-2 border-b-zinc-300">Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(row => (
                        <tr key={row.id}>
                            <td className="text-black bg-zinc-100 border-zinc-300">{row.id}</td>
                            <td className="text-black bg-zinc-100 border-zinc-300">{row.name}</td>
                            <td className="text-black bg-zinc-100 border-zinc-300">{row.price}</td>
                            <td className="text-black bg-zinc-100 border-zinc-300">{row.stock}</td>
                            <td className="text-black bg-zinc-100 border-zinc-300">{row.type}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function BtnActions()
{
    return (
        <div>aa</div>
    )

}


function Home()
{
    const router = useRouter();
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('http://localhost/api/costco/' + router.query.db_name + '/index', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (    
        <div className="flex flex-col h-full">
            <BtnActions/>
            <Data_Table data={data}/>
        </div>
    )
}

export default Home