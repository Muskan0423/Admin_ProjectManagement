import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import TaskManagement from './Pages/TaskManagement';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
<div className="app">
<Header />
<BrowserRouter>
  <Routes>
    <Route exact path="/" element={<TaskManagement />} />
    {/* <Route path="/about" element={<About />} /> */}
  </Routes>
</BrowserRouter>
</div>
  );
}

export default App;
