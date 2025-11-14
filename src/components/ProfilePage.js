import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const ProfilePage = ({ userName, userEmail, setUserName, setUserEmail, userPassword, setUserPassword, users, setUsers, pastOrders, setPastOrders }) => {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState(userPassword);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setName(userName);
    setEmail(userEmail);
    setPassword(userPassword);
  }, [userName, userEmail, userPassword]);

  const handleSave = (e) => {
    e.preventDefault();
  
    const emailTaken = users.some(
      (user) => user.email === email && user.email !== userEmail
    );
  
    if (emailTaken) {
      setMessage("This email is already in use by another account.");
      return;
    }
  
    // Update user data
    const updatedUsers = users.map((user) => {
      if (user.email === userEmail) {
        return {
          ...user,
          name: name,
          email: email,
          password: password
        };
      }
      return user;
    });
  
    // Update pastOrders dictionary: move orders from old email to new one
    const updatedOrders = { ...pastOrders };
    if (userEmail !== email && pastOrders[userEmail]) {
      updatedOrders[email] = pastOrders[userEmail];
      delete updatedOrders[userEmail];
    }
  
    setUsers(updatedUsers);
    setPastOrders(updatedOrders);
    setUserName(name);
    setUserEmail(email);
    setUserPassword(password);
    setMessage("Profile updated successfully!");
  };
  

  return (
    <div>
        <Navbar />
    <div className="container profile-container py-5">
      <h2 className="text-center mb-4">My Profile</h2>
      <form className="shadow p-4 rounded bg-light" onSubmit={handleSave}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="text"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">Save Changes</button>

        {message && <p className="text-success mt-3">{message}</p>}
      </form>
    </div>
    </div>
  );
};

export default ProfilePage;
