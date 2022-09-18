import Link from 'next/link';

export default function Test()
{
    return (
    <>
        <h1 className="title">
            Re <Link href="/posts/first-post">Click This Page!</Link>
        </h1>
        <br/><br/>
        <h1 className="title2">
            <a href="/posts/first-post">Click the google</a>
        </h1>
    </>
    );
}

