import React from 'react';
import '../../styles/ProjectDate.css';

const ProjectDate = (props) => {
  const month = props.date.time.toLocaleString('en-US', { month: 'long'});
  const year = props.date.time.getFullYear();

  return (
    <div className='expense-date'>
      <div>
        <div className='expense-date__month'>{props.date.type}: {month} {year}</div>
        {/* <div className='expense-date__day col'>{day}</div>
        <div className='expense-date__year col'>{year}</div> */}
      </div>

    </div>
  );
}

export default ProjectDate;
