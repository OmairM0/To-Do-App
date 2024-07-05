import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [isLogin, setLogin] = useState(
    localStorage.getItem("to-do-session") ? true : false
  );
  function handleLogout() {
    localStorage.removeItem("to-do-session");
    setLogin(false);
  }

  function handleLogin(user) {
    if (user.username === "omair" && user.password === "123") {
      let stateObj = { id: "100" };
      localStorage.setItem(
        "to-do-session",
        JSON.stringify({ name: user.username })
      );
      setLogin(() => true);
      window.history.pushState(stateObj, "To Do App", "/");
    } else {
      alert("username or password incorrect");
    }
  }

  if (!isLogin) {
    let stateObj = { id: "100" };

    window.history.pushState(stateObj, "Login", "/login");
    return <Login handleLogin={handleLogin} />;
  }

  return <Home handleLogout={handleLogout} />;
}

export default App;
