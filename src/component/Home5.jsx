import { useEffect } from "react"
import { useState } from "react"

const Home5 = () => {

    const [regno,setRegno]=useState(1001);
    const [name,setName]=useState("Arun")
    const [age,setAge]=useState(20)

    useEffect( ()=>console.log('call useEffect')  )
 
    return (
    <div>
        <h1>Regno={regno}</h1>
        <h1>Name={name}</h1>
        <h1>Age={age}</h1>
        <button type="button" onClick={ ()=>setRegno(1002) }>Regno</button>
        <button type="button" onClick={ ()=>setName("bala") }>Name</button>
        <button type="button" onClick={ ()=>setAge(40) }>Age</button>
    </div>

    
  )
}

export default Home5

