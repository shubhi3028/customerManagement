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

  useEffect(() => {
    // Simulate fetching user data (replace this with actual API call)
    const fetchUserList = async () => {
      // Simulated user data
      const fakeUserList = [
        {
          id: 1,
          username: 'Shivani Bist(Barman)',
          email: 'shivani.sanjay@gmail.com',
          phoneNumber: '9958908501',
        },
        {
          id: 2,
          username: 'Jane Smith',
          email: 'jane@example.com',
          phoneNumber: '9876543210',
        },
        // Add more fake user objects as needed
      ];

      // Simulate a delay to mimic API response time
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setUserList(fakeUserList);
    };

    // Call the fetchUserList function
    fetchUserList();
  }, []);
  const toggleStatus = (userId) => {
    // ... your toggleStatus logic remains unchanged
  };

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
