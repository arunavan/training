import { createStore } from "redux"   //store library

const reducer=function(state,action) {    //dispatcher 

 if (action.type==="INC") {               //action is a payload of information

     return state+action.payload;   /*reducer specify how the application’s 
			         specify how the application’s state changes in
     }                               responsestate changes in response*/
 if (action.type==="DEC") {
     return state-action.payload;
     }
}

const store =createStore(reducer,0);   //create store
			             //store is an object that brings
					//together action and reducer
store.subscribe( () => 
  console.log("store changed",store.getState())    //view ->
})

store.dispatch({type: "INC",payload:1})     //1
store.dispatch({type: "INC",payload:2})     //3
store.dispatch({type: "INC",payload:3})     //6
store.dispatch({type: "INC",payload:4})     //10
store.dispatch({type: "DEC",payload:1})      //9

store.getState()
store.dispatch()
store.subscribe()




