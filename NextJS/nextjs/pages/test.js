export async function getStaticProps()
{
    // const res = await fetch('http://localhost:80/api/index').then(response => response.text());
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
}

export default function Test({data})
{
    console.log(data)
    return (
        <>
            {data.map((d => {
                return (
                    <h1>title : {d.title}</h1>
                )
            }))};

            <h1 className="title">
            444
            </h1>
        </>
    );

}