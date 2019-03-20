import React, { Component } from 'react';
import './App.css';
import ArowCheck from '../src/img/arow.svg'
import TodoItem from './components/TodoItem';
import Header from './components/Header';
import Footer from './components/Footer'
class App extends Component {
  constructor() {
    super()
    this.state = {
      todoItems: [
        { title: 'Đi trả đồ án tốt nghiệp' },
        { title: 'Đưa bạn gái đi ăn tối' }
      ],
      valueDefault: ''
    }
  }
  //event click a item
  clickItem(item) {
    const isComplete = item.isComplete
    const { todoItems } = this.state
    const index = todoItems.indexOf(item)
    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        {
          ...item,
          isComplete: !isComplete
        },
        ...todoItems.slice(index + 1)
      ]
    })
  }

  //show data for app
  showTodoList() {
    if (this.state.todoItems.length) {
      return (
        <div>
          {
            this.state.todoItems.map((item, index) =>
              <TodoItem
                key={index}
                item={item}
                onClick={() => this.clickItem(item)}
                deleteItem={()=>this.deleteItem(item)} />
            )
          }
          <Footer number={this.state.todoItems.length}/>
        </div>
      )
    } else {
      return
    }
  }
  //checkall
  checkAll() {
    const { todoItems } = this.state
    this.setState({
      todoItems: todoItems.map((item) => { return { ...item, isComplete: !item.isComplete } })
    })
  }
  //add new item
  onKeyUp(event) {
    let text = event.target.value
    if (event.keyCode === 13) {
      if (!text) { return }
      text = text.trim()
      if (!text) { return }
      this.setState({
        valueDefault: '',
        todoItems: [
          { title: text, isComplete: false },
          ...this.state.todoItems
        ]
      })
    }
  }
  //change input value
  onChange(event) {
    let textChange = event.target.value
    this.setState({
      valueDefault: textChange
    })
  }
  //delete item
  deleteItem(item){
    const { todoItems } = this.state
    const index = todoItems.indexOf(item)
    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1)
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div className="content">
            <div className="content-input">
              <img src={ArowCheck} alt={'check'} width={20} height={20} onClick={() => this.checkAll()} />
              <input value={this.state.valueDefault} onChange={(event) => this.onChange(event)} onKeyUp={(event) => this.onKeyUp(event)} type="text" name="txtname" placeholder="What needs to be done ?" />
            </div>
            {this.showTodoList()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
