import { useState } from "react";
import "./addNewTaskStyle.css";

function AddNewTask({
  initialTask,
  setShowNewTaskInput,
  handleAddTask,
  isEdit = false,
  handleEditTask,
}) {
  const [taskInput, setTaskInput] = useState(initialTask ? initialTask : "");

  function addNewTaskToLocalStorage() {
    if (isEdit) {
      handleEditTask(initialTask, taskInput);
    } else {
      handleAddTask({ name: taskInput, isChecked: false });
    }
    setTaskInput("");
  }

  return (
    <div className="add-new-task">
      <div>
        <input
          onChange={(e) => setTaskInput(e.target.value)}
          type="text"
          value={taskInput}
          placeholder="Task..."
        />
      </div>
      <div className="btns">
        <button onClick={() => setShowNewTaskInput(false)}>Cancel</button>
        <button onClick={addNewTaskToLocalStorage}>Save</button>
      </div>
    </div>
  );
}

export default AddNewTask;
