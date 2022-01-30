# React-Redux

<!-- 
## Important Terminologies -->
### Redux
- Redux is a central data store for all our application data
- Any Component in our application can  access data from it. 
- It Makes state management easy.

### Reducer
- reducer is a function which interacts with the central data store in order to change the state of the data inside.
- Actions after being dispatched are handed over to the reducer and reducer makes those changes to the store depending on which action is being passed.
- reducer function and the store are tightly coupled with each other so that when we create a store we have to pass that store a single reducer function as a parameter to that store so that the store knows which reducer is going to handle it.

### Process
1. Decide that we want to make change 
2. Generate Actions:actions describe the changes that we want to make
3. Dispatch an action into to the reducer 
4. reducer than takes the action and change the state according to the type of action.
5. subscribe to changes to the store and react to changes in store.
  

```javascript
const {createStore}=Redux;

/*
when reducer first interacts with the store it's not going to know the state then it's not going to exist so we have to create an initial state to begin with for the store
when first time reducer fires then there will be no
state then it will use initial state as a default value for the state
*/
const initState={
	todos:[],
	posts:[]
}

/*Reducer:this will do interaction with actual store to change the state*/
function myreducer(state=initState,action){
    if(action.type == 'ADD_TODO'){
        return{//returning new state
            ...state,
            todos: [...state.todos, action.todo]
        }
    } 
	if(action.type == 'ADD_POST'){
        return{//returning new state
            ...state,
            posts: [...state.posts, action.post]
        }
    } 
}

/*Redux: Data-Store*/
const store=createStore(myreducer);

/*Store Subscriptions:to listen for changes in the store and then react to those changes
fires every time state will changed.*/
store.subscribe(()=>{
	console.log("state updated");
    console.log(store.getState())
})

/*Action:actions describe the changes that we want to make*/
const todoAction ={type: 'ADD_TODO', todo:'buy milk'}

/*dispatching action: means send it to the reducer */
store.dispatch(todoAction);
store.dispatch({type: 'ADD_TODO', todo:'sleep some more'});
store.dispatch({type: 'ADD_POST', todo:'Egg hunt with yashi'});


```