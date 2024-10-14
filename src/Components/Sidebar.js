import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div>
        <nav className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/users">Users</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/settings">Settings</Link>
    </nav>
    </div>
  )
}

export default Sidebar
