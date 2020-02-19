import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
class Boos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
        }
        this.toToggole = this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>
                {/* <div className={this.state.isShow?'show':'hide'}>Boos级人物-孙悟空</div> */}
                {/* <div><button onClick={this.toToggole}>召唤Boos</button></div> */}
                <CSSTransition
                in={this.state.isShow}
                timeout={2000}
                classNames='boos-text'
                unmountOnExit
                >
                <div className={this.state.isShow?'show':'hide'}>Boos级人物-孙悟空</div>
                </CSSTransition>
            <div><button onClick={this.toToggole}>召唤Boos</button></div>
            </div>
        );
    }
    toToggole(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
}

export default Boos;