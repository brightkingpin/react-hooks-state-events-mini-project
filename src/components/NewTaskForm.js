import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = React.useState("");
  const [category, setCategory] = React.useState("Code");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      text,
      category,
    };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory("Code");
  };

  const categoryOptions = categories
    .filter((category) => category !== "All")
    .map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input">Task:</label>
      <input
        id="text-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="category-select">Category:</label>
      <select
        id="category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categoryOptions}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
