// export async function getStaticProps()
// {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     // const res = await fetch('http://localhost:80/api/index');
//     const data = await res.json();
//     return {
//         props: {
//             data,
//         },
//     };

// }

export default function Test(props)
{
    console.log(props.data)
    return (
        <>

            <h1 className="title">
                sss
            </h1>
        </>
    );

}