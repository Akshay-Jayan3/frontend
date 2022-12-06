
import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Payroll from './components/Payroll';
import Employees from './components/Employees';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      
      <Router>
        
        <Sidebar/>
        
      <div className='components'>
      <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/employees' element={<Employees/>}/>
          <Route path='/payroll' element={<Payroll/>}/>
         
         
    
      
        </Routes>
      </div>
        
       
       


      </Router>

      
    </div>
  );
}

export default App;
