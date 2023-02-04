import './Sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import VolunteerActivismSharpIcon from '@mui/icons-material/VolunteerActivismSharp';
import SupervisorAccountSharpIcon from '@mui/icons-material/SupervisorAccountSharp';
// import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Link,useNavigate } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    // const { dispatch } = useContext(DarkModeContext);
    const navigate =useNavigate()
    const logouthandler=()=>{
      localStorage.removeItem("usersdatatoken");
      navigate("/")
    }
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">Gateway Prayas</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          {/* <p className="title">MAIN</p> */}
          <Link to ="/home " style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
          <li>
            <GroupsRoundedIcon className="icon" />
            <span>Rooms</span>
          </li>
          </Link>
          {/* <p className="title">LISTS</p> */}
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              < PersonSharpIcon className="icon" />
              <span>Members</span>
            </li>
          </Link>
          <Link to="/coremembers" style={{ textDecoration: "none" }}>
            <li>
              <SupervisorAccountSharpIcon className="icon" />
              <span>CoreMembers</span>
            </li>
          </Link>
          <Link to="/expense" style={{ textDecoration: "none" }}>
            <li>
              < CurrencyExchangeIcon className="icon" />
              <span>Expense</span>
            </li>
          </Link>
          <Link to="/welfare" style={{ textDecoration: "none" }}>
          <li>
        
            <VolunteerActivismSharpIcon className="icon" />
            <span>Welfare Centres</span>
          </li>
         </Link>
          
       
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}
          {/* <p className="title">USEFUL</p> */}
          {/* <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li> */}
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          {/* <p className="title">SERVICE</p> */}
          {/* <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li> */}
          {/* <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li> */}
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          {/* <p className="title">USER</p> */}
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={logouthandler}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        {/* <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div> */}
        {/* <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div> */}
      </div>
    </div>
  );
};
  

export default Sidebar
