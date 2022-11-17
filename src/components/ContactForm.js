import React from 'react'
const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submited')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div>
            <div className='map-part'>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83998487325!2d77.0685551590833!3d28.527581652419254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1668495159166!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div className="container mt-5">
                <h2 className="mb-3">Feel Free To Contact Me</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Name
                        </label>
                        <input className="form-control" type="text" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input className="form-control" type="email" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                            Message
                        </label>
                        <textarea className="form-control" id="message" required />
                    </div>
                    <button className="btn btn-danger" type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
        </div>
    )
}
export default ContactForm;