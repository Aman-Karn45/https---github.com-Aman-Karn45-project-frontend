import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './components/Signup';

import { Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/Signin';
import Home from './pages/home/Home';
import Roomlist from './pages/Room/Roomlist'
import Roomdetails from './pages/Room/Roomdetails';
import MemberList from './pages/Member/MemberList';
import RoomAdd from './pages/Room/RoomAdd';
import Expenselist from './pages/Expense/Expenselist';
import ExpenseAdd from './pages/Expense/ExpenseAdd';
import Expenseedit from './pages/Expense/Expenseedit';






const App = () => {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/rooms" element ={<Roomlist/>} />
       <Route exact path ="/view/:id" element={<Roomdetails/>}/>
       <Route exact path ="/add" element={<RoomAdd/>}/>
        <Route exact path = "/users" element ={<MemberList/>}/> 
        <Route exact path = "/expense" element ={<Expenselist/>}/> 
        <Route exact path = "/addex" element={<ExpenseAdd/>}/>
        <Route exact path ='expense/expedit/:id' element ={<Expenseedit/>}/>

      {/* corememberroute */}

    


      </Routes>





    </>
  )
}



export default App
