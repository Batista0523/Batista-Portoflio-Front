import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      alert("Please enter a valid email.");
      return;
    }

    if (!message.trim()) {
      alert("Please enter your message.");
      return;
    }

    emailjs
      .sendForm(
        "service_md8j0hu",
        "template_2jhpicq",
        form.current,
        "nv5BCejYsrxTMltQm"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✨🌟Your Request was successfully sent, 🚀✅!  Thank You");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌❌Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card contact-card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                Let's Connect!
              </h2>
              <p className="text-center">
                👋 I'm excited to hear from you! Feel free to reach out for any
                inquiries or just to say hello.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    id="user_name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="user_email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="user_email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="4"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
              <p className="text-center mt-3">
                🚀 Looking forward to connecting with you! 📬
              </p>
            </div>
          </div>
          <div className="card mt-5 recruiter-card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                Future Recruiters, Hello!
              </h2>
              <p className="text-center">
                🚀 As a passionate Full Stack Developer, I'm eager to
                collaborate with forward-thinking teams and contribute to
                innovative projects. My skills range from frontend development
                using React.js to backend work with Node.js and PostgreSQL.
              </p>
              <p className="text-center">
                💡 Let's build something amazing together! Reach out, and let's
                discuss how my skills can bring value to your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
