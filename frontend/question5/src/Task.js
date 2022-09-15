import React, { useEffect, useState } from 'react'
export default function Task(){
  const [data, setData] = useState([])
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const URL = "http://localhost:9000/tasks"
 
  const load = ()=>{
      fetch(URL)
      .then(res=>res.json())
      .then(json=>setData(json))
  }
  useEffect(()=>{
      load()
  }, [])
  const save = ()=>{
 
   if (id===''){
      fetch(URL, {
          method: "post",
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
   else{
       fetch(URL, {
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
  }
  const edit = (id, name)=>{
      setId(id)
      setName(name)
  }
  const addnew = ()=>{
      setId('')
      setName('')
  }
  const deleteTask = (id)=>{
      fetch(URL + "/" + id, {
          method: "delete"
      })
      .then(res=>{
          console.log(res)
          const newdata = data.filter((item)=>{
              return item._id!=id
          })
          setData(newdata)
      })
  }
  return(
      <div>
          <h1>Create task</h1>
          ID: <input type="text" value={id} onChange={(e)=>setId(e.target.value)}  /><br/>
          Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
          <button onClick={()=>save()}>Save</button>
          <button onClick={()=>addnew()}>Add new</button>
          <h1>List of tasks</h1>
          <table className="table">
          {data.map((item)=>
              <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td><button onClick={()=>edit(item._id, item.name)}>Edit</button></td>
                  <td><button onClick={()=>deleteTask(item._id)}>Delete</button></td>
              </tr>
          )}
          </table>
      </div>
  )
}
