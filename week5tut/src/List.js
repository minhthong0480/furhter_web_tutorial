import React, {useEffect, useState} from 'react'

function List() {
    const URL = 'https://phhl8580rh.execute-api.ap-southeast-1.amazonaws.com/testing/cars'
    const [data, setData] = useState([])
    const [id, setId] = useState([])
    const [name, setName] = useState([])

    const load = () =>{
      fetch(URL)
      .then(res => res.json())
      .then(json => setData(json.Items))
    }

    const save = () =>{
        fetch(URL,{
          method:'put',
          header: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id: id, name: name})
        })
        // .then(res => res.json())
        // .then(json => setData(json.Items))
        .then(res=>{
          console.log(res)
          load()
        })
    }

    const edit =(id, name)=>{
        setId(id)
        setName(name)
    }

    const addnew = () =>{
        setId(id)
        setName(name)
    }

    const deleteItem = (id) =>{
      fetch('https://phhl8580rh.execute-api.ap-southeast-1.amazonaws.com/testing/cars/' + id,{
        method:'delete',
      })
      // .then(res => res.json())
      // .then(json => setData(json.Items))

      //update the array to show
      .then(res=>{
        console.log(res)
        const newdata = data.filter((item)=>{
          return item .id != id
        })
        setData(newdata)
      })
    }

    useEffect (() =>{
        load()
    },[])

  return (
    <div>
        <h1>Create Animals</h1>
        ID: <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/><br />
        Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br />
        <button onClick={()=>save()}>Save</button>
        <button onClick={()=>addnew()}>Add New</button>
        
        
        <h1>Lists of Animals</h1>
        <table className='table'>
            {data.map((item)=> 
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><button onClick={()=>edit(item.id, item.name)}>Edit</button></td>
                <td><button onClick={()=>deleteItem(item.id)}>Delete</button></td>
              </tr>
            )}
        </table>
        
    </div>
  )
}

export default List