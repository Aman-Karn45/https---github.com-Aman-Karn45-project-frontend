import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";
import Widget from "../../components/widget/Widget";
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";

const Home = () => {
const navigate = useNavigate()
  useEffect(()=>{
    if (!localStorage.getItem('usersdatatoken')){
      navigate('/')
    }
  },[])
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="room" />
          <Widget type="member" />
          <Widget type="coremember" />
          <Widget type="welfarecenter" />
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;