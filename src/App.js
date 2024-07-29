import AddToDoForm from './AddToDoForm';
import ToDoList from './ToDoList';
import './styles.css';
import {useEffect, useState} from "react" ;

function App() {
  const [toDos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  });  

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDos))
  }, [toDos])

  function toggleTodo(id, completed) {
    setToDos(currentToDos => {
      return currentToDos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  };

  function deleteToDo(id) {
    setToDos(currentToDos => {
      return currentToDos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <AddToDoForm toDos={toDos} setToDos={setToDos}/>
      <ToDoList onDeleteToDo={deleteToDo} onToggleTodo={toggleTodo} todos={toDos} />      
    </>
  );
}

export default App;
