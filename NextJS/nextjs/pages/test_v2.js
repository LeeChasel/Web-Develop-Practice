    // export async function getStaticProps()
    // {
    //     // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //     const res = await fetch('http://localhost:80/api/index');
    //     const data = await res.json();
    //     return {
    //         props: {
    //             data,
    //         },
    //     };
    // }


export default function Test_v2(props)
{
    const a = fetch ("http://localhost:80/api/index")
        .then(function(res) {
            return res.json();
        }).then(function(data) {
            console.log(data);
        }).catch (function(err) {
            console.log(err);
        });        
    const r = JSON.stringify(a);
    return (
        <>
            <h1 className="title">
                {r}
            </h1>
        </>
    );
}