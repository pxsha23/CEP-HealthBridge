// import React from 'react';
// import './LoginPage.css';

// const LoginPage = () => {
//   return (
//     <div className="login-container">
//       <h2>Welcome to HealthBridge</h2>
//       <form className="login-form">
//         <label>Email</label>
//         <input type="email" placeholder="Enter your email" required />
//         <label>Password</label>
//         <input type="password" placeholder="Enter your password" required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome to HealthBridge</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
