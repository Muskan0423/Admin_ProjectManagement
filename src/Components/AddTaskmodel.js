import React from 'react';

function AddTaskmodel({ onClose }) {
  return (
    <div className="modal">
      <h2>Add New Task</h2>
      <form>
        <input type="text" placeholder="Task Name" required />
        <input type="text" placeholder="Assigned To" required />
        <input type="date" placeholder="Due Date" required />
        <select>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <select>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Add Task</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default AddTaskmodel;
