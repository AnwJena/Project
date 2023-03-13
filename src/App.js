import Sidebar from './Sidebar';
import './App.css';
import Topbar from './Components/Topbar';
import ActivityInsights from './Components/activityInsights/ActivityInsights.js';
import ActivityList from './Components/activityList/ActivityList';
import AllInsights from './Components/allInsights/AllInsights';

import axios from 'axios';

import React, { useState, useEffect } from 'react'; 

function App() {
  const [data, setData] = useState(null);
  async function fetchData() {
  const [response1,response2] = await Promise.all([
    await axios.get('http://localhost:4200/getControlTowerSummary'),
    await axios.get('http://localhost:4200/getActivityInsights')
  ]);
  console.log(response1.data);
  setData(response1.data);
  console.log(response2.data);
  setData(response2.data);
  }
  useEffect(() => {
  fetchData();
  }, []); 
  
return (

// <div>
// <div>
//     <div className='topbar1'>
//       <div className='sidebar1'>
//          <Sidebar />
//       </div>
//       {data ? <Topbar data={data} /> : <p>Loading...</p>}
//     </div>
//     <div className='topbar1'>
      
//         <div className='activityInsights1'>
//           {data ? <ActivityInsights data={data} /> : <p>Loading...</p>}
//         </div>
//         <div className='activityList1'>
//          <ActivityList />
//         </div>
//         <div className='allInsights1'>
//           <AllInsights />
//         </div>
//       </div>
//     </div>
//   </div> 

<div className='container'>
  <div className='sidebar'>
  <Sidebar />
  </div>
  <div className='maincontent'>
      <div className='topbar'>
          <div className='topbaricons'>
            {data ? <Topbar data={data} /> : <p>Loading...</p>}
          </div>
      </div>
      <div className='topbarcards'>
          <div className='topbarcards1'>
            {data ? <ActivityInsights data={data} /> : <p>Loading...</p>}
            </div>
            <div className='topbarcards2'>
              <ActivityList />
             
            </div>
            <div className='topbarcards3'>
              <AllInsights />
            </div>
          </div>
  </div>
</div>


);
}

export default App;