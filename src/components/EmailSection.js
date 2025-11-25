"use client";
import { useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

const EmailSection = () => {
  const [formData, setFormData] = useState({});
  const [sending, setSending] = useState(false);

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    const { name, email, message, subject } = formData;

    if (!name || !email || !subject || !message) {
      return alert("Please Fill All Data");
    }

    setSending(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mail`, {
      method: "POST",
      body: JSON.stringify( {formData} ),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (res.status === 201) {
      console.log(data);
      setSending(false);
      toast.success("Message Sended Successfully");
      setFormData({});
    } else {
       setSending(false);
      toast.error(data.error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      
      <div className="z-10">
          <h3 className='text-3xl font-bold text-white  pb-8 flex gap-3'>
            
              <FiMessageCircle />
            
            Get in Touch - Connect with Me
          </h3>
      
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {"!Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web development and beyond."}
        </p>
      </div>

      <form className="flex flex-col" onSubmit={sendMessage}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your Name
          </label>
          <input
            name="name"
            type="name"
            id="name"
            value={formData.name || ""}
            onChange={collectData}
            required
            className="bg-[#7b89a8] border border-[#33353F] placeholder-[white] text-white text-sm rounded-lg block w-full p-2.5"
            placeholder="Your Good Name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            onChange={collectData}
            value={formData.email || ""}
            required
            className="bg-[#7b89a8] border border-[#33353F] placeholder-[#ffff] text-white text-sm rounded-lg block w-full p-2.5"
            placeholder="Your Email Address"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-white block text-sm mb-2 font-medium"
          >
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            onChange={collectData}
            value={formData.subject || ""}
            required
            className="bg-[#7b89a8] border border-[#33353F] placeholder-[white] text-white text-sm rounded-lg block w-full p-2.5"
            placeholder="Subject For Mail"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            onChange={collectData}
            value={formData.message || ""}
            className="bg-[#7b89a8] border border-[#33353F] placeholder-[white] text-white text-sm rounded-lg block w-full p-2.5"
            placeholder="Write Your Message"
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="bg-pink-400 hover:bg-pink-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          {sending ? "sending..." : "Send"}
        </button>
      </form>

      <Toaster />
    </section>
  );
};

export default EmailSection;
