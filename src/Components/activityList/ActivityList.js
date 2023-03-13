import React from 'react';
import './ActivityList.css';

import num18 from 'C:/Users/sushsahoo/react-app/menu/src/Assests/num18.png';
import num17 from 'C:/Users/sushsahoo/react-app/menu/src/Assests/num17.png';
import num3 from 'C:/Users/sushsahoo/react-app/menu/src/Assests/num3.png';
import num15 from 'C:/Users/sushsahoo/react-app/menu/src/Assests/num15.png';

import rednotify from 'C:/Users/sushsahoo/react-app/menu/src/Assests/rednotify.png'
import yellownotify from 'C:/Users/sushsahoo/react-app/menu/src/Assests/yellownotify.png'
import whitenotify from 'C:/Users/sushsahoo/react-app/menu/src/Assests/whitenotify.png'

const ActivityList = () => {
    return ( 
        <div className='cont1'>
            <div className='rows1'>
                <div className='cols1'>
                    <div class="dropdown">
                        <button class="dropbtn"><u>All Activity</u></button>
                            <div class="dropdown-content">
                               
                            </div>
                    </div>
                </div>
                <div className='cols2'>
                    <div class="dropdown">
                        <button class="dropbtn"><u>By Frequency</u></button>
                            <div class="dropdown-content">
                               
                            </div>
                    </div>
                </div>
            </div>
            <div className='rows2'>
                <div class="checkbox-container">
                    <input type="checkbox" id="myCheckbox"/>
                    <label for="myCheckbox">Open Activity</label>
                </div>
            </div>
            <br></br>
            <div className='rows3'>
                <div className='rows22'>
                    <div className='pa1'>
                        <div className='m1'>
                            <h2>LINE</h2>
                       </div>
                       <div className='m2'>
                            <img src={num18} alt='Symbol' className='num18'  />
                       </div>
                    </div>
                    <div className='pa2'>
                       <div className='m1'>
                            <h2>Trim Press Idler Wheel :</h2>
                       </div>
                       <div className='m2'>
                            <p1>Idler Wheel Open at Angle outside control limit</p1>
                       </div>

                    </div>
                    <div className='pa3'>
                        <div className='notify'>
                            <img src={rednotify} alt='Symbol' className='rednotify'  />
                        </div>
                        <div className='num'>
                            <p1>12</p1>
                        </div>
                    </div>
                </div>
                <div className='rows222'>

                </div>
            </div>
            <br></br>
            <div className='rows4'>
                <div className='rows22'>
                    <div className='pa1'>
                        <div className='m1'>
                            <h2>LINE</h2>
                       </div>
                       <div className='m2'>
                            <img src={num17} alt='Symbol' className='num17'  />
                       </div>
                    </div>
                    <div className='pa2'>
                       <div className='m1'>
                            <h2>Trim Press Idler Wheel :</h2>
                       </div>
                       <div className='m2'>
                            <p1>Idler Wheel Open at Angle outside control limit</p1>
                       </div>

                    </div>
                    <div className='pa3'>
                        <div className='num'>
                            <h5>M</h5>
                        </div>
                        <div className='notify'>
                            <img src={yellownotify} alt='Symbol' className='yellownotify'  />
                        </div>
                        <div className='num'>
                            <p1>110</p1>
                        </div>
                    </div>
                </div>
                <div className='rows222'>

                </div>
            </div>
            <br></br>
            <div className='rows5'>
                <div className='rows22'>
                    <div className='pa1'>
                        <div className='m1'>
                            <h2>LINE</h2>
                       </div>
                       <div className='m2'>
                            <img src={num3} alt='Symbol' className='num3'  />
                       </div>
                    </div>
                    <div className='pa2'>
                       <div className='m1'>
                            <h2>Extruder Heater :</h2>
                       </div>
                       <div className='m2'>
                            <p1>Screen Changes || tempreture outside control limit</p1>
                       </div>

                    </div>
                    <div className='pa3'>
                        <div className='notify'>
                            <img src={whitenotify} alt='Symbol' className='whitenotify'  />
                        </div>
                        <div className='num'>
                            <p1>9</p1>
                        </div>
                    </div>
                </div>
                <div className='rows222'>

                </div>
            </div>
            <br></br>
            <div className='rows6'>
                <div className='rows22'>
                    <div className='pa1'>
                        <div className='m1'>
                            <h2>LINE</h2>
                       </div>
                       <div className='m2'>
                            <img src={num15} alt='Symbol' className='num15'  />
                       </div>
                    </div>
                    <div className='pa2'>
                       <div className='m1'>
                            <h2>Trim Press Idler Wheel :</h2>
                       </div>
                       <div className='m2'>
                            <p1>Idler Wheel Open at Angle outside control limit</p1>
                       </div>

                    </div>
                    <div className='pa3'>
                        <div className='notify'>
                            <img src={whitenotify} alt='Symbol' className='whitenotify'  />
                        </div>
                        <div className='num'>
                            <p1>5</p1>
                        </div>
                    </div>
                </div>
                <div className='rows222'>

                </div>
            </div>
        </div>
    );
};
export default ActivityList;