import React, { useState, useEffect } from "react";
import { Routes, useNavigate, Route } from "react-router-dom";
import "./App.css";
import DestinationList from "./components/DestinationList";
import Articles from "./components/Articles";
import AddDestinationForm from "./components/AddDestinationForm";
// import {
//   navigateToAddDestination,
//   navigateToDestinationList,
// } from "./routes/navigateRoutes";

function App() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const navigateToDestinationList = () => {
    navigate("/destinations");
  };
  const navigateToAddDestination = () => {
    navigate("/add_destination");
  };

  // const navigateTo
  // json api url
  const LIST_URL =
    "http://localhost/travel_destinations/web/jsonapi/node/destination/";

  useEffect(() => {
    const fetchDestinationList = async () => {
      try {
        const res = await fetch(LIST_URL, { mode: "cors", method: "GET" });
        const jsonData = await res.json();
        console.log(jsonData);
        setData(jsonData.data);
      } catch (err) {
        console.log("fetchDestinaionList error", err);
      }
    };
    fetchDestinationList();
  }, []);

  return (
    <div className="App">
      <div className="conatiner-fluid">
        <button
          className="btn btn-secondary"
          onClick={navigateToDestinationList}
        >
          View destinations
        </button>
        <button
          className="btn btn-secondary"
          onClick={navigateToAddDestination}
        >
          Add destinations
        </button>
      </div>
      <Routes>
        <Route path="/destinations" element={<DestinationList data={data} />} />
        <Route path="/add_destination" element={<AddDestinationForm />} />
      </Routes>
      {/* <DestinationList data={data} /> */}
      <hr></hr>
      {/* <AddDestinationForm /> */}
    </div>
  );
}

export default App;
