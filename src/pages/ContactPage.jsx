import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    // Add Web3Forms API key to the form data
    data.append("access_key", "596f3a95-67b8-4025-a174-3a1b35d42ab5"); // Replace with your actual key

    // Validate fields
    if (!data.get("name") || !data.get("email") || !data.get("message")) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await fetch("https://web3forms.com/api/submit", {
        method: "POST",
        body: data,
      });

      console.log("Response status:", response.status); // Check response status

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        alert(`Failed to send the message. ${errorData.message || 'Please try again later.'}`);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("An unexpected error occurred. Please check your internet connection and try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  name="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  name="message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="text-center">
                <button className="my-2 px-4 mx-auto btn btn-dark" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
