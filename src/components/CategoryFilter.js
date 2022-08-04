import React from "react";


function CategoryFilter({categories, myCategory}) {
  function handleClick(event) {
    const buttons = document.querySelectorAll("#button");

    buttons.forEach(button => {
      button.className = '';
      event.target.className = 'selected';
    });
    myCategory(event)

  }
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
        categories.map(category => 
          <button id="button" key={category} className= "" onClick={handleClick} name={category}>{category}</button>
          )
      } 
    </div>
  );
}

export default CategoryFilter;
