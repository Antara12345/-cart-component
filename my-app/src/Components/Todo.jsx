
import { useState,useEffect} from "react"

function Todo(){
    const [data,setData]= useState([]);
    const getTodos=async ()=>{
       try{
        let data=await fetch(`https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10`)
        data=await data.json();
        setData(data);
        alert("success")
       }
       catch(err){

       }
    }
    useEffect(()=>{
    alert("making request")
    getTodos()
},[])
    return(
      <div>
        <h1>Todos</h1>
        <button onClick={getTodos}>FETCH</button>
        <div>
            {
                data.map(todo=>
                   <div style={{display:"flex",gap:"1rem",margin:"0.5rem"}} key={todo.id}>
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    </div>
                    )
            }
        </div>
      </div>
    )
}
export default Todo