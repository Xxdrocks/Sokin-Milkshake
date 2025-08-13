import React, { useState } from "react";

import { useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error); // Optional: show toast
        } finally {
            setLoading(false); // Always stop loading, even on error
        }
    };

    return (
        <section id="contact">
            <div className="w-full h-full md:px-10 px-5 mt-50">
                <div className=" bg-pink-300 text-black py-8 px-6 rounded-lg max-w-xl">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col gap-6"
                    >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium">
                                Your name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your good name?"
                                required
                                className=" text-white placeholder:text-gray-400 px-4 py-3 rounded-lg outline-none border  focus:border-blue-500 transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email address?"
                                required
                                className=" text-white placeholder:text-gray-400 px-4 py-3 rounded-lg outline-none border border-transparent border-white transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="How can I help you?"
                                required
                                rows="4"
                                className=" text-white placeholder:text-gray-400 px-4 py-3 rounded-lg outline-none border border-transparent focus:border-blue-500 transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#d6ecff] text-black font-semibold py-3 rounded-lg hover:bg-[#bde0ff] transition-all"
                        >
                            {loading ? "Sending..." : "SEND MESSAGE"}
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default Contact;
