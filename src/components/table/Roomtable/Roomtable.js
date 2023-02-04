import React, { useState, useEffect ,useContext} from 'react'
import {Link,useNavigate,useParams } from "react-router-dom"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { adddata, deldata } from '../../Context/ContextProvider'
import { updatedata } from'../../Context/ContextProvider';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { ConstructionOutlined } from '@mui/icons-material';



const Roomtable = () => {


   
    const navigate= useNavigate();
    const [getroomdata, setroomdata] = useState([]);
    const { udata, setUdata } = useContext(adddata);

    const {updata, setUPdata} = useContext(updatedata);

    const {dltdata, setDLTdata} = useContext(deldata);
 
    console.log(getroomdata);

    const getroom = async ()=>{
        const res = await fetch("/api/fetchallroom",{
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
            setroomdata(data)
            console.log("getroom");

        }
       
    
    }
    useEffect(() => {
        getroom();
    }, [])


    
  

    const deleteRoom = async (roomid) =>{
        const res2 = await fetch(`/api/deleteroombyid/`+roomid, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("room deleted");
            setDLTdata(deletedata)
            getroom();
        }
    }
    


    
 const deletealert =async (roomid)=>{
 
    console.log(roomid);
    confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure to do this?.',
        buttons: [
          {
            label: 'Yes',
            onClick: ()=>{
                console.log(roomid);
                deleteRoom(roomid);
            }
          },
          {
            label: 'No',
            onClick: () => navigate('/rooms')
          }
        ]
      }
 
    )
 }





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
        <div className="add_btn mt-2 mb-2">
        <Link to="/add" className="btn btn-primary">Add Room</Link>
        </div>

        <table class="table">
            <thead>
                <tr className="table-dark" >
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th  scope="col">description</th>
                    <th scope="col">groupAdmin</th>
                    {/* <th scope="col">AdminName</th> */}
                   
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>

                {
                    getroomdata.map((element, id) => {
                        return (
                            <>
                                <tr>
                                    <th scope="row">{id + 1}</th>
                                    {/* <td>{element.id}</td> */}
                                    <td>{element.title}</td>
                                    <td >{element.description.length>40?`${element.description.substring(0,40)}...`:element.description}</td>
                                    <td>{element.groupAdmin}</td>
                                    {/* <td>{element.Adminfname}</td> */}
                                    <td className="d-flex justify-content-between">
                                        <Link to={`/view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></Link>
                                        <Link to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></Link>
                                        {/* <button className="btn btn-danger" onClick={() => deleteroom(element._id)}><DeleteOutlineIcon /></button> */}
                                        <button className="btn btn-danger" onClick={() =>deletealert(element._id)}><DeleteOutlineIcon /></button>
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

export default Roomtable
