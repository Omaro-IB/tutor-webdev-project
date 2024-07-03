const About = () => {
    return(<div>

    <div id={"about"} className={"flex sm:flex-row-reverse flex-col items-center justify-center w-screen h-screen bg-hero-mobile sm:bg-hero-desktop bg-center bg-fixed bg-cover"}>
        {/*First Half*/}
        <div className={"w-full h-full bg-primary1-transparent flex flex-col sm:flex-col-reverse"}>
            <div className={"p-10 sm:p-20"}>
                <h1 className={"text-2xl sm:text-6xl py-44]"}>Arun</h1>
                <p  className={"sm:text-3xl"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        {/*Separator*/}
        <div className={"w-full h-full min-h-[33vh] sm:min-w-[33vw] flex"}></div>
        {/*Second Half*/}
        <div className={"w-full h-full bg-primary2-transparent flex"}>
            <div className={"p-10 sm:p-20"}>
                <h1 className={"text-2xl sm:text-6xl py-4"}>Omar</h1>
                <p className={"sm:text-3xl"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    </div></div>)
}

export default About;