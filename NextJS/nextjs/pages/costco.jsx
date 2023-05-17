import useSWR from 'swr';
import { useRouter } from 'next/router';

function DB_Table({tables})
{
    const router = useRouter();
    return (
        <div className="flex justify-center h-full py-5">
            <div className="overflow-y-auto h-full w-1/3 rounded-md">
                <table className="table w-full h-full bg-gray-100">
                    <thead>
                    <tr>
                        <th className="text-black bg-zinc-100 border-b-2 border-b-zinc-300">Table Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tables.map(table => (
                    <tr key={table.Tables_in_costco} onClick={() => router.push('costco/' + table.Tables_in_costco)} className="cursor-pointer">
                        <td className="text-black bg-zinc-100 border-zinc-300 hover:bg-zinc-200">{table.Tables_in_costco}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
const fetcher = (...args) => fetch(...args).then(res => res.json())

function Home()
{
    const { data, error } = useSWR('http://localhost/api/costco/index', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (    
        <div className="h-full">
            <DB_Table tables={data}/>
        </div>
    )
}

export default Home;