import React,{ Component } from "react" 

class App extends Component {
    render(){
        return (
            <ul className="mu-list">
                <li>{false ? 'shanpengfei' : '单鹏飞'}</li>
                <li>I love react</li>
            </ul>
        )
    }
}

export default App