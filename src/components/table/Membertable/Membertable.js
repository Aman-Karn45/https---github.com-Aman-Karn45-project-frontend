import React, { useState, useEffect ,useContext} from 'react'
import {Link } from "react-router-dom"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { adddata, deldata } from '../../Context/ContextProvider';
import { updatedata } from '../../Context/ContextProvider';

const Membertable = () => {
 
    const [getuserdata, setuserdata] = useState([]);
    const { udata, setUdata } = useContext(adddata);

    const {updata, setUPdata} = useContext(updatedata);

    const {dltdata, setDLTdata} = useContext(deldata);
 
    console.log(getuserdata);

    const getdata= async ()=>{
        const res = await fetch("api/allmembers",{
            method:"GET",
            headers:{
                "Content-Type": "application/json"

            }
        })
        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setuserdata(data)
            console.log("getmember");

        }
       
    
    }
    useEffect(() => {
        getdata();
    }, [])



  
  return (
   <>
        {
                dltdata ?
                    <>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.title}</strong>  Deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

    <div className="mt-5">
    <div className="container">
      

        <table class="table">
            <thead>
                <tr className="table-dark" >
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th  scope="col">Email</th>
                    <th scope="col">Gender</th>
                    {/* <th scope="col">AdminName</th> */}
                   
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>

                {
                    getuserdata.map((element, id) => {
                        return (
                            <>
                                <tr>
                                    <th scope="row">{id + 1}</th>
                                    {/* <td>{element.id}</td> */}
                                    <td>{element.fname}</td>
                                    <td>{element.email}</td>
                                    <td>{element.gender}</td>
                                    {/* <td >{element.description.length>40?`${element.description.substring(0,40)}...`:element.description}</td>
                                    <td>{element.groupAdmin}</td> */}
                                    {/* <td>{element.Adminfname}</td> */}
                                    <td className="d-flex justify-content-between">
                                        <Link to={`/view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></Link>
                                        <Link to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></Link>
                                        {/* <button className="btn btn-danger" onClick={() => deleteroom(element._id)}><DeleteOutlineIcon /></button> */}
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }
            </tbody>
        </table>


    </div>
</div>
</>
  )
}

export default Membertable
