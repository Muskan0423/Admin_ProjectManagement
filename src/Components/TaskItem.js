import React from 'react';

function TaskItem({ task }) {
  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.name}</td>
      <td>{task.assignedTo}</td>
      <td>{task.dueDate}</td>
      <td>{task.status}</td>
      <td>{task.priority}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
}

export default TaskItem;
