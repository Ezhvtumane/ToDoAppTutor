import React from 'react';

function TodoItem(props) {
  const isComplete = props.todoItem.completed ? 'checked' : '';
  console.log(props);
  console.log(isComplete);
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.todoItem.completed}/>
      <p>{props.todoItem.text}</p>
    </div>
  )
}

export default TodoItem;