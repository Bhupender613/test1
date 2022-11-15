import { Routes, Route } from "react-router-dom";
import Selectdata from "./component/Selectdata";
import Table from "./component/getTable";
import Data from "./component/Getdata";
import { useState } from "react";
import GenderSelect from "./component/GenderSelect";
import Inputhandle from "./component/inputhandle";

function App() {
  const [value, setvalue] = useState("");

  return (
    <>
      <h1 className="center">Get Data </h1>
      <Data.Provider value={{ value, setvalue }}>
        <Selectdata />
        <Routes>
          <Route path="/Selectdata" element={<Selectdata />}></Route>
          <Route path="/getTable" element={<Table />}></Route>
          <Route path="/GenderSelect" element={<GenderSelect />}></Route>
          <Route path="/inputhandle" element={<Inputhandle />}></Route>
        </Routes>
      </Data.Provider>
    </>
  );
}

export default App;
