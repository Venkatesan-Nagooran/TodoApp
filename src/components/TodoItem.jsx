import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete button is clicked foer ", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const complete = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span>
          <input
            type="checkbox"
            className={styles.completedCheck}
            onClick={() => handleClick(item.name)}
          />
        </span>
        <span className={complete} style={{ overflowWrap: "break-word" }}>
          {" "}
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
