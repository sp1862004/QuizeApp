

const AboutPage = () => {
    return (
        <div className="container mt-5 about-page mt-5 mb-5">
            <h1 className="text-center mb-4 animated-title">About Us</h1>

            <p className="lead text-center animated fadeInUp delay-1s mt-3">
                Welcome to QuizMaster! We are passionate about providing engaging quizzes that challenge and entertain users. Whether you're looking to test your knowledge in science, math, or history, we have a quiz for you!
            </p>

            <div className="team-section mt-5">
                <h2 className="text-center mb-4">Meet Our Team</h2>
                <div className="row mt-3">

                    <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-4 animated fadeInUp">
                        <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="Jane Smith" className="team-img rounded-circle mb-3" />
                        <h4 className="mt-4">Jane Smith</h4>
                        <p>Content Strategist</p>
                    </div>


                    <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-4 animated fadeInLeft">
                        <img src="sp18.jpg" alt="Shailesh Patel" className="team-img rounded-circle mb-3" />
                        <h4 className="mt-4">Shailesh Patel</h4>
                        <p>Quiz Developer</p>
                    </div>



                    <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-4 animated fadeInRight">
                        <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="Mike Johnson" className="team-img rounded-circle mb-3" />
                        <h4 className="mt-4">Mike Johnson</h4>
                        <p>UI/UX Designer</p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5 animated fadeInUp delay-2s">
                <button className="btn btn-primary btn-lg" onClick={() => alert('Start a quiz now!')}>
                    Start a Quiz Now!
                </button>
            </div>
        </div>
    );
};

export default AboutPage;
