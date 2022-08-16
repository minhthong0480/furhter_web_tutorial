import React, {useState, useEffect} from 'react'
import bootstrap from 'bootstrap'

function ListMockTest() {
    //const URl = 'https://api.covidtracking.com/v1/us/daily.json'
    //const URl = 'hhttps://phhl8580rh.execute-api.ap-southeast-1.amazonaws.com/testing/cars'
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://api.covidtracking.com/v1/us/daily.json')
        .then(res =>res.json())
        .then(json=>json.filter((item)=> item.date>20210101 && item.date<20210131))
        //.then(json=>json.filter(item=>item.positive = 28756489))
        .then(json=>{
            console.log(json)
            setData(json)})
    },[])
  return (
    // <table className="table table-striped table-bordered">
    //   <thead>
    //     <tr>
    //       <th>Date</th>
    //       <th>Number of positive</th>
    //       <th>Number of hospitalized cases</th>
    //     </tr>
    //   </thead>
    
    //     <tbody>
    //     {data.map((d, i) => (
    //       <tr key={i}>
    //         <td>{d.date}</td>
    //         <td>{d.positive}</td>
    //         <td>{d.hospitalizedCumulative}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          {data.map((d) => (
            <th>{d.date}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {data.map((d, i) => (
            <td>{d.positive}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default ListMockTest

