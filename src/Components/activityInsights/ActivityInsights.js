import React from 'react';
import './activityInsights.css';

import Symbol from '../../Assests/Symbol.png';
import error1 from '../../Assests/error1.png';

const ActivityInsights = (props) => {
    return ( 
        // <div> {
        //     props.data.map((rectangle,index) =>
        //     {
        //         return(
        //             <Rectangle key={index} color={rectangle.colour} value={rectangle.value} alarms={rectangle.alarms} warnings={rectangle.warnings}/> 
                        
        //         )
        //     }
        // )}
        // </div>
        <div className='base'>
            <div className='firstcol'>
                <div className='row1'>
                    <div class="button-container">
                        <button class="my-button">Activity Insights</button>
                    </div>
                </div>
                <div className='row2'>
                    <div class="containerrow">
                            <div class="boxrow box6">
                                
                            </div>
                            <div class="boxrow box6">
                                <p>Alarms</p>
                            </div>
                            <div class="boxrow box6">
                                <p>Warnings</p>
                            </div>
                    </div>
                </div>
                <div className='row3'>
                        <div class="container1">
                            <div class="box box2">
                                <p> 1</p>
                            </div>
                            <div class="box box4">
                                <p>0</p>
                            </div>
                            <div class="box box5">
                                <p>0</p>
                            </div>
                        </div>
                        <br></br>
                        <div class="container1">
                            <div class="box box3">
                                <p> 2</p>
                            </div>
                            <div class="box box4">
                                <p>6</p>
                            </div>
                            <div class="box box5">
                                <p>4</p>
                            </div>
                        </div>
                        <br></br>
                        <div class="container1">
                            <div class="box box3">
                                <p> 3</p>
                            </div>
                            <div class="box box4">
                                <p>6</p>
                            </div>
                            <div class="box box5">
                                <p>4</p>
                            </div>
                        </div>
                        <br></br>
                        <div class="container1">
                            <div class="box11 box6">
                                <h2>4</h2>
                            </div>
                            <div class="box11 box6">
                                <img src={Symbol} alt='Symbol' className='Symbol'  />
                            </div>
                            <div class="box11 box6">
                                
                            </div>
                        </div>
                        <br></br>
                        <div class="container1">
                            <div class="box box2">
                                <p> 5</p>
                            </div>
                            <div class="box box4">
                                <p>0</p>
                            </div>
                            <div class="box box5">
                                <p>0</p>
                            </div>
                        </div>
                        <br></br>
                        <div class="container1">
                            <div class="box box3">
                                <p> 6</p>
                            </div>
                            <div class="box box4">
                                <p>6</p>
                            </div>
                            <div class="box box5">
                                <p>4</p>
                            </div>
                        </div>
                        <br></br>
                        <div class="container1">
                            <div class="box box2">
                                <p>7</p>
                            </div>
                            <div class="box box4">
                                <p>0</p>
                            </div>
                            <div class="box box5">
                                <p>0</p>
                            </div>
                        </div>
                        <br></br>
                        <div class="container1">
                            <div class="box box1">
                                <p>8</p>
                            </div>
                            <div class="box box4">
                                <p>0</p>
                            </div>
                            <div class="box box5">
                                <p>4</p>
                            </div>
                        </div>
                        <br></br>
                        <div class="container1">
                            <div class="box box3">
                                <img src={error1} alt='error1' className='error1'  />
                            </div>
                            <div class="box box4">
                                <p>6</p>
                            </div>
                            <div class="box box5">
                                <p>4</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='secondcol'>
                <div className='row1'>
                    <div class="dropdown">
                        <button class="dropbtn"><u>All Activity</u></button>
                            <div class="dropdown-content">
                               
                            </div>
                    </div>
                </div>
                <div className='row2'>
                <div class="containerrow">
                            <div class="boxrow box6">
                                
                            </div>
                            <div class="boxrow box6">
                                <p>Alarms</p>
                            </div>
                            <div class="boxrow box6">
                                <p>Warnings</p>
                            </div>
                    </div>
                
                </div>
                <div className='row3'>
                    <div class="container1">
                        <div class="box box3">
                            <p>10</p>
                        </div>
                        <div class="box box4">
                            <p>0</p>
                        </div>
                        <div class="box box5">
                            <p>0</p>
                        </div>
                    </div>
                    <br></br>
                    <div class="container1">
                        <div class="box11 box6">
                            <h2> 11 </h2>
                        </div>
                        <div class="box11 box6">
                            <img src={Symbol} alt='Symbol' className='Symbol'  />
                        </div>
                        <div class="box11 box6">

                        </div>
                    </div>
                    <br></br>
                    <div class="container1">
                        <div class="box box3">
                            <p> 12</p>
                        </div>
                        <div class="box box4">
                            <p>6</p>
                        </div>
                        <div class="box box5">
                            <p>4</p>
                        </div>
                    </div>
                    <br></br>
                    <div class="container1">
                        <div class="box box2">
                            <p>13</p>
                        </div>
                        <div class="box box4">
                            <p>0</p>
                        </div>
                        <div class="box box5">
                            <p>0</p>
                        </div>
                    </div>
                    <br></br>
                    <div class="container1">
                        <div class="box box2">
                            <p>14</p>
                        </div>
                        <div class="box box4">
                            <p>0</p>
                        </div>
                        <div class="box box5">
                            <p>0</p>
                        </div>
                    </div>
                    <br></br>
                    <div class="container1">
                        <div class="box box3">
                            <p>15</p>
                        </div>
                        <div class="box box4">
                            <p>6</p>
                        </div>
                        <div class="box box5">
                            <p>4</p>
                        </div>
                    </div>
                    <br></br>
                    <div class="container1">
                        <div class="box box2">
                            <p>16</p>
                        </div>
                        <div class="box box4">
                            <p>0</p>
                        </div>
                        <div class="box box5">
                            <p>0</p>
                        </div>
                    </div>
                    <br></br>
                    <div class="container1">
                        <div class="box box3">
                            <p>17</p>
                        </div>
                        <div class="box box4">
                            <p>6</p>
                        </div>
                        <div class="box box5">
                            <p>4</p>
                        </div>
                    </div>
                    <br></br>
                    <div class="container1">
                        <div class="box box1">
                            <p>18</p>
                        </div>
                        <div class="box box4">
                            <p>0</p>
                        </div>
                        <div class="box box5">
                            <p>4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
};
export default ActivityInsights;