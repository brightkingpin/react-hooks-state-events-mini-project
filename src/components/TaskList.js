/*import React from "react";

function TaskList() {
  return (
    <div className="tasks">
      {// display a list of tasks using Task component }
    </div>
  );
}

export default TaskList;

*/
import React from "react";
import Task from "./Task";

function TaskList(props) {
  const { tasks } = props;

  const handleDeleteClick = (taskId) => {
    // handle delete click event here
  };
 return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} task={task} handleDeleteClick={handleDeleteClick} />
      ))}
    </div>
  );
}

export default TaskList;

