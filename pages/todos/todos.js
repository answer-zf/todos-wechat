// pages/todos/todos.js
Page({
  data: {
    input: '',
    todos: [
      {
        name: 'js',
        completed: false
      },
      {
        name: 'wxss',
        completed: false
      },
      {
        name: 'wxml',
        completed: true
      }
    ],
    leftCount: 2,
    allCompleted: false
  },
  // 属相绑定 input
  inputChangeHandle: function(e) {
    this.setData({
      input: e.detail.value
    })
  },
  // 添加功能
  addHandle: function(e) {
    if (!this.data.input.trim()) return
    this.data.todos.push({
      name: this.data.input,
      completed: false
    })
    this.setData({
      todos: this.data.todos,
      input: '',
      leftCount: this.data.leftCount + 1
    })
  },
  editHandle: function(e) {
    let item = this.data.todos[e.currentTarget.dataset.index]
    item.completed = !item.completed
    this.setData({
      todos: this.data.todos
    })
    let leftCount = this.data.todos.filter(item => {
      return !item.completed
    }).length
    this.setData({
      leftCount: leftCount
    })
  },
  deleteHandle: function(e) {
    let index = e.currentTarget.dataset.index
    this.data.todos.splice(index, 1)
    this.setData({
      todos: this.data.todos
    })
    let leftCount = this.data.todos.filter(item => {
      return !item.completed
    }).length
    this.setData({
      leftCount: leftCount
    })
  },
  toggleAllHandle() {
    this.data.allCompleted = !this.data.allCompleted
    this.data.todos.forEach(item => {
      item.completed = this.data.allCompleted
    })
    let leftCount = this.data.allCompleted ? 0 : this.data.todos.length
    this.setData({
      todos: this.data.todos,
      leftCount: leftCount
    })
  },
  clearHandle() {
    let todos = this.data.todos.filter(item => {
      return !item.completed
    })
    this.setData({
      todos: todos
    })
  }
})
