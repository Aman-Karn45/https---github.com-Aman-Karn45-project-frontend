import { Message } from '@mui/icons-material';
import React ,{useState} from 'react';

import { Link, useNavigate } from 'react-router-dom';
// import { useToast } from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signin = () => {
  // const toast = useToast();
  const navigate= useNavigate();
//   const[email,setEmail]=useState('');

//   const[password,setPassword]=useState('');
  
//   // const [loading, setLoading] = useState(false);
//   const loginUser = async(e)=>{
//     // setLoading(true);
//       e.preventDefault();
//       // send data to backend signin
//       if (!email || !password){
//         toast.error("please fill all the details",{
//           position:"top-center"
//         })
//       }
//       try{
//       const res = await fetch("/api/login",{
//         method:"POST",
//         headers:{

//           "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//           //got the data 
//           email,password
//         })
//   });
//   // const data = res.json();
//   // console.log(data)

//   if(res.status===400){
//   window.alert("invalid credntial")
//   }else{
//     window.alert("Login sucessful")
//     localStorage.setItem('token', res.tokenData)
//     navigate('/home')
//   }
// }catch(error){
        
//    console.log(error)
// }
// }

const [inpval,setInpval]= useState({
  email:"",
  password:""
});
console.log(inpval)
const setVal=(e)=>{
  const {name,value}=e.target;
  setInpval(()=>{
    return{
      ...inpval,
      [name]:value
    }
  })
} 
const loginuser= async (e)=>{
  e.preventDefault();

  const {email,password}=inpval;
  if(email === ""){
    alert("please enter your email");

  }else if (!email.includes("@")){
    alert("enter valid email")

  }else if(password ===""){
    alert("please enter your pasword");

  }else if(password.length<5){
    alert("password length should be atleast 5");

  }
  else{
    const data = await fetch("/api/login",{
              method:"POST",
              headers:{

                "Content-Type":"application/json"
              },
              body:JSON.stringify({
                //got the data 
                email,password
  })
})
const res = await data.json();
if(res.status === 201 ){
  alert("login success")

  localStorage.setItem("usersdatatoken",res.result.tokenData)
  // localStorage.setItem("userInfo",res.result)
  setInpval({...Link,email:"",password:""});
  navigate('/home')
}else{
  alert("Invalid Credentials")
}
}
}
  return (
    <>
       <form method="POST">
<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" >
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder='Enter your Email'    value={inpval.email} name="email" onChange={setVal}/>
                                   

                <label className="form-label" for="typeEmailX"></label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg"  placeholder='Enter Your Password' value={inpval.password} name ="password"
    onChange={setVal}/>
                <label className="form-label" for="typePasswordX" ></label>
              </div>
{/* 
              {/ <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> /} */}

              <button className="btn btn-outline-light btn-lg px-5" type="submit" name ='login'  value ="Log In" onClick={loginuser}>Login</button>
            </div>

            <div>
              <p className="mb-0">Don't have an account? <Link to="/signup" className="text-white-50 fw-bold">Sign Up</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
<ToastContainer />
</>
  )
}
export default Signin