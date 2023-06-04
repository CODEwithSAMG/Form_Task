import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slice/todo';

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo.data);

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  // console.log(state)

  if (state.isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div>
      <h3>Hello World</h3>
      {/* <button onClick={(e) => dispatch(fetchTodos())}>ap</button> */}
      {state && state.map((el) => {
        return el === 12 <ul ul >
          <li>{el.title}</li>
          </ul>

      })}
    </div >
  )
}

export default App;
