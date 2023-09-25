import React from 'react';
import './App.css';
import StudentList from './components/StudentList';
import AddStudent from './containers/AddStudent';
import EditStudent from './containers/EditStudent';
import ViewStudent from './containers/ViewStudent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Student Entry Form Application</h1>

      <Router>
        <Routes>
          <Route path="/" exact component={StudentList} />
          <Route path="/add" component={AddStudent} />
          <Route path="/edit/:rollNo" component={EditStudent} />
          <Route path="/view/:rollNo" component={ViewStudent} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
