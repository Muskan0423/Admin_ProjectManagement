import React, { useState } from 'react';
// import TaskList from '../components/TaskList';
// import AddTaskModal from '../components/AddTaskmodel';
import AddTaskmodel from '../Components/AddTaskmodel';
import TaskList from '../Components/TaskList';

function TaskManagement() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="task-management">
      <h2>Task Management</h2>
      <button onClick={() => setModalOpen(true)}>Add New Task</button>
      <TaskList />
      {isModalOpen && <AddTaskmodel onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default TaskManagement;
