import React, { useContext, useState, useEffect } from "react";
import Data from "./Getdata";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Inputhandle = () => {
  const set = useContext(Data);
  const navigete = useNavigate();

  const [dataget, setdataget] = useState("");

  useEffect(() => {
    axios
      .get(`${set.value}`)
      .then((response) => setdataget(response.data))
      .catch((error) => navigete("/"));
  }, [set.value]);

  return (
    <>
      {dataget && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">image</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">gender</th>
              <th scope="col">phone</th>
              <th scope="col">birthDate</th>
              <th scope="col">address</th>
              <th scope="col">bloodGroup</th>
              <th s cope="col">
                username
              </th>
            </tr>
          </thead>
          <tbody>
            {dataget.users.map((user, index) => (
              <>
                <tr key={index}>
                  <td scope="row">
                    <img src={user.image} width="50" />
                  </td>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.phone}</td>
                  <td>{user.birthDate}</td>
                  <td>{user.address.city}</td>
                  <td>{user.bloodGroup}</td>
                  <td>{user.username}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Inputhandle;
