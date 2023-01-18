import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("ok");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="top-section">
          <button className="login-btn">Log In</button>
          <p> or </p>
          <button className="signup-btn">Sign Up</button>
        </div>

        <form method="post" className="input-section" onSubmit={handleSubmit}>
          <h1>Welcome Back!</h1>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password" placeholder="Password" />
          <a href="">Forgot your password?</a>

          <button type="submit" className="form-login-btn" disabled>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
