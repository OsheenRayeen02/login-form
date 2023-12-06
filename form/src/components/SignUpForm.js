import React from 'react';

const SignUpForm = () => {
  return (
    <section>
      <form>
        <h1>Sign Up</h1>

        <div className="inputbox">
          <ion-icon name="ion-md-person"></ion-icon>
          <input type="name" required />
          <label htmlFor="">Username</label>
        </div>
        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" required />
          <label htmlFor="">Email</label>
        </div>
        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" required />
          <label htmlFor="">Password</label>
        </div>
        <div className="forget">
          <label htmlFor="">
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forget Password</a>
        </div>
        <button><a href="/login">Sign Up</a></button>
        <div className="register">
          <p>
            Don't have an account <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
