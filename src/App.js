import React from 'react'
import './App.css'
 import { useSelector,useDispatch } from 'react-redux';
 import { incNumber,decNumber } from './actions/index';

export const App = () => {
  const Selector = useSelector((state)=>state.changeTheNumber);
const dispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className='quantity'>
          <a className='quantity_minus' title='Decrement'><span
          onClick={()=>dispatch(incNumber())}>-</span></a>
       <p>{Selector}</p>
          <a className='quantity_plus' title='Increment'><span
          onClick={()=>dispatch(incNumber())}>+</span></a>
        </div>
      </div>
    </>
  )
}
export default App;

