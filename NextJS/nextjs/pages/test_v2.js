import useSWR from 'swr';

// https://jsonplaceholder.typicode.com/todos/1

const fetcher = (...args) => fetch(...args).then(res => res.json())


export async function getServerSideProps()
{
    const res = await fetch("http://localhost:80/api/index");
    const data = await res.json();

    return {props:{data}};
}

export default function Test_v2({data})
{

    // const { data, error } = useSWR('https://jsonplaceholder.typicode.com/todos/1', fetcher)
    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading</div>
    console.log(data);
    return (
        <div>
            {/* <h1>{data.name}</h1>
            <p>{data.state}</p> */}
            {data.title}
        </div>
    );
}