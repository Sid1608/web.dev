import React, {useState,useEffect} from 'react';
import './App.css';
import axios from "axios"

function App() {
  const [todos,setTodos]=useState([]);
  const [todosPerPage,setTodosPerPage]=useState(10);
  const [currentPage,setCurrentPage]=useState(1);
  const numOfTotalPages=Math.ceil(todos.length/todosPerPage)
  const pages=[...Array(numOfTotalPages+1).keys()].slice(1);
  console.log(pages)
  const indexOfLastTodo=currentPage*todosPerPage;
  const indexOfFirstTodo=indexOfLastTodo-todosPerPage;

  const visibleTodos=todos.slice(indexOfFirstTodo,indexOfLastTodo)
  // (20) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>setTodos(res.data));
  },[])
  const prevPageHandler=()=>{
    if(currentPage!==1)setCurrentPage(currentPage-1);
  }
  const nextPageHandler=()=>{
    if(currentPage!==numOfTotalPages)setCurrentPage(currentPage+1);
  }
  return (
    <>
    <select onChange={(e)=>setTodosPerPage(e.target.value)}>
      <option value="10">10</option>
      <option value="30">30</option>
      <option value="50">50</option>
    </select>
    <div>
      {visibleTodos.map(todo=><p key={todo.id}>{todo.title}</p>)}
      <span onClick={prevPageHandler}>Prev</span>
      <p>{pages.map(page=>
          <span key={page} onClick={()=>setCurrentPage(page)} className={`${currentPage===page?"active":""}`}>
            {`${page} | `}
          </span>)}
      </p>
      <span onClick={nextPageHandler}>Next</span>
    </div>
    </>
  );
}

export default App;
