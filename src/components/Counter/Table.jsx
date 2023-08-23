import React from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../redux/slices/userSlice";
import { styled } from "styled-components";

const Styles = styled.div`
  table {
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;

	tr:nth-child(even){background-color: #f2f2f2;}
	tr:hover {background-color: #ddd;}
    th,
    td {
		border: 1px solid #ddd;
		padding: 8px;
    }

    th {
		text-align: center;
		padding-top: 12px;
		padding-bottom: 12px;
		background-color: #04AA6D;
		color: white;
    }
  }
`;

const Table = () => {
  const users = useSelector(getAllUsers);
  console.log(users, "----->>> users");
  return (
    <Styles>
      <table id="customers">
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
        </tr>
        {users?.map((user) => (
          <tr>
            <td>{user?.id}</td>
            <td>{user.email}</td>
            <td>{user?.first_name}</td>
			<td>{user?.last_name}</td>
			<td><img src={user?.avatar} alt="avatar"/></td>
          </tr>
        ))}
      </table>
    </Styles>
  );
};

export default Table;
