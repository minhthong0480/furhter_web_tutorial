import React, { useEffect, useState } from 'react'
export default function Task(){
  const [data, setData] = useState([])
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState('')
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

  const reopen = (item)=>{
    fetch(URL, {
        method: "put",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: item._id, name: item.name, status:'completed'})
     })
    .then(res=>{
        console.log(res)
        load()
    })
  }

  const completed = (item)=>{
    fetch(URL, {
        method: "put",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: item._id, name: item.name, status:'On-going'})
     })
    .then(res=>{
        console.log(res)
        load()
    })
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
          Filter: <button>All</button><button>Completed</button><button>On-Going</button>
          <ul>
          {data.map((item)=>
              <li>
                  <td>{item.id}</td>
                  <td>{item.name} - {item.status}</td>
                  <td>
                    {item.status == 'completed'?(<button onClick={()=>reopen(item)}>Re-Open</button>):(<button onClick={()=>completed(item)}>Complete</button>)
                    }
                  </td>
                  {/* <td><button onClick={()=>deleteTask(item._id)}>Delete</button></td> */}
              </li>
          )}
          </ul>
      </div>
  )
}
