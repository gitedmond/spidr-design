
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    costGuess: '',
    pin: '',
  });

  const handlePinChange = (e) => {
    const { value } = e.target;
    const digits = value.replace(/\D/g, '');
    const formattedPin = digits.match(/.{1,4}/g)?.join('-') || '';
    setFormData((prevData) => ({
      ...prevData,
      pin: formattedPin.slice(0, 19),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'pin') {
      handlePinChange(e);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="App">
      <h1>Spidr Airfryer Interest Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          name="costGuess"
          placeholder="Guess the air fryer’s cost"
          value={formData.costGuess}
          onChange={handleChange}
        />
        <input
          type="password"
          name="pin"
          placeholder="####-####-####-####"
          value={formData.pin}
          onChange={handleChange}
          maxLength="19"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
