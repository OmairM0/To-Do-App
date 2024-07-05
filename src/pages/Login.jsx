import { useState } from "react";
import "./login.css";

function Login({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (username && password) {
      let user = { username, password };
      handleLogin(user);
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="password"
        />
        <input
          disabled={username && password ? false : true}
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
}

export default Login;
