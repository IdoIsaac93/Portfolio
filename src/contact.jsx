import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        //These are the form values
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    //This is used later to display the success message
    const [isSubmitted, setIsSubmitted] = useState(false);
    //And this is for the error message
    const [errorMessage, setErrorMessage] = useState('');

    //This is called whenever anything changes and updates the values in the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //This submits the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //Tries to post the form
        try {
            //Placeholder site for submission because the portfolio isn't able to handle post submissions yet
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            //Error message if connection fails
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            //Reset the form values
            setFormData({
                firstName: '',
                lastName: '',
                contactNumber: '',
                email: '',
                message: ''
            });

            //Deletes the error message and displays success message
            setIsSubmitted(true);
            setErrorMessage('');

            //Displays error message
        } catch (error) {
            setErrorMessage('There was a problem with your submission. Please try again.');
            setIsSubmitted(false);
        }
    };

    //This is the page, my text first, then the success or error message, then the form itself,
    return (
        <div id="contactPage">
            <h1>Contact Me At:</h1>
            <div id="contactInfo">
                <p>Email: Idoisaac93@gmail.com</p>
                <p>Phone: (437) 297-5326</p>
                <h2>Or Send Me Your Contact Info:</h2>
                <p>Feel free to reach out for collaborations or inquiries!</p>
            </div>
            {isSubmitted && (
                <p className="successMessage">
                    Thank you for your message! I will get back to you soon.
                </p>
            )}
            {errorMessage && (
                <p className="errorMessage">{errorMessage}</p>
            )}
            <form onSubmit={handleSubmit} className="contactForm">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}