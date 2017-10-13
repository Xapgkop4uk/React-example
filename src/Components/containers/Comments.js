import React, {Component} from 'react'
import Comment from '../presentation/Comment'
import Styles from './styles'

class Comments extends Component {
  constructor(){
    super()
    this.state = {
      comment :{
        username: '',
        body: '',
        timestamp:''
      },
      list :[
        {body:'comment 1', username:'qwet', timestamp:'10:30'},
        {body:'comment 2', username:'asdf', timestamp:'10:31'},
        {body:'comment 3', username:'zxcv', timestamp:'10:32'}
      ]
    }
  }

  submitComment(){
    console.log('subminComment: '+JSON.stringify(this.state.comment))
    let updatedList = Object.assign([], this.state.list)

    updatedList.push(this.state.comment)

    this.setState({
      list:updatedList
    })
  }

  updateUsername(event){
    //this.state.comment['username'] = evemt.target.value // WRONG !!

    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment['username'] = event.target.value

    this.setState({
      comment: updatedComment
    })
  }

  updateBody(event){
    let updatedComment = Object.assign({}, this.state.comment)
    var time = new Date()
    updatedComment['timestamp'] = time.getHours()+':'+time.getMinutes()
    updatedComment['body'] = event.target.value

    this.setState({
      comment: updatedComment
    })
  }

  render(){
    const commentList = this.state.list.map((comment, i)=>{
      return (
        <li key={i}><Comment currentComment={comment} /></li>
      )
    })

    return(

      <div>
        <h2> Comments:Zone1 </h2>
        <div style={Styles.comment.commentsBox}>
          <ul style={Styles.comment.list}>
            {commentList}
          </ul>

          <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" /><br />
          <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment" /><br />
          <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
        </div>
      </div>
    )
  }
}

export default Comments
