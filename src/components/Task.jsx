import { useState } from "react";
import "./taskStyle.css";
import { Pencil, Trash } from "lucide-react";
import AddNewTask from "./AddNewTask";

function Task({ name, checked, onToggleTask, onDeleteTask, onEditTask }) {
  const [isEdit, setEdit] = useState(false);
  return (
    <>
      <div className="taskCon">
        <li
          onClick={() => onToggleTask(name)}
          className={`task ${checked ? "checked" : ""}`}
        >
          {name}
        </li>
        <span>
          <Pencil onClick={() => setEdit(true)} size={20} />
          <Trash onClick={() => onDeleteTask(name)} color="#FFD369" size={20} />
        </span>
      </div>
      {isEdit && (
        <AddNewTask
          isEdit={true}
          initialTask={name}
          handleEditTask={onEditTask}
          setShowNewTaskInput={setEdit}
        />
      )}
    </>
  );
}

export default Task;
