/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import * as EmailValidator from 'email-validator';
import { CONTACT_ENDPOINT_URL, CONTACT_ENDPOINT_API_KEY } from 'fusion:environment';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contact_name: '',
      contact_email: '',
      contact_subject: '',
      contact_message: '',
      submission_status: '', // never manually set this to 'SUCCESS'; only server response should do that
      submission_messages: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  /**
   *
   * @param {Array} list
   * @param {Array} classNames
   */
  printList = (list, classNames = []) => {
    return list.map((item, i) => {
      return (
        <li key={i} className={classNames.length > 0 ? classNames.join(' ') : ''}>
          {item}
        </li>
      );
    });
  }

  /**
   *
   * @param {object} dataObj required fields {name: string, email: string, message: string}
   * @returns {object} {valid: boolean, messages: []}
   */
  validateUserData = (dataObj) => {
    const result = {
      valid: true,
      messages: [],
    };

    // name
    if (!dataObj.name.trim()) {
      result.valid = false;
      result.messages.push('Your name is required');
    }

    // email
    if (!EmailValidator.validate(dataObj.email.trim())) {
      result.valid = false;
      result.messages.push('A valid email is required');
    }

    // message
    if (!dataObj.message.trim()) {
      result.valid = false;
      result.messages.push('A message is required');
    }

    return result;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: this.state.contact_name.trim(),
      email: this.state.contact_email.trim(),
      subject: this.state.contact_subject.trim(),
      message: this.state.contact_message.trim(),
    };

    const userDataValidation = this.validateUserData(userData);

    if (!userDataValidation.valid) {
      this.setState({
        submission_status: 'ERROR',
        submission_messages: userDataValidation.messages,
      });

      return;
    }

    // Send email
    const params = {
      method: 'POST',
      headers: {
        'x-api-key': CONTACT_ENDPOINT_API_KEY,
      },
      body: JSON.stringify(userData),
    };
    fetch(CONTACT_ENDPOINT_URL, params)
      .then((response) => { response.json(); })
      .then((data) => {
        const submissionStatus = data.status.toUpperCase();

        this.setState({
          submission_status: submissionStatus,
          submission_messages: [data.message],
        });

        // Reset form if submission is successful
        if (submissionStatus === 'SUCCESS') {
          this.setState({
            contact_name: '',
            contact_email: '',
            contact_subject: '',
            contact_message: '',
          });
        }
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 contact-form">
            <h3>HAVE QUESTIONS?</h3>
            <h5>LET US KNOW HOW WE CAN HELP!</h5>

            {this.state.submission_status.toUpperCase() === 'SUCCESS'
            && (<div className="contact-form-message">
                  <ul className="list-unstyled">
                    {this.printList(this.state.submission_messages)}
                  </ul>
                </div>)}

            {this.state.submission_status.toUpperCase() === 'ERROR'
            && (<div className="error-message-box">
                  <p>Validation errors occurred. Please confirm the fields and submit it again.</p>
                  <ul className="list-unstyled">
                    {this.printList(this.state.submission_messages, ['error-message'])}
                  </ul>
                </div>)}

            <form onSubmit={this.handleSubmit} method="post" className="mailform_form">
              <div className="form-group">
                <label>Your Name (Required)
                  <input id="id_contact_name"
                         className="form-control"
                         name="contact_name"
                         value={this.state.contact_name}
                         onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>Your Email (Required)
                  <input id="id_contact_email"
                         className="form-control"
                         name="contact_email"
                         value={this.state.contact_email}
                         onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>Subject
                  <input id="id_subject"
                         className="form-control"
                         name="contact_subject"
                         value={this.state.contact_subject}
                         onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>Your Message (Required)
                  <textarea id="contact_message"
                            className="form-control"
                            rows="3"
                            name="contact_message"
                            value={this.state.contact_message}
                            onChange={this.handleChange}
                  ></textarea>
                </label>
              </div>
              <p className="submit">
                <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ContactForm.label = 'Contact Form';

export default ContactForm;
