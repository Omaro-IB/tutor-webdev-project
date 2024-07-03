import ContactForm from "./ContactForm";
import {Scramble} from "./Scramble.js";

const Contact = () => {
    return (
        <div id="contact" className="py-10 bg-plain-bg flex">
            {/*Top One*/}
            <div className='pt-10 w-[90vw] sm:w-[60vw] mx-auto bg-primary2 max-h-screen rounded-[30px]'>
                {/*Omar*/}
                <div className={"px-10"}>
                    <div className="text-3xl md:text-4xl mb-2">  {/* contact title */}
                        Contact Omar
                    </div>
                    <p className="text-lg mb-4">
                        If you'd prefer, you can also contact me at <u>
                        <a className="text-accent1 hover:text-accent1-hover" href={Scramble('lc158d7dlcxdlb12xc34lc15b6dl')}>{Scramble('dlcxdlb12xc34lc15b6dl')}</a></u>
                    </p>
                    <ContactForm/>
                </div>
                {/*Arun*/}
                <div className="px-10 py-10 w-[90vw] sm:w-[60vw] mx-auto bg-primary1 rounded-[30px] mt-10">
                    <div className="text-3xl md:text-4xl mb-2">  {/* contact title */}
                        Contact Arun
                    </div>
                    <p className="text-lg mb-4">
                        If you'd prefer, you can also contact me at <u>
                        <a className="text-accent1 hover:text-accent1-hover"
                           href={Scramble('lc158d7bbb34lc15b6dl')}>{Scramble('bbb34lc15b6dl')}</a></u>
                    </p>
                    <div>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;