import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slice/todo';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo.data);

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])


  if (state.isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div>
      <h3>Hello World</h3>
      {state && state.map((el) => {
        const { id, title } = el;
        return (
          <ul key={id}>
            <li >{title}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default App;
