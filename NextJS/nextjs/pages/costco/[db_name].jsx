import { useRouter } from 'next/router'
import useSWR from 'swr'

function Data_Table({data})
{
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>price</th>
                    <th>stock</th>
                    <th>type</th>
                </tr>
                </thead>
                <tbody>
                {data.map(row => (
                    <tr key={row.id}>
                        <th>{row.id}</th>
                        <td>{row.name}</td>
                        <td>{row.price}</td>
                        <td>{row.stock}</td>
                        <td>{row.type}</td>
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
    const router = useRouter();
    const { data, error } = useSWR('http://localhost/api/costco/' + router.query.db_name + '/index', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (    
        <div>
            <Data_Table data={data}/>
        </div>
    )
}

export default Home