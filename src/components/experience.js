import React, {Component} from 'react';
import Comp from './expComp'
import '../css/experience.css';

class Experience extends Component {
    constructor () {
        super()
        this.state = {
            name: true,
            showHide: false
        };
        this.showComponent = this.showComponent.bind(this);
    }

    showComponent(name) {
        switch (name) {
            case 'showHide':
                this.setState({ showHide: !this.state.showHide });
                this.setState({ name: !this.state.name});
                break;
            default:
                return '';
          }
    } 
    render() {

    const btnName =(name) => {
        if (name === true) return 'More Info...';
        else return 'Less'
    }
            
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank')
        newWindow.opener = null
    }
    return (
        <div>
            <h1 className='text-white text-center'>Experience <i className="fa fa-briefcase"></i></h1>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="text-white h4">Collapsed content</h5>
                    <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <div className="rows">
                <div className="column1" onClick={() => {openInNewTab('https://www.bizacuity.com')}}></div>
                <div className="column2 border rounded-pill">
                    <div className='indent'>
                        <h2 className='mb-0'>Tableau Developer</h2>
                        <h6 className='font-italic'> July, 2018 - Present</h6>
                    </div>
                    <div className='mt-5'>
                        <span>Professional Tableau Developer with 2+ years of experience in data analysis. Involved in data interpretation, analyzing results using statistical techniques, automation of Tableau processes.
                        <div>{this.state.showHide && <Comp />}</div>
                        <button type="button" className="btn btn-info mt-3" onClick = {() => {this.showComponent('showHide')}}>{btnName(this.state.name)}</button>
                        </span>
                    </div>
                </div>
            </div>
            </div>
    ); 
}}

export default Experience;