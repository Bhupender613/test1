import React, { useContext, useState, useEffect } from "react";
import Data from "./Getdata";

const GenderSelect = () => {
  const set = useContext(Data);
  const [dataget, setdataget] = useState("");

  useEffect(() => {
    fetch(`${set.value}`)
      .then((response) => response.json())
      .then((data) => setdataget(data));
  }, [set.value]);
  console.log(dataget.users);

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
          </thead>{" "}
          dfdfdf
          <tbody>
            {dataget.users.map((user, index) => (
              <>
                <tr>
                  <td key={index} scope="row">
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

export default GenderSelect;
