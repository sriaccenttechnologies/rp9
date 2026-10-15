import { useState } from "react"

const Home4 = () => {
  
  const [formInput,setFormInput]=useState({});
  
  function formHandling(event)
  {
    event.preventDefault();
    console.log(formInput)
  }
  
  function getvalue(event)
  {
    setFormInput( (pre_value)=>{   return { ...pre_value,[event.target.name]:event.target.value }   } )
    //                                                       {regno:1001,name:Arun,age:20}                                  
  }
    return (
    <div>
        <form action="" onSubmit={formHandling}>
            Regno: <input type="text" name="regno" id="regno" onChange={getvalue} /> <br /> <br/>
            Name: <input type="text" name="name" id="name" onChange={getvalue} /> <br /> <br/>
            Age: <input type="text" name="age" id="age" onChange={getvalue} /> <br /> <br/>

            Gender:<br /> 
            Male:<input type="radio" name="gender" id="male" value="male" onChange={getvalue} />
            Female:<input type="radio" name="gender" id="female" value="female" onChange={getvalue} /><br /> <br/>

            IsMarried : <input type="checkbox" name="IsMarried" id="IsMarried" value="IsMarried" onChange={getvalue} />
            <input type="submit" value="click" />

            Department <br/>

            <select name="department" id="" onChange={getvalue}>
                <option value="---Select---">---Select---</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
            </select>
        </form>
    </div>
  )
}

export default Home4