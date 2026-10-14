import { useState } from "react"

const Home3 = () => {
  
    const [formInput,setFormInput] =useState(  { } )

    function  submitForm(event)
    {
        event.preventDefault();
        console.log(formInput.regno)
        console.log(formInput.name)
        console.log(formInput.age)
        
    }
    return (
    <div>
        <form action="" onSubmit={submitForm}>
            Regno:<input type="text" name="regno" id="regno" onChange={  (event)=>{   setFormInput(  (pre_value)=>{  return {...pre_value,regno:event.target.value}  }  )  }  } />
            Name:<input type="text" name="name" id="regno" onChange={  (event)=>{   setFormInput(  (pre_value)=>{  return {...pre_value,name:event.target.value}  }  )  }  } />
            Age:<input type="text" name="age" id="regno" onChange={  (event)=>{   setFormInput(  (pre_value)=>{  return {...pre_value,age:event.target.value}  }  )  }  } />
            <input type="submit" value="click" />
        </form>
    </div>
  )
}

export default Home3

