import Head from 'next/head'
// import styles from './layout.module.css'
import Sidebar from './sidebar'

function Layout({children})
{
    // https://github.com/vercel/next.js/issues/5354
    // if (typeof window !== 'undefined')
    // {
    //     var state = "close";
    //     var sidebarButton = document.getElementById("headlessui-disclosure-button-:R4m:");
    //     sidebarButton.addEventListener("click", function() {
    //         if (state == "close")
    //         {
    //             state = "open";
    //         } else if (state == "open")
    //         {
    //             state = "close";
    //         } else {
    //             state = "error";
    //         }
    //     });
    // }
    // https://github.com/tailwindlabs/tailwindcss/discussions/3461
    // const bgColor = {
    //     default : 'bg-black',
    //     'close' : 'bg-green-500',
    //     'open' : 'bg-yellow-500',
    // }

    return (
        <>
            <Head>
                <title>Next Js Project</title>
                <meta name="description" content="create by NextJs"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Sidebar/>
            <main>
                <div className="h-screen flex bg-red-300 py-14">
                  <div className="bg-white w-full flex justify-center">
                    <div className="bg-sky-200 w-4/5 text-center">
                      {children}
                    </div>
                  </div>
                </div>
            </main>
        </>
    )
}

export default Layout;