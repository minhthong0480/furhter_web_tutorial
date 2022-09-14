import React, { useEffect, useState } from 'react'
 
export default function Test1Q2(){
 
   const [data, setData] = useState([])
   const [id, setId] = useState("")
   const [name, setName] = useState("")
 
   const load = ()=>{
       fetch("https://phhl8580rh.execute-api.ap-southeast-1.amazonaws.com/testing/cars")
       .then(res=>res.json())
       .then(json=>setData(json.Items))
   }
 
   useEffect(()=>{
       load()
   }, [])
 
   const save = ()=>{
       fetch("https://phhl8580rh.execute-api.ap-southeast-1.amazonaws.com/testing/cars", {
           method: "put",
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({id: id, name: name})
 
       })
       .then(res=>{
           console.log(res)
           load()
       })
   }
 
   const edit = (id, name)=>{
       setId(id)
       setName(name)
   }
 
   const addnew = ()=>{
       setId('')
       setName('')
   }
 
   const deleteCar = (id)=>{
        if(!window.confirm('Do you want to delete?')) {
            return;
        }

       fetch("https://phhl8580rh.execute-api.ap-southeast-1.amazonaws.com/testing/cars/"+id, {
           method: "delete"
       })
       .then(res=>{
           console.log(res)
           const newdata = data.filter((item)=>{
               return item.id!==id
           })
           setData(newdata)
       })
   }
 
 
   return(
    <div>
           <h1>Create car</h1>
           ID: <input type="text" value={id} onChange={(e)=>setId(e.target.value)}  /><br/>
           Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
           <button onClick={()=>save()}>Save</button>
           <button onClick={()=>addnew()}>Add new</button>
 
           <h1>List of cars</h1>
           <table className="table">
           {data.map((item)=>
               <tr>
                   <td>{item.id}</td>
                   <td>{item.name}</td>
                   <td><button onClick={()=>edit(item.id, item.name)}>Edit</button></td>
                   <td><button onClick={()=>deleteCar(item.id)}>Delete</button></td>
 
               </tr>
           )}
           </table>
       </div>
   )
}
