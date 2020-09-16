import React, {Component} from 'react';
import '../css/home.css';
import Img from '../img.png'

class SplitText extends Component {
  render(){
    return(
      <span aria-label={this.props.copy} role={this.props.role}>
          {this.props.copy.split("").map(function(char, index){
            let style = {"animationDelay": (0.5 + index / 10) + "s"}
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>;
          })}
        </span>
    );
  }
}

class Home extends Component {
  render() {
    return(
          <div className='home'>
            <div className="flip-card one">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={Img} alt="Avatar"/>
                </div>
                <div className="flip-card-back">
                  <h1>Saumya Kumar Agnihotri</h1>
                  <h6>Software Engineer @ Bizacuity</h6>
                </div>
              </div>
            </div>
            <div className='hero'>
              <div id='name'>
                <p className='one'>Hello World! I am </p>
                <h1 className='name'><SplitText copy="Saumya Kumar" role="heading" /></h1>
              </div>
              <div id='role'>
                <p className='one'>And I am a </p>
                <h2 className='role'> <SplitText copy="Web Developer" role="heading" /></h2>
              </div>
            </div>
          </div>
    );
  }
}

export default Home;
