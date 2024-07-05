import { useEffect, useState } from "react";
import AddNewTask from "./AddNewTask";
import Task from "./Task";
import { Plus } from "lucide-react";

import "./taskList.css";
import TaskFilter from "./TaskFilter";

function TasksList() {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const [showNewTaskInput, setShowNewTaskInput] = useState(false);
  // const [isChecked, setChecked] = useState(false);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleToggleTask(name) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.name === name ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  function handleDeleteTask(name) {
    setTasks((tasks) => tasks.filter((task) => task.name !== name));
  }

  function handleEditTask(oldName, newName) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.name === oldName ? { ...task, name: newName } : task
      )
    );
  }

  // Filter
  const [filterdTasks, setFilterdTasks] = useState(tasks);
  function filterByAll() {
    setFilterdTasks(tasks);
  }
  function filterByCompleted() {
    setFilterdTasks((tasks) => tasks.filter((task) => task.isChecked === true));
  }
  function filterByIncompleted() {
    setFilterdTasks((tasks) =>
      tasks.filter((task) => task.isChecked === false)
    );
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setFilterdTasks(tasks);
  }, [tasks]);

  return (
    <div>
      {filterdTasks.length < 1 || (
        <div>
          <TaskFilter
            filterByAll={filterByAll}
            filterByCompleted={filterByCompleted}
            filterByIncompleted={filterByIncompleted}
          />
          <ul>
            {filterdTasks.map((task) => (
              <Task
                key={task.name}
                name={task.name}
                checked={task.isChecked}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
                onEditTask={handleEditTask}
              />
            ))}
          </ul>
        </div>
      )}

      {!showNewTaskInput ? (
        <button
          className="show-add-new-task-btn"
          onClick={() => setShowNewTaskInput(true)}
        >
          <Plus size={12} />
          Add New Task
        </button>
      ) : (
        <>
          <br />
          <AddNewTask
            tasks={tasks}
            setTasks={setTasks}
            setShowNewTaskInput={setShowNewTaskInput}
            handleAddTask={handleAddTask}
          />
        </>
      )}
    </div>
  );
}

export default TasksList;
