import React from 'react';

const Inquiry = () => {
  return (
    <div className='Inquiry__container'>
        <h1 className='Inquiry__title'>Make An Inquiry</h1>
        <form id="contact__form" className='contact__form'>
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div>
    <label for="arrival-date">Arrival Date:</label>
    <input type="date" id="arrival-date" name="arrival-date" required />
  </div>
  <div>
    <label for="departure-date">Departure Date:</label>
    <input type="date" id="departure-date" name="departure-date" required />
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>

    </div>
  )
}

export default Inquiry