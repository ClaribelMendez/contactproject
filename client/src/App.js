import './App.css';
import Contacts from './components/contacts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Form from './components/form'

function App() {
  return (
    <Router>
    <div className="App">
      Hello from Techtonica
              <div className="content">
              <nav>
        <ul>
          <li><a href="/contacts">Contact Book</a></li>
          <li><a href="/Form">Form</a></li>
          {/* <li><a href="/whale">About Us</a></li> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/form" element={<Form/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
       </div>
      </div>
    </Router>
  );
}

export default App;
