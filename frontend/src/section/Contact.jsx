import React, { useState } from "react";

import { useRef } from "react";
import swal from "sweetalert2";
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
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent successfully.",
                icon: "success",
                confirmButtonColor: "#F5BABB",
            });
        } catch (error) {
            console.error("EmailJS Error:", error);

            Swal.fire({
                title: "Error!",
                text: "Failed to send your message. Please try again.",
                icon: "error",
                confirmButtonColor: "#F5BABB",
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <section id="contact" className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
            <div
                data-aos="fade-right"
                data-aos-duration="900"
                className="w-full md:w-1/2 flex justify-center p-6"
            >
                <div className="bg-white/70 backdrop-blur-xl shadow-xl text-gray-800 py-10 px-8 rounded-2xl max-w-lg w-full border border-white/30">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col gap-6"
                    >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-600">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your good name?"
                                required
                                className="text-black placeholder:text-gray-400 px-4 py-3 rounded-xl outline-none border border-pink-200 focus:ring-2 focus:ring-pink-300 transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-600">
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
                                className="text-black placeholder:text-gray-400 px-4 py-3 rounded-xl outline-none border border-pink-200 focus:ring-2 focus:ring-pink-300 transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-600">
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
                                className="text-black placeholder:text-gray-400 px-4 py-3 rounded-xl outline-none border border-pink-200 focus:ring-2 focus:ring-pink-300 transition-all resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
                        >
                            {loading ? "Sending..." : "SEND MESSAGE"}
                        </button>
                    </form>
                </div>
            </div>

            <div
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-delay="300"
                className="w-full md:w-1/2 flex justify-center"
            >
                <img
                    src="/images/milkshake/header.png"
                    alt="contact"
                    className=" object-contain drop-shadow-2xl"
                />
            </div>
        </section>


    );
};

export default Contact;
