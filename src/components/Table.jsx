import React from "react";

const Table = (props) => {
  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th className="p-3">id</th>
          <th className="p-3">Name</th>
          <th className="p-3">Phone</th>
          <th className="p-3">Email</th>
          <th className="p-3">Signup Date</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.fullName}</td>
            <td>{user.fullMobileNumber}</td>
            <td>{user.email}</td>
            <td>{user.signupDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
