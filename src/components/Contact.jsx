import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"; // Contact icons

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid =
      form.name.trim().length >= 2 &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.message.trim().length >= 10;

    if (!isValid) {
      toast.error("❌ Please fill all fields correctly.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("_captcha", "false");

    try {
      const res = await fetch("https://formsubmit.co/ajax/viraltamilan13072005@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      toast.error("❌ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 text-white">
      <ToastContainer position="top-right" theme="dark" />
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl p-8 space-y-6 shadow-lg border border-cyan-800 mx-6 md:mx-2"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-4 text-center">
            📬 Contact Me
          </h2>

          <div>
            <label className="block text-sm font-medium text-cyan-300">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              minLength={2}
              className="mt-1 w-full px-4 py-2 bg-gray-800 text-white border border-cyan-600 rounded focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cyan-300">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-gray-800 text-white border border-cyan-600 rounded focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-cyan-300">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              minLength={10}
              className="mt-1 w-full px-4 py-2 bg-gray-800 text-white border border-cyan-600 rounded focus:ring-2 focus:ring-cyan-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded transition duration-300 disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl p-8 shadow-lg border border-cyan-800 flex flex-col justify-start mx-6 md:mx-2"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-10 text-center">
            📞 Get in Touch
          </h2>

          <div className="space-y-6 text-base text-gray-300">
            <div className="flex items-center gap-4">
              <FiMail className="text-cyan-400 text-xl" />
              <a href="mailto:jaiselvi13072005@gmail.com" className="hover:underline text-white">jaiselvi13072005@gmail.com</a>
            </div>

            <div className="flex items-center gap-4">
              <FiPhone className="text-cyan-400 text-xl" />
              <a href="tel:+919597493065" className="hover:underline text-white">+91 9597493065</a>
            </div>

            <div className="flex items-center gap-4">
              <FiMapPin className="text-cyan-400 text-xl" />
              <span>L/13, Phase-4, Sathuvachari,<br />
              Vellore-9, Tamil Nadu, India.</span>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            I’m always open to discuss new opportunities and collaborations.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
