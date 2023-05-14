import { useState, useEffect } from 'react';

function Home()
{
    const [tables, setTables] = useState([])
    useEffect(() => {
        fetch("http://localhost/api/costco/index")
            .then(res => res.json())
            .then(json => {
                // let data = ();
            });
    })
    return (
        <>
            <h4>{tables}</h4>
        </>
    )
}

export default Home;