import React, { useState, useEffect } from 'react';
import Sidebar from '../Component/SideBar/sidebar';
import Navbars from '../Component/Navbar/navbar';
import Footer from '../Component/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const menus = [
  // ... your menu items
];

const resources = {
  // ... your resource items
};

function AdminUi() {
  const [userList, setUserList] = useState([]);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

const [data, setData] = useState('');

useEffect(() => {
  const apiUrl = 'http://localhost:81/v1/user';
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then((responseText) => {
      setData(responseText);
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
}, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar menus={menus} resources={resources} />
        </div>
        <div className="col-md-9">
          <div className="container p-3">
            <div className="card">
              <div className="card-body">
                <p className="text-center fs-1">All User Details</p>

                {successMsg && (
                  <p className="text-center text-success">{successMsg}</p>
                )}

                {errorMsg && (
                  <p className="text-center text-danger">{errorMsg}</p>
                )}
                <Navbars />

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">UserName</th>
                      <th scope="col">Email</th>
                      <th scope="col">PhoneNumber</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user) => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary mx-1"
                            onClick={() => (window.location.href = `#?id=${user.id}`)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-danger mx-1"
                            onClick={() => (window.location.href = `#?id=${user.id}`)}
                          >
                            Delete
                          </button>
                          <button
                            className="btn btn-sm btn-success mx-1"
                            onClick={() => (window.location.href = `#?id=${user.id}`)}
                          >
                            Active
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminUi;













// const [data, setData] = useState('');

// useEffect(() => {
//   // Define the URL of the Spring Boot API
//   const apiUrl = 'http://localhost:8080/api/data'; // Replace with your API URL

//   // Use the fetch API to make a GET request
//   fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.text();
//     })
//     .then((responseText) => {
//       // Update the state with the response data
//       setData(responseText);
//     })
//     .catch((error) => {
//       console.error('Fetch error:', error);
//     });
// }, []);



