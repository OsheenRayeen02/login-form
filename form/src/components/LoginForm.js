import React, { useState } from 'react';
import './App.css';
import Home from './Home';
const LoginForm = () => {
  const [selectedRole, setSelectedRole] = useState('user');

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <section>
      <form>
        <h1>Login</h1>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" required placeholder="Email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" required placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="user"
              checked={selectedRole === 'user'}
              onChange={handleRoleChange}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              value="admin"
              checked={selectedRole === 'admin'}
              onChange={handleRoleChange}
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              value="client"
              checked={selectedRole === 'client'}
              onChange={handleRoleChange}
            />
            Client
          </label>
        </div>

        <div className="forget">
          <label htmlFor="">
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forget Password</a>
        </div>
        <button>
          <a href="/Home">Log in</a>
        </button>
        <div className="register">
          <p>
            Don't have an account <a href="/signup">Register</a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
