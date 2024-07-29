export default function ToDoItem({id, title, completed, onDeleteToDo, onToggleTodo}) {
  return (
    <li>
    {console.log(id)}
      <label>
        <input 
          type="checkbox" 
          checked={completed}
          onChange={e => onToggleTodo(id, e.target.checked)} />
        {title}
      </label>
      <button onClick={e => onDeleteToDo(id)} className="btn btn-danger">Delete</button>
    </li>
  )
}