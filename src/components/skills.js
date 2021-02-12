import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const data = [{
    name: 'HTML',
    value: 77,
    image: 'https://github.com/sk-agnihotri/personal/blob/master/src/img/html5.jpg?raw=true',
    key: 1
  },
  {
    name: 'JavaScript',
    value: 82,
    image: 'https://github.com/sk-agnihotri/personal/blob/master/src/img/javascript.jpg?raw=true',
    key: 2
  },
  {
    name: 'CSS',
    value: 74,
    image: 'https://github.com/sk-agnihotri/personal/blob/master/src/img/css3.jpg?raw=true',
    key: 3
  },
  {
    name: 'Tableau',
    value: 92,
    image: 'https://github.com/sk-agnihotri/personal/blob/master/src/img/tableau.jpg?raw=true',
    key: 4
  },
  {
    name: 'React JS',
    value: 82,
    image: 'https://github.com/sk-agnihotri/personal/blob/master/src/img/react.jpg?raw=true',
    key: 5
  },
  {
    name: 'D3 JS',
    value: 86,
    image: 'https://github.com/sk-agnihotri/personal/blob/master/src/img/d3js.jpg?raw=true',
    key: 6
  }
];

const Example =(props) => {
    const data = props.data;
    const listItem = data.map((elem) => 
        <div key = {elem.key} style={{ marginBottom: 10, }}>
            <div style={{ marginTop: 20}}>
                <div style={{ width: "80%", background: "url(" + elem.image + ") no-repeat", borderRadius: '50%',backgroundSize: 'cover'}}>
                <CircularProgressbar value={elem.value} initialAnimation={true}
                    styles={buildStyles({
                    pathColor: `rgba(121, 195, 75, ${elem.value /100})`,
                    trailColor: '#d6d6d6'})}/>
                </div>
            </div>
        </div> 
        );
return (<div style={{display:'flex'}}>{listItem}</div>);
}

const Skills = () => {
    return (
        <div>
            <h1 className='text-white text-center'>Skills <i className="fa fa-user-secret"></i></h1>
                <div style = {{ padding : "5%", display: 'flex'}}>
                    <Example data= {data}/>
                </div>
        </div>
    ); 
}

export default Skills;