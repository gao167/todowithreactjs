import React, { Component } from 'react'
import checkImg from '../img/heart.svg'
var classNames = require('classnames')
class TodoItem extends Component {
    checkImage(){
        if(this.props.item.isComplete){
            return <img alt={'check'} src={checkImg} width={25}/>
        }
        else return
    }
    render() {
        const { item } = this.props
        var itemDone = classNames({
            'todolist-complete': item.isComplete,
            'todoitem': true
        })
        return (
            <div className="itemlist">
                <div onClick={() => this.props.onClick(item)} className="checkDone">
                    {this.checkImage()}
                </div>
                <p className={itemDone}>{item.title}</p>
            </div>
        )
    }
}
export default TodoItem