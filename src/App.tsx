import React from 'react';
import './css.css'

import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className='app'>

      <div className='todo'>
        <h1>Нужно сделать</h1>
        <TodoList />
      </div >

    </div>
  );
};

export default App;
