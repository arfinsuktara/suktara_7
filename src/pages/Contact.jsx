import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending message
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Show success toast
    toast.success("Message sent successfully!");

    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <Toaster position="top-right" />
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message"
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                btnName="Send Message"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all"
              />
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9028195804387!2d90.40620357499017!3d23.810331984564826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bf37e78c2d%3A0xf1e2e9d2f0a1b2c!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
