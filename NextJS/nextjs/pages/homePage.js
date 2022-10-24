import Link from 'next/link'

function HomePage()
{
    return (
        <div>
            <Link href={{
                pathname: '[slug]',
                query: {slug: "adadadad"},
            }}>
                <a>go to aaa</a>
            </Link>
            <p>Some info about this web.</p>
            
        </div>
    )
}

export default HomePage;