import React from "react";
import Task from "./Task";
import {nanoid} from "nanoid";



function TaskList({tasks}) {
  console.log(tasks)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */
        tasks.map(task => <Task key={nanoid(5)} text = {task.text} category={task.category} />)
      }
    </div>
  );
}

export default TaskList;
