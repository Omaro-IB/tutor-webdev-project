import logo from "../assets/logo.svg";
import thumbnail from "../assets/images/thumbnail_large.png";
import Button from "./Button";

const Home = () => {
    return (<div className={"w-screen h-screen bg-gradient-to-tr from-blue-primary via-green-secondary to-pink-accent-hover"}>
        <div className={"flex flex-col"}>
            {/*Logo and Title*/}
            <div className={"flex flex-row items-center sm:ml-20 ml-10 mt-16 self-start"}>
                <img src={logo} alt="logo" className="w-10 mr-4"/>
                <p className="font-bold text-xl px-4">Tutor Service</p>
            </div>

            {/*Hero Image and Subtitle and Button*/}
            <div className={"flex flex-col sm:flex-row-reverse my-16 self-center mt-36"}>
                <img src={thumbnail} alt="logo" className="sm:w-[70vh] w-[90vw] self-center sm:mr-5"/>
                {/*Subtitle & Buttons Div*/}
                <div className={"mt-12 sm:ml-14 sm:mr-32 self-center"}>
                    <h1 className={"self-start text-4xl sm:text-8xl"}>Some text</h1>
                    <h2 className={"self-start text-4xl sm:text-8xl font-bold"}>Some more text</h2>
                    <div className={"flex flex-row mt-6"}>
                        <div className={"mr-4"}><Button text={"Read More"} primary={true} /></div>
                        <Button text={"Contact Us"} />
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Home;