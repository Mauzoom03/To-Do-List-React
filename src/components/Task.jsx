function Task({ task, completed }) {
    return (
      <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task}
      </div>
    );
  }

  export default Task;