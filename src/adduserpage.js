import React, { useState } from 'react';
import './adduserpage.css';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [hobby, setHobby] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      contact: contact,
      hobby: hobby
    };
    console.log(newUser);
    // Here you can perform any action with the new user data, like sending it to an API
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="contact">Contact:</label>
          <input type="text" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
        </div>
        <div>
          <label htmlFor="hobby">Hobby:</label>
          <input type="text" id="hobby" value={hobby} onChange={(e) => setHobby(e.target.value)} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
