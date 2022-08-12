import React from 'react'

import { subCount } from '../reducers/Actions';

import { addCount } from '../reducers/Actions';
//importing to change how many i can add at a time
import { useState} from 'react';
import {connect} from 'react-redux';


const  Counter = (props) => {
   const[number, setNumber ] = useState(1);
   const [input, setInput] = useState();



  return (
    <div>
      
      <button className='btn'  value={input}   onClick={() =>  props.addCount(input)}> Increment by{input}</button>

      <input onChange={(e)=>{ setInput(+e.target.value)}}/>

     <br/>

      <button  className='btn' value={input}   onClick={() =>  props.subCount(input)}> Decrement by{input}</button>

     <input onChange={(e)=>{ setInput(+e.target.value)}}/>
      

    </div>

      
  )
}


const mapStateToProps = state =>{
   return{
      numofCount: state.count.numofCount,
      numofCount: state.count.numofCount


   }

}

const mapDispatchToProps = dispatch =>{
   return{
      subCount: number =>dispatch(subCount(number)),
      addCount: number =>dispatch(addCount(number))


   }
}


export default connect(mapStateToProps, mapDispatchToProps) (Counter)
