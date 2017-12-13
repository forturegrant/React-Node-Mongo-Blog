import React,{Component,PropTypes} from 'react'
import CommentListCell from "../commentListCell/commentListCell";

export default class commentList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {
                    console.log(this.props.descriptionArray)
                }
            </div>
        )
    }
}