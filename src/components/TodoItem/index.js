import './index.css'

const TodoItem = props => {
  const {todoDetails, TodoDelete} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    TodoDelete(id)
  }

  return (
    <li className="all-todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
