import React, { useState } from 'react'
import './contact.css'

function Contact() {

    const [values, setValues] = useState({
        username: '',
        mobile: '',
        email: '',
        company: '',
        projectDetails: ''
    })

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setValues((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    return (
        <>
            <section className="first_sec">
                <div className="container">

                    <div className="title">
                        <h2>Contact</h2>
                        <p>Let's talk about your next project</p>
                    </div>
                </div>
            </section>



            <section className='second_sec auto-grid'>
                <div className="container">

                    <div className="thought">
                        <h3>Keep in touch</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur </span>
                        <p>Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="form-title">
                            <h3>Contact Us</h3>
                        </div>

                        <div className="input-row">
                            <div className="input-box">
                                <input type="text" name='username' placeholder='Name' autoComplete='off' onChange={handleChanges} required />
                            </div>
                            <div className="input-box">
                                <input type="number" name='mobile' placeholder='Mobile No.' autoComplete='off' onChange={handleChanges} required />
                            </div>
                            <div className="input-box">
                                <input type="email" name='email' placeholder='Email Address' autoComplete='off' onChange={handleChanges} required />
                            </div>
                            <div className="input-box">
                                <input type="text" name='company' placeholder='Company Name' autoComplete='off' onChange={handleChanges} />
                            </div>
                            <div className="input-box">
                                <input type="text" name='projectDetails' placeholder='Project Details' autoComplete='off' onChange={handleChanges} required />
                            </div>
                        </div>

                        <div className="submit">
                            <input type="submit" className='submit-btn' />
                        </div>
                    </form>
                </div>
            </section>



            <section className="third_sec">
                <div className="container">

                    <div className="title">
                        <h2>Located Globally</h2>
                    </div>

                    <div className="card-row">
                        <div className="card">
                            <h4>Office</h4>
                            <div className="mail">
                                <i class='bx bx-envelope'></i>
                                <p>info@webdualty.com</p>
                            </div>
                            <div className="call">
                                <i class='bx bx-phone-call'></i>
                                <span>+91 9358174038</span>
                            </div>
                        </div>
                        <div className="card">
                            <h4>Contact</h4>
                            <div className="mail">
                                <i class='bx bx-envelope'></i>
                                <p>icontact@webduality.com</p>
                            </div>
                            <div className="call">
                                <i class='bx bx-phone-call'></i>
                                <span>+91 9358174038</span>
                            </div>
                        </div>
                        <div className="card">
                            <h4>Location</h4>
                            <div className="location">
                                <i class='bx bx-map' ></i>
                                <p>Greater Noida Sector 4,Sco 63, Sector 12-A, Panchkula, Haryana 134112</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <section className='map'>
                <div className="container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0828742360964!2d77.36992837450978!3d28.627278184320996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550ad7aaaab%3A0xd0bd90ead53eb4b2!2sWebDuality%20Technology!5e0!3m2!1sen!2sin!4v1726256022455!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </>
    )
}

export default Contact