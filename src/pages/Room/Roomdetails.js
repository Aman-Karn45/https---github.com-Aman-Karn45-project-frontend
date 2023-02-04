import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link, useParams, useNavigate } from 'react-router-dom';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Roomdetails.scss'
import Avatar from 'react-avatar';

const Roomdetails = () => {
    const [getroomdata, setroomdata] = useState([]);
    console.log("chdghjdc", getroomdata);

    const { id } = useParams()
    console.log(id);
    const navigate = useNavigate();


    const getrdata = async () => {

        const res = await fetch(`/api/fetchroombyid/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log("ghgshjhs", data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setroomdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getrdata();
    }, [])

    const deleteroom = async (id) => {

        const res2 = await fetch(`/api/deleteroombyid/${id}`, {
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
            console.log("Room deleted");
            navigate('/rooms');
        }

    }

    return (
        <div>
            <div className="container mt-3">
                <h1 style={{ fontWeight: 400 }}>Room Name : {getroomdata.title}</h1>
                {/* reduce the wudth of card */}
                <Card sx={{ maxWidth: 800 }}>
                    <CardContent>
                        <div className="add_btn">
                            <Link to={`/edit/${getroomdata._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></Link>
                            <button className="btn btn-danger" onClick={() => deleteroom(getroomdata._id)}><DeleteOutlineIcon /></button>
                        </div>
                        <div className="row">
                            {/* dividfe th screen in two part */}
                            <div className="left_view col-lg-6 col-md-6 col-12">
                                {/* <img src={getroomdata.image} style={{ width: 50 }} alt="profile" /> */}
                                <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name={getroomdata.title} round={true} size="90"  />
                                <h3 className="mt-3">Title: <span >{getroomdata.title}</span></h3>
                                <h3 className="mt-3">Description: <span >{getroomdata.description}</span></h3>
                                <div>
                                <h3 className="mt-3">Users: <span >{getroomdata.users}</span></h3>
                                </div>
                                {/* import maillicon */}
                                {/* <p className="mt-3"><MailOutlineIcon />Email: <span>{getuserdata.email}</span></p>
                            <p className="mt-3"><WorkIcon />Occuption: <span>{getuserdata.work}</span></p> */}
                            </div>

                        </div>

                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Roomdetails
