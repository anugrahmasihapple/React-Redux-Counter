import React from 'react'

import { useSelector, useDispatch } from 'react-redux';

import { addCount } from '../reducers/Actions';

import {subCount} from '../reducers/Actions'
//importing to change how many i can add at a time
// import { useState} from 'react';


function Count() {
   const numofCount = useSelector(state => state.count.numofCount)
   const dispatch = useDispatch()

  return (
    <div>
      {/* <h2>number of Counter = { numofCount }</h2> */}
      <button    className='btn' onClick={ () => dispatch( subCount()) }>decrement by 1</button>
      <br/>
      <button   className='btn'  onClick={ () => dispatch( addCount())}> increment by 1</button>
      <h2>Counter = { numofCount }</h2>
  
    </div>
  )
}

export default Count;

