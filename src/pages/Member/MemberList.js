import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar"
import "./MemberList.scss"
import Membertable from "../../components/table/Membertable/Membertable"


const MemberList = () => {
  return (
    <div>
       
    <div className="list">
        <Sidebar/>
        <div className="listcontainer">
            <Navbar/>
            <Membertable/>
        </div>
      
    </div>
    </div>
  )
  
}

export default MemberList
