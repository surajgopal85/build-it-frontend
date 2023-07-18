import React from 'react';
import Header from '../components/UI/Header';
import ProjectItem from '../components/Project/ProjectItem';
import '../styles/ProjectGrid.css';
import { ProjectList } from '../components/ProjectDisplay/ProjectList';

const Home = (props) => {

  return (
    <div>
      <Header />
      <div className='item-grid'>
      {ProjectList.map((item) => (
      <ProjectItem
        image={item.image}
        address={item.address}
        market={item.market}
        start_date={item.start_date}
        proj_end_date={item.proj_end_date}
        units={item.units}
        phase={item.phase}
        design_phase={item.design_phase}
        design_phase_completion={item.design_phase_completion}
        budget={item.budget}
        status={item.status}
        gmp={item.gmp}
        last_issuance={item.last_issuance}
      />))}
    </div>
    </div>

  )
}

export default Home;
