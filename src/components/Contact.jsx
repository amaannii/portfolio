import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import img3 from '../assets/images/me.png'

function Contact({ contact }) {

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_07x4qoq",
                "template_bwi5fgl",
                formRef.current,
                "fl1hSOsWniHi77r14"
            )
            .then(
                () => {
                    contact(false)
                },
                (error) => {
                    alert("Failed to send message: " + error.text);
                }
            );
    };

    return (
        <>
            <div className="fixed inset-0 h-screen w-full bg-[#1E1E1E] bg-opacity-95 flex justify-center items-center z-50 px-4">

                {/* CLOSE BUTTON */}
                <img
                    onClick={() => contact(false)}
                    className='absolute top-0 right-0 h-[25px] w-[25px]'
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA90lEQVR4nO2VXQ6CMBCE8Qb+PCvq/c+hxhcTQmFGhIaT1DRgQgh0y0+MJmzSt20/Zkp3gmCpv6woijYAbiSfSqlQ6ldKhbbX7onjeOsF0VqvSd5JGrsAlCTPff15nh8A5I3+R5IkOxEE4PrZ1FhFlzJVKSna/fYMJ8QYs2JVRoKpHki9aM9ywtpWtL60BHCSelxWd1mi+5Q5lOg0TY9eEB9lk5WMhaG2dBTEF4Y5IL4gjrXMF8Jv3g+nWCg8Ru369X1m42wPFpIyYQTpASMI4giq48EJkWDiUO2LCZcVWZbtAbwGx4QtG151XGBA8AHAxTv4lvq5egP3iCmNbupKHgAAAABJRU5ErkJggg=="
                    alt="delete-sign"
                />

                {/* MAIN */}
                <div className="w-full max-w-[700px] bg-transparent">

                    {/* TITLE */}
                    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-4 mb-6 text-center md:text-left">
                        <h1 className="my-text text-[#E9E3DC] font-extrabold text-4xl md:text-6xl tracking-[-1px]">
                            GET IN TOUCH
                        </h1>

                        <p className="text-[#E9E3DC] font-bold text-sm md:text-base max-w-[390px]">
                            I'd love to hear from you! Let's discuss opportunities!
                        </p>
                    </div>

                    {/* FORM */}
                    <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 w-full">

                        <input
                            className="h-[45px] w-full border border-white/20 text-[#E9E3DC] bg-[#282727] rounded-lg p-3 placeholder:text-[#555353] text-sm"
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            className="h-[45px] w-full border border-white/20 text-[#E9E3DC] bg-[#282727] rounded-lg p-3 placeholder:text-[#555353] text-sm"
                            type="email"
                            name="user_email"
                            placeholder="Your Email Address"
                            required
                        />

                        <textarea
                            className="h-[120px] w-full border border-white/20 text-[#E9E3DC] bg-[#282727] rounded-lg p-3 placeholder:text-[#555353] text-sm"
                            name="message"
                            placeholder="Add a message"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="h-[45px] bg-[#D9D9D9] rounded-lg text-xl font-extrabold text-[#1E1E1E] hover:bg-white transition"
                        >
                            SEND
                        </button>
                    </form>

                    {/* BOTTOM ICONS */}
                    <div className="mt-8 flex justify-center items-center ">
                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full bg-[#414141] flex justify-center items-center">
                            <img className="h-[80px] md:h-[100px] rounded-full" src={img3} alt="" />
                        </div>

                        <div className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full bg-[#646464] flex justify-center items-center relative right-5">
                            <h2 className="text-[#EFEDEC] my-text text-lg md:text-2xl font-extrabold">
                                AMANI
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
