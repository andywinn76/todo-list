import ToDoItem from "./ToDoItem" 

export default function ToDoList({todos, onToggleTodo, onDeleteToDo}) {
  return (
    <>
    <h1>ToDo List</h1>
    <ul className="list">
      {todos.length === 0 && "There are no items on your ToDo list."}
      {todos.map(todo => {
        return <ToDoItem onDeleteToDo={onDeleteToDo} onToggleTodo={onToggleTodo} key={todo.id} id={todo.id} completed={todo.completed} title={todo.title} />
      })}
    </ul>
    </>
  )
}