import { LogOut } from "lucide-react";
import TasksList from "../components/TasksList";
import "./home.css";

function Home({ handleLogout }) {
  if (!localStorage.getItem("to-do-session")) {
    window.location.pathname = "/login";
  }
  const user = JSON.parse(localStorage.getItem("to-do-session"));

  return (
    <div className="home">
      <h1 className="logo">To Do App</h1>
      <div className="user">
        <h4>
          Welcome <span className="name">{user.name}</span>
        </h4>
        <LogOut
          onClick={() => handleLogout()}
          className="logout"
          color="#ff4646"
        />
      </div>
      <TasksList />
      {/* <AddNewTask /> */}
    </div>
  );
}

export default Home;
