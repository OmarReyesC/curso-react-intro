import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  {text: 'Pasear a Oreo', completed: true},
  {text: 'Ducha', completed: false},
  {text: 'Comer', completed: true},
  {text: 'Faire la vaiselle', completed: false},
  {text: 'Faire du velo', completed: false},
  {text: 'Usar estados derivados', completed: true},
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan ' + searchValue);

  const completedTodos = todos.filter(
    todo => todo.completed).length;
  const totalTodos = todos.length;
  

  return (
    <React.Fragment>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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
