import { Filter } from "lucide-react";
import "./taskFilter.css";
import { useState } from "react";

function TaskFilter({ filterByAll, filterByCompleted, filterByIncompleted }) {
  const [filterd, setFilterd] = useState("none");

  function byCompleted() {
    filterByAll();
    if (filterd !== "completed") {
      setFilterd("completed");
      filterByCompleted();
    } else {
      setFilterd("none");
      filterByAll();
    }
  }

  function byIncompleted() {
    filterByAll();
    if (filterd !== "incompleted") {
      setFilterd("incompleted");
      filterByIncompleted();
    } else {
      setFilterd("none");
      filterByAll();
    }
  }

  return (
    <div className="task-filter">
      <Filter size={15} />
      Filter By:
      <button
        className={filterd === "completed" ? "active" : ""}
        onClick={() => byCompleted()}
      >
        Completed
      </button>
      <button
        className={filterd === "incompleted" ? "active" : ""}
        onClick={() => byIncompleted()}
      >
        Incomplete
      </button>
    </div>
  );
}

export default TaskFilter;
