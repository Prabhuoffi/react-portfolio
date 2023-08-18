import React, { useState } from 'react';
import './FormStyles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <label htmlFor='subject'>Subject</label>
        <input
          type='text'
          id='subject'
          name='subject'
          value={formData.subject}
          onChange={handleInputChange}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          rows='6'
          placeholder='Type your message here'
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <div className='form-group'>
          <button type='submit' className='btn1'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

