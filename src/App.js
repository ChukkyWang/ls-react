//import react from 'react'
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Create from './auth/Create'
import Login from './auth/Login'
import Dashboard from './auth/Dashboard'

function App() {
  return (
    <div className="App">
      <h1>LS - React Test</h1>
      <Create/>
      <Login/>
      <Dashboard/>
    </div>
  );
}

export default App;
