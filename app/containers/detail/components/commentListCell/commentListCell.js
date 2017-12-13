import React,{Component,PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class commentListCell extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <p>{this.props.content}</p>
        )
    }
}