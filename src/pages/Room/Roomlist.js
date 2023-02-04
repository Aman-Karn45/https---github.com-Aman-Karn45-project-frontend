import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar"
import "./Roomlist.scss"
import Roomtable from '../../components/table/Roomtable/Roomtable'

const Roomlist = () => {
  return (
    <div className="list">
        <Sidebar/>
        <div className="listcontainer">
            <Navbar/>
        <Roomtable/>
        </div>
      
    </div>
  )
}

export default Roomlist
