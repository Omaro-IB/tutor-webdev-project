import React, { useState } from "react";
import axios from 'axios'

const ContactForm = ({who}) => {
    const [submitted, setSubmitted] = useState(0)  // 0 = not submitted, 1 = submitted successfully, 2 = submitted but unsuccessful
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const addForm = event => {
        event.preventDefault()
        const formObject = {
            id: name,
            name: name,
            email: email,
            message: message,
        }

        const promise = axios.post(`http://localhost:3001/${who}`, formObject)
        promise.then(_ => {
            setSubmitted(1)
        })

        promise.catch(_ => {
                setSubmitted(2)
        })
    }

    if (submitted === 1) {  // submitted successfully
        return (<div>
                <div className="text-2xl">Thank you! ☺</div>
                <div className="text-md">I'll get back to you as soon as I can.</div>
            </div>);
    }
    else {  // not submitted or unsuccessful
        return (<form onSubmit={(event) => addForm(event)}>
                <div>
                    <p className="text-error">{(submitted === 2) ? "An error prevented your form from submitting, please try again or send an email if the issue persists" : ""}</p>
                </div>

                <div className="pt-0 mb-3">
                    <input type="text" placeholder="Your name" name="name"
                           className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-pinkbeige border-0 rounded shadow outline-none"
                           required
                            onChange={(event) => setName(event.target.value)}/>
                </div>

                <div className="pt-0 mb-3">
                    <input type="email" placeholder="Your email" name="email"
                           className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-pinkbeige border-0 rounded shadow outline-none"
                           required
                           onChange={(event) => setEmail(event.target.value)}/>
                </div>

                <div className="pt-0 mb-3">

            <textarea
                placeholder="Your message"
                name="message"
                className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-pinkbeige border-0 rounded shadow outline-none"
                required
                onChange={(event) => setMessage(event.target.value)}
            />

                </div>

                <div className="mb-3 stroke-pinkbeige">
                    <button
                        className="text-pinkbeige px-6 py-3 mb-1 mr-1 text-sm font-bold text-pinkbeige transition-all duration-150 ease-linear rounded"
                        type="submit">
                        <p>Submit</p>
                    </button>

                </div>
            </form>

        );
    }

};


export default ContactForm;