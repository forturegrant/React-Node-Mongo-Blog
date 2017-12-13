import React,{Component,PropTypes} from 'react'

export default class question extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button onClick={this.props.onToggleForm}>添加问题</button>
        )
    }
}