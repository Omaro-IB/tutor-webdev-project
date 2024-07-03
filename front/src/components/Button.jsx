import { Link } from "react-scroll";

const Button = ({text, primary, linkID}) => {
    return (<div className={`cursor-pointer w-32 h-14 sm:w-44 sm:h-16 grid justify-items-center bg-plain-bg rounded-full opacity-${primary? '100' : '50'}`}>
        <Link to={linkID} smooth duration={500} className={`sm:text-l self-center ${primary? 'font-bold': ''}`}>
            {text}
        </Link>
    </div>)
}

export default Button;