import React,{useContext, useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { updatedata } from '../../components/Context/ContextProvider'
import "../Expense/Expenseedit"



const Expenseedit = () => {
//   const [getexpdata, setexpdata] = useState([]);
const {updata, setUPdata} = useContext(updatedata)
const navigate = useNavigate();

const [inpval, setINP] = useState({
    title:"",
    description:"",
    amount:"",
    Roomtitle:""
 })
 
 const setdata = (e) => {
     console.log(e.target.value);
     const { name, value } = e.target;
     setINP((preval) => {
         return {
             ...preval,
             [name]: value
         }
     })
 }

 const { id } = useParams("");
 console.log(id);
 let data;
 const getdata = async () => {
  const res = await fetch(`/api/expensebyid/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
     data = await res.json();
     console.log(data);
    if (res.status === 422 || !data) {
        console.log("error ");

    } else {
        setINP(data.data)
     

    }
}

   
useEffect(() => {
  getdata()
}, []);



const updateexpense = async(e)=>{
    e.preventDefault();

    const {title,description,amount,Roomtitle } = inpval;

    const res2 = await fetch(`/api/expenseupdate/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            title,description,amount,Roomtitle
        })
    });

    const data2 = await res2.json();
    console.log(data2);

    if(res2.status === 422 || !data2){
        alert("fill the data");
    }else{
        navigate('/expense');
        setUPdata(data2);
    }

}
  return (
    <>
    <div class="container">
      <div class=" text-center mt-5 ">
          <h1 >Expense Upadte</h1>
      </div>   
  <div class="row ">
    <div class="col-lg-7 mx-auto ">
      <div class="card mt-2 mx-auto p-4 bg-light">
          <div class="card-body bg-light">
     
          <div class = "container">
                           <form id="contact-form" role="form">

          

          <div class="controls">

              <div class="row">
                  <div class="col-md-12  ">
                      <div class="form-group">
                          <label for="form_name">Title</label>
                          <input id="form_name" type="text" onChange={setdata} value={inpval.title} name="title" class="form-control" placeholder="Please enter Title " required="required" data-error="Title is required."/>
                          
                      </div>
                  </div>
              </div>
              
              <div class="row">
                  <div class="col-md-12 mt-3 ">
                      <div class="form-group">
                          <label for="form_message">Description </label>
                          <textarea id="form_message" onChange={setdata} value={inpval.description} name="description" class="form-control" placeholder="Write the description." rows="4" required="required" data-error="Please, leave us a message."></textarea>

                          </div>
                      </div>

                      <div class="row">
                  <div class="col-md-12 mt-3 ">
                      <div class="form-group">
                          <label for="form_name">Amount</label>
                          <input id="form_name" type="text" onChange={setdata} value={inpval.amount} name="amount" class="form-control" placeholder="Please enter Amount" required="required" data-error="Amount is required."/>
                          
                      </div>
                  </div>
              </div>
                      <div class="row">
                  <div class="col-md-12 mt-3 ">
                      <div class="form-group">
                          <label for="form_name">Room Title</label>
                          <input id="form_name" type="text" onChange={setdata} value={inpval.Roomtitle} name="Roomtitle" class="form-control" placeholder="Please enter Roomtitle" required="required" data-error="Roomtitle is required."/>
                          
                      </div>
                  </div>
              </div>
                      <div class="row">
                  {/* <div class="col-md-12">
                      <div class="form-group">
                          <label for="form_name">Users</label>
                          <input id="form_name" type="text" name="user" class="form-control" placeholder="add users" required="required" onChange={(e)=>handleSearch(e.target.value)}/>
                          
                      </div>
                  </div> */}
                  {/* selectd user */}
                  {/* render search users */}
              </div> 

<button type ="submit" className="mt-3 btn btn-success" onClick={updateexpense}>Submit</button>
        
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
  );
}

export default Expenseedit;
