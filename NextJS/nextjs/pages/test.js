function Test()
{


  const handleSubmit = async(event) => {
    event.preventDefault()
    const data = {
      name: event.target.name.value,
    }
  const JsonData = JSON.stringify(data)
  const endpoint = 'http://localhost:80/api/userinfo/testt'
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    },
    body: JsonData,
  }
  console.log(JsonData);
  const response = await fetch(endpoint, options)
  }
    return (
      
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <button type="submit">Add New Data</button>
          </form>
      )
      
}

export default Test;