import Head from 'next/head'
import Sidebar from './sidebar'

function Layout({children})
{
    return (
        <>
            <Head>
                <title>Costco</title>
                <meta name="description" content="create by NextJs"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Sidebar/>
            <main>
                <div className="h-screen flex bg-zinc-400 py-14">
                  <div className="w-full flex justify-center">
                    {/* <div className="bg-emerald-200 w-4/5 relative"> */}
                    <div className="bg-zinc-300 w-full relative">
                      {children}
                    </div>
                  </div>
                </div>
            </main>
        </>
    )
}

export default Layout;