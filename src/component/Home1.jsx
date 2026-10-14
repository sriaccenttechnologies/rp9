const Home1 = () => {
           
    function  formHandle(event)
        {
            console.log(event.target.value);  
            console.log(event.target.name);  
            console.log(event.target.id);  
        }

    return (
    <div>
        <form>
            Student Name: <input type="text"  name="sname" id="idsname" onChange={formHandle} />
        </form>
    </div>
  )
}

export default Home1