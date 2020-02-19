import React, { Component } from 'react';
import propTypes from "prop-types";

class XiaojiejieItem extends Component {

    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    // 组件第一次存在于DOM中，函数不会执行
    // 如果已经存在于DOM中，函数才会被执行
    componentWillReceiveProps(){
        console.log('child---componentWillReceiveProps')
    }

    // 组件将哟啊被卸载
    componentWillUnmount(){
        console.log('child---componentWillUnmount')
    }

    shouldComponentUpdate(nextProps,nextState){
        // if (nextProps.content!==this.props.content) {
        //     return true
        // }
        return false
        // return nextProps.content === this.props.content
    }

    render() {  
        return (  
            <li onClick={this.handleClick}>
                {this.props.avname}为你服务-{this.props.content}
            </li>
        );
    }

    handleClick(){
        this.props.deleteItem(this.props.index)
    } 
}

// 校验入参类型
XiaojiejieItem.propTypes={
    avname: propTypes.string.isRequired,
    content:propTypes.string,
    index:propTypes.number,
    deleteItem:propTypes.func
}
XiaojiejieItem.defaultProps={
    avname: '松岛枫'
}

export default XiaojiejieItem;