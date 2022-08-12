import { INCREMENT, DECREMENT } from "./Actiontype";

const initialState = {
          numofCount: 0
       }

const Reducers = (state = initialState, action) =>{
          switch(action.type){
             case DECREMENT:
                return{
                   ...state,
                   numofCount: state.numofCount -  action.payload
                }
             case INCREMENT:
                return{
                   ...state,
                   numofCount: state.numofCount  + action.payload                   //+1 removed and added action.payload
                }
             default: return state 
          }
}
       
export default Reducers;