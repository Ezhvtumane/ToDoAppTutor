import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../todosData';

const data = todosData.map(todo => <TodoItem todoItem={todo} key={todo.id} />)

function Main() {
  const style = {
    fontSize : 30,
    color: "#FF8C00" 
  }
  return(
    <div className="todo-list">
      <p style={style}>Main component</p>
      {data}
    </div>
  );
}

export default Main;