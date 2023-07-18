import React from 'react';
import '../../styles/ProjectDisplay.css';

// content imports
import building2 from '../../assets/building2.jpeg';
import building from '../../assets/building.jpg';
import { ProjectList } from './ProjectList';
import Card from '../UI/Card';

const ProjectDisplay = (props) => {
  return (
    <Card className="wrapper">
      <div className='item-image'>
        <img src={ProjectList[0].image} alt="" id='thumb'/>
      </div>
      <div className='breakdown'>
        <div><h4>Address: </h4></div>
        <div className='item-spec'><h4>{ProjectList[0].address}</h4></div>
        <div><h4>Market: </h4></div>
        <div className='item-spec'><h4>{ProjectList[0].market}</h4></div>
        <div><h4>Status: </h4></div>
        <div className='item-spec'><h4>{ProjectList[0].status}</h4></div>
        <div><h4>Schedule Variance: </h4></div>
        <div className='item-spec'><h4>{ProjectList[0].sched_var}</h4></div>
      </div>
      <div>{ProjectList[0].address}</div>
      <div>{ProjectList[0].address}</div>
      <div>COL</div>
      <div>COL</div>
    </Card>
  )
}

export default ProjectDisplay;
