import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar"
import "./List.scss"

const List = () => {
  return (
    <div className="list">
        <Sidebar/>
        <div className="listcontainer">
            <Navbar/>
            datatable
        </div>
      
    </div>
  )
}

export default List
