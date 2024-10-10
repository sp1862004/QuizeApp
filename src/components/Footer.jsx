


const Footer = () => {
  return (
    <footer className="footer animated-footer mt-auto pb-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer-text">
            <h5>QuizMaster</h5>
            <p>Challenge yourself with our quizzes and learn something new every day!</p>
          </div>
          <div className="col-md-6 text-md-right">
            <ul className="list-unstyled social-icons">
              <li><a href="#!" className="social-icon"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#" className="social-icon"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://github.com/sp1862004" className="social-icon"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/shailesh-patel-3102bb277" className="social-icon"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© {new Date().getFullYear()} QuizMaster <i className="fa-solid fa-brain"></i>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
