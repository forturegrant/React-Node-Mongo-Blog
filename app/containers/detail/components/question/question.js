import React,{Component,PropTypes} from 'react'

export default class question extends Component{
    constructor(props){
        super(props);
    }
    handleForm(e){
        e.preventDefault()
        let comments={
            description:this.refs.description.value
        }
        this.refs.form.reset()
        this.props.publish_comment(comments)
    }
    render(){
        let style={display:this.props.formDisplay?"block":"none"}
        return(
            <div className="main container" style={style}>
            <form ref="form" className='clearfix' onSubmit={this.handleForm.bind(this)}>
            <textarea ref='description' className='form-control' rows='3' placeholder='请在此处留下你的高见'></textarea>
            <button className='btn btn-success pull-right'>发表</button>
            <button className='btn btn-default pull-right' onClick={this.props.onToggleForm}>取消</button>
            </form>
            </div>
        )
    }
}