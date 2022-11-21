import Link from "next/link";

function HomePage()
{
    return (
        <>
        <div className="text-blue-700 text-center">
            <p className="my-3">This website is a practice project using Next.js as frontend and Laravel as backend.</p>
            <p className="my-3">You can use sidebar to switch pages and look over the data in mysql database at&nbsp; 
                <Link href="/viewList" passHref legacyBehavior>
                    <a className="hover:underline">View List</a>
                </Link>
            &nbsp;page.</p>
            <p>In&nbsp;
            <Link href="/viewList" passHref legacyBehavior>
                <a className="hover:underline">View List</a>
            </Link>
            &nbsp;page, click id to check more detailed information.
            </p>
        </div>
        </>
    )
}

export default HomePage;