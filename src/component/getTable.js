import React, { useContext, useState, useEffect } from "react";
import Data from "./Getdata";
import axios from "axios";
const Table = () => {
  const set = useContext(Data);
  const [dataget, setdataget] = useState("");
  console.log(set.value);
  useEffect(() => {
    axios
      .get(`${set.value}`)

      .then((response) => setdataget(response.data));
  }, [set.value]);

  return (
    <>
      {" "}
      {dataget && (
        <table className=" table table-striped">
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
              <th scope="col">username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                <img src={dataget.image} width="50" />
              </td>
              <td>{dataget.firstName}</td>
              <td>{dataget.email}</td>
              <td>{dataget.gender}</td>
              <td>{dataget.phone}</td>
              <td>{dataget.birthDate}</td>
              <td>{dataget.address.city}</td>
              <td>{dataget.bloodGroup}</td>
              <td>{dataget.username}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
