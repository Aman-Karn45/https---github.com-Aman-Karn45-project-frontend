import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {UnorderedListOutlined,AreaChartOutlined} from '@ant-design/icons'
import '../Expensetable/Expensetable.scss'
import Analytics from '../../Analytics/Analytics';
const Expensetable = () => {
   
  const [getexpdata, setexpdata] = useState([]);
  const [viewdata,setViewData] = useState('table')
  console.log(getexpdata)
  const getdata = async () => {
    const res = await fetch("api/expenseget", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json();
    // console.log(data.data);

    if (res.status === 422 || !data) {
      console.log("error ");

    } else {
      setexpdata(data.data)
      console.log(data.data);
    }
  }
  useEffect(() => {
    getdata();
  }, [])

  return (
    <>

      <div className="filters">
        <div>range filters</div>
        <div className='switch-icon' >
        <UnorderedListOutlined className={`mx-2 ${viewdata ==='table' ? 'active-icon':'inactive-icon'}`} onClick ={()=>setViewData('table')}/>
        <AreaChartOutlined className={`mx-2 ${viewdata ==='analytics' ? 'active-icon':'inactive-icon'}`} onClick ={()=>setViewData('analytics')}/>
      </div>
        <div>
        <Link to="/addex" className="btn btn-primary">Add Expense</Link>
   
        </div>
      
      </div>
    
      <div className="content">
        {viewdata ==='table'?   
        <table class="table">
          <thead>
            <tr className="table-dark" >
              <th scope="col">id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Room Title</th>
              {/* {/ <th scope="col">AdminName</th> /} */}

              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>

            {
             getexpdata.map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{id + 1}</th>
                      {/* {/ <td>{element.id}</td> /} */}
                      <td>{element.title}</td>
                      <td>{element.description}</td>
                      <td>{element.amount}</td>
                      <td>{element.Roomtitle}</td>
                 
                      <td className="d-flex justify-content-between">
                        <Link to={`/view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></Link>
                        <Link to={`expedit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></Link>
                        {/* {/ <button className="btn btn-danger" onClick={() => deleteroom(element._id)}><DeleteOutlineIcon /></button> /} */}
                      </td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>: <Analytics getexpdata ={getexpdata}/>}
      


      </div>


    </>

  )
}

export default Expensetable