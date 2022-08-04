import React, { useState } from "react";


function Task({text, category}) {
  const [isDeleted, setDelete] = useState(false)
  
  return (
    isDeleted ? null :
      <div className="task">
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete" onClick={()=>{setDelete (isDeleted => isDeleted = true)}}>X</button>
      </div>
  );
}

export default Task;
