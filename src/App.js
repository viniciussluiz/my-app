import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


function App() {
  const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState([]);

  const getDataApi = async () => {
    const url_users = "https://random-data-api.com/api/v2/users?size=15&is_xml=true";
    await axios.get(url_users)
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  useEffect(() => {
    getDataApi();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const handleSearchUsers = (e) => {
    setSearchUsers(e.target.value);
  };

  const filteredUsers = users.filter((user) => 
  user.first_name.toLowerCase().includes(searchUsers)
  );

  return (
    <>
      <h1>Users Table</h1>
      <input
        type="text"
        value={searchUsers}
        onChange={handleSearchUsers}
        placeholder="Pesquisar pelo primeiro nome"
    />

      <div className="table-container">
      <Table className="table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>Title</th>
              <th>Key Skill</th>
              <th>City</th>
              <th>Street Name</th>
              <th>Street Address</th>
              <th>Zip Code</th>
              <th>State</th>
              <th>Country</th>
              <th>Lat</th>
              <th>Lng</th>
              <th>Credit Card Number</th>
              <th>Subscription Plan</th>
              <th>Subscription Status</th>
              <th>Payment Method</th>
              <th>Subscription Term</th>
              <th>Blood Type</th>
            </tr>
          </thead>
          <tbody>
          {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.phone_number}</td>
                <td>{user.date_of_birth}</td>
                <td>{user.employment.title}</td>
                <td>{user.employment.key_skill}</td>
                <td>{user.address.city}</td>
                <td>{user.address.street_name}</td>
                <td>{user.address.street_address}</td>
                <td>{user.address.zip_code}</td>
                <td>{user.address.state}</td>
                <td>{user.address.country}</td>
                <td>{user.address.coordinates.lat}</td>
                <td>{user.address.coordinates.lng}</td>
                <td>{user.credit_card.cc_number}</td>
                <td>{user.subscription.plan}</td>
                <td>{user.subscription.status}</td>
                <td>{user.subscription.payment_method}</td>
                <td>{user.subscription.term}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default App;