export async function getStaticProps()
{
    // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const res = await fetch('http://localhost:80/api/index');
    const data = typeof(res);
    return {
        props: {
            data,
        },
    };
    
        // const data = await res.json();

}

export default function Test(props)
{
    console.log(props.data)
    return (
        <>
            {/* {data.map((d => {
                return (
                    <h1>title : {d.title}</h1>
                )
            }))}; */}

            <h1 className="title">
                sss
            </h1>
        </>
    );

}