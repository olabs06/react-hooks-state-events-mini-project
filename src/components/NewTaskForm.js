import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const categoriesMinusAll = categories.filter(category => category !== 'All');
  const [formState, setFormState] = useState({
    text:"John",
    category:"Food"
})
 

  function handleInput(event) {
    const name = event.target.name
    const value = event.target.value
  

    setFormState({...formState, [name]:value,});

  }

  const newItem = {text:formState.text, category:formState.category}
 

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(newItem);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleInput}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleInput}>
          {/* render <option> elements for each category here */
            categoriesMinusAll.map(category => 
              <option key={category} value ={category}>{category}</option>
            )
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
