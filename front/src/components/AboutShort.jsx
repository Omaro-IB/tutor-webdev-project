import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from "react-scroll";

const AboutShort = () => {
    return(<div id="aboutshort"
                className={"h-[50vh] bg-gradient-to-tr from-primary2 to-primary1 flex flex-col items-center justify-center"}>

        <div className={"mx-14"}>
            <h1 className={"text-3xl sm:text-5xl py-4 text-center"}>Who we are</h1>
            <p className={"text-lg sm:text-2xl text-center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <Link to={"about"} smooth={true} duration={1000} className={"mt-8 sm:mt-16 cursor-pointer group"}>
            <h4 className="float-left">Scroll to read more</h4>
            <span className="float-left group-hover:rotate-90 duration-300"> <HiArrowNarrowRight size={25} color={"#3e3e3e"} className="ml-3"/> </span>
        </Link>

    </div>)
}

export default AboutShort;