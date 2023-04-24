import React from "react";

function CategoryFilter(props) {
  const { categories } = props;

  const handleCategoryClick = (category) => {
    // handle category click event here
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button onClick={() => handleCategoryClick("All")}>All</button>
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
