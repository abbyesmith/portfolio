import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'


const Contacts = () => {

    const [succsesMessage, setSuccessMessage] = useState ("")

    const formatPhoneNumber = (phoneNumber) => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return phoneNumber;
    };

    const serviceID = "service_d26dps5"
    const templateID = "template_sa1wy9b"
    const userID = "sKoaJ5-AXg8RNDO8G"

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        if (form.current.checkValidity()){
            // const phoneNumberInput = form.current.elements.phone;
            // phoneNumberInput.value = formatPhoneNumber(phoneNumberInput.value);
            // const formData = new FormData(form.current);
            // const formattedPhoneNumber = formatPhoneNumber(formData.get('phone'));
            // formData.set('phone', formattedPhoneNumber);

            emailjs.sendForm(serviceID, templateID, form.current, userID)
                .then((result) => {
                    console.log(result.text);
                    setSuccessMessage("Thank you for your message! I will respond as soon as possible.");
                    form.current.reset();
                })
                .catch((error)=> {
                    console.log(error.text);
                });
            } else{
                window.alert("Please fill out all fields in order to send the email.")
            }
    };


    return (
        <div id = "contact" className='contacts'>
            <div className='text-center'>
                <h1>Contact Me</h1>
                <p>Please fill out the form to reach out and begin a conversation about your software development needs.</p>
                <span className="success-message">{succsesMessage}</span>
            </div>
            <div className = 'container'>

                <form onSubmit={sendEmail} ref={form}>
                    <div className = "row">
                        <div className = "col-md-6 col-xs-12">
                            <input
                                id='name'
                                type = 'text'
                                className='form-control'
                                placeholder='Name'
                                name="name"
                                required
                            />
                            <div className = 'line'></div>
                            <input
                                id='phone'
                                type = 'text'
                                className='form-control'
                                placeholder='Phone Number'
                                name="phone"
                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"

                            />
                            <div className = 'line'></div>
                            <input
                                id='email'
                                type='email'
                                className='form-control'
                                placeholder='Email Address'
                                name="email"
                                required
                            />
                            <div className = 'line'></div>
                            <input
                                id='subject'
                                type='text'
                                className='form-control'
                                placeholder='Subject'
                                name="subject"
                                required
                            />
                            <div className = 'line'></div>
                        </div>
                        <div className='col-md-6 col-xs-12'>
                            <textarea
                                id='message'
                                type='text'
                                className='form-control'
                                placeholder='Message'
                                name="message"
                                required
                            ></textarea>
                            <button type="submit" class="btn-contact">Contact Me</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts