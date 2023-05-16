import useSWR from 'swr';
import { useRouter } from 'next/router';

function DB_Table({tables})
{
    const router = useRouter();

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    {/* <th></th> */}
                    <th>Table</th>
                </tr>
                </thead>
                <tbody>
                {tables.map(table => (
                <tr key={table.Tables_in_costco} onClick={() => router.push('costco/' + table.Tables_in_costco)} className="cursor-pointer">
                    {/* <th>1</th> */}
                    <td>{table.Tables_in_costco}</td>
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
        <div>
            <DB_Table tables={data}/>
        </div>
    )
}

export default Home;