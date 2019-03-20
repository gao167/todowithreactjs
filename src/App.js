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
        { title: 'Đi trả đồ án tốt nghiệp'},
        { title: 'Đưa bạn gái đi ăn tối' }
      ]
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
                onClick={() => this.clickItem(item)} />
            )
          }
          <Footer />
        </div>
      )
    } else {
      return
    }
  }
  //checkall
  checkAll() {
    
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div className="content">
            <div className="content-input">
              <img src={ArowCheck} width={20} height={20} onClick={() => this.checkAll()} />
              <input type="text" name="txtname" placeholder="What needs to be done ?" />
            </div>
            {this.showTodoList()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
