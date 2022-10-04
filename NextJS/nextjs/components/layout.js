import Head from 'next/head'
// import styles from './layout.module.css'
import Sidebar from './sidebar'
import Footer from './footer'

export default function Layout({children})
{
    return (
        <>
            <Head>
                <title>Next Js Project</title>
                <meta name="description" content="create by NextJs"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/* <Sidebar/> */}
            <main> {children} </main>
            {/* <Footer/> */}
        </>
    )
}