import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
      const {item} = this.props
    return (
      <div>
        <p className="todoitem">{item.title}</p>
      </div>
    )
  }
}
export default  TodoItem