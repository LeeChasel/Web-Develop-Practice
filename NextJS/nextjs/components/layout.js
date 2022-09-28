import Head from 'next/head'
import styles from './layout.module.css'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({children})
{
    return (
        <>
            <Head>
                <title>Next Js Project</title>
            </Head>
            <Navbar/>
            <main className={styles.main}> {children} </main>
            <Footer/>
        </>
    )
}