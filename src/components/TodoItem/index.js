// Write your code here
import './index.css'

const TodoItem = props => {
  const {title, id, onDeleteList} = props

  const onDelete = () => {
    onDeleteList(id)
  }
  return (
    <li className="todo-list">
      <p>{title.title}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
