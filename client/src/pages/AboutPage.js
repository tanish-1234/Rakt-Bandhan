import React from 'react';
import Layout from '../components/shared/Layout/Layout';
import '../index.css';

const AboutPage = () => {
    return (
        <Layout>
            <div className="container">
                {/* Blood Bank Information */}
                <div className="blood-bank-info" style={{ textAlign: 'center', marginTop: '2rem' }}>
                    {/* <img src="/blood_bank_logo.png" alt="Blood Bank Logo" style={{ width: '200px', marginBottom: '1rem' }} /> */}
                    <h2>About the Rakt Bandhan : The Blood Bank</h2>
                    <p>
                        The Blood Bank is a leading organization dedicated to ensuring a safe and reliable blood supply for medical emergencies and healthcare institutions. Our mission is to save lives by connecting generous donors with those in need of blood transfusions.
                    </p>
                </div>

                {/* Our Team Section */}
                <div className="our-team-section" style={{ marginTop: '3rem' }}>
                    <h2 style={{ textAlign: 'center' }}>Our Team</h2>
                    <div className="row justify-content-center">
                        {/* Prasam Jain Card */}
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <img
                                    src="./assets/images/prasam.jpg"
                                    className="card-img-top rounded-circle"
                                    alt="Prasam Jain"
                                    style={{
                                        width: '130px',
                                        height: '130px',
                                        margin: 'auto', // Center horizontally
                                        display: 'block',
                                        marginTop: '20px' // Ensures proper alignment
                                    }}
                                />

                                <div className="card-body" >
                                    <h5 style={{ textAlign: 'center' }}>Tanish Jain</h5>
                                    <p className="card-text" style={{ textAlign: 'center' }}>Full Stack Developer</p>
                                    <ul className="list-unstyled">
                                        <li><em>I am a quick learner and problem solver & I believe that
                                            I can contribute to your team by bringing fresh perspectives,
                                            and a willingness to learn and grow.</em></li>
                                    </ul>
                                </div>
                                <div className="card-footer text-center">
                                    <a href="mailto:prasamjain294@gamil.com"><i className="fa-solid fa-envelope text-success me-3"></i></a>
                                    <a href="https://github.com/prasamjain"><i className="fa-brands fa-github text-success me-3"></i></a>
                                    <a href="https://www.linkedin.com/in/prasam-jain-59a45a191"><i className="fa-brands fa-linkedin text-success me-3"></i></a>
                                    <span>Phone: 8871430416</span>
                                </div>
                            </div>
                        </div>

                        {/* Palash Mishra Card */}
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <img
                                    src="./assets/images/Rahul.jpg"
                                    className="card-img-top rounded-circle"
                                    alt="Prasam Jain"
                                    style={{
                                        width: '130px',
                                        height: '130px',
                                        margin: 'auto', // Center horizontally
                                        display: 'block',
                                        marginTop: '20px' // Ensures proper alignment
                                    }}
                                />
                                <div className="card-body">
                                    <h5 style={{ textAlign: 'center' }}>Anurag Pratap Singh</h5>
                                    <p className="card-text" style={{ textAlign: 'center' }}>Full Stack Developer</p>
                                    <ul className="list-unstyled">
                                        <li><em>I am excited about the opportunity to work as an intern 
                                            at your company and I am confident that I can make valuable 
                                            contributions to your projects.</em></li>
                                    </ul>
                                </div>
                                <div className="card-footer text-center">
                                    <a href="mailto:rahulbairagiofficial@gmail.com"><i className="fa-solid fa-envelope text-success me-3"></i></a>
                                    <a href="https://github.com/rahulcode751"><i className="fa-brands fa-github text-success me-3"></i></a>
                                    <a href="https://www.linkedin.com/in/rahul3008/"><i className="fa-brands fa-linkedin text-success me-3"></i></a>
                                    <span>Phone: 7894215631</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default AboutPage;
