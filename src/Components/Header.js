import React from 'react'

const Header = () => {
  return (
    <div>
        <header>
      <h1>Admin Panel</h1>
      <div className="user-info">
        <span>Admin</span>
        <button>Logout</button>
      </div>
    </header>
    </div>
  )
}

export default Header
