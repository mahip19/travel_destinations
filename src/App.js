
import React, {useState, useEffect} from 'react';

import './App.css';
import DestinationList from './components/DestinationList';

function App() {
  const [data, setData] = useState(null)

// json api url
  const LIST_URL = "http://localhost/travel_destinations/web/jsonapi/node/destination/";

  useEffect(() => {
    const fetchDestinationList = async () => {
      try{
        const res = await fetch(LIST_URL, {mode: 'cors', method:'GET'});
        const jsonData = await res.json();
        console.log(jsonData)
        setData(jsonData.data)
      } catch(err){
        console.log("fetchDestinaionList error", err);
      }
    }
    fetchDestinationList();
  }, [])
  

  
  
  return (
    <div className='App'>
      <DestinationList data={data}/>
    </div>
  );
}

export default App;
