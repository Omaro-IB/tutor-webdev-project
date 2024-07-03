import logo from "../assets/logo.svg";
import hero from "../assets/images/hero.png";
import Button from "./Button";

const Home = () => {
    return (<div id="home" className={"w-screen h-screen bg-gradient-to-tr from-primary1 to-primary2"}>
        <div className={"flex flex-col"}>
            {/*Logo and Title*/}
            <div className={"flex flex-row items-center sm:ml-20 ml-10 mt-16 self-start"}>
                <img src={logo} alt="logo" className="w-10 mr-4"/>
                <p className="font-bold text-xl px-4">Two-tors</p>
            </div>

            {/*Hero Image and Subtitle and Button*/}
            <div className={"flex flex-col sm:flex-row-reverse my-16 px-10 mt-20 self-center"}>
                <img src={hero} alt="hero" className="sm:w-[38vw] sm:h-[25vw] self-center"/>
                {/*Subtitle & Buttons Div*/}
                <div className={"mt-12 sm:w-[40vw] self-center"}>
                    <h1 className={"text-2xl sm:text-6xl py-4"}>Your next great tutor</h1>
                    <h2 className={"text-2xl sm:text-6xl font-bold"}>Contact us now for a free 30 minute consultation!</h2>
                    <div className={"flex flex-row mt-6"}>
                        {/*Buttons*/}
                        <div className={"mr-4"}><Button text={"Read More"} primary={true} linkID={"aboutshort"}/></div>
                        <Button text={"Contact Us"} linkID={"contact"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Home;