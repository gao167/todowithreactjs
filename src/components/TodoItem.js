import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
      const {item} = this.props
    return (
      <div onClick={() =>this.props.onClick(item)}>
        <p className="todoitem">{item.title}</p>
      </div>
    )
  }
}
export default  TodoItem