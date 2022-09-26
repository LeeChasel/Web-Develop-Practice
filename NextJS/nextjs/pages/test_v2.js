import useSWR from 'swr';

// https://jsonplaceholder.typicode.com/todos/1

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Test_v2()
{

    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/1', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading</div>

    return (
        <div>
            <h1>
            {data.name}
            </h1>
            <p>{data.bio}</p>
        </div>
    );
}