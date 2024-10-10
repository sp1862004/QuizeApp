import 'bootstrap/dist/css/bootstrap.min.css';


const ContactPage = () => {
  return (
    <div className="container mt-5 contact-page">
      <h1 className="text-center mb-4 animated-title">Contact Us</h1>

      <div className="row">
        <div className="col-md-6 offset-md-3 bg-light rounded">
          <div className="contact-card p-4 animated fadeIn">
            <h3 className="text-center mb-4">Get In Touch</h3>
            <form>
              <div className="form-group mt-2 ">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  className="form-control animated-input mt-1"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control animated-input mt-1"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group mt-2">
                <label htmlFor="message">Your Message</label>
                <textarea
                  className="form-control animated-input mt-1"
                  id="message"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block submit-btn animated-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="row mt-5 text-center mb-5">
        <div className="col-md-4">
          <div className="info-card animated bounceInLeft">
            <h4>Our Address</h4>
            <p>123 Quiz Street, Knowledge City, 45678</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-card animated bounceInUp">
            <h4>Email Us</h4>
            <p>support@quizmaster.com</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info-card animated bounceInRight">
            <h4>Call Us</h4>
            <p>+123 456 7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
