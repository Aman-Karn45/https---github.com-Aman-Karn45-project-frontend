import React, { useState,useEffect } from 'react'
import './RoomAdd.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Autocomplete } from '@mui/joy'
import FormControl from '@mui/joy/FormControl'

// import { TextField } from '@mui/joy';



const RoomAdd = () => {

    const [search, setSearch] = useState();
    const [selectedUsers, setselectedUsers] = useState([]);
    const [searchResult, setSearchResult] = useState([])
    const [id, setId] = useState([])
    const [users,setUsers]=useState([])


     const getDataFromAPI = async (query) => {
        setSearch(query)
        const res = await fetch(`/api/allusers`, {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem('usersdatatoken')
            }
        });
        // console.log("search",search)

        const data = await res.json();
        setUsers(data)
        console.log("data", data);

        if (data) {
            data.map((userData) => setId(userData._id));
        }
    }
    useEffect(() => { getDataFromAPI() }, [])
    
    console.log(id)
    const navigate = useNavigate();
    const [inpval, setINP] = useState({
        title: "",
        description: "",
        users: ""
    })
    const setdata = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const addinpdata = async (e) => {

        e.preventDefault();
        setINP(
            (preVal) => {
                return {
                    ...preVal,
                    users: id
                };

            }
        )

        let { title, description, users } = inpval;
        users = id
        if (title === "") {
            alert("Please enter the Room Title")

        } else if (description === "") {
            alert("Please enter Description")
        } else if (description.length < 5 && description.length > 150) {
            alert("Description should be greater than 5 character and less than 150 characters")
        } else if (users === "") {
            alert("Please enter the users to be added in room ")
        } else {
            const data = await fetch("/api/createroom", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem('usersdatatoken')
                },
                body: JSON.stringify({
                    title, description, users
                })
            })
            //send data from front to back 
            const res = await data.json();
            console.log(res.data);
            if (res.status === 201) {
                alert("Room added successfully ");
                navigate('/rooms');
                // setUdata(data)
            } 
        }

    }
   
    return (
        <>
            <div className="container">
                <div className=" text-center mt-5 ">
                    <h1 >Create Room</h1>
                </div>
                <div className="row ">
                    <div className="col-lg-7 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">

                                <div className="container">
                                    <form id="contact-form" role="form">
                                        <div className="controls">
                                        <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label for="form_name">Title</label>
                                                        <input id="form_name" type="text" onChange={setdata} value={inpval.title} name="title" className="form-control" placeholder="Please enter room title " />

                                                    </div>
                                                </div>
                                            </div>
                                            <br></br>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label for="form_message">Description </label>
                                                        <textarea id="form_message" onChange={setdata} value={inpval.description} name="description" className="form-control" placeholder="Write about the group." rows="4"></textarea >
                                                    </div><br></br>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label for="form_name">Users</label>
                                                            {/* <input id="form_name" type="text" name="users" className="form-control" placeholder="add users" onChange={(e) => { getDataFromAPI(e.target.value); setdata(e) }} /> */}
                                                            <FormControl id="multiple-limit-tags" className="col-md-12">
                                                                <Autocomplete
                                                                multiple
                                                                placeholder="Add users"
                                                                limitTags={2}
                                                                options={users}
                                                                getOptionLabel={(option)=>option.email}
                                                               
                                                                sx={{ width: '500px' }}
                                                                name="users"
                                                                onChange={(e) => { getDataFromAPI(e.target.value); setdata(e) }}
                                                            /></FormControl>

                                                        </div>
                                                    </div>
                                                    {/* selectd user */}
                                                    {/* render search users */}
                                                </div>

                                                <button type="submit" className="mt-3 btn btn-success" onClick={addinpdata}>Create Room</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomAdd
