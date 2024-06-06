import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>Address: Munhumutapa buildings , Harare</p>
            <p>Email: misheckgogo45@gmail.com</p>
            <p>Phone: +27 680970160</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
