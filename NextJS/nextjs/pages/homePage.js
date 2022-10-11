function HomePage()
{
    // let sidebar = document.getElementsByTagName("nav");
    let sidebar = document.querySelector(".nav");

    // let sidebarState = sidebar[0].getAttribute("data-headlessui-state");
    // let sidebarState = window.getComputedStyle(sidebar[0]).getPropertyValue("data-headlessui-state"); 
    console.log(sidebar);
    return (
        <div>

            <p>main section</p>
        </div>
    )
}

export default HomePage;