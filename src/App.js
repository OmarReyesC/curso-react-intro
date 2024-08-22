import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css';

const defaultTodos = [
  {text: 'Pasear a Oreo', completed: true},
  {text: 'Ducha', completed: false},
  {text: 'Comer', completed: true},
  {text: 'Faire la vaiselle', completed: false},
  {text: 'Faire du velo', completed: false},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={3} total={9} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} />
        ))}
      </TodoList>
      
      <CreateTodoButton/>
    </React.Fragment>
  );
};

export default App;
