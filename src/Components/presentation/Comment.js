import React, {Component} from 'react'
import style from './styles'

class Comment extends Component {

  render(){
    return(
      <div style={style.comment.listItem}>
        <p style={style.comment.body}>
          {this.props.currentComment.body} <br />
        </p>
        <span style={style.comment.username}>{this.props.currentComment.username} </span>
        <span style={style.comment.delemiter}>|</span>
        <span>{this.props.currentComment.timestamp}</span>
      </div>
    )
  }
}

export default Comment
