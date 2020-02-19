import React, { Component, Fragment } from "react"
import './style.css'
import XiaojiejieItem from "./XiaojiejieItem";
// import axios from "axios";
import Boss from './Boos'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Xiaojiejie extends Component{
    // 在某一时刻，可以自动执行的函数
    constructor(props){
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }
    UNSAFE_componentWillMount(){
        console.log('componentWillMount----组件将要挂载到页面的时刻')
    }

    // 推荐在这里发网络请求
    componentDidMount(){
        console.log('componentDidMount-----组件挂在完成的时刻')
        // axios.get('https://esay-mock.com/mock/5cfe3ccae3eb86379d79570a/ReactDemo01/xiaojiejie')
        // .then((res)=>{
        //     console.log('axios 获取数据成功' + JSON.stringify(res))
        //     let data = ['基础按摩', '精油推背']
        //     // 模拟一下数据返回
        //     this.setState({
        //         list: res.data
        //     })
        // })
        // .catch((err)=>{
        //     console.log('axios获取信息失败' + err)
        // })
    }

    shouldComponentUpdate(){
        console.log('1------shouldComponentUpdate----组件更新之前执行')
        // 返回布尔值
        return true
    }

    UNSAFE_componentWillUpdate(){
        console.log('2-------UNSAFE_componentWillUpdate----组件将要更新')
    }

    componentDidUpdate(){
        console.log('4-------componentDidUpdate----组件已经更新')
    }

    render(){
        console.log('3--------render-----组件挂载中')
        return (
            <Fragment>
                {/* 第一次写注释 */}
                <div>
                    <label htmlFor='jspang'>增加服务：</label>
                    <input 
                        id="jspang" 
                        className='input' 
                        value={this.state.inputValue} 
                        onChange={this.inputChenge.bind(this)}
                        ref={(input)=>{this.input=input}}
                        />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>    
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index)=>{
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames = 'boos-text'
                                        unmountOnExit
                                        appear={true}
                                        key={item + index}
                                    >
                                        <XiaojiejieItem
                                        key = {item + index} 
                                        content={item}
                                        index={index}
                                        deleteItem={this.deleteItem.bind(this)}/>
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss/>
            </Fragment>
        )
    }

    inputChenge(e){
        // console.log(e.target.value)
        // this.state.inputValue = e.target.value
        this.setState({
            // inputValue: e.target.value
            //ref绑定
            inputValue: this.input.value
        })
    }

    // 增加列表
    addList(){
        // 与vue的nextTick有点像
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue: ''
        }, ()=>{
            console.log(this.ul.querySelectorAll('li').length)
        })

    }

    // 删除列表项
    deleteItem(index){
        // 注意不能直接操作state不然有很大的性能问题
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie