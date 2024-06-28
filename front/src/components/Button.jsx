const Button = ({text, primary, onClick}) => {
    return (<div onClick={onClick} className={`cursor-pointer w-32 h-14 sm:w-44 sm:h-16 grid justify-items-center bg-white-bg rounded-full opacity-${primary? '100' : '50'}`}>
        <p className={`sm:text-l self-center ${primary? 'font-bold': ''}`}>{text}</p>
    </div>)
}

export default Button;