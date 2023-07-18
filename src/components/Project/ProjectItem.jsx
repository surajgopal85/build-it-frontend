import React from 'react';
import ProjectDate from './ProjectDate';
import Card from '../UI/Card';
import ProgressBar from '../Progress/ProgressBar';
import '../../styles/ProjectItem.css';

const ProjectItem = (props) => {
  // 1st row: col -> pic, then col -> address, market, phase, graph
  // 2nd row: col -> phase, col -> budget, col -> status
  // 3rd row: col -> cost, col -> gmp
  return (
    <Card className='project-item'>
      <div className="first-row">
        <div className='fr-item'><img src={props.image} alt="" id='thumb'/></div>
        <div className='fr-item'>
          <p><a href="url">{props.address}</a></p>
          <p>{props.market}</p>
          <p id='phase'>{props.phase}</p>
          <ProgressBar progress={props.design_phase_completion} label="progress"/>
        </div>
      </div>
      <div className="sec-row">
        <div className='sec-brdr'>
        <p>{props.design_phase}</p>
        </div>
        <div className='sec-brdr'>
        <p>{props.units} Units</p>
        </div>
        <div className='sec-brdr'>
        <p>Status: {props.status}</p>
        </div>
      </div>
      <div className="third-row">
        <div className='el'>
          <ProjectDate date={props.start_date} />
        </div>
        <div className='el'>
          <ProjectDate date={props.proj_end_date} />
        </div>
      </div>
      <div className="fourth-row">
        <p>Total Projected Cost: ${props.budget}</p>
        <p>GMP: {props.gmp}</p>
      </div>
    </Card>
  );
}

export default ProjectItem;
