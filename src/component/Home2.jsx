import { useState } from "react"

const Home2 = () => {
  
  const [regno,setRegno]=useState()
  const [name,setName]=useState()
  const [age,setAge]=useState()

  function formHandling(evnet)
  {
    evnet.preventDefault();
    console.log(regno)
    console.log(name)
    console.log(age)
  }

    return (
    <div>
        <form action="" onSubmit={formHandling}>
        Regno:<input type="text" name="regno" id="regno" onChange={ (event)=>{ setRegno( event.target.value ) }  } />
        Name:<input type="text" name="name" id="regno" onChange={ (event)=>{ setName( event.target.value ) }  } />
        age:<input type="text" name="age" id="regno" onChange={ (event)=>{ setAge( event.target.value ) }  } />

        <input type="submit" value="click" />
        
        </form>
    </div>
  )
}

export default Home2

