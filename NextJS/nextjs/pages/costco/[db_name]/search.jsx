import { useRouter } from 'next/router';
import useSWR from 'swr'

function Data_Table({data})
{
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
                </tr>
                </thead>
                <tbody>
                {data.map(rowData => (
                    <tr key={rowData.id}>
                        <td className="text-black bg-zinc-100 border-zinc-300">{rowData.id}</td>
                        <td className="text-black bg-zinc-100 border-zinc-300">{rowData.name}</td>
                        <td className="text-black bg-zinc-100 border-zinc-300">{rowData.price}</td>
                        <td className="text-black bg-zinc-100 border-zinc-300">{rowData.stock}</td>
                        <td className="text-black bg-zinc-100 border-zinc-300">{rowData.type}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

function Search()
{
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const router = useRouter()
    const q_text = router.query.q;

    const apiEndpoint = isNaN(q_text) ? `http://localhost/api/costco/${router.query.db_name}/search_name/${q_text}` : `http://localhost/api/costco/${router.query.db_name}/search_id/${q_text}` 
    const { data, error } = useSWR(apiEndpoint, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    
    return (
        <div className="flex flex-col p-5 gap-6 max-h-full overflow-y-auto">
            <div className="flex  items-center">
                <button className="btn" onClick={() => router.back()}>Back</button>
                <h2 className="text-center text-black font-bold	text-lg basis-full">You're searching: <span className="underline underline-offset-2 text-blue-600">{q_text}</span></h2>
            </div>
            <Data_Table data={data}/>
        </div>
    )
}

export default Search