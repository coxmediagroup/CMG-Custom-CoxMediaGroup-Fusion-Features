/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ContactForm = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 contact-form">
          <h3>HAVE QUESTIONS?</h3>
          <h5>LET US KNOW HOW WE CAN HELP!</h5>
          <form action="" method="post" className="mailform_form">
            <div className="form-group">
              <label for="id_from_name">Your Name (Required)</label>
              <input id="id_from_name" className="form-control" name="from_name" value="" />
            </div>
            <div className="form-group">
              <label for="id_from_email">Your Email (Required)</label>
              <input id="id_from_email" className="form-control" name="from_email" value="" />
            </div>
            <div className="form-group">
              <label for="id_subject">Subject</label>
              <input id="id_subject" className="form-control" name="from_subject" value="" />
            </div>
            <div className="form-group">
              <label for="id_message">Your Message (Required)</label>
              <textarea id="id_message" className="form-control" rows="3" name="message" value=""></textarea>
            </div>
            <p className="submit">
              <button type="submit">Submit</button>
              <input type="hidden" name="submission" value="submitted" />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

ContactForm.label = 'Contact Form';

export default ContactForm;
