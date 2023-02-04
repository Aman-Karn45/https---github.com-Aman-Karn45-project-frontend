const handleSearch=async(query)=>{
    setSearch(query);
    if(!query){
        return;
    }
   try {
       setloading(true)

       
    const getdata = async () => {

        const res = await fetch(`/api/susers`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setsearchResult(data)
            console.log("get data");

        }
    }
   } catch (error) {
       
   }
}

const navigate = useNavigate()
const [inpval, setINP] = useState({
    title: "",
    description: "",
   
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
const addinpdata = async (e) => {
    e.preventDefault();

    const { title,description} = inpval;
    //send data from front to back 

    const res = await fetch("/api/createroom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          //got the data 
          title,description
        })
      });
      const data = await res.json();
      console.log(data)
      if (res.status === 400 || !data) {
        window.alert("Data not inserted")
      } else {
        window.alert("data added")
      
        navigate('/rooms')
      }
    }