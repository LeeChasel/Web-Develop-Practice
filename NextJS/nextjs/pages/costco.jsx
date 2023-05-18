import useSWR from 'swr';
import { useRouter } from 'next/router';

function DB_Table({tables})
{
    const router = useRouter();
    return (
        <div className="flex justify-center max-h-full py-5">
            <table className="table w-1/3 h-full bg-gray-100 rounded-lg">
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
    )
}
const fetcher = (...args) => fetch(...args).then(res => res.json())

function Home()
{
    const { data, error } = useSWR('http://localhost/api/costco/index', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (    
        <div className="max-h-full overflow-y-auto">
            <DB_Table tables={data}/>
        </div>
    )
}

export default Home;