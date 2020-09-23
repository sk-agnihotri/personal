import React, { Component } from "react";
import '../css/expComp.css'

class Comp extends Component {
  constructor() {
    super();
    this.state = {
      name: "More Info"
    };
  }

  render() {
    return (<div className='mt-5 pt-5'>
      <ul className="oval">
        <li className='text-white bg-dark'>Expertise in Tableau Extension API</li>
        <li className='text-white bg-dark'>Expertise in Tableau JavaScript API</li>
        <li className='text-white bg-dark'>Implemented Dynamic parameter update on Click</li>
        <li className='text-white bg-dark'>Developed the One-Click Tableau Extension for downloading the sheets data</li>
        <li className='text-white bg-dark'>Developed Demand Planning Calendar Tableau Dashboard</li>
      </ul>
  </div>);
  }
}

export default Comp;