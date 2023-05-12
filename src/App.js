import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [users, setUsers] = useState([])

  const getDataApi = async () => {
    const url = 'https://random-data-api.com/api/v2/users'
    await axios.get(url)
      .then(function (response) {
        setUsers(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getDataApi()
  }, []);

  useEffect(() =>{
  console.log(users)
  }, [users]);

  return (
    <>
      <h1>teste</h1>
      <div>
      <p>{users.first_name}</p>
      </div>
    </>
  )
}
export default App;
