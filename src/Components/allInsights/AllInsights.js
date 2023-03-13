import React from 'react';
import './allInsights.css';

import bcircle from '../../Assests/bcircle.png';
import purple from '../../Assests/purple.png';
import green from '../../Assests/green.png';

const AllInsights = () => {
    return ( 
            <div className='base1'>
                <div className='Row1'>
                    <div className='Blend'>
                        <h2>Blend Insights</h2>
                    </div>
                    <div className='Rectcol'>
                        <div class="cont">
                            <div class="boxrec box222">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box111">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box222">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box333">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box222">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box333">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box222">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box222">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box333">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box111">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box222">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box222">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box333">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box222">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box111">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box222">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box333">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box222">
                            </div>
                        </div>
                        <div class="cont">
                            <div class="boxrec box222">
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className='Row2'>
                    <div className='Production'>
                        <h2>Production Insights</h2>
                    </div>
                    <div className='Hours'>
                        <div className='cols'>
                            <h1><b>216 Hrs</b></h1>
                        </div>
                        <div className='cols'>
                            <h3><b>85%</b></h3>
                        </div>
                        <div className='cols'>
                            <div className='container12'>
                                <div class="box12">
                                    <h1>15</h1>
                                </div>
                                <div class="box12">
                                    <h1>8</h1>
                                </div>
                                <div class="box13">
                                    <h1>6</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Text'>
                        <div className='cols12'>
                            <p1>Total Downtime</p1>
                        </div>
                        <div className='cols12'>
                            <p1>Plant OEE</p1>
                        </div>
                        <div className='cols12'>
                            <p1>Lines with highest downtime</p1>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className='Row3'>
                    <div className='Activity'>
                        <h2>Activity Insights</h2>
                    </div>
                    <div className='marks'>
                        <div className='cols'>
                            <img src={bcircle}></img>
                            <p>Unack. alarms</p>
                        </div>
                        <div className='cols'>
                            <img src={purple}></img>
                            <p>Ack. Alarms</p>
                        </div>
                        <div className='cols'>
                            <img src={green}></img>
                            <p>Escalated Alarms</p>
                        </div>
                    </div>
                    <div className='bar'>
                        <div class="progressbar">
                            <div class="progressbarfill1"></div>
                            </div>
                        <br></br>
                        <div class="progressbar1">
                            <div class="progressbarfill2"></div>
                        </div>
                        <br></br>
                        <div class="progressbar2">
                            <div class="progressbarfill3"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
    );
};
export default AllInsights;