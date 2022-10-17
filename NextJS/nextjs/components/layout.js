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
            
            <main>
                <div className="relative min-h-screen bg-red-300 flex flex-col justify-center py-6 sm:py-12">
                  <div class="bg-white">
                <Sidebar/>
                {children}
                  </div>
                </div>
                
            </main>
        </>
    )
}

export default Layout;