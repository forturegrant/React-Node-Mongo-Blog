import React,{Component,PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {actions} from "../../../reducers/commentReducer";
import CommentList from "./commentList/commentList";
import Header from './header/header.js'
import Question from './question/question.js'

const {publish_comment} = actions
let Array= [];
let descriptionArray= [];

class root extends Component{
    constructor(props){
        super(props);
        this.state={
            formDisplay:false
        }
    }
    onToggleForm(){
        this.setState({
            formDisplay:!this.state.formDisplay
        })
    }
    publish_comment(content){
        this.props.publish_comment(content)
    }
    render(){
        return(
            <div>
            <Header onToggleForm={this.onToggleForm.bind(this)}/>
            <Question formDisplay={this.state.formDisplay} onToggleForm={this.onToggleForm.bind(this)} publish_comment={this.props.publish_comment} />
            <CommentList descriptionArray={this.props.descriptionArray}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { content }= state.admin.comment
    descriptionArray=Array.concat(content)
    return {
        descriptionArray:descriptionArray
    }
}

function mapDispatchToProps(dispatch) {
    return {
        publish_comment: bindActionCreators(publish_comment,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(root)