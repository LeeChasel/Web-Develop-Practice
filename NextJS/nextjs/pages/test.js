import { useState } from 'react';

function Test()
{
    const [likes, setLikes] = useState("open");
    function handleClick() {
        if (likes == "open")
        {
            setLikes("close");
        } else if (likes == "close")
        {
            setLikes("open");

        } else {
            setLikes("Error");
        }
       
    }

    return (
        <div>
            <button onClick={handleClick}>Click </button>
            <p>{likes}</p>

        </div>
    )
}

export default Test;