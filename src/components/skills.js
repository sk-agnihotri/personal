import React from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const data = [{
    name: 'HTML',
    value: 77,
    image: 'https://www.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png',
    key: 1
  },
  {
    name: 'JavaScript',
    value: 82,
    image: 'https://p.kindpng.com/picc/s/171-1718063_javascript-logo-circle-png-png-download-js-logo.png',
    key: 2
  },
  {
    name: 'CSS',
    value: 74,
    image: 'https://previews.123rf.com/images/blankstock/blankstock1409/blankstock140905837/31711262-css3-sign-icon-cascading-style-sheets-symbol-circle-flat-button-with-shadow-modern-ui-website-naviga.jpg',
    key: 3
  },
  {
    name: 'Tableau',
    value: 92,
    image: 'https://img.utdstc.com/icons/tableau-android.png:225',
    key: 4
  },
  {
    name: 'React JS',
    value: 82,
    image: 'https://ih1.redbubble.net/image.1045049975.0131/poster,840x830,f8f8f8-pad,1000x1000,f8f8f8.jpg',
    key: 5
  },
  {
    name: 'D3 JS',
    value: 86,
    image: 'https://bs-uploads.toptal.io/blackfish-uploads/components/skill_page/content/logo_file/logo/195523/d3js-7ccc10c45b36ba40d8fd3006561289df.png',
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