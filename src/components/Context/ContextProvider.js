import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate} from 'react-router-dom';



export const adddata = createContext("");
export const updatedata = createContext("");
export const deldata = createContext("");
const   users =createContext("");
const ContextProvider = ({ children }) => {
    const [user,setUser]=useState()
    const [udata, setUdata] = useState("");
    const [updata, setUPdata] = useState("");
    const [dltdata, setDLTdata] = useState("");
    // const navigate=useNavigate()
useEffect(()=>{
     const userinfo =   localStorage.getItem("usersdatatoken")
     setUser(userinfo);
     if(!userinfo){
        // navigate('/')
     }
},[])

    return (
         < users.Provider value ={{user,setUser}}>
        <adddata.Provider value={{ udata, setUdata }}>
            <updatedata.Provider value={{ updata, setUPdata }}>
                <deldata.Provider value={{dltdata, setDLTdata}}>
                    {children}
                </deldata.Provider>

            </updatedata.Provider>

        </adddata.Provider>
        </users.Provider>
    )
}
export const UserState =()=>{
    return useContext(users)
}
export default ContextProvider;

