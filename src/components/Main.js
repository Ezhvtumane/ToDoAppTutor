import React from 'react';
import TodoItem from './TodoItem';
import todosData from '../todosData';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: todosData,
    }
    this.handleClick = this.handleClick.bind(this);
  }
        // Обновите состояние так, чтобы у элемента с заданным id свойство 
        // completed поменялось бы c false на true (или наоборот).
        // Помните о том, что предыдущую версию состоянию менять не следует.
        // Вместо этого нужно вернуть новую версию состояния, содержащую изменения.
        // (Подумайте о том, как для этого использовать метод массивов map.)
  handleClick(id) {
    console.log("change: "+ id);
    this.setState(
      prevState => {
        return {
          data: prevState.data.map(todo => {
            if(todo.id === id) {
              todo.completed = !todo.completed; 
            }
            return todo;
        })
      }
    }
    );
  }

  render() {
    const todosItem = this.state.data.map(todo => <TodoItem todoItem={todo} key={todo.id} handleChange={this.handleClick} />)

    const style = {
      fontSize: 30,
      color: "#FF8C00"
    }
    return (
      <div className="todo-list">
        <p style={style}>Main component</p>
        {todosItem}
      </div>
    );
  }
}

export default Main;