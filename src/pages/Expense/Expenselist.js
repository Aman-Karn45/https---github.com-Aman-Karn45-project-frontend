import React from 'react'
import Expensetable from '../../components/table/Expensetable/Expensetable'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Expenselist = () => {
  return (
    <div>
         <div className="list">
        <Sidebar/>
        <div className="listcontainer">
            <Navbar/>
       <Expensetable/>
        </div>
      
    </div>
    </div>
  )
}


export default Expenselist
