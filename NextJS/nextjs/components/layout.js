import Head from 'next/head'
import Sidebar from './sidebar'

function Layout({children})
{
    return (
        <>
            <Head>
                <title>Next Js Project</title>
                <meta name="description" content="create by NextJs"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Sidebar/>
            <main>
                <div className="h-screen flex bg-rose-300 py-14">
                  <div className="bg-amber-100 w-full flex h-full justify-center">
                    <div className="bg-emerald-200 w-4/5  relative">
                      {children}
                    </div>
                  </div>
                </div>
            </main>
        </>
    )
}

export default Layout;